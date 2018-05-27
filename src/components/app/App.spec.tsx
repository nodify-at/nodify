import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import App from "./App";

it('App is rendered', () => {
    // Render App in the document
    const appElement: App = TestUtils.renderIntoDocument(<App/> ) as App;

    const appNode = ReactDOM.findDOMNode(appElement);

    // Verify text content
    expect(appNode.textContent).toEqual('Hello World! HasanFoo to the barz');
});
