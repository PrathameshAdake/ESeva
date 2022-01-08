import React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';

export default class BottomComponents extends React.Component {
  render(){
    return (
            
            <View style={{width:this.props.width/2-30,
                height:this.props.width/2-30,
                borderWidth:0.5,
                marginBottom:40,
                borderColor:'#dddddd',
                elevation:7}}
                >

                <View style={styles.imgView}>
                    <Image 
                        style={styles.img} 
                        source={this.props.image}
                        />
                </View>
            </View>            
    );
  }
}

const styles = StyleSheet.create({
    imgView:{
        flex:1,
    },
    img:{
        flex:1,
        width:null,
        height:null,
        resizeMode:'cover',
        borderRadius:7,
        shadowRadius:10
    },
});
// style={{flex:1,width:null,height:null,resizeMode:'cover'}}