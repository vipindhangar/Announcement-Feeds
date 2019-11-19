import React, { Component } from 'react';
import { View, Image, Dimensions, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { images } from 'components/utilities/ImageComponent'
import AppColors from 'components/colors/AppColors';
import { constants } from 'components/constants/constants';
import Texts from '../../components/texts/Texts';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'


const { width, height } = Dimensions.get('window');

export const EventCell = ({
  complaintTitle, userImage, complaintImage, likeCount, commentCount, title, time, houseNumber, desc,
  isLiked, moreImageRef, isCompletedTab, likePressAction, openMoreAction }) => {
  return (
    <View style={styles.viewComplaintCell}>
      <View style={styles.viewUserDetails}>
          <View style={styles.timeCircle}>
            <Text style={styles.textDate}>16</Text>
            <Text style={styles.textMonth}>Sep</Text>
          </View>
        <View style={{ flexDirection: 'row' }}>
         
          <Text style={styles.textUserName}>{title}</Text>
        </View>
        <TouchableOpacity style={{ width: 50 }} onPress={openMoreAction} ref={moreImageRef}>
          <Image style={{ width: 20, height: 20, marginHorizontal: 18, marginTop: 0 }} source={images.more}></Image>
        </TouchableOpacity>
      </View>
      <Text style={styles.descriptionText}>{desc}</Text>

      <View >
            <View style = {{flexDirection:'row', justifyContent: 'space-between',  marginLeft:58, marginRight:20, marginVertical:10}}>
              <View style = {{flexDirection:'row',}}>
              <Image source = {images.time}></Image>
              <Text style = {styles.textTime}>04:14 PM</Text>
              </View>
              <View style = {{flexDirection:'row',}}>
              <Image source = {images.call}></Image>
              <Text style = {styles.textTime}>Narendra Yadav</Text>
              </View>
              </View>
              <View style = {{flexDirection:'row',marginLeft:58, marginRight:20, marginBottom:10}}>
              <Image source = {images.location}></Image>
              <Text style = {styles.textTime}>Near Temple Garden, Township</Text>
              </View>
            </View>

      {
        (complaintImage != '')
          ?
         
          <Image source={{ uri: complaintImage }} style={styles.imageComplaint}>
            
          </Image>
         
         
          :
          <View>
            <View style={{ height: 1, width: width - 20, backgroundColor: AppColors.timeTextColor }}></View>
          </View>
      }
       

<View style={styles.bottomOptionView}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={{ flexDirection: 'row' }}
            onPress={likePressAction}>
            <Image style={styles.imageLikeBottom} source={(isLiked) ? images.likeFilled : images.like}></Image>
            <Text style={styles.textCountBottom}>{(isLiked) ? likeCount + 1 : likeCount} Likes</Text>
        </TouchableOpacity>
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={{ flexDirection: 'row' }}
        >
            <Image style={styles.imageLikeBottom} source={images.comments}></Image>
            <Text style={styles.textCountBottom}>{commentCount} Comments</Text>
        </TouchableOpacity>
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={{ flexDirection: 'row' }}
        >
            <MaterialIcon name='share' size={20} style={{ marginTop: 8 }} color={AppColors.appColor} />
            {/* <Image style={styles.imageLikeBottom} source={(isLiked) ? images.likeFilled : images.like}></Image> */}
            <Text style={styles.textCountBottom}>Share</Text>
        </TouchableOpacity>
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

    </View>
</View>

      

    </View>
  )
}

export const styles = {

  viewComplaintCell: {
    backgroundColor: AppColors.white,
    shadowOffset: constants.appShadowOffset,
    shadowColor: constants.appShadowColor,
    shadowOpacity: constants.appShadowOpacity,
    width: width - 20, borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 5
  },
  viewUserDetails: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  timeCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: AppColors.appColor
  },
  textDate: {
    fontSize: constants.mediumFont,
    textAlign: 'center',
    color: AppColors.appColor
  },
  textMonth: {
    fontSize: 10,
    textAlign: 'center',
    color: AppColors.appColor
  },
  textUserName: {
    fontSize: constants.mediumFont,
    fontWeight: constants.weight500,
    color: AppColors.black,
    width: width * 0.55,
    marginLeft:-18,
  },
  textTime: {
    fontSize: constants.timeTextFont,
    marginLeft: 6,
    color: AppColors.timeTextColor,
  },
 
  imageComplaint: {
    width: width - 100,
    height: 160,
    resizeMode: 'cover',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: 20
  },
  typeText: {
    color: AppColors.white, fontSize: constants.smallFont, fontWeight: constants.weight500,
  },
  titleText: {
    color: AppColors.white, fontSize: constants.smallFont, fontWeight: constants.weight500,
    marginTop: 5
  },
  imageLike: {
    width: 20, height: 20, marginHorizontal: 5, marginTop: Platform.OS == 'android' ? 0 : -2
  },
  textCount: {
    color: AppColors.white, fontSize: constants.smallFont, fontWeight: constants.weight500,
  },

  descriptionText: {
    marginLeft: 58, marginVertical: 5, textAlign: 'justify', marginRight: 20, marginTop:-15
  },

  feedbackImage: {
    width: 70, height: 40, justifyContent: 'center',
  },
  feedbackIcon: {
    alignSelf: 'center'
  },
  feedbackText: {
    fontSize: 10, color: AppColors.black, opacity: 0.7, marginLeft: 0, alignSelf: 'center'
  },
  moreOptionText: {
    fontSize: 15, color: '#333', textAlign: 'left'
  },
  bottomOptionView: {
    backgroundColor: 'transparent',
    paddingBottom: 10,
    width: width - 20,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginLeft:70
},
imageLikeBottom: {
    width: 20, height: 20, marginTop: Platform.OS == 'android' ? 0 : 7, marginLeft: 2
},
textCountBottom: {
    color: AppColors.black, fontSize: 12, fontWeight: constants.weight500, opacity: 0.7, marginTop: 10, paddingBottom:2
},
}

