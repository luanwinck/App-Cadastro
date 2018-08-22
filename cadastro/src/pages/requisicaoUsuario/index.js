import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUsuario } from '../../../actions';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

import GetUsuario from '../../services/getUsuarioService'

class RequisicaoUsuario extends Component{

    constructor(){
      super()

      this.state = {
        nome: '',
        title: '',
        text: ''
      }
    }

    componentWillMount() {
        this.getUsuario()
    }

    getUsuario() {   
        GetUsuario
            .getUsuario()
            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.setState({
                  title: response.title,
                  text: response.text
                })

            })
            .catch(function(err) { 
                console.error(err); 
            })
    }

    static navigationOptions = ({navigation}) => ({
      title:'Requisição'
    });

    registrar = () => {
      if (this.state.nome === '') return;
      this.props.dispatchAddUsuario({
        nome: this.state.nome,
      });
      this.setState({ nome: '', email: '', senha: '' });
    }

    updateInputNome = (nome) => {
      this.setState({ nome })
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
        <TouchableHighlight
          underlayColor="#ffa012"
          style={styles.button}
          onPress={this.registrar}
        >
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableHighlight>
        <Text>{this.state.title}</Text>
        <Text>{this.state.text}</Text>
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
  )(RequisicaoUsuario)
  