import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import MyDrawerScreen from '../drawer/MyDrawerScreen';

const bike_yellow = require('../assets/bike_yellow.png');

const InitialScreen = () => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('MyDrawerScreen');
  };

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <Image
          source={bike_yellow}
          resizeMode="contain"
          style={{
            width: 300,
            height: 300,
            marginLeft: -30,
            marginTop: 150,
            transform: [{scaleX: -1}, {scale: 1.5}],
          }}
        />

        <View style={{justifyContent: 'flex-start', paddingLeft: 30}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 24,
              color: 'black',
              paddingTop: 40,
              justifyContent: 'flex-start',
            }}>
            Every Bikes
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 24,
              color: 'black',
              justifyContent: 'flex-start',
            }}>
            At your own Cost
          </Text>
          <Text style={{marginTop: 20}}>
            Premium end prestige Bike daily rental
          </Text>
          <Text>Experience the thrill at a lower price</Text>
        </View>

        <TouchableOpacity
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 20,
            width: 330,
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 20,
            backgroundColor: '#2C2B34',
          }}
          onPress={handleNavigate}>
          <Text
            style={{textAlign: 'center', color: '#fff', fontWeight: 'bold'}}>
            Let's Go
          </Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // height:100
  },
});
