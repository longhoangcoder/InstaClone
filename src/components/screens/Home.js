import {ScrollView, StatusBar, Text, View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Stories from '../screenComponents/Stories';
const Home = () => {
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <StatusBar
        backgroundColor="white"
        barStyle={'dark-content'}
        animated={true}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          alignItems: 'center',
        }}>
        <Text style={{fontFamily: 'Lobster-Regular', fontSize: 30, color:'black'}}>
          Instagram
        </Text>
        <View style = {{flexDirection:'row', justifyContent:'space-between'}}>
          <FontAwesome name="plus-square-o" style={{fontSize: 30, color:"black"}} />
          <Feather name="message-circle" style={{fontSize: 30, color:"black",marginLeft:15}} />
        </View>
      </View>
      <ScrollView>
      <Stories/>
      </ScrollView>
    </View>
  );
};

export default Home;
