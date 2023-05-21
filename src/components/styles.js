import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //light orange background color
    backgroundColor: '#FFDAB9',
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 40,
    borderRadius: 20,
    backgroundColor: 'darkred',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
