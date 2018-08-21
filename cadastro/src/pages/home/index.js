import React, { Component } from 'react';
import {
StyleSheet,
Text,
View,
Button,
TouchableHighlight
} from 'react-native';

export default class Home extends Component{

    static navigationOptions = ({navigation}) => ({
        title:'Home'
    });

    render() {
        return (
        <View style={styles.container}>
            <TouchableHighlight
                underlayColor="#ffa012"
                style={styles.button}
                onPress={() => this.props.navigation.navigate('CadastroAluno')} >
                <Text style={styles.buttonText}>Cadatro de alunos</Text>
            </TouchableHighlight>
            <TouchableHighlight
                underlayColor="#ffa012"
                style={styles.button}
                onPress={() => this.props.navigation.navigate('CadastroTrabalho')} >
                <Text style={styles.buttonText}>Cadatro de trabalhos</Text>
            </TouchableHighlight>
            <TouchableHighlight
                underlayColor="#ffa012"
                style={styles.button}
                onPress={() => this.props.navigation.navigate('CadastroAluno')} >
                <Text style={styles.buttonText}>Avaliar trabalhos</Text>
            </TouchableHighlight>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    button: {
        backgroundColor: '#ff9900',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
        borderRadius: 3,
      },
      buttonText: {
        color: 'white',
      },
  });