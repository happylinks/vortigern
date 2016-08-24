import * as React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import FilmsList from './index';

describe('<FilmsList />', () => {
  it('Renders null based on the initial state (empty `films` array)', () => {
    const wrapper = mount(<FilmsList />);
    expect(wrapper.html()).to.equal(null);
  });

  it('Renders films component when films are provided', () => {
    const films = [
      {
        title: 'The Empire Strikes Back',
        openingCrawl: 'It is a dark time for the Rebellion.',
      },
    ];

    const wrapper = mount(<FilmsList films={films} />);
    const props: any = wrapper.props();

    expect(props.films).to.be.instanceof(Array);
    expect(props.films.length).to.equal(1);
    expect(wrapper.find('Film')).to.have.length(1);
  });
});
