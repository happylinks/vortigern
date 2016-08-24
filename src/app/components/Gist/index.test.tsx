import * as React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Gist from './index';

describe('<Gist />', () => {
  it('Gist should exist', () => {
    const wrapper = shallow(<Gist />);
    expect(wrapper).to.exist;
  });

  it('Renders nothing when not all props are defined', () => {
    const wrapper = shallow(
      <Gist
        description={'keybase.md'}
        owner={'happylinks'}
        link={null}
      />
    );

    expect(wrapper.text()).to.equal('');
  });

  it('Correctly displays the description, owner and link to the gist', () => {
    const wrapper = shallow(
      <Gist
        description={'keybase.md'}
        owner={'happylinks'}
        link={'https://gist.github.com/af1c3eb6db2233cd2dcaf97f63c34547'}
      />
    );

    const descriptionSpan = wrapper.find('[role="description"]');
    expect(descriptionSpan.text()).to.equal('keybase.md');

    const ownerSpan = wrapper.find('[role="owner"]');
    expect(ownerSpan.text()).to.equal('happylinks');

    const linkSpan = wrapper.find('[role="link"]');
    expect(linkSpan.prop('href')).to.equal('https://gist.github.com/af1c3eb6db2233cd2dcaf97f63c34547');
  });
});
