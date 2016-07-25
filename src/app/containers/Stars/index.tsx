import * as React from 'react';
import { starsRequest } from '../../redux/modules/stars/stars';
import { IStars } from '../../redux/modules/stars/stars.model';
const { connect } = require('react-redux');
const { asyncConnect } = require('redux-connect');

interface IProps {
  stars: IStars;
  starsRequest: Redux.ActionCreator;
}

interface IState {
  repo: string;
}

@asyncConnect([{
  promise: ({ store: { dispatch } }) => {
    dispatch(starsRequest());
  }
}])
@connect(
  state => ({
    stars: state.stars,
  }),
  { starsRequest }
)
class Stars extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      repo: props.stars.repo,
    };

    this.onClickButton = this.onClickButton.bind(this);
    this.onChangeRepo = this.onChangeRepo.bind(this);
  }

  private onClickButton() {
    const { starsRequest } = this.props;
    const { repo } = this.state;
    starsRequest({ repo });
  }

  private onChangeRepo(e) {
    this.setState({
      repo: e.target.value,
    });
  }

  public render() {
    const { stars } = this.props;
    const { repo } = this.state;

    return(
      <div>
        <input type="text" value={repo} onChange={this.onChangeRepo}/><br/>
        <button onClick={this.onClickButton}>Fetch</button><br/>
        { stars.error ? `ERROR: ${stars.message.message}` : '' }
        <br/>
        { stars.isFetching ? 'Fetching Stars' : `Stars: ${stars.count || ''}` }
      </div>
    );
  }
}

export { Stars }
