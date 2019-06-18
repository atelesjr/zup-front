import React from 'react'
import { mount } from 'enzyme';
import { Root } from '../../Root';

import App from '../App';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <App />
    </Root>
  );
});

