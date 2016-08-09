import * as React from 'react';
import { githubGistsRequest } from '../../actions/github/gists';
import { GistListComponent } from '../../components/Gists/GistList';
const { connect } = require('react-redux');
const { asyncConnect } = require('redux-connect');

interface IProps {
  gists: any;
  githubGistsRequest: Redux.ActionCreator;
}

interface IState {
  username: string;
}

@asyncConnect([{
  promise: ({ store: { dispatch } }) => {
    dispatch(githubGistsRequest({
      username: 'happylinks', // get from initial state?
    }));
  },
}])
@connect(
  state => ({
    gists: state.githubGists,
  }),
  { githubGistsRequest }
)
class Gists extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      username: props.gists.username,
    };

    this.onClickButton = this.onClickButton.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
  }

  private onClickButton() {
    const { githubGistsRequest } = this.props;
    const { username } = this.state;
    githubGistsRequest({ username });
  }

  private onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  public render() {
    const { gists } = this.props;
    const { username } = this.state;

    console.log('gists', gists);

    return(
      <div>
        <input type="text" value={username} onChange={this.onChangeUsername}/><br/>
        <button onClick={this.onClickButton}>Fetch</button><br/>
        { gists.error ? `ERROR: ${gists.message.message}` : '' }
        <br/>
        { gists.isFetching && gists !== 'undefined' && !gists.error ? 'Fetching Gists' : <GistListComponent gists={gists.gists}/> }
      </div>
    );
  }
}

export { Gists }
