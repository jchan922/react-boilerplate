// @todo: temp until official enzyme-adapter-react-17 is released
// GitHub issue: https://github.com/enzymejs/enzyme/issues/2429

import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
