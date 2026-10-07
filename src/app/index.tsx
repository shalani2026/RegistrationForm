import {View, Text , StyleSheet , TextInput ,Button } from 'react-native'
import React from 'react'
import { useState } from 'react'

 const Profile = ( {name ,age ,email ,password ,mobile , onBack,}:{name : string  ,age : string ,email :string , password :string ,mobile :string ,onBack: () => void;}) => {
    return(
      <View style ={style.screen1}>
        <View style={style.card2}>
          <View style = {style.profile}>
            <Text style={style.profileText}>SP</Text>
          </View>
          
         <Text style ={{fontSize : 20, fontWeight : 500 ,color : 'blue' , marginTop : 30}} > Name : {name}</Text>
          <Text  style ={{fontSize :20, fontWeight : 500 ,color : 'blue'}}> Age : {age}</Text>
           <Text  style ={{fontSize :20, fontWeight : 500 ,color : 'blue'}}> Email : {email}</Text>
            <Text  style ={{fontSize : 20, fontWeight : 500 ,color : 'blue'}}>Passworde : {password}</Text>
             <Text  style ={{fontSize : 20, fontWeight : 500 ,color : 'blue'}}> Mobile No.  : {mobile}</Text>
             <View style ={{width : 200,margin : 15}}><Button title="Back" onPress={onBack} /></View>
            
            
        </View>
    </View>
  )};

const index = () => {
  const [showProfile , setShowProfile] = useState (false);
  const [name , setname] = useState ('');
   const [age, setage] = useState ('');
    const [email , setemail] = useState ('');
     const [password, setpassword] = useState ('');
        const [mobile, setmobile] = useState ('');

 const clearForm = () => {
    setname('');
    setage('');
    setemail('');
    setpassword('');
    setmobile('');
  };
  const submitForm = () => {
  if (
    name.trim() === '' ||
    age.trim() === '' ||
    email.trim() === '' ||
    password.trim() === '' ||
    mobile.trim() === ''
  ) {
    alert('Please fill all fields');
    return;
  }

  setShowProfile(true);
};

  if (showProfile){
    return <Profile name = {name}
                age = {age}
                email = {email}
                password = {password}
                mobile = {mobile}
                onBack={() => setShowProfile(false)}
    />;
  }

  return (
     <View style ={style.screen}>
        <View style={style.card}>
          <Text style = { style.text}>Registration Form</Text>
          <View style = {style.card1}>
          <TextInput style ={style.textinput} placeholder = "enter your name"   placeholderTextColor="black" value={name} onChangeText={setname}/>
          <TextInput style ={style.textinput} placeholder = "enter your Age" value={age} onChangeText={setage}/>
           <TextInput style ={style.textinput} placeholder = "enter your email" value={email} onChangeText={setemail}/>
           <TextInput style ={style.textinput} placeholder = "enter your Password"
           secureTextEntry value={password} onChangeText={setpassword}/>
            <TextInput style ={style.textinput} placeholder = "enter your Mobile No" value={mobile} onChangeText={setmobile}/>
           </View>
           <View style = {style.btn}>
                <Button  title='Submit'
                onPress={submitForm}/>
                <Button  title='clear'  onPress={clearForm}/>
           </View>        
            
        </View>
    </View>
  )}

 
  
 const style =StyleSheet.create ({
   screen : {
    flex : 1 ,
    justifyContent : 'center',
    alignItems : 'center',
    textAlign : 'center',
    },
     screen1 : {
       justifyContent : 'center',
       alignItems : 'center',
       marginTop : 100,
   
    },
     card2:{
      width : 300,
      height:550,
      backgroundColor :'lightgray',
      borderRadius : 20,
      paddingLeft :50 ,
      gap : 20 ,
      paddingTop : 50,
     
      
    },
    card :{
      width : 320,
      height:550,
      backgroundColor :'lightgray',
      borderRadius : 20
    },
    text : {
   textAlign : 'center',
   fontSize : 32,
   margin : 20,
   fontWeight : 900,
   fontFamily: 'sans-serif',
   color : 'darkblue'
    },
    textinput : {
       borderWidth: 2,
       borderColor: 'black',
       width: 250,
       height: 40,
       marginBottom: 10,
      paddingHorizontal: 10,
      color: 'black',     
    },
    card1: {
     marginTop : 50,
    alignItems : 'center',
    textAlign : 'center',
    },
    btn : {
      flexDirection :'row',
      margin : 50,
      alignItems : 'center',
      justifyContent :'space-around',
         
    },
  
   profile : {
          borderRadius :'50%',
          backgroundColor : 'crimson', 
          width  : 100 ,
          height :100 ,
          marginLeft : 40
         },
   profileText: {
        fontSize: 50,
        fontWeight: '500',
        color: 'white',
        margin : 15,
        marginLeft : 20
        
},
 })

export default index