import React from 'react';

import {View, ActivityIndicator} from 'react-native';

import styles from './style';

const CarregamentoInicial = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#000" />
  </View>
);

export default CarregamentoInicial;
