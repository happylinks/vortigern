import * as React from 'react';

interface IProps {
  title?: string;
  created?: string;
  releaseDate?: string;
  openingCrawl?: string;
}

class FilmComponent extends React.Component<IProps, {}> {
  public render() {
    const { title, openingCrawl } = this.props;
    if (!title) {
      return null;
    }
    return (
      <div className="ui card">
        <div className="content">
          <div className="header">{title}</div>
          <div className="description">{openingCrawl}</div>
        </div>
      </div>
    );
  }
}

export { FilmComponent }
