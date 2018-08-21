import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUsuario } from '../../../actions';

import PasswordInputText from 'react-native-hide-show-password-input';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

class RegistrarUsuario extends Component{

    static navigationOptions = ({navigation}) => ({
      title:'Controle de notas'
    });

    state = {
      nome: '',
      email: '',
      senha: ''
    }

    registrar = () => {
      if (this.state.nome === '' || this.state.email === '' || this.state.senha === '') return;
      this.props.dispatchAddUsuario({
        nome: this.state.nome,
        email: this.state.email,
        senha: this.state.senha
      });
      this.setState({ nome: '', email: '', senha: '' });
    }

    updateInputNome = (nome) => {
        this.setState({ nome })
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
            onChangeText={text => this.updateInputNome(text)}
            style={styles.input}
            value={this.state.nome}
            placeholder="Nome"
        />
        <TextInput
          onChangeText={text => this.updateInputEmail(text)}
          style={styles.input}
          value={this.state.email}
          placeholder="Email"
        />
        <PasswordInputText
            onChangeText={text => this.updateInputSenha(text)}
            value={this.state.senha}
        />
        <TouchableHighlight
          underlayColor="#ffa012"
          style={styles.button}
          onPress={this.registrar}
        >
          <Text style={styles.buttonText}>Registrar-se</Text>
        </TouchableHighlight>
        <Text style={styles.buttonTextSecondary} onPress={() => this.props.navigation.navigate('Login')}>Tela de login</Text>
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
    },
    buttonTextSecondary: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 20
    }
  });
  
  function mapDispatchToProps (dispatch) {
    return {
        dispatchAddUsuario: (usuario) => dispatch(addUsuario(usuario)),
    }
  }
  
  export default connect(
    null,
    mapDispatchToProps,
  )(RegistrarUsuario)
  