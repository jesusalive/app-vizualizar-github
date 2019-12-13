import React from 'react';

import {View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import style from './styles';
import {colors} from '~/Styles';

const RepositoryItem = ({repository}) => (
  <View style={style.container}>
    <View style={style.linha}>
      <View>
        <Icon name="book" size={20} color={colors.dark} style={style.icon} />
      </View>
      <View>
        <Text style={style.titulo}>{repository.name}</Text>
      </View>
      <View />
    </View>
    {repository.language != null && (
      <Text style={style.language}>Feito com {repository.language}</Text>
    )}
  </View>
);

export default RepositoryItem;
