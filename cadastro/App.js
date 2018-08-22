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

import Login from './src/pages/login/index'
import RegistrarUsuario from './src/pages/registrarUsuario/index'
import Home from './src/pages/home/index'
import CadastroAluno from './src/pages/cadastroAluno/index'
import CadastroTrabalho from './src/pages/cadastroTrabalho/index'
import AvaliarTrabalho from './src/pages/avaliarTrabalho/index'
import RequisicaoUsuario from './src/pages/requisicaoUsuario/index';

const Navegation = StackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
  RegistrarUsuario: { screen: RegistrarUsuario },
  CadastroAluno: { screen: CadastroAluno },
  CadastroTrabalho: { screen: CadastroTrabalho },
  AvaliarTrabalho: { screen: AvaliarTrabalho },
  RequisicaoUsuario: { screen: RequisicaoUsuario }
});

export default class App extends React.Component {
  render() {
    return <Navegation />;
  }
}


