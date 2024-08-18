import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CategorySelector = ({
  categories,
  selectedCategory,
  onCategoryPress,
  containerStyle,
  buttonStyle,
  activeButtonStyle,
  textStyle,
  activeTextStyle,
}) => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={[styles.categoryContainer, containerStyle]}
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          style={[
            styles.categoryButton,
            buttonStyle,
            selectedCategory === category && [styles.activeCategory, activeButtonStyle],
          ]}
          onPress={() => onCategoryPress(category)}
        >
          <Text
            style={[
              styles.categoryButtonText,
              textStyle,
              selectedCategory === category && activeTextStyle,
            ]}
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  categoryButton: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 5,
  },
  activeCategory: {
    backgroundColor: '#007BFF',
  },
  categoryButtonText: {
    color: '#000',
  },
});

export default CategorySelector;
