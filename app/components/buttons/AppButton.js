import React from 'react';
import AppColors from 'components/colors/AppColors';
import Texts from 'components/texts/Texts'
import { TouchableOpacity, Text ,Dimensions} from 'react-native'

const { width, height } = Dimensions.get('window');

export const CommonButton = ({ textvalue, onPressAction, margintop }) => {

  return (
    
    <TouchableOpacity style={{backgroundColor:AppColors.appColor, width: width-70, height:50, alignSelf:'center', borderRadius:5, marginTop:20}} onPress={onPressAction}>
       <Text style = {{fontWeight:'600', color: AppColors.appBackgroundColor, alignSelf:'center', padding:15, fontSize:16}}>{textvalue}</Text>
    </TouchableOpacity>

  );

}