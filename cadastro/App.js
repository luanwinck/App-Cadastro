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


const Navegation = StackNavigator({
  Home: { screen: Home },
  CadastroAluno: { screen: CadastroAluno },
});

export default Navegation;


