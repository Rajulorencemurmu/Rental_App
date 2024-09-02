import React, {useRef, useState} from 'react';
import {
  Alert,
  Animated,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import home from '../assets/home.png';
import search from '../assets/search.png';
import notifications from '../assets/bell.png';
import settings from '../assets/settings.png';
import logout from '../assets/logout.png';
import location from '../assets/location.png';
import profile from '../assets/profile.png';
import bookmark from '../assets/bookmark.png';
import message from '../assets/message.png';
import help from '../assets/help.png';

const home1 = require('../assets/home.png');
// Menu
import menu from '../assets/menu.png';
import close from '../assets/close.png';

// Photo
import bike1 from '../assets/bike1.png';
import bike2 from '../assets/bike2.png';
import ktm from '../assets/ktm.jpg';
import girlpic from '../assets/girlpic.jpg';
const menu_icon = require('../assets/menu.png');
const profile_icon = require('../assets/profile1.jpg');
const bike_img = require('../assets/bike_yellow.png');
const calendar = require('../assets/calendar.png');
const clock = require('../assets/clock.png');
const small_bike = require('../assets/small_bike.png');

import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const windowHeight = Dimensions.get('window').height;
import Tabs from '../navigation/tabs';
import BottomNavBar from '../navigation/BottomNavBar';
import {UserData} from '../screens/UserData';

import {TimeDatePicker, Modes} from 'react-native-time-date-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const trimName = (name, maxLength = 8) => {
  return name.length > maxLength ? name.substring(0, maxLength) + '...' : name;
};

const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title == 'LogOut') {
          // Do your Stuff...
        } else {
          setCurrentTab(title);
        }
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 8,
          backgroundColor: currentTab == title ? 'white' : 'transparent',
          paddingLeft: 20,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15,
          //   paddingTop:12,
          paddingBottom: 20,
        }}>
        <Image
          source={image}
          style={{
            width: 20,
            height: 20,
            tintColor: currentTab == title ? '#5359D1' : 'white',
          }}></Image>

        <Text
          style={{
            fontSize: 15,
            // fontWeight: 'bold',
            paddingLeft: 15,
            color: currentTab == title ? '#5359D1' : 'white',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const MyDrawerScreen = () => {
  const [pickupDate, setPickupDate] = useState(null);
  const [pickupTime, setPickupTime] = useState(null);
  const [dropoffDate, setDropoffDate] = useState(null);
  const [dropoffTime, setDropoffTime] = useState(null);

  const [showPickupDatePicker, setShowPickupDatePicker] = useState(false);
  const [showPickupTimePicker, setShowPickupTimePicker] = useState(false);
  const [showDropoffDatePicker, setShowDropoffDatePicker] = useState(false);
  const [showDropoffTimePicker, setShowDropoffTimePicker] = useState(false);

  const handlePickupDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || pickupDate;
    setShowPickupDatePicker(Platform.OS === 'ios');
    setPickupDate(currentDate);
  };

  const handlePickupTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || pickupTime;
    setShowPickupTimePicker(Platform.OS === 'ios');
    setPickupTime(currentTime);
  };

  const handleDropoffDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dropoffDate;
    setShowDropoffDatePicker(Platform.OS === 'ios');
    if(pickupDate && moment(currentDate).isBefore(pickupDate,'day'))
      Alert.alert("Invalid Date", "Drop-off date cannot be earlier than the pick-up date.")
    setDropoffDate(currentDate);

  };

  const handleDropoffTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || dropoffTime;
    setShowDropoffTimePicker(Platform.OS === 'ios');
    setDropoffTime(currentTime);
  };

  const [currentTab, setCurrentTab] = useState('Home');
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  //using navigation here
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{justifyContent: 'flex-start', padding: 15}}>
        <View style={{flexGrow: 1, marginTop: 50}}>
          {
            // Tab Bar Buttons....
          }

          {TabButton(currentTab, setCurrentTab, 'Home', home)}
          {TabButton(currentTab, setCurrentTab, 'Profile', profile)}
          {TabButton(currentTab, setCurrentTab, 'Nearby', location)}

          <View style={{borderWidth: 0.5, marginTop: 10}}></View>

          {TabButton(currentTab, setCurrentTab, 'Bookmark', bookmark)}
          {TabButton(currentTab, setCurrentTab, 'Notifications', notifications)}
          {TabButton(currentTab, setCurrentTab, 'Message', message)}

          <View style={{borderWidth: 0.5, marginTop: 10}}></View>

          {TabButton(currentTab, setCurrentTab, 'Settings', settings)}
          {TabButton(currentTab, setCurrentTab, 'help', help)}

          {TabButton(currentTab, setCurrentTab, 'LogOut', logout)}
        </View>
      </View>

      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: 'white',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 15,
          paddingVertical: 20,
          borderRadius: showMenu ? 30 : 0,
          // Transforming View...
          transform: [{scale: scaleValue}, {translateX: offsetValue}],
        }}>
        {
          // Menu Button...
        }

        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}>
          {/* <TouchableOpacity
            onPress={() => {
              // Do Actions Here....
              // Scaling the view...
              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : 0.88,
                duration: 200,
                useNativeDriver: true,
              }).start();

              Animated.timing(offsetValue, {
                // YOur Random Value...
                toValue: showMenu ? 0 : 180,
                duration: 200,
                useNativeDriver: true,
              }).start();

              Animated.timing(closeButtonOffset, {
                // YOur Random Value...
                toValue: !showMenu ? -30 : 0,
                duration: 200,
                useNativeDriver: true,
              }).start();

              setShowMenu(!showMenu);
            }}>
              
           
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <Image
                source={showMenu ? close : menu}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: 'black',
                  marginTop: 20,
                }}></Image>

              <Image
                source={girlpic}
                style={{
                  width: 40,
                  height: 40,
                  marginTop: 15,
                  borderRadius: 50,
                }}
              />
            </View>
          </TouchableOpacity> */}

          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingBottom: 15,
            }}>
            <TouchableOpacity
              onPress={() => {
                // Trigger animation only when the menu icon is pressed
                Animated.timing(scaleValue, {
                  toValue: showMenu ? 1 : 0.88,
                  duration: 300,
                  useNativeDriver: true,
                }).start();

                Animated.timing(offsetValue, {
                  toValue: showMenu ? 0 : 180,
                  duration: 300,
                  useNativeDriver: true,
                }).start();

                Animated.timing(closeButtonOffset, {
                  toValue: !showMenu ? -30 : 0,
                  duration: 300,
                  useNativeDriver: true,
                }).start();

                setShowMenu(!showMenu);
              }}>
              <Image
                source={showMenu ? close : menu}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: 'black',
                  marginTop: 20,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                // Do something specific for the girl picture if needed
              }}>
              <Image
                source={girlpic}
                style={{
                  width: 40,
                  height: 40,
                  marginTop: 15,
                  borderRadius: 50,
                }}
              />
            </TouchableOpacity>
          </View>

          {/* Status section */}
          <View style={styles.statusSection}>
            {UserData.map(item => {
              return (
                <View key={item.id} style={{marginLeft: 15}}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Story');
                    }}>
                    <View style={styles.statusDecoration}>
                      <Image
                        style={styles.statusImage}
                        source={item.story.image}
                      />
                    </View>
                    <Text style={{textAlign: 'center'}}>
                      {trimName(item.name)}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>

          <ScrollView style={{marginTop: 10}}>
            {/* Main section */}
            <View style={styles.mainSection}>
              <View style={{width: 250}}>
                <Text
                  style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
                  The Fastest Rental Service
                </Text>
                <Text>Get Your Bikes at your place</Text>
                <TouchableOpacity>
                  <View style={styles.buttonStyle}>
                    <Text
                      style={{
                        width: 100,
                        borderRadius: 14,
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: 8,
                      }}>
                      Book Now
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <Image
                  source={bike_img}
                  resizeMode="contain"
                  style={{width: 160, height: 170, transform: [{scale: 1.9}]}}
                />
              </View>
            </View>



            {/* Pickup and drop off */}
            <View style={styles.pickupDropoff}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>PickUp</Text>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <TouchableOpacity
                    style={styles.pickupDate}
                    onPress={() => setShowPickupDatePicker(true)}>
                    <Text style={{color: '#5F1717'}}>
                      {pickupDate
                        ? moment(pickupDate).format('MMM DD, YYYY')
                        : 'Date'}
                    </Text>
                    {!pickupDate && (
                      <Image
                        source={calendar}
                        resizeMode="cover"
                        style={{width: 20, height: 20, marginLeft: 5}}
                      />
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.pickupTime}
                    onPress={() => setShowPickupTimePicker(true)}>
                    <Text>
                      {pickupTime
                        ? moment(pickupTime).format('hh:mm A')
                        : 'Time'}
                    </Text>
                    {!pickupTime && (
                      <Image
                        source={calendar}
                        resizeMode="cover"
                        style={{width: 20, height: 20, marginLeft: 5}}
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{marginTop: 5}}>DropOff</Text>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <TouchableOpacity
                    style={styles.dropoffDate}
                    onPress={() => setShowDropoffDatePicker(true)}>
                    <Text style={{color: '#5F1717'}}>
                      {dropoffDate
                        ? moment(dropoffDate).format('MMM DD, YYYY')
                        : 'Date'}
                    </Text>
                    {!pickupDate && (
                      <Image
                        source={calendar}
                        resizeMode="cover"
                        style={{width: 20, height: 20, marginLeft: 5}}
                      />
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.dropoffTime}
                    onPress={() => setShowDropoffTimePicker(true)}>
                    <Text>
                      {dropoffTime
                        ? moment(dropoffTime).format('hh:mm A')
                        : 'Time'}
                    </Text>
                    {!pickupDate && (
                      <Image
                        source={calendar}
                        resizeMode="cover"
                        style={{width: 20, height: 20, marginLeft: 5}}
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              {/* DateTime Pickers */}
              {showPickupDatePicker && (
                <DateTimePicker
                  value={pickupDate || new Date()}
                  mode="date"
                  display="default"
                  onChange={handlePickupDateChange}
                />
              )}
              {showPickupTimePicker && (
                <DateTimePicker
                  value={pickupTime || new Date()}
                  mode="time"
                  display="default"
                  onChange={handlePickupTimeChange}
                />
              )}
              {showDropoffDatePicker && (
                <DateTimePicker
                  value={dropoffDate || new Date()}
                  mode="date"
                  display="default"
                  onChange={handleDropoffDateChange}
                  minimumDate={pickupDate}
                />
              )}
              {showDropoffTimePicker && (
                <DateTimePicker
                  value={dropoffTime || new Date()}
                  mode="time"
                  display="default"
                  onChange={handleDropoffTimeChange}
                />
              )}

              {/* Navigate to Vehicles */}
              <TouchableOpacity
                onPress={() => navigation.navigate('Vehicles')}
                style={styles.searchBox}>
                <Text>Search Now</Text>
                <Image source={small_bike} style={{width: 30, height: 30}} />
              </TouchableOpacity>
            </View>

            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                padding: 10,
                fontSize: 17,
              }}>
              Want a Bike at Your Doorstep?
            </Text>

            {/* custom bottom navigation */}
            {/* <View
            style={{
              width: '100%',
              height: 70,
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              alignItems: 'center',
              top: windowHeight / 1.45,
                elevation:7,
                backgroundColor:'#ffff',
                borderRadius:50,

                
            }}>
            <TouchableOpacity
              style={{
                width: '20%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }} onPress={()=>navigation.navigate('MyDrawerScreen')}>
              <Image source={home1} style={{width: 25, height: 25}} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: '20%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }} onPress={()=>navigation.navigate('SearchScreen')}>
              <Image source={search} style={{width: 25, height: 25}} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: '20%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={home1} style={{width: 25, height: 25}} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: '20%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={home1} style={{width: 25, height: 25}} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: '20%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }} onPress={()=>navigation.navigate('ProfileScreen')}>
              <Image source={profile} style={{width: 25, height: 25}} />
            </TouchableOpacity>
          </View> */}
          </ScrollView>

          <BottomNavBar />
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default MyDrawerScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#A0937D',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    // height:600,
    height: windowHeight,
  },

  searchBox: {
    borderRadius: 4,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    marginTop: 25,
    backgroundColor: '#77524738',
  },
  pickupDropoff: {
    // borderWidth: 1,
    borderRadius: 30,
    width: 330,
    height: 200,
    marginTop: 25,
    backgroundColor: '#CD2E2E1A',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  pickupDate: {
    // borderWidth: 1,
    borderRadius: 10,
    width: 70,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: -10,
    flexDirection: 'row',
    backgroundColor: '#FFFFFFE5',
    width: 'auto',
  },
  pickupTime: {
    // borderWidth: 1,
    borderRadius: 10,
    width: 70,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: -10,
    flexDirection: 'row',
    backgroundColor: '#e7e7e7',
    width: 'auto',
  },
  dropoffDate: {
    // borderWidth: 1,
    borderRadius: 10,
    width: 70,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: 'auto',
  },
  dropoffTime: {
    color: '#7B7B7B1A',
    // borderWidth: 1,
    borderRadius: 10,
    width: 'auto',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#e7e7e7',
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: '#f5f5f5',
  //   paddingLeft: 25,
  //   paddingRight: 25,
  //   // paddingTop: 4,
  // },
  // headerSection: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   height: 100,
  //   // width:20,
  // },
  // menuIconStyle: {
  //   width: 25,
  // },
  // profileIconStyle: {
  //   width: 90,
  //   height: 90,
  //   borderRadius: 50,
  //   transform: [{scale: 0.4}],
  //   marginLeft: 250,
  // },
  statusSection: {
    flexDirection: 'row',
  },
  statusDecoration: {
    borderWidth: 3,
    borderRadius: 40,
    padding: 2,
    borderColor: 'green',
  },
  statusImage: {width: 60, height: 60, borderRadius: 35},

  mainSection: {
    paddingTop: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    // backgroundColor: 'white',
    marginTop: 16,
    elevation: 1,
    // padding: 16,
    // width:100,
    // elevation: 1,
    // marginTop: 14,
    // backgroundColor: 'white',
    borderTopStartRadius: 24,
    borderTopEndRadius: 24,
    borderBottomEndRadius: 24,
    width: 100,
  },
});
