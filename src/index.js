import './config/Reactotron';
import 'react-native-gesture-handler';

import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import routesFunction from './routes';
import CarregamentoInicial from '~/pages/CarregamentoInicial';

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false,
  };

  async componentDidMount() {
    const user = await AsyncStorage.getItem('@GitHuber:username');

    this.setState({userChecked: true, userLogged: !!user});
  }

  render() {
    if (!this.state.userChecked) return <CarregamentoInicial />;

    const Routes = routesFunction(this.state.userLogged);
    return <Routes />;
  }
}
