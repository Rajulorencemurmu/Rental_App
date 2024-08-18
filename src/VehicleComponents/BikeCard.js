import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const BikeCard = ({ 
  style, 
  imageSource, 
  price, 
  rating, 
  onPress 
}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <Text>{price}</Text>
        <Text>{rating}</Text>
      </View>
      <Image 
        source={imageSource} 
        style={{ width: 140, height: 140, justifyContent: 'center', alignSelf: 'center', marginTop: 10 }} 
      />
    </TouchableOpacity>
  );
};

export default BikeCard;
