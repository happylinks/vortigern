import * as React from 'react';
import * as Redux from 'redux';
import { githubGistsRequest } from '../../actions/github/gists';
import { GistList } from '../../components';
const { connect } = require('react-redux');
const { asyncConnect } = require('redux-connect');

interface IProps {
  gists: any;
  githubGistsRequest: Redux.ActionCreator<any>;
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

    let content;
    if (gists.error) {
      content = `ERROR: ${gists.message}`;
    } else if (gists.gists && gists.gists.length) {
      content = <GistList gists={gists.gists}/>;
    } else {
      content = 'No gists';
    }

    return(
      <div>
        <div className="ui action input">
          <input type="text" value={username} onChange={this.onChangeUsername}/>
          <button className="ui button" onClick={this.onClickButton}>Fetch</button>
        </div>
        <br/>
        {content}
      </div>
    );
  }
}

export default Gists;
