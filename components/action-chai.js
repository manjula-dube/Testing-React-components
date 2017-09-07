import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import Button from './ActionButton';

describe('<ActionButton />', () => {
  it('has a .button classname', () => {
     const  wrapper = render(<Button/>);
     expect(wrapper.find('.button').length).to.equal(1);
  });

  it('has [status] attribute', () => {
    const wrapper = render(<Button />);
    expect(wrapper.find('[status]').length).to.equal(1);
  });
  
  it('displays the text prop', () => {
    const wrapper = render(<Button text="BOOK" />);
    expect( wrapper.text() ).to.contain('BOOK');
  });
});