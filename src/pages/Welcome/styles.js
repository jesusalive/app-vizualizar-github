import {StyleSheet} from 'react-native';
import {colors, metrics} from '~/Styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: metrics.baseRadius * 2,
  },

  title: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },

  error: {
    color: colors.danger,
    textAlign: 'center',
    marginTop: metrics.baseMargin,
  },

  texto: {
    color: colors.white,
    fontSize: 14,
    textAlign: 'center',
    marginTop: metrics.baseMargin,
  },

  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    marginTop: metrics.baseMargin * 2,
    paddingHorizontal: metrics.basePadding,
  },

  button: {
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius * 2,
    marginTop: metrics.baseMargin * 2,
    padding: metrics.basePadding,
    height: 44,
    justifyContent: 'center',
  },

  textButton: {
    color: colors.white,
    textAlign: 'center',
  },
});

export default styles;
