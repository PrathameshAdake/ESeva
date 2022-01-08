import React from 'react';
import { StyleSheet, View, ScrollView, Modal, TouchableOpacity, Button} from 'react-native';
import {Text,TextInput, Divider,RadioButton} from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

import {jsoon} from '../jsondata/problems.json';

export default class Complaint extends React.Component {
  state={
    pickerSelection:'Choose Problem',
    problemPickerDisplayed:false,
    Location:"Select Location",
    locationPickerDisplayed:false,
    ward:"Select Ward",
    wardPickerDisplayed:false,
    checked: 'ward'
  }

  setProblemPickerValue(newValue){
    this.setState({
      pickerSelection:newValue
    })
    this.toggleProblemPicker();
  }
  toggleProblemPicker(){
    this.setState({
      problemPickerDisplayed:!this.state.problemPickerDisplayed
    })
  }
  setWardPickerValue(newValue){
    this.setState({
      ward:newValue
    })
    this.toggleWardPicker();
  }
  toggleWardPicker(){
    this.setState({
      wardPickerDisplayed:!this.state.wardPickerDisplayed
    })
  }
  setLocationPickerValue(newlocation){
    // console.log(newlocation)
    // console.log(jsoon.problemMainWard.RSouth.some(item => item.location===newlocation)==true)
    if(jsoon.problemMainWard.RNorth.some(item => item.location==newlocation)==true){
      this.setState({
        Location:newlocation,
        ward:"RNorth"
      })
    }
    else if(jsoon.problemMainWard.RSouth.some(item => item.location==newlocation)==true){
      this.setState({
        Location:newlocation,
        ward:"RSouth"
      })
    }
    this.toggleLocationPicker()
  }
  toggleLocationPicker(){
    this.setState({
      locationPickerDisplayed:!this.state.locationPickerDisplayed
    })
  }
  switchedToWard(){
    this.setState({
      checked:"ward",
      Location:"Select Location",
      ward:"Select Ward"
    })
  }
  switchedToLoc(){
    this.setState({
      checked:"loc",
      ward:"Select Ward"
    })
  }
    render(){
      // console.log(jsoon.problemMainLocation.sort(function(a,b){return a.location > b.location}))
      // console.log(jsoon.problemMainWard.RNorth.some(item => item.location==="Rawal Pada"))
      // console.log(jsoon.problemMainWard.RSouth.some(item => item.location == "Rawal Pada")==true)
      return (
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.personalDetailsView}>
              <Text style={styles.text}>Personal Details</Text>
              <TextInput
                label='Name'
                mode="outlined"
                theme={{colors:{primary:"#009387"}}}
                style={styles.textip}
              />
              <TextInput
                label='Contact Number'
                mode="outlined"
                theme={{colors:{primary:"#009387"}}}
                style={styles.textip}
              />
              <Text>Current selected location is : {this.state.Location}</Text>
              <Text>Current selected Ward is : {this.state.ward}</Text>
            </View>
            <View style={styles.complaintDetailsView}>
              <Text style={styles.text}>Complaint Details</Text>
              <View style={styles.dropdownView}>
                <Text>{this.state.pickerSelection}</Text>
                <AntDesign name="up" size={18} color="black" onPress={() => this.toggleProblemPicker()}/>
              </View>
              <Modal visible={this.state.problemPickerDisplayed} animationType={"slide"} transparent={true} onRequestClose={() => console.log("Close was requested")}>
                <View style={styles.modalView}>
                  <Text style={{fontWeight:"bold",color:"blue",fontSize:16}}>Choose Problem</Text>
                  {jsoon.problems.map((value,index)=>{
                    return <View style={styles.modalItemsView} key={index}>
                              <TouchableOpacity  onPress={()=>this.setProblemPickerValue(value.value)} style={{paddingTop:7,paddingBottom:4}}>
                                <Text style={{fontSize:15,fontWeight:"bold",textAlign:"center"}}>{value.title}</Text>
                              </TouchableOpacity>
                              <Divider />
                           </View>
                  })}
                  
                  <TouchableOpacity onPress={() => this.toggleProblemPicker()} style={{paddingTop:4,paddingBottom:4}}>
                    <Text style={{color:"#999"}}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </Modal>

              <TextInput
                label='Description'
                placeholder="Description of the problem"
                mode="outlined"
                theme={{colors:{primary:"#009387"}}}
                style={styles.textip}
              />
              <View style={{borderWidth:0.5,marginTop:20,padding:10}}>
                <View style={{borderWidth:0.1,paddingBottom:6,paddingHorizontal:4,borderTopLeftRadius:15}}>
                {/* <Text>WARD PICCCCCCCCCCCKER</Text> */}
                  <View style={{flex:0,flexDirection:"row"}}>
                    <RadioButton
                      value="ward"
                      status={this.state.checked === 'ward' ? 'checked' : 'unchecked'}
                      onPress={() => { this.switchedToWard()}}
                    />
                    <Text style={{textAlign:"center",paddingTop:5,fontSize:18,flex:1}}>Ward of the Problem Location</Text>
                  </View>
                    <View style={styles.dropdownView}>
                      <Text>{this.state.ward}</Text>
                      <TouchableOpacity disabled={this.state.checked=="ward"?false:true} onPress={() => this.toggleWardPicker()}>
                        <AntDesign name="up" size={18} color="black"/>
                      </TouchableOpacity>
                    </View>
                    <Modal visible={this.state.wardPickerDisplayed} animationType={"slide"} transparent={true} onRequestClose={() => console.log("Close was requested")}>
                      <View style={styles.modalView}>
                      <Text style={{fontWeight:"bold",color:"blue",fontSize:16}}>Choose Ward</Text>
                        {jsoon.wards.map((value,index)=>{
                          return <View style={styles.modalItemsView} key={index}>
                                    <TouchableOpacity onPress={() => this.setWardPickerValue(value.ward)} style={{paddingTop:7,paddingBottom:4}}>
                                      <Text style={{fontSize:15,fontWeight:"bold",textAlign:"center"}}>{value.ward}</Text>
                                    </TouchableOpacity>
                                    <Divider />
                                </View>
                        })}
                        
                        <TouchableOpacity onPress={() => this.toggleWardPicker()} style={{paddingTop:4,paddingBottom:4}}>
                          <Text style={{color:"#999"}}>Cancel</Text>
                        </TouchableOpacity>
                      </View>
                    </Modal>
                </View>
                <View style={{marginTop:10,borderWidth:0.1,paddingHorizontal:4,paddingBottom:6,borderTopLeftRadius:15}}>
                  <View style={{flex:1,flexDirection:"row"}}>
                    <RadioButton
                      value="loc"
                      status={this.state.checked === 'loc' ? 'checked' : 'unchecked'}
                      onPress={() => { this.switchedToLoc()}}
                    />
                    <Text style={{textAlign:"center",paddingTop:5,fontSize:18,flex:1}}>Location of The Problem</Text>
                  </View>
                    <View style={styles.dropdownView}>
                      <Text>{this.state.Location}</Text>
                      <TouchableOpacity disabled={this.state.checked=="ward"?true:false} onPress={() => this.toggleLocationPicker()}>
                        <AntDesign name="up" size={18} color="black"/>
                      </TouchableOpacity>
                    </View>
                    <Modal visible={this.state.locationPickerDisplayed} animationType={"slide"} transparent={true} onRequestClose={() => console.log("Close was requested")}>
                      <View style={styles.modalVView}>
                      <Text style={{textAlign:"center",fontWeight:"bold",color:"blue",fontSize:16}}>Choose Location</Text>
                        <ScrollView>
                          {jsoon.problemMainLocation.sort(function(a,b){return a.location > b.location}).map((value,index)=>{
                            return <View style={styles.modalItemsView} key={index}>
                                      <TouchableOpacity onPress={() => this.setLocationPickerValue(value.location)} style={{paddingTop:7,paddingBottom:4}}>
                                        <Text style={{fontSize:15,fontWeight:"bold",textAlign:"center"}}>{value.location}</Text>
                                      </TouchableOpacity>
                                      <Divider />
                                  </View>
                          })}
                          <TouchableOpacity onPress={() => this.toggleLocationPicker()} style={{paddingTop:4,alignItems:"center",paddingBottom:4}}>
                            <Text style={{color:"#999"}}>Cancel</Text>
                          </TouchableOpacity>
                        </ScrollView>
                      </View>
                    </Modal>
                </View>
                
              </View>
              
              <TextInput
                label='Precise Location'
                placeholder="Precise Location of the problem"
                mode="outlined"
                theme={{colors:{primary:"#009387"}}}
                style={styles.textip}
              />
            </View>
            <Button title="Submit Complaint"/>
          </View>
        </ScrollView>
      );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
    padding:15
  },
  personalDetailsView:{
    flex:1,
    padding:20,
    backgroundColor:"#fff",
    borderRadius:20
  },
  textip:{
    marginTop:13,
  },
  text:{
    fontSize:18,
    fontWeight:"bold",
    color:"#009387"
  },
  complaintDetailsView:{
    flex:1,
    padding:20,
    backgroundColor:"#fff",
    borderRadius:20,
    marginTop:20
  },
  modalVView:{
    flex:1,
    margin:20,
    backgroundColor:"#efefef",
    
    borderRadius:10
  },
  modalView:{
    margin:20,
    bottom:40,
    left:20,
    right:20,
    position:"absolute",
    alignItems:"center",
    backgroundColor:"#efefef",
    borderRadius:10
  },
  modalItemsView:{
    width:"100%",
    
  },
  dropdownView:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    margin:3,
    marginTop:15,
    padding:15,
    elevation:2,
    backgroundColor:"#fff"
  },
});