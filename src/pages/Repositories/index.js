import React, {Component} from 'react';

import Header from '~/components/Header';
import api from '~/services/api';
import RepositoryItem from '~/pages/Repositories/RepositoryItem';

import {View, FlatList, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="book" size={20} color={tintColor} />
    ),
  };

  state = {
    data: [],
    loading: true,
    refreshing: false,
  };

  buscaRepositorios = async () => {
    this.setState({refreshing: true});
    const username = await AsyncStorage.getItem('@GitHuber:username');
    const {data} = await api.get(`/users/${username}/repos`);

    this.setState({data, loading: false, refreshing: false});
  };

  renderItem = ({item}) => {
    return <RepositoryItem repository={item} />;
  };

  listaRepositorios = () => {
    const {data, refreshing} = this.state;

    return (
      <FlatList
        style={styles.lista}
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderItem}
        onRefresh={this.buscaRepositorios}
        refreshing={refreshing}
      />
    );
  };

  async componentDidMount() {
    await this.buscaRepositorios();
  }

  render() {
    return (
      <View>
        <Header title="Repositorios" />
        {this.state.loading ? (
          <ActivityIndicator size="large" />
        ) : (
          this.listaRepositorios()
        )}
      </View>
    );
  }
}
