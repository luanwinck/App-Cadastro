import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addWork, deleteWork } from '../../../actions';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ScrollView
} from 'react-native';

class CadastroTrabalho extends Component{

    static navigationOptions = ({navigation}) => ({
      title:'Cadastro de trabalho'
    });

    state = {
      inputValue: '',
    }
    addWork = () => {
      if (this.state.inputValue === '') return;
      this.props.dispatchAddWork({
        name: this.state.inputValue,
      });
      this.setState({ inputValue: '' });
    }
    deleteWork = (Work) => {
      this.props.dispatchdeleteWork(Work)
    }
    updateInput = (inputValue) => {
      this.setState({ inputValue })
    }

    renderTrabalhos() {
        return <ScrollView style={styles.containerScroll}>
            {this.props.work.map((work, index) => (
                <View key={index} style={styles.work}>
                    <Text>{work.name}</Text>
                    <Text style={styles.buttonExcluir} onPress={() => this.deleteWork(work)}>Excluir</Text>
                </View>
            ))}
          </ScrollView>
    }

    render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={text => this.updateInput(text)}
          style={styles.input}
          value={this.state.inputValue}
          placeholder="Name"
        />
        <TouchableHighlight
          underlayColor="#ffa012"
          style={styles.button}
          onPress={this.addWork}
        >
          <Text style={styles.buttonText}>Adicionar trabalho</Text>
        </TouchableHighlight>
        {this.renderTrabalhos()}
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
    work: {
      marginTop: 12,
    },
    buttonExcluir: {
        color: 'red'
    },
    containerScroll: {
        height: 400
    }
  });
  
  function mapStateToProps (state) {
    return {
        work: state.work.work
    }
  }
  
  function mapDispatchToProps (dispatch) {
    return {
      dispatchAddWork: (work) => dispatch(addWork(work)),
      dispatchdeleteWork: (work) => dispatch(deleteWork(work))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(CadastroTrabalho)
  