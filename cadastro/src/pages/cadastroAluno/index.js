import React, { Component } from 'react';
import {
StyleSheet,
Text,
View,
Button
} from 'react-native';

export default class CadastroAluno extends Component{

    static navigationOptions = ({navigation}) => ({
      title:'Tela 2'
    });
  
    render() {
      return (
        <View style={styles.container}>
          <Text>Cadastro</Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });