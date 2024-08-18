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
          <Text>{power}</Text>
          <Text>{rating}</Text>
        </View>
        <Image
          source={imageSource}
          style={{ width: 220, height: 120, alignSelf: 'center' }}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: 'auto' }}>
          <Text onPress={onBookNowPress}>Book Now</Text>
          <Text>{power}</Text>
          <Text>{rating}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CarCard;
