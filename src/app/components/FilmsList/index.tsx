import * as React from 'react';

import Film from '../Film';

interface IProps {
  films?: any;
}

const FilmsList = (props: IProps) => {
  if (!props.films) {
    return null;
  }
  return (
    <div className="ui centered cards">
    {props.films.map((film) =>
      <Film
        key={film.title}
        title={film.title}
        created={film.created}
        releaseDate={film.releaseDate}
        openingCrawl={film.openingCrawl}
      />
    )}
    </div>
  );
};

export default FilmsList;
