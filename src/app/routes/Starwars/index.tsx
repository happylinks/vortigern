import * as React from 'react';
import * as Redux from 'redux';
import { starwarsFilmsRequest } from '../../actions/starwars/films';
import { FilmsList } from '../../components';
const { connect } = require('react-redux');
const { asyncConnect } = require('redux-connect');

interface IProps {
  films: any;
  starwarsFilmsRequest: Redux.ActionCreator<any>;
}

@asyncConnect([{
  promise: ({ store: { dispatch } }) => {
    dispatch(starwarsFilmsRequest());
  },
}])
@connect(
  state => ({
    films: state.starwarsFilms,
  }),
  { starwarsFilmsRequest }
)
class Starwars extends React.Component<IProps, {}> {
  public render() {
    const { films } = this.props;

    return(
      <div>
        { films.error ? `ERROR: ${films.message.message}` : '' }
        <br/>
        { films.isFetching && films !== 'undefined' && !films.error ?
          'Fetching Films' :
          <FilmsList films={films.films}/>
        }
      </div>
    );
  }
}

export default Starwars;
