import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAvaliacao, deleteAvaliacao } from '../../../actions';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Picker,
  ScrollView
} from 'react-native';

class AvaliarTrabalho extends Component{

    static navigationOptions = ({navigation}) => ({
      title:'Avaliar trabalho de aluno'
    });

    state = {
      inputValue: '',
    }
    addAvaliacao = () => {
        const nota = this.state.inputValue
        if (nota === '' || 
            this.state.aluno === '' || 
            this.state.trabalho === '' ||
            nota < 0 || nota > 10 ) return;

        this.props.dispatchAddAvaliacao({
            aluno: this.state.aluno.name,
            trabalho: this.state.trabalho.name,
            nota: this.state.inputValue,
        });

        this.setState({ inputValue: '' });
    }
    deleteAvaliacao = (avaliacao) => {
      this.props.dispatchdeleteAvaliacao(avaliacao)
    }
    updateInput = (inputValue) => {
      this.setState({ inputValue })
    }

    renderAlunos() {
        return this.props.people.map((person, index) => (
            <Picker.Item key={index} label={person.name} value={person} />
          ))
    }

    renderTrabalhos() {
        return this.props.work.map((work, index) => (
            <Picker.Item key={index} label={work.name} value={work} />
          ))
    }

    renderAvalicoes() {
        return this.props.avaliacao.map((avaliacao, index) => (
            <View key={index} style={styles.person}>
              <Text>Aluno: {avaliacao.aluno}</Text>
              <Text>Trabalho: {avaliacao.trabalho}</Text>
              <Text>Nota: {avaliacao.nota}</Text>
              <Text style={styles.buttonExcluir} onPress={() => this.deleteAvaliacao(avaliacao)}>Excluir</Text>
            </View>
          ))
    }

    render() {
    return (
      <View style={styles.container}>
        <Picker
            selectedValue={this.state.aluno}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) => this.setState({aluno: itemValue})}>
            <Picker.Item label="Escolher aluno" value='' />
            {this.renderAlunos()}
        </Picker>
        <Picker
            selectedValue={this.state.trabalho}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) => this.setState({trabalho: itemValue})}>
            <Picker.Item label="Escolher trabalho" value='' />
            {this.renderTrabalhos()}
        </Picker>
        <TextInput
          onChangeText={text => this.updateInput(text)}
          style={styles.input}
          value={this.state.inputValue}
          placeholder="Nota entre 0 e 10"
          keyboardType={'numeric'}
        />
        <TouchableHighlight
          underlayColor="#ffa012"
          style={styles.button}
          onPress={this.addAvaliacao}
        >
          <Text style={styles.buttonText}>Avaliar</Text>
        </TouchableHighlight>
        <ScrollView>
        { this.renderAvalicoes() }
        </ScrollView>
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
      people: state.people.people,
      work: state.work.work,
      avaliacao: state.avaliacao.avaliacao
    }
  }
  
  function mapDispatchToProps (dispatch) {
    return {
      dispatchAddAvaliacao: (avaliacao) => dispatch(addAvaliacao(avaliacao)),
      dispatchdeleteAvaliacao: (avaliacao) => dispatch(deleteAvaliacao(avaliacao))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AvaliarTrabalho)
  