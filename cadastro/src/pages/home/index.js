import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../actions';
import {
StyleSheet,
Text,
View,
Image,
TouchableHighlight
} from 'react-native';

class Home extends Component{

    static navigationOptions = ({navigation}) => ({
        title:'Home'
    });

    logoutUsuario = () => {
        this.props.dispatchLogout()
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
        <View style={styles.container}>
            <TouchableHighlight
                underlayColor="white"
                onPress={() => this.props.navigation.navigate('CadastroAluno')} >
                <Image source={require('./icons/user.png')} style={styles.icon} />
            </TouchableHighlight>
            <TouchableHighlight
                underlayColor="white"
                onPress={() => this.props.navigation.navigate('CadastroTrabalho')} >
                <Image source={require('./icons/file.png')} style={styles.icon} />
            </TouchableHighlight>
            <TouchableHighlight
                underlayColor="white"                
                onPress={() => this.props.navigation.navigate('AvaliarTrabalho')} >
                <Image source={require('./icons/evaluarion.png')} style={styles.icon} />
            </TouchableHighlight>
            <TouchableHighlight
                underlayColor="white"                
                onPress={this.logoutUsuario} >
                <Image source={require('./icons/exit.png')} style={styles.icon} />
            </TouchableHighlight>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
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
      icon: {
        width: 160, 
        height: 160,
        marginTop: 30,
        marginBottom: 30,
        marginRight: 25,
      }
  });

  function mapDispatchToProps (dispatch) {
    return {
        dispatchLogout: () => dispatch(logout()),
    }
  }
  
  export default connect(
    null,
    mapDispatchToProps,
  )(Home)