import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const windowHeight = Dimensions.get('window').height;
const homeIcon = require('../assets/home.png');
const searchIcon = require('../assets/search.png');
const profileIcon = require('../assets/profile.png');

const BottomNavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate('MyDrawerScreen')}>
        <Image source={homeIcon} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate('SearchScreen')}>
        <Image source={searchIcon} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer}>
        <Image source={homeIcon} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer}>
        <Image source={homeIcon} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate('ProfileScreen')}>
        <Image source={profileIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    position:'absolute',
    top: windowHeight / 1.12,
    elevation: 7,
    backgroundColor: '#ffff',
    borderRadius: 50,
  },
  iconContainer: {
    width: '20%',
    // height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
  },
});
