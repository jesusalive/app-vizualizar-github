import {StyleSheet} from 'react-native';

import {colors, metrics} from '~/Styles';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  icon: {
    color: colors.darker,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.light,
    borderBottomWidth: 0.9,
    paddingTop: getStatusBarHeight(),
    height: 54 + getStatusBarHeight(),
    paddingHorizontal: metrics.basePadding,
  },
  title: {
    color: colors.darker,
    fontWeight: 'bold',
  },
});

export default styles;
