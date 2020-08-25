import 'jsdom-global/register'; 
import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer/Footer';
import { findByTestAttr } from '../../utils/utils';

describe('<Footer />', ()=> {
    it('should render without errors', ()=> {
        const component = shallow(<Footer />);
        const wrapper = findByTestAttr(component, 'footer');
        expect(wrapper.length).toBe(1);
    })
})