import React, { Component } from 'react'
import {  createAppContainer  } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';


//screens
//landing
import Landing from './views/landing/Landing'

//complaints module
import ComplaintHome from './views/complaints/ComplaintHome'

//events module
import EventsHome from './views/events/EventsHome'

export default class Routes extends Component {
    constructor(props) {
	    super(props);
	    this.state = {
        }
    } 

    render() {
        const Roots = createStackNavigator({
            Landing: { screen: Landing },
            
            //complaints module
            ComplaintHome: {screen: ComplaintHome },

             //events module
             EventsHome: {screen: EventsHome },
       
        });
        
        const Root = createAppContainer(Roots);

    return <Root />;
    }
}
