import * as React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import GistList from './index';

describe('<GistList />', () => {
  it('Renders null based on the initial state (empty `gists` array)', () => {
    const wrapper = mount(<GistList />);
    expect(wrapper.html()).to.equal(null);
  });

  it('Renders gist component when gists are provided', () => {
    const gists = [
      {
        id: 1,
        description: 'keybase.md',
        owner: 'happylinks',
        link: 'https://gist.github.com/af1c3eb6db2233cd2dcaf97f63c34547',
      },
    ];

    const wrapper = mount(<GistList gists={gists} />);
    const props: any = wrapper.props();

    expect(props.gists).to.be.instanceof(Array);
    expect(props.gists.length).to.equal(1);
    expect(wrapper.find('Gist')).to.have.length(1);
  });
});
