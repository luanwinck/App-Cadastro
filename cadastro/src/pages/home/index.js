import React, { Component } from 'react';
import {
StyleSheet,
Text,
View,
Button
} from 'react-native';

export default class Home extends Component{

    static navigationOptions = ({navigation}) => ({
        title:'Home'
    });

    render() {
        return (
        <View style={styles.container}>
            <Text>Tela inicial</Text>
            <Button title="Tela 2" onPress={() => this.props.navigation.navigate('CadastroAluno')} />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
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