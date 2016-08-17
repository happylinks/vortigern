import * as React from 'react';
import { GistComponent } from '../Gist';

interface IProps {
  gists?: any;
}

class GistListComponent extends React.Component<IProps, {}> {
  constructor(props) {
    super(props);

    this.state = {
      gists: [],
    };
  }

  public render() {
    return (
      <ul>
      {this.props.gists.map((gist) =>
        <GistComponent
          key={gist.id}
          description={gist.description}
          owner={gist.owner.login}
          link={gist.html_url}
        />
      )}
      </ul>
    );
  }
}

export { GistListComponent }
