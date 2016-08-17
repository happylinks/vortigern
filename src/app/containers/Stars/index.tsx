import * as React from 'react';
import { githubStarsRequest } from '../../actions/github/stars';
const { connect } = require('react-redux');
const { asyncConnect } = require('redux-connect');

interface IProps {
  stars: any;
  githubStarsRequest: Redux.ActionCreator;
}

interface IState {
  repo: string;
}

@asyncConnect([{
  promise: ({ store: { dispatch } }) => {
    dispatch(githubStarsRequest({
      repo: 'barbar/vortigern', // get from initial state?
    }));
  },
}])
@connect(
  state => ({
    stars: state.githubStars,
  }),
  { githubStarsRequest }
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
    const { githubStarsRequest } = this.props;
    const { repo } = this.state;
    githubStarsRequest({ repo });
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
        <div className="ui action input">
          <input type="text" value={repo} onChange={this.onChangeRepo}/>
          <button className="ui button" onClick={this.onClickButton}>Fetch</button>
        </div><br/>
        { stars.error ? `ERROR: ${stars.message.message}` : '' }
        <br/>
        <h3>{ stars.isFetching ? 'Fetching Stars' : `Stars: ${stars.count || ''}` }</h3>
      </div>
    );
  }
}

export { Stars }
