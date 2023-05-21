import { StyleSheet } from 'react-native';

const profile_styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 20,
  },
  details: {
    fontSize: 16,
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f4511e',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default profile_styles;
