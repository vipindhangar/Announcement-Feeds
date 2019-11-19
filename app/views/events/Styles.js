import {Dimensions, Platform} from 'react-native'
import AppColors from 'components/colors/AppColors';
import { constants } from 'components/constants/constants';


const { width, height } = Dimensions.get('window');

export const styles = {

    viewComplaintCell:{
        backgroundColor:AppColors.white, 
        shadowOffset: constants.appShadowOffset, 
        shadowColor: constants.appShadowColor, 
        shadowOpacity: constants.appShadowOpacity, 
        width: width-20, borderColor:'#ccc', 
        borderWidth:1, 
       
        marginTop:20, 
        alignSelf:'center', 
        borderRadius:5
    },
    viewUserDetails:{
        flexDirection:'row', 
        margin:10,
        marginTop:20, 
        justifyContent:'space-between', 
    },
    imageUser:{
        width:48, 
        height:48, 
        borderRadius:24
    },
    textUserName:{
        fontSize:constants.mediumFont, 
        marginHorizontal:10, 
        fontWeight:constants.weight500, 
        color:AppColors.black, 
        width: width*0.55, 
    },
    textTime:{
        fontSize:constants.timeTextFont, 
        marginHorizontal:10, 
        color:AppColors.timeTextColor, 
        marginTop:5
    },
    houseNumber:{
        fontSize:constants.smallFont, marginHorizontal:10, color:AppColors.timeTextColor
    },
    imageComplaint:{
        width: width-28, 
        height:140, 
        resizeMode:'cover', 
        alignSelf:'center', 
        justifyContent:'flex-end'
    },
    typeText:{
        color:AppColors.white, fontSize:constants.smallFont, fontWeight:constants.weight500, 
    },
    titleText:{
        color:AppColors.white, fontSize:constants.smallFont, fontWeight:constants.weight500, 
        marginTop:5
    },
    imageLike:{
         width:20, height:20, marginHorizontal:5, marginTop: Platform.OS == 'android' ? 0 :-2
    },
    textCount:{
        color:AppColors.white, fontSize:constants.smallFont, fontWeight:constants.weight500, 
    },
        
    descriptionText:{
        marginHorizontal:8, marginVertical:14, textAlign:'justify'
    },

    feedbackImage:{
        width:70, height:40,justifyContent:'center',
    },
    feedbackIcon:{
        alignSelf:'center' 
    },
    feedbackText:{
        fontSize:10, color:AppColors.black, opacity:0.7, marginLeft:0, alignSelf:'center'
    },
    moreOptionText:{
        fontSize: 15, color: '#333', textAlign:'left'
    }
}