import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Text,Avatar,Caption,Title,Paragraph,Drawer,TouchableRipple,Switch} from 'react-native-paper';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Web from '../screens/Web';


export default class DrawerContents extends React.Component{
    
    state={
        isDarkTheme:false
    }

    toggleTheme = () =>{
        this.setState({
            isDarkTheme:!this.state.isDarkTheme
        })
    }    
    
    render(){
        return(
            <View style={{flex:1}}>
                <DrawerContentScrollView {...this.props}>
                    <View style={styles.drawerContent}>
                        <View style={styles.userInfoSection}>
                            <View style={{flexDirection:"row",marginTop:7}}>
                                <Avatar.Image 
                                    source={{uri:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fmiro.medium.com%2Fmax%2F1200%2F1*mk1-6aYaf_Bes1E3Imhc0A.jpeg&imgrefurl=https%3A%2F%2Ftowardsdatascience.com%2F3-numpy-image-transformations-on-baby-yoda-c27c1409b411&tbnid=gOUAFhrbQ2nYQM&vet=12ahUKEwiJ6qGW6PDpAhXTyXMBHe8-DE8QMygIegUIARDRAQ..i&docid=OXvyXJop1qSGqM&w=1200&h=900&q=image&ved=2ahUKEwiJ6qGW6PDpAhXTyXMBHe8-DE8QMygIegUIARDRAQ"}}
                                    size={50}
                                />
                                <View style={{marginLeft:15,flexDirection:"column"}}>
                                    <Title style={styles.title}>Shiba Tatsuya</Title>
                                    <Caption style={styles.caption}>Op Character</Caption>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={styles.section}>
                                    <Paragraph style={[styles.caption,styles.paragraph]}>200</Paragraph>
                                    <Caption style={styles.caption}>Complaints</Caption>
                                </View>
                            </View>
                        </View>
                        <Drawer.Section style={styles.bottomDrawerSection}>
                            <DrawerItem 
                                icon={({color,size})=>(
                                    <Icon 
                                        name="home-outline"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Home"
                                onPress={()=>console.log("Pressed Home")}
                            />
                            <DrawerItem 
                                icon={({color,size})=>(
                                    <Icon 
                                        name="exit-to-app"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="SignOut"
                                onPress={()=>console.log("Pressed SignOut")}
                            />
                            <DrawerItem 
                                icon={({color,size})=>(
                                    <Icon 
                                        name="exit-to-app"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="SignOut"
                                onPress={()=>console.log("Pressed SignOut")}
                            />
                            <DrawerItem 
                                icon={({color,size})=>(
                                    <Icon 
                                        name="account-check-outline"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Support"
                                onPress={()=>this.props.navigation.navigate("Web")}
                            />
                        </Drawer.Section>
                        <Drawer.Section title="Preferences">
                            <TouchableRipple onPress={()=>{this.toggleTheme()}}>
                                <View style={styles.preference}>
                                    <Text>Dark Theme</Text>
                                    <View pointerEvents="none">
                                        <Switch value={this.state.isDarkTheme}/>
                                    </View>
                                    
                                </View>
                            </TouchableRipple>
                        </Drawer.Section>
                    </View>
                </DrawerContentScrollView>
                <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem 
                        icon={({color,size})=>(
                            <Icon 
                                name="exit-to-app"
                                color={color}
                                size={size}
                            />
                        )}
                        label="SignOut"
                        onPress={()=>console.log("Pressed SignOut")}
                    />
                </Drawer.Section>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    drawerContent:{
        flex:1
    },
    userInfoSection:{
        paddingLeft:20
    },
    title:{
        fontSize:16,
        marginTop:3,
        fontWeight:"bold"
    },
    caption:{
        fontSize:14,
        lineHeight:14
    },
    row:{
        marginTop:20,
        flexDirection:"row",
        alignItems:"center"
    },
    section:{
        flexDirection:"row",
        alignItems:"center",
        marginRight:15
    },
    paragraph:{
        fontWeight:"bold",
        marginRight:3
    },
    drawerSection:{
        marginTop:15
    },
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor:"#f4f4f4",
        borderTopWidth:1
    },
    preference:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:12,
        paddingHorizontal:16
    }
})