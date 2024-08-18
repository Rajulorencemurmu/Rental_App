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

  const cars = [
    {
      category: 'Automatic',
      image: require('../assets/bike1.png'),
      price: '20 RS/S',
      kw: '10,9',
      description: 'Automatic Car',
    },
    {
      category: 'Manual',
      image: require('../assets/bike2.png'),
      price: '20 RS/S',
      kw: '10,9',
      description: 'Manual Car',
    },
    {
      category: 'Electric',
      image: require('../assets/car1.png'),
      price: '283 KW/PS',
      kw: '10,9',
      description: 'Electric Car',
    },
  ];

//   const renderCars = () => {
//     return cars
//       .filter(car => car.category === selectedCategory)
//       .map((car, index) => (
//         <View key={index} style={styles.carContainer}>
//           <Image source={car.image} style={styles.carImage} />
//           <Text style={styles.price}>{car.price}</Text>
//           <Text style={styles.kw}>{car.kw}</Text>
//           <TouchableOpacity
//             style={styles.bookNowButton}
//             onPress={() => console.log('Book Now pressed')}>
//             <Text style={styles.bookNowText}>Book Now</Text>
//           </TouchableOpacity>
//         </View>
//       ));
//   };

  return (
    <View style={styles.container}>
      {/* header icons */}
        <Header
        backIconSource={left_arrow}
        filterIconSource={filter}
        onBackPress={() => navigation.navigate('MyDrawerScreen')}
        onFilterPress={() => console.log('Filter pressed')}
      />
      

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
        {/* <View style={styles.categoryContainer}> */}
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
            selectedCategory === 'Automatic' && styles.activeCategory,
            styles.activeText,
          ]}
          onPress={() => handleCategoryPress('Automatic')}>
          <Text style={styles.categoryButtonText}>Automatic</Text>
        </TouchableOpacity>

        {/* </View> */}
      </ScrollView>

      {/* Bikes views */}
      <View style={{padding: 10, flexDirection: 'row'}}>
        <BikeCard
          style={styles.bikeContainer}
          imageSource={bike1}
          price="20/-RS"
          rating="10.9"
          onPress={() => navigation.navigate('VehicleDetails')}
        />
        <BikeCard
          style={styles.bikeContainer}
          imageSource={bike2}
          price="20/-RS"
          rating="10.9"
          onPress={() => console.log('Bike 2 pressed')}
        />
      </View>

      {/* Cars Views */}
      <View>
        <CarCard
          style={styles.carContainer}
          power="283 KW/PS"
          rating="10.9"
          imageSource={car1}
          onBookNowPress={() => console.log('Book Now pressed')}
        />
      </View>

      {/* <ScrollView style={styles.carsContainer}></ScrollView> */}

      <BottomNavBar/>
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
    // backgroundColor: 'black',
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
