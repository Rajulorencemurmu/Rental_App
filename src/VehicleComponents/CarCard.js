import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const CarCard = ({ 
  style, 
  power, 
  rating, 
  imageSource, 
  onBookNowPress 
}) => {
  return (
    <View>
      <TouchableOpacity style={style}>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text style={{color:'black'}}>{power}</Text>
          <Text style={{color:'black'}}>{rating}</Text>
        </View>
        <Image
          source={imageSource}
          style={{ width: 220, height: 120, alignSelf: 'center' }}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-around',alignItems:'center',backgroundColor:'#EEEDEB',borderBottomLeftRadius:15,borderBottomRightRadius:15,width:320,height:37,marginLeft:-16 }}>
          <Text onPress={onBookNowPress} style={{color:'black'}}>Book Now</Text>
          <Text style={{color:'black'}}>{power}</Text>
          <Text style={{color:'black'}}>{rating}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CarCard;
