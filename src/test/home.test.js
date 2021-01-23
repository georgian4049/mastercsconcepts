import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import Home from '../home';

Enzyme.configure({ adapter: new Adapter() });
describe('<Home />', () => {
    it('renders <Home /> component in root', () => {
      shallow(<Home />);
    });
});