import * as React from 'react';
import { FilmComponent } from '../Film';

interface IProps {
  films?: any;
}

class FilmsListComponent extends React.Component<IProps, {}> {
  constructor(props) {
    super(props);

    this.state = {
      films: [],
    };
  }

  public render() {
    if (!this.props.films) {
      return null;
    }
    return (
      <div className="ui centered cards">
      {this.props.films.map((film) =>
        <FilmComponent
          key={film.title}
          title={film.title}
          created={film.created}
          releaseDate={film.releaseDate}
          openingCrawl={film.openingCrawl}
        />
      )}
      </div>
    );
  }
}

export { FilmsListComponent }
