import React, { Component } from 'react';
import { View, Image, Dimensions, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { images } from 'components/utilities/ImageComponent'
import AppColors from 'components/colors/AppColors';
import { constants } from 'components/constants/constants';
import Texts from '../../components/texts/Texts';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'


const { width, height } = Dimensions.get('window');

export const ComplaintCell = ({
    complaintTitle, userImage, complaintImage, likeCount, commentCount, userName, time, houseNumber, desc,
    isLiked, moreImageRef, isCompletedTab, likePressAction, openMoreAction }) => {
    return (
        <View style={styles.viewComplaintCell}>

            {/* user details view */}
            <View style={styles.viewUserDetails}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={{ uri: userImage }} style={styles.imageUser}></Image>
                    <View>
                        <Text style={styles.textUserName}>{userName}</Text>
                        <Text style={styles.textTime}>{time}</Text>
                    </View>
                </View>

                <View style={{}}>
                    <Text style={styles.houseNumber}>{houseNumber}</Text>
                    <TouchableOpacity style={{ width: 50 }} onPress={openMoreAction} ref={moreImageRef}>
                        <Image style={{ width: 14, height: 14, marginHorizontal: 20, marginTop: 5 }} source={images.more}></Image>
                    </TouchableOpacity>
                </View>
            </View>

            {/* image view with buttons and title */}
            {
                (complaintImage != '')
                    ?
                    <ImageBackground source={{ uri: complaintImage }} style={styles.imageComplaint}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, }}>
                            <View style={{}}>
                                <Text style={styles.typeText}>{Texts.complaintType}</Text>
                                <Text style={styles.titleText}>{complaintTitle}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginHorizontal: -5, alignSelf: 'flex-end' }}>
                                <TouchableOpacity style={{ flexDirection: 'row', marginHorizontal: 10 }}
                                    onPress={likePressAction}>
                                    <Image style={styles.imageLike} source={(isLiked) ? images.likeFilled : images.like}></Image>
                                    <Text style={styles.textCount}>{(isLiked) ? likeCount + 1 : likeCount}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flexDirection: 'row', marginHorizontal: 10 }}>
                                    <Image style={styles.imageLike} source={images.comments}></Image>
                                    <Text style={styles.textCount}>{commentCount}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                    :
                    <View>
                        <View style={{ height: 1, width: width - 20, backgroundColor: AppColors.timeTextColor }}></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, }}>
                            <View style={{}}>
                                <Text style={[styles.typeText, { color: 'black' }]}>{Texts.complaintType}</Text>
                                <Text style={[styles.titleText, { color: '#333' }]}>{complaintTitle}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginHorizontal: -5, alignSelf: 'flex-end' }}>
                                <TouchableOpacity style={{ flexDirection: 'row', marginHorizontal: 10 }} onPress={() => { likePressAction }}>
                                    <Image style={styles.imageLike} source={(isLiked) ? images.like : images.likeFilled}></Image>
                                    <Text style={[styles.textCount, { color: 'gray' }]}>{(isLiked) ? likeCount + 1 : likeCount}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flexDirection: 'row', marginHorizontal: 10 }}>
                                    <Image style={styles.imageLike} source={images.comments}></Image>
                                    <Text style={[styles.textCount, { color: 'gray' }]}>{commentCount}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ height: 1, width: width - 20, backgroundColor: AppColors.timeTextColor }}></View>
                    </View>
            }
            {/* description of feed */}
            <Text style={styles.descriptionText}>{desc}</Text>

            {/* feedback view */}
            {
                (isCompletedTab)
                    ?
                    <View>
                        <View style={{ height: 1, width: width - 20, backgroundColor: AppColors.timeTextColor }}></View>
                        <View style={{ width: width - 20, marginTop: 10 }}>
                            <Text style={{ marginLeft: 30, }}>{Texts.shareFeedback}</Text>
                            <View style={{ height: 1, backgroundColor: constants.appShadowColor, marginTop: 5, marginLeft: 30, opacity: 0.6 }}></View>
                            <View style={{ flexDirection: 'row', margin: 10, alignSelf: 'flex-end', }}>
                                <TouchableOpacity style={styles.feedbackImage}>
                                    <Image source={images.smile1} style={styles.feedbackIcon}></Image>
                                    <Text style={styles.feedbackText}>{Texts.bad}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.feedbackImage}>
                                    <Image source={images.smile2} style={styles.feedbackIcon}></Image>
                                    <Text style={styles.feedbackText}>{Texts.avg}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.feedbackImage}>
                                    <Image source={images.smile3} style={styles.feedbackIcon}></Image>
                                    <Text style={styles.feedbackText}>{Texts.good}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.feedbackImage}>
                                    <Image source={images.smile4} style={styles.feedbackIcon}></Image>
                                    <Text style={styles.feedbackText}>{Texts.vGood}</Text>
                                </TouchableOpacity>


                            </View>
                        </View>
                    </View>
                    :
                    null
            }

            <View style={{ height: 1, backgroundColor: constants.appShadowColor, marginBottom: 4, opacity: 0.6 }}></View>

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
        margin: 10,
        marginTop: 20,
        justifyContent: 'space-between',
    },
    imageUser: {
        width: 48,
        height: 48,
        borderRadius: 24
    },
    textUserName: {
        fontSize: constants.mediumFont,
        marginHorizontal: 10,
        fontWeight: constants.weight500,
        color: AppColors.black,
        width: width * 0.55,
    },
    textTime: {
        fontSize: constants.timeTextFont,
        marginHorizontal: 10,
        color: AppColors.timeTextColor,
        marginTop: 5
    },
    houseNumber: {
        fontSize: constants.smallFont, marginHorizontal: 10, color: AppColors.timeTextColor
    },
    imageComplaint: {
        width: width - 28,
        height: 140,
        resizeMode: 'cover',
        alignSelf: 'center',
        justifyContent: 'flex-end'
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
        marginHorizontal: 8, marginVertical: 14, textAlign: 'justify'
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
        justifyContent: 'space-around'
    },
    imageLikeBottom: {
        width: 25, height: 25, marginTop: Platform.OS == 'android' ? 0 : 6, marginLeft: 2
    },
    textCountBottom: {
        color: AppColors.black, fontSize: 14, fontWeight: constants.weight500, opacity: 0.7, marginTop: 10
    },
}

