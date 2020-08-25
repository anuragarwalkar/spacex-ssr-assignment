import 'jsdom-global/register'; 
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utils/utils';
import LaunchProgram from '../Program/LaunchProgram';

const setUp = (props:any = {}) => {
    return shallow(<LaunchProgram {...props} />);
}

describe('<LaunchProgram />', ()=> {
   describe('have props', () => {
       let wrapper: any;

       beforeEach(() => {
           const props = {
               query: { launch_success: false , land_success: false, launch_year: 2010 }
           }
           wrapper = setUp(props)
       })

       it('should render without errors', ()=> {
           const component = findByTestAttr(wrapper, 'launchProgram')
           expect(component.length).toBe(1);
       })

       it('should not render Article', ()=> {
           const filtersContailer = findByTestAttr(wrapper, 'launchProgramArticle');
           expect(filtersContailer.length).toBe(0)
       })

       it('set initial state for compoent' , ()=> {
        
       })
   })

   describe('Have no props', ()=> {
       let wrapper: any;

       beforeEach(() => {
           wrapper = setUp();
       })

       it('should not render' , () => {
        const component = findByTestAttr(wrapper, 'launchProgram')
        expect(component.length).toBe(0);
       })
   })
})