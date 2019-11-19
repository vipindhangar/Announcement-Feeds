import {Dimensions, Platform} from 'react-native'
import AppColors from 'components/colors/AppColors';
import { constants } from '../constants/constants';


const { width, height } = Dimensions.get('window');

export const commonStyles = {

    container:{
        width: width, 
        height: height, 
        backgroundColor:AppColors.appBackgroundColor
    },

    //tab config
    viewTab:{
        flexDirection:'row', 
        justifyContent:'space-evenly',
        backgroundColor:AppColors.appColor, 
        height:50,
        shadowOffset:constants.appShadowOffset,
        shadowColor: constants.appShadowColor,
        shadowOpacity: constants.appShadowOpacity,
    },
    activeTab:{
        borderBottomColor:AppColors.white, 
        borderBottomWidth:constants.borderWidth, 
        width:'33%',
        
    },
    inActiveTab:{
        borderBottomColor: AppColors.white, 
        borderBottomWidth:0, 
        width:'33%',
    },
    activeTab3:{
        borderBottomColor:AppColors.white, 
        borderBottomWidth:constants.borderWidth, 
        width:'50%',
        
    },
    inActiveTab3:{
        borderBottomColor: AppColors.white, 
        borderBottomWidth:0, 
        width:'50%',
    },
    activeTabText:{
        fontSize: constants.mediumFont, 
        color:AppColors.white, 
        fontWeight:constants.weight600, 
        textAlign:'center', 
        marginTop:12, 
        opacity: constants.activeOpacity
    },
   
    inActiveTabText:{
        fontSize: constants.mediumFont, 
        color:AppColors.white, 
        fontWeight:constants.weight600, 
        textAlign:'center', 
        marginTop:12, 
        opacity: constants.inActiveOpacity

    }

}