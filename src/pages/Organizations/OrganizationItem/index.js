import React from 'react';

import {View, Text, Image} from 'react-native';

import styles from './styles';

const OrganizationItem = ({organization}) => (
  <View style={styles.container}>
    <Image style={styles.img} source={{uri: organization.avatar_url}} />
    <Text style={styles.titulo}>{organization.login}</Text>
  </View>
);

export default OrganizationItem;
