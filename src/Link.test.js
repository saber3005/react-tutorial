import React from 'react';
import Link from './Link';
import renderer from 'react-test-renderer';

it('Link changes the class when hovered', () => {
    const component = renderer.create(
        <Link page="http://www.facebook.com">Facebook</Link>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
