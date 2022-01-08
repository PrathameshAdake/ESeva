import React from 'react';
import { StyleSheet, View,TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';

export default class HomeComponents extends React.Component{
    render(){
        return(
            <View style={styles.homeStackView}>
                <View style={styles.row}>
                    <View style={styles.cardlike}>
                        <TouchableOpacity>
                            <Text>Hello</Text>
                        </TouchableOpacity>
                    </View>   
                    <View style={styles.cardlike}>
                        <TouchableOpacity>
                            <Text>Hello</Text>
                        </TouchableOpacity>
                    </View>  
                </View>
                     
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeStackView:{
        flex:0.65,
        flexDirection:'column',
        padding: 0,
    },
    cardlike:{
        backgroundColor:"coral",
        shadowColor:"#333",
        padding:20 ,
        justifyContent:'space-around'

    },
    row:{
        flexDirection:'row'
    },
});