import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;

const MyTitle = function(props) {
  return ce('h1', { style: { color: props.color } }, props.title);
};

const MyFirstComponent = function() {
  return ce(
    'div',
    null,
    ce(MyTitle, { title: 'Games of Thrones', color: 'grey' }),
    ce(MyTitle, { title: 'Fifty Shades', color: 'red' })
  );
};

render(ce(MyFirstComponent), document.getElementById('app'));
