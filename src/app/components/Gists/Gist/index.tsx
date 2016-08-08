import * as React from 'react';

interface IProps {
  description?: string;
  owner?: string;
  link?: string;
}

class GistComponent extends React.Component<IProps, {}> {
  public render() {
    const { description, owner, link } = this.props;
    if (!description || !owner || !link) {
      return null;
    }
    return (
      <li><span className={'description'}>{description}</span></li>
    );
  }
}

export { GistComponent }
