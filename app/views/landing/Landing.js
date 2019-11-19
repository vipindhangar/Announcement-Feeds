/*==========================================================================================*/
// Landing - The first screen of the app       
/*==========================================================================================*/


import React, { Component } from 'react';
import { Dimensions, Image, View, } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation';


let login;
const { width, height } = Dimensions.get('window');

export default class Landing extends Component {
    static navigationOptions = {
          
    };

    constructor(props) {
        super(props);
        this.state = {

        }       
    }
   
    componentDidMount() {
        this.gotoLoginOrDashBoard()
    }

    gotoLoginOrDashBoard = () => {        
        login = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: "ComplaintHome"
                }),
            ],
        });
        this.props.navigation.dispatch(login)        
    }
   
    render() {
        return (
            <View style={{ flex: 1, width, height, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: width, height: height,backgroundColor:'pink'}}></Image>
            </View>
        )
    };

}