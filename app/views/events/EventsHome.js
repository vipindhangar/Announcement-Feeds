import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import { styles } from "./Styles";
import { commonStyles } from 'components/utilities/CommonStyles'
import { images } from 'components/utilities/ImageComponent'
import AppColors from 'components/colors/AppColors';
import { constants } from 'components/constants/constants';
import Texts from 'components/texts/Texts';
import Popover from 'react-native-popover-view'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { EventCell } from 'components/commoncell/EventCell';



const { width, height } = Dimensions.get('window');

const UPCOMINGDATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Bhagvat Katha',
    userImage: 'https://homepages.cae.wisc.edu/~ece533/images/tulips.png',
    complaintImage: 'https://www.gstatic.com/webp/gallery/1.jpg',
  },
  // {
  //   id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  //   title: 'Second Item',
  //   userImage: 'http://api.razzle.dexbytes.in/uploads/users/34_15567778311445R.jpg',
  //   complaintImage: '',
  // },
  // {
  //   id: '58694a0f-3da1-471f-bd96-145571e29d72',
  //   title: 'Third Item',
  //   userImage: 'http://api.razzle.dexbytes.in/uploads/users/34_15567778311445R.jpg',
  //   complaintImage: 'https://www.gstatic.com/webp/gallery/1.jpg',
  // },
];


const COMPLETEDDATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Ravana Dahan',
    userImage: 'https://www.gstatic.com/webp/gallery/1.jpg',
    complaintImage: 'https://www.gstatic.com/webp/gallery/1.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Satsang',
    userImage: 'https://www.gstatic.com/webp/gallery/1.jpg',
    complaintImage: 'https://www.gstatic.com/webp/gallery/1.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Bhajan Sandhya',
    userImage: 'https://www.gstatic.com/webp/gallery/1.jpg',
    complaintImage: '',
  },
];

export default class ComplaintHome extends Component {
  static navigationOptions = {
    title: 'Events',
    headerStyle: {
      backgroundColor: AppColors.appColor,
    },
    headerTintColor: AppColors.white,
    headerTitleStyle: {
      fontWeight: constants.weight600,
    },
  };

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      upcoming_tab: true,
      progress_tab: false,
      completed_tab: false,
      isLiked: false,
      isMore:false,
      moreOption:[
        {
          id: '1',
          title: 'Edit',
          icon: 'edit',
          
        }, {
          id: '2',
          title: 'Share',
          icon: 'share',
          
        }, {
          id: '3',
          title: 'Delete',
          icon: 'delete', //MaterialIcons
          
        },],
        countInc : 123
    }
  }


  tabPress = (status) => {
    switch (status) {
      case 1:
        return this.setState({ upcoming_tab: true, progress_tab: false, completed_tab: false })
      case 2:
        return this.setState({ upcoming_tab: false, progress_tab: true, completed_tab: false })
      case 3:
        return this.setState({ upcoming_tab: false, progress_tab: false, completed_tab: true })
    }
  }

  openMore() {
    this.setState({isMore:true})
  } 

  cancelPressed() {
    this.setState({isMore: false})
  }

  render() {

    const { upcoming_tab, progress_tab, completed_tab, isMore, isLiked } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={commonStyles.container}>
          <View style={commonStyles.viewTab}>
            <TouchableOpacity style={(upcoming_tab) ? commonStyles.activeTab3 : commonStyles.inActiveTab3} onPress={() => this.tabPress(1)}>
              <Text style={(upcoming_tab) ? commonStyles.activeTabText : commonStyles.inActiveTabText}>{Texts.upcomingText}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={(progress_tab) ? commonStyles.activeTab3 : commonStyles.inActiveTab3} onPress={() => this.tabPress(2)}>
              <Text style={(progress_tab) ? commonStyles.activeTabText : commonStyles.inActiveTabText}>{Texts.completedText}</Text>
            </TouchableOpacity>
          
          </View>
          <FlatList
            style={{ marginBottom: 100 }}
            data={(upcoming_tab) ? UPCOMINGDATA : COMPLETEDDATA}
            scrollEnabled
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index, count }) => {
              return (
                <EventCell
                complaintTitle = {item.title} 
                userImage = { item.userImage}
                complaintImage = { item.complaintImage}
                likeCount = {123}
                commentCount = {44} 
                title = 'Bhajan Sandhya'
                time = '16 Sep, 04:14PM' 
                houseNumber = 'D-104' 
                desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                isLiked = {isLiked} 
                moreImageRef = {ref => this.more = ref}
                isCompletedTab = {completed_tab}
                likePressAction = {() => {this.setState({isLiked: !this.state.isLiked})}}
                openMoreAction = {() => this.openMore()}
                ></EventCell>
                
              )
            }}
          />

         

          {
            (isMore)
            ?
            <Popover
                    image = {images.more}
                    placement='bottom'
                    onRequestClose={() => this.setState({isMore: false})}
                    fromView={this.more}
                    isVisible={this.state.isMore}>
                    <View borderRadius={5} style={{  width: width*0.4, backgroundColor: 'white', }}>
                     

                                <FlatList
                                   
                                    showsVerticalScrollIndicator={false}
                                    data={this.state.moreOption}
                                    renderItem={({ item, index, separators }) => {
                                        return (

                                          <View >
                                          <TouchableOpacity style={{  height:44 ,padding:12, backgroundColor:'transparent',}} >
                                                  <View style = {{flexDirection:'row', justifyContent:'space-between'}}>
                                                    <View style = {{width:'30%'}}>
                                                      {
                                                        (item.icon == 'delete')
                                                        ?
                                                        <MaterialIcon name = {item.icon} size = {15} style = {{padding:2,}} color={AppColors.appColor} />
                                                        :
                                                        <EntypoIcon name = {item.icon} size= {15} style = {{padding:2}} color={AppColors.appColor}/>

                                                      }
                                                
                                                  </View >
                                                  <View style = {{ width:'70%'}}>
                                                  <Text style={ styles.moreOptionText}>{item.title}</Text>
                                                  </View>
                                                  </View>
                                             </TouchableOpacity>
                                             <View style={{ backgroundColor: AppColors.dividerColor, height: 1, width: width, }} />
                                        
                                        </View>
                                          
                                        )
                                    }}
                                />


                               
                    </View>
                    {
                        (this.state.moreOption.length != 0)
                            ?
                            <View >
                               
                                    <TouchableOpacity style={{  height:44 , padding:10}} onPress={() => this.cancelPressed()}>

                                        <Text style={{ fontSize: 16, color: 'red', textAlign:'center' }}>Cancel</Text>

                                   </TouchableOpacity>
                              
                            </View>

                            :
                            null
                    }
                </Popover>
                :
                null
          }

        </View>
      </SafeAreaView>

    )
  };
}
