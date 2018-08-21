import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import Home from './src/pages/home/index'
import CadastroAluno from './src/pages/cadastroAluno/index'
import CadastroTrabalho from './src/pages/cadastroTrabalho/index'


const Navegation = StackNavigator({
  Home: { screen: Home },
  CadastroAluno: { screen: CadastroAluno },
  CadastroTrabalho: { screen: CadastroTrabalho },
});

export default class App extends React.Component {
  render() {
    return <Navegation />;
  }
}


