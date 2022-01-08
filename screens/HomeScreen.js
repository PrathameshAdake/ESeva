import React from 'react';
import { StyleSheet, View,ScrollView,Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import SlideShow from '../Components/SlideShow';
import BottomComponents from '../Components/BottomComponents';

export default class HomeScreen extends React.Component {
    
    render(){
        const width = Dimensions.get('window').width
      return (
        <View style={styles.container}>
            <ScrollView
            scrollEventThrottle={4}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <SlideShow width={width} imageUri={require('../assets/Nature.jpg')}/>
                    <SlideShow width={width} imageUri={require('../assets/Nature.jpg')}/>
                    <SlideShow width={width} imageUri={require('../assets/Nature.jpg')}/>
                    <SlideShow width={width} imageUri={require('../assets/Nature.jpg')}/>
                    <SlideShow width={width} imageUri={require('../assets/Nature.jpg')}/>
                </ScrollView>
                
                <View style={{paddingHorizontal:20,marginTop:20,flexDirection:'row',
                flexWrap:'wrap',justifyContent:'space-between'}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Complaint')}>
                        <BottomComponents width={width}  title={'Complaints'} image={require('../assets/Complaint.jpeg')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Events')}>    
                        <BottomComponents width={width} title={'Events'} image={require('../assets/Events.jpeg')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Recruitment')}>
                        <BottomComponents width={width} title={'Recruitment'} image={require('../assets/Recruitment.jpeg')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('WomenSection')}>
                        <BottomComponents width={width} title={'Women Section'} image={require('../assets/Women.jpeg')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Environment')}>
                        <BottomComponents width={width} title={'Environment'} image={require('../assets/Environment.jpeg')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Corporator')}>
                        <BottomComponents width={width} title={'Corporator'} image={require('../assets/Corporator.jpeg')}/>
                    </TouchableOpacity>
                </View>                
            </ScrollView>
        </View>
        
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
    },
    carouselBackground:{
        backgroundColor:"#000",
        height:'35%',
        flexDirection:'row'
    },
    
});