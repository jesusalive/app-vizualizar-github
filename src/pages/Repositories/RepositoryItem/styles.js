import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    padding: 20,
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 3,
  },
  linha: {
    justifyContent: 'center',
    margin: 10,
    alignContent: 'space-between',
    flexDirection: 'row',
  },
  icon: {
    color: '#333',
  },
  titulo: {
    marginHorizontal: 10,
  },
  language: {
    fontSize: 10,
    color: '#333',
  },
});

export default styles;
