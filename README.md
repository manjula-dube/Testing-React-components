 
 
 ## Importance of testing in Software development & How to test your react components?
 
 > Tests says "I am Important" but developer says "I do not want to use a framework with lot of dependencies" 
 
 
### Do we really test? 
  ![alt text](https://media.giphy.com/media/xT5P0xr3oUJM1xNH5S/giphy.gif)
  
### We just love the "IDEA OF TESTING"  
 
We started with,  Jasmine-based stack, we’ve adopted a testing stack consisting of Mocha as our test runner, Chai for assertions, and Enzyme for asserting on component output. But than it created like too much dependency. lot of effort. Then we tried Jest and it very cool and works with less effort & writing more of test cases. 

One day We just gave a shot to what it would take to migrate all of out test cases to jest. And yes the transition was very simple. And we had removed several dependencies from our code base.

But most importantly it mean set that everytime we hire someone new, they wouldn’t have to think about these dependencies, but they will just be thinking about these single dependencies.That means it reduces a lot of overhead that comes whenever we are hiring someone new.

After we migrated to jest running a single test case took almost from 5 seconds to instant run, which means our feed back loop was very tighted which means we ended up writing more test cases.

###### Demo time!!!!

 ![alt text](https://i.imgur.com/hPKi59j.png)
 
 
Jest snapshot makes it very simple to test your react components.


```javascript
import React from 'react';
import renderer from 'react-test-renderer';
import ActionButton from '../ActionButton';

test('<Button /> renders with text as prop', () => {
  const tree = renderer.create(
    <ActionButton text="BOOK" state="disabled" active="button-active"/>
  ).toJSON();
  
  expect(tree).toMatchSnapshot();
});

```

##### The same tests in chai would actually end up writing too many describes. Also you would manually update your test case once you updated your component.
 
###### Test with chai & enzyme
 
```javascript
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
```

-----------------------
###### Steps to run your tests
 
To run the test 

`npm run test`

To update snapshot

`jest --updateSnapshot`

The idea is quite similar to the UI snapshot tests some of you may know: You take an image of your current app in a specified state and compare it to the previous image you have taken. The problem if you use actual images is that they are big, contain a lot of unused information, depend on your (maybe changing) environment (e.g. browser size). Because of these problems, they feel heavy, the tests take a time to complete and may occasionally fail for no reason. The way Jest improves this situation is that it uses a test renderer to render your React or React Native components to a JSON representation. This representation is stored with the new snapshot feature and may be diffed against new test runs results.

Links to slides http://slides.com/manjuladube/w#/


