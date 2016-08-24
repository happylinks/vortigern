import * as React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Film from './index';

describe('<Film />', () => {
  it('Film should exist', () => {
    const wrapper = shallow(<Film />);
    expect(wrapper).to.exist;
  });

  it('Renders nothing when not all props are defined', () => {
    const wrapper = shallow(
      <Film
        title={'The Empire Strikes Back'}
      />
    );

    expect(wrapper.text()).to.equal('');
  });

  it('Correctly displays the title and openingcrawl', () => {
    const wrapper = shallow(
      <Film
        title={'The Empire Strikes Back'}
        openingCrawl={'It is a dark time for the Rebellion.'}
      />
    );

    const title = wrapper.find('[role="title"]');
    expect(title.text()).to.equal('The Empire Strikes Back');

    const openingCrawl = wrapper.find('[role="openingCrawl"]');
    expect(openingCrawl.text()).to.equal('It is a dark time for the Rebellion.');
  });
});
