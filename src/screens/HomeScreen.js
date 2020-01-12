import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>   
  
      <Button
        title="Go to Infinite Scroll"
        onPress={() => navigation.navigate('User')}
      />
      <Button
        title="Go to Blog Post"
        onPress={() => navigation.navigate('Index')}
      />
        <Button
        title="Go to Flexible Layout"
        onPress={() => navigation.navigate('ResponsiveLayout')}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
