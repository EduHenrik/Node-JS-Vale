import React from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';
import logo from '../img/logo.png';

export default Home=>{
    return(
        <View style ={styles.container}>
            <Image styele = {styles.logo} source={logo}/>
            <TouchableOpacity style={styles.button}>
                <Text >Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button :{
    backgroundColor : '#ECB833',
    height : 50
    },
    logo : {
        marginTop : 50,
    },
    container : {
       
        flex :1,
        backgroundColor : '#ddd',
        alignItems : 'center',
        
    }
})