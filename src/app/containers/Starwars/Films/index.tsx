import * as React from 'react';
import { starwarsFilmsRequest } from '../../../actions/starwars/films';
import { FilmsListComponent } from '../../../components/Starwars/FilmsList';
const { connect } = require('react-redux');
const { asyncConnect } = require('redux-connect');

interface IProps {
  films: any;
  starwarsFilmsRequest: Redux.ActionCreator;
}

interface IState {
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
class Films extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const { films } = this.props;

    console.log('films', films);

    return(
      <div>
        { films.error ? `ERROR: ${films.message.message}` : '' }
        <br/>
        { films.isFetching && films !== 'undefined' && !films.error ?
          'Fetching Films' :
          <FilmsListComponent films={films.films}/>
        }
      </div>
    );
  }
}

export { Films }
