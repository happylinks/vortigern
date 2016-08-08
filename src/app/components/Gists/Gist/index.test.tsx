import * as React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { GistComponent } from './index';

describe('<GistComponent />', () => {
  it('GistComponent should exist', () => {
    const wrapper = shallow(<GistComponent />);
    expect(wrapper).to.exist;
  });

  it('Correctly displays the description, owner and link to the gist ', () => {
    const wrapper = shallow(
      <GistComponent
        description={'keybase.md'}
        owner={'happylinks'}
        link={'https://gist.github.com/af1c3eb6db2233cd2dcaf97f63c34547'}
      />
    );

    expect(wrapper.type()).to.equal('li');

    const descriptionSpan = wrapper.find('.description');
    expect(descriptionSpan.text()).to.equal('keybase.md');

    const ownerSpan = wrapper.find('.owner');
    expect(ownerSpan.text()).to.equal('happylinks');

    const linkSpan = wrapper.find('.link');
    expect(linkSpan.text()).to.equal('https://gist.github.com/af1c3eb6db2233cd2dcaf97f63c34547');
  });

});
