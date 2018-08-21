import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../actions';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

class Login extends Component{

    static navigationOptions = ({navigation}) => ({
      title:'Controle de notas'
    });

    state = {
      email: '',
      senha: ''
    }

    login = () => {
      if (this.state.email === '' || this.state.senha === '') return;
      this.props.dispatchLogin({
        email: this.state.email,
        senha: this.state.senha
      });
      this.setState({ email: '', senha: '' });
    }

    updateInputEmail = (email) => {
      this.setState({ email })
    }

    updateInputSenha = (senha) => {
        this.setState({ senha })
    }

    verificaUsuarioLogado() {
        if (!!this.props.usuarioLogado) {
            this.props.navigation.navigate('Home')
        }
    }

    render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={text => this.updateInputEmail(text)}
          style={styles.input}
          value={this.state.email}
          placeholder="Email"
        />
        <TextInput
          onChangeText={text => this.updateInputSenha(text)}
          style={styles.input}
          value={this.state.senha}
          placeholder="Senha"
        />
        <TouchableHighlight
          underlayColor="#ffa012"
          style={styles.button}
          onPress={this.login}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
        {this.verificaUsuarioLogado()}
      </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      padding: 20,
    },
    title: {
      fontSize: 22,
      textAlign: 'center',
    },
    input: {
      backgroundColor: '#e4e4e4',
      height: 55,
      borderRadius: 3,
      padding: 5,
      marginTop: 12,
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
    person: {
      marginTop: 12,
    },
    buttonExcluir: {
      color: 'red'
    }
  });
  
  function mapStateToProps (state) {
    return {
      usuario: state.usuario.usuario,
      usuarioLogado: state.usuario.usuarioLogado
    }
  }
  
  function mapDispatchToProps (dispatch) {
    return {
        dispatchLogin: (usuario) => dispatch(login(usuario)),
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Login)
  