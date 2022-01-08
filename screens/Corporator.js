import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Text} from 'react-native-paper';

export default class Corporator extends React.Component {
    render(){
      return (
        <View style={styles.container}>
          <Text>Corporator</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});