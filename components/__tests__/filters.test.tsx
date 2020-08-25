import 'jsdom-global/register'; 
import React from 'react';
import { shallow } from 'enzyme';
import Filter from '../filters/Filter';
import { findByTestAttr } from '../../utils/utils';

const setUp = (props:any = {}) => {
    return shallow(<Filter {...props} />);
}

describe('<Filters />', ()=> {
   describe('have props', () => {
       let wrapper: any;

       beforeEach(() => {
           const props = {
               query: { launch_success: false , land_success: false, launch_year: 2010 }
           }
           wrapper = setUp(props)
       })

       it('should render without errors', ()=> {
           const component = findByTestAttr(wrapper, 'filters')
           expect(component.length).toBe(1);
       })

       it('should render filtersContailer', ()=> {
           const filtersContailer = findByTestAttr(wrapper, 'filtersContailer');
           expect(filtersContailer.length).toBe(3)
       })
   })

   describe('Have no props', ()=> {
       let wrapper: any;

       beforeEach(() => {
           wrapper = setUp();
       })

       it('should not render' , () => {
        const component = findByTestAttr(wrapper, 'filters')
        expect(component.length).toBe(0);
       })
   })
})