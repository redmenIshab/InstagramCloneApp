import React from 'react';
import {View , StyleSheet} from 'react-native';

export default class Wrapper extends React.Component{
    render(){
        return <View style={styles.container} />
        
    }

}

const styles=StyleSheet.create({
    container:{
        marginTop:40
    }
})