import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class SlideShow extends React.Component{
    render(){
        return(
            <View style={{height:this.props.width/2+4,elevation:7,width:this.props.width-100,marginLeft:20,borderWidth:0.5,borderColor:"#dddddd"}}>
                    <Image source={this.props.imageUri}
                                style={{flex:1,width:null,height:null,resizeMode:"cover"}}
                            />
                    
            </View>
        )
    }
} 