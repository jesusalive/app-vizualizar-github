import React, {Component} from 'react';

import Header from '~/components/Header';
import api from '~/services/api';
import OrganizationItem from '~/pages/Organizations/OrganizationItem';

import {View, FlatList, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class Organizations extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="institution" color={tintColor} size={20} />
    ),
  };

  state = {
    data: [],
    loading: true,
    refreshing: false,
  };

  buscaOrganizacoes = async () => {
    this.setState({refreshing: true});
    const username = await AsyncStorage.getItem('@GitHuber:username');
    const {data} = await api.get(`/users/${username}/orgs`);

    this.setState({data, loading: false, refreshing: false});
  };

  renderItem = ({item}) => {
    return <OrganizationItem organization={item} />;
  };

  listaOrganizacoes = () => {
    const {data, refreshing} = this.state;

    return (
      <FlatList
        style={styles.lista}
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderItem}
        onRefresh={this.buscaOrganizacoes}
        refreshing={refreshing}
      />
    );
  };

  async componentDidMount() {
    await this.buscaOrganizacoes();
  }

  render() {
    return (
      <View>
        <Header title="Organizações" />
        {this.state.loading ? (
          <ActivityIndicator size="large" />
        ) : (
          this.listaOrganizacoes()
        )}
      </View>
    );
  }
}
