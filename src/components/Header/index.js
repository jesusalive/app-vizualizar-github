import React, {Component} from 'react';

import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import {withNavigation} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class Header extends Component {
  signOut = async () => {
    await AsyncStorage.clear();
    const {navigation} = this.props;

    navigation.navigate('Welcome');
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <View />
        <Text style={styles.title}>{this.props.title}</Text>
        <TouchableOpacity onPress={this.signOut}>
          <Icon name="sign-out" size={16} />
        </TouchableOpacity>
      </View>
    );
  }
}
export default withNavigation(Header);
