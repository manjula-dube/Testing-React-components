import React from 'react';
import renderer from 'react-test-renderer';
import ActionButton from '../ActionButton';

test('<Button /> renders with text as prop', () => {
  const tree = renderer.create(
    <ActionButton text="BOOK" state="disabled" active="button-active"/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});