import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/SearchScreen';
// import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from '../screens/ProfileScreen';
import {StyleSheet, View, Image, Text} from 'react-native';
// import MyDrawerScreen from '../drawer/MyDrawerScreen';
import HomeScreen from '../screens/HomeScreen';

// const windowHeight = Dimensions.get('window').height;
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          // position:'absolute',
          bottom: 25,
          // left:20,
          // right:20,
          elevation: 5,
          backgroundColor: '#ffff',
          borderRadius: 50,
          height: 70,
          // top: windowHeight / 1.45,

          // ...styles.shadow
        },
      }}>
      <Tab.Screen name="HomeScreen" component={MyDrawerScreen} />

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/home.png')}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? 'red' : 'black',
                }}
              />
              <Text style={{color: focused ? 'red' : 'black'}}>Home</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/search.png')}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? 'red' : 'black',
                }}
              />
              <Text style={{color: focused ? 'red' : 'black'}}>Search</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/profile.png')}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? 'red' : 'black',
                }}
              />
              <Text style={{color: focused ? 'red' : 'black'}}>Profile</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({});

export default Tabs;
