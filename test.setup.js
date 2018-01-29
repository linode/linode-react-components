import 'raf/polyfill';

/** Enzyme Configuration **/
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
