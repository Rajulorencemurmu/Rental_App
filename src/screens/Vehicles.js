import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import BottomNavBar from '../navigation/BottomNavBar';
import BikeCard from '../VehicleComponents/BikeCard';
import CarCard from '../VehicleComponents/CarCard';
import Header from '../VehicleComponents/Header';

const left_arrow = require('../assets/left-arrow.png');
const filter = require('../assets/filter.png');
const bike1 = require('../assets/bike1.png');
const bike2 = require('../assets/bike2.png');
const car1 = require('../assets/car1.png');

const Vehicles = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('Automatic');

  const handleCategoryPress = category => {
    setSelectedCategory(category);
  };

  return (
    <View style={styles.container}>
      {/* Header icons */}
      <Header
        backIconSource={left_arrow}
        filterIconSource={filter}
        onBackPress={() => navigation.navigate('MyDrawerScreen')}
        onFilterPress={() => console.log('Filter pressed')}
      />

      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <View style={{marginLeft: 30}}>
          <Text style={{fontWeight: '500', fontSize: 17, color: 'black'}}>
            Select a Bike
          </Text>
        </View>

        {/* Categories containers */}
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.categoryContainer}
          showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategory === 'Automatic' && styles.activeCategory,
              styles.activeText,
            ]}
            onPress={() => handleCategoryPress('Automatic')}>
            <Text style={styles.categoryButtonText}>Automatic</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategory === 'Electric' && styles.activeCategory,
            ]}
            onPress={() => handleCategoryPress('Electric')}>
            <Text style={styles.categoryButtonText}>Electric</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategory === 'Manual' && styles.activeCategory,
            ]}
            onPress={() => handleCategoryPress('Manual')}>
            <Text style={styles.categoryButtonText}>Manual</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategory === 'xyz' && styles.activeCategory,
              styles.activeText,
            ]}
            onPress={() => handleCategoryPress('xyz')}>
            <Text style={styles.categoryButtonText}>xyz</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Bikes views */}
        <View style={{padding: 10, flexDirection: 'row'}}>
          
          <View style={{flexDirection:'column'}}>
          <BikeCard
            style={styles.bikeContainer}
            imageSource={bike1}
            price="20/-RS"
            rating="10.9"
            onPress={() =>
              navigation.navigate('VehicleDetails', {
                image: bike1,
                price: '20/-RS',
                rating: '10.9',
              })
            }
          />
        
        {/* <TouchableOpacity style={{}}>
        <Text style={{backgroundColor:'#D4D4D4',alignSelf:'center',justifyContent:'center'}}>Book Now</Text>
        </TouchableOpacity> */}
          </View>
          

          <BikeCard
            style={styles.bikeContainer}
            imageSource={bike2}
            price="20/-RS"
            rating="10.9"
            onPress={() =>
              navigation.navigate('VehicleDetails', {
                image: bike2,
                price: '20/-RS',
                rating: '10.9',
              })
            }
          />
        </View>

        {/* Cars Views */}
        <View>
          <CarCard
            style={styles.carContainer}
            power="283 KW/PS"
            rating="10.9"
            imageSource={car1}
            onBookNowPress={() =>
              navigation.navigate('VehicleDetails', {
                image: car1,
                power: '283 KW/PS',
                rating: '10.9',
              })
            }
          />
        </View>
      </ScrollView>
      <BottomNavBar />
    </View>
  );
};

export default Vehicles;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 35,
  },
  backButton: {
    // padding: 8,
    // width:8,
  },
  filterButton: {},
  headerText: {
    // fontSize: 18,
    // fontWeight: 'bold',
  },
  settingsButton: {
    // padding: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    justifyContent: 'space-evenly',
    padding: 16,
    // width:104,
    height: 90,
  },
  categoryButton: {
    // padding: 12,
    borderRadius: 24,
    borderWidth: 1,
    marginLeft: 10,
    width: 104,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeCategory: {
    backgroundColor: '#D4D4D4',
  },
  categoryButtonText: {
    color: '#000',
    fontWeight: '400',
  },
  bikeContainer: {
    width: 160,
    height: 220,
    backgroundColor: '#fff',
    marginBottom: 24,
    marginLeft: 14,
    borderRadius: 14,
    elevation: 4,
    padding: 16,
  },
  carsContainer: {
    // padding: 16,
  },
  carContainer: {
    width: 320,
    height: 190,
    backgroundColor: 'white',
    marginBottom: 16,
    borderRadius: 12,
    elevation: 3,
    padding: 16,
    alignSelf: 'center',
  },
  carImage: {
    // width: '100%',
    // height: 200,
    // resizeMode: 'cover',
    // borderRadius: 12,
  },
  price: {
    // fontSize: 16,
    // fontWeight: 'bold',
    // marginTop: 16,
  },
  kw: {
    // fontSize: 14,
    // color: '#888',
    // marginTop: 8,
  },
  bookNowButton: {
    // backgroundColor: '#007bff',
    // padding: 12,
    // borderRadius: 24,
    // alignItems: 'center',
    // marginTop: 16,
  },
  bookNowText: {
    // color: 'white',
    // fontWeight: 'bold',
  },

  // footer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-around',
  //   padding: 16,
  //   backgroundColor: 'white',
  //   borderTopWidth: 1,
  //   borderTopColor: '#ddd',
  // },
  // footerButton: {
  //   padding: 8,
  // },
});
