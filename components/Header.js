import React from 'react';
import {View,Text} from 'react-native'

export default function Header(props) {
  return (
    <View style={{marginLeft:15}}>
        <Text style={{fontWeight:'bold',fontSize:28}}>{props.name}</Text>
    </View>
  )
}
