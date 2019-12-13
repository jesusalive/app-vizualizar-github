import React, {Component} from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import api from '~/services/api';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import {colors} from '~/Styles';

export default class Welcome extends Component {
  state = {
    username: '',
    loading: false,
    error: false,
  };

  ifExists = async username => {
    const user = api.get(`/users/${username}`);

    return user;
  };

  saveStorage = username =>
    AsyncStorage.setItem('@GitHuber:username', username);

  signIn = async () => {
    const {username} = this.state;
    const {navigation} = this.props;

    this.setState({loading: true});

    try {
      await this.ifExists(username);
      this.saveStorage(username);
      navigation.navigate('User');
    } catch (err) {
      this.setState({error: true});
      this.setState({loading: false});
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.secondary} />
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.texto}>
          Para continuar precisamos que você digite seu usuario do GitHub
        </Text>

        {this.state.error == true && (
          <Text style={styles.error}>Usuario Inexistente</Text>
        )}

        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={true}
          placeholder="Digite seu usuario"
          onChangeText={text => this.setState({username: text})}
        />

        <TouchableOpacity style={styles.button} onPress={() => this.signIn()}>
          {this.state.loading ? (
            <ActivityIndicator size="small" color={colors.white} />
          ) : (
            <Text style={styles.textButton}>Prosseguir</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}
