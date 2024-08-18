import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Header = ({ 
  onBackPress, 
  onFilterPress, 
  backIconSource, 
  filterIconSource, 
  style 
}) => {
  return (
    <View style={[styles.header, style]}>
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={onBackPress}>
        <Image source={backIconSource} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.filterButton} 
        onPress={onFilterPress}>
        <Image source={filterIconSource} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
    marginTop:5,
  },
  backButton: {
    // Add your button styles here
  },
  filterButton: {
    // Add your button styles here
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default Header;
