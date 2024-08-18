// import { useNavigation } from '@react-navigation/native';
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

// const left_arrow=require('./assets/icons/left-arrow.png')
// const filter=require('./assets/icons/filter.png')
// const bike1=require('./assets/icons/bike1.png')
// const threedots=require('./assets/icons/3dots.png')
// const battery_status=require('./assets/icons/battery-status.png')
// const gps_navigation=require('./assets/icons/gps-navigation.png')
// const gasoline=require('./assets/icons/gasoline.png')

// const VehicleDetails = () => {
//     const navigation=useNavigation();
//     const [selectedCategory, setSelectedCategory] = useState('Automatic');

//     const handleCategoryPress = (category) => {
//       setSelectedCategory(category);
//     };

//   return (
//     <View style={styles.container}>
//         {/* header icons */}
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.backButton} onPress={()=>navigation.navigate('Vehicle')}>
//           <Image source={left_arrow} style={{width:20,height:20}}/>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.filterButton}>
//           <Image source={filter} style={{width:20,height:20}}/>
//         </TouchableOpacity>
//       </View>
//       <View>
//         <Image source={bike1} style={{width:260,height:220,alignSelf:'center'}}/>
//       </View>
//       {/* <View style={{width:100,height:100,borderRadius:100,backgroundColor:'#F0F0F0', elevation:1,transform: [{rotateY: '45deg'}, {rotateZ: '45deg'}],}}></View> */}
//       <Text style={{fontWeight:'400',color:'#000',fontSize:17,padding:12,marginLeft:18}}>Select a Bike</Text>

//         {/* Categories containers */}
//         <ScrollView horizontal={true} contentContainerStyle={styles.categoryContainer} showsHorizontalScrollIndicator={false}>
//       {/* <View style={styles.categoryContainer}> */}
//         <TouchableOpacity
//           style={[styles.categoryButton, selectedCategory === 'Automatic' && styles.activeCategory,styles.activeText]}
//           onPress={() => handleCategoryPress('Automatic')}
//         >
//           <Text style={styles.categoryButtonText}>Automatic</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.categoryButton, selectedCategory === 'Electric' && styles.activeCategory]}
//           onPress={() => handleCategoryPress('Electric')}
//         >
//           <Text style={styles.categoryButtonText}>Electric</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.categoryButton, selectedCategory === 'Manual' && styles.activeCategory]}
//           onPress={() => handleCategoryPress('Manual')}
//         >
//           <Text style={styles.categoryButtonText}>Manual</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.categoryButton, selectedCategory === 'Automatic' && styles.activeCategory,styles.activeText]}
//           onPress={() => handleCategoryPress('Automatic')}
//         >
//           <Text style={styles.categoryButtonText}>Automatic</Text>
//         </TouchableOpacity>

//       {/* </View> */}
//       </ScrollView>

//          {/* Mid black box conatainer more cars section */}
//          <View style={styles.midbox}>
//           <View style={{justifyContent:'space-between',flexDirection:'row',padding:20}}>
//           <Text style={styles.midboxtext}>More Cars</Text>
//         <Image source={threedots} style={{width:15,height:15}}/>
//           </View>

//           {/* box one */}
//           <View style={{width:'inherit',height:110,padding:28,justifyContent:'space-between',marginTop:-32}}>
//             {/* 1st one */}
//             <Text style={styles.boldText}>Corolla Cross</Text>
//             <View style={{flexDirection:'row',justifyContent:'space-around',margin:10}}>
//               <View style={{flexDirection:'row',gap:8,marginRight:20}}>
//               <Image source={gps_navigation} style={{width:15,height:15,tintColor:'#fff'}}/>
//               <Text style={styles.smallText}>4Km</Text>
//               </View>

//               <View style={{flexDirection:'row',gap:5,marginRight:100}}>
//               <Image source={gasoline} style={{width:16,height:16,tintColor:'#fff'}}/>
//               <Text style={styles.smallText}>50L</Text>
//               </View>

//               <TouchableOpacity style={{flexDirection:'row',backgroundColor:'#fff',borderRadius:20,padding:4,paddingHorizontal:8,marginTop:-10,marginBottom:10}}>
//               <Image source={left_arrow} style={{width:15,height:15,transform:[{rotate:'180deg'}]}}/>
//               </TouchableOpacity>

//             </View>

//           <View style={{borderWidth:0.8,borderColor:'#4B4B4B8A',marginBottom:8,}}></View>

//             {/* 2nd one */}
//             <Text style={styles.boldText}>Ionic 5</Text>
//             <View style={{flexDirection:'row',justifyContent:'space-around',margin:10}}>
//               <View style={{flexDirection:'row',gap:8,marginRight:20}}>
//               <Image source={gps_navigation} style={{width:15,height:15,tintColor:'#fff'}}/>
//               <Text style={styles.smallText}>8Km</Text>
//               </View>

//               <View style={{flexDirection:'row',gap:5,marginRight:100}}>
//               <Image source={battery_status} style={{width:16,height:16,tintColor:'#fff'}}/>
//               <Text style={styles.smallText}>80%</Text>
//               </View>

//               <TouchableOpacity style={{flexDirection:'row',backgroundColor:'#fff',borderRadius:20,padding:4,paddingHorizontal:8,marginTop:-10,marginBottom:10}}>
//               <Image source={left_arrow} style={{width:15,height:15,transform:[{rotate:'180deg'}]}}/>
//               </TouchableOpacity>

//             </View>
//           </View>

//           </View>

//     </View>
//   )
// }

// export default VehicleDetails

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//       },
//       header: {
//         flexDirection: 'row',
//         justifyContent:'space-between',
//         padding:35,
//       },
//       categoryContainer: {
//         flexDirection: 'row',
//         justifyContent:'space-evenly',
//         // height:90,
//         marginTop:5,
//         marginLeft:12
//       },
//       categoryButton: {
//         borderRadius: 24,
//         borderWidth:1,
//         marginLeft:10,
//         width:104,
//         height:40,
//         justifyContent:'center',
//         alignItems:'center',

//       },
//       activeCategory: {
//         backgroundColor: 'grey',
//       },
//       categoryButtonText: {
//         color: '#000',
//         fontWeight: '400',
//       },
//       midbox: {
//         borderWidth: 1,
//         // marginTop:-500,
//         borderRadius: 25,
//         width: 330,
//         height: 195,
//         backgroundColor: '#282931',
//         alignSelf: 'center',
//         marginBottom:75,

//       },
//       midboxtext:{
//         fontSize:11,
//         color:'#D4D4D4',
//       },
//       boldText:{
//         fontWeight:'bold',
//         fontSize:14,
//         color:'#fff'
//       },
//       smallText:{
//         // fontWeight:'bold',
//         fontSize:10,
//         color:'#fff'
//       }
// })





import Header from '../VehicleComponents/Header';
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

const left_arrow = require('../assets/left-arrow.png');
const filter = require('../assets/filter.png');
const bike1 = require('../assets/bike1.png');
const threedots = require('../assets/3dots.png');
const battery_status = require('../assets/battery-status.png');
const gps_navigation = require('../assets/gps-navigation.png');
const gasoline = require('../assets/gasoline.png');

const VehicleDetails = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Header
        backIconSource={left_arrow}
        filterIconSource={filter}
        onBackPress={() => navigation.navigate('Vehicles')}
        onFilterPress={() => console.log('Filter pressed in VehicleDetails')}
      />

      <View>
        <Image
          source={bike1}
          style={{width: 260, height: 220, alignSelf: 'center'}}
        />
      </View>

      <Text
        style={{
          fontWeight: '400',
          color: '#000',
          fontSize: 17,
          padding: 12,
          marginLeft: 18,
        }}>
        Select a Bike
      </Text>
    </View>
  );
};

export default VehicleDetails;

const styles = StyleSheet.create({});
