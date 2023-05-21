import { StyleSheet } from 'react-native';

const home_style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  settingsButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  settingsIcon: {
    width: 8,
    height: 2,
    backgroundColor: 'black',
    marginHorizontal: 2,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  tutorialButton: {
    alignSelf: 'center',
    marginBottom: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'lightgray',
    borderRadius: 8,
  },
  tutorialButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 64,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: 'orange',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  navBarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarItemText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default home_style;
