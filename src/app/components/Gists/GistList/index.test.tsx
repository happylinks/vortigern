import * as React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { GistListComponent } from './index';

describe('<GistListComponent />', () => {
  let wrapper;
  beforeEach(() => {
    // Note the `beforeEach` from the start
    wrapper = mount(<GistListComponent />);
  });

  it('Renders null based on the initial state (empty `gists` array)', () => {
    expect(wrapper.state().gists).to.be.instanceof(Array);
    expect(wrapper.state().gists.length).to.equal(0);
    expect(wrapper.html()).to.equal(null);
  });

});
