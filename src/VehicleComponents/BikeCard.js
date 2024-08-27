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
        <Text style={{color:'black'}}>{price}</Text>
        <Text style={{color:'black'}}>{rating}</Text>
      </View>
      <Image 
        source={imageSource} 
        style={{ width: 140, height: 140, justifyContent: 'center', alignSelf: 'center', marginTop: 10 }} 
      />
      
      <TouchableOpacity style={{justifyContent:'center',alignItems:'center',backgroundColor:'#EEEDEB',borderBottomLeftRadius:15,borderBottomRightRadius:15,width:160,height:37,marginLeft:-16}}>
        <Text style={{color:'black'}}>Book Now</Text>
      </TouchableOpacity>

    </TouchableOpacity>
  );
};

export default BikeCard;
