import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#FFFFFF',
    flex: 1
  },
  skewContainer: {
    position: 'absolute',
    left: -150,
    top: -250,
    width: 400,
    height: 400,
    borderRadius: 400 / 2,
    backgroundColor: '#FF9E7B',
    opacity: 0.9,
    zIndex: 1
  },
  skewContainerTwo: {
    backgroundColor: '#E9446A',
    position: 'absolute',
    right: -150,
    top: -180,
    width: 400,
    height: 400,
    borderRadius: 400 / 2
    // zIndex: 1,
  },
  textContainer: {
    zIndex: 2,
    marginTop: 200
  },
  title: {
    color: '#484848',
    fontSize: 40,
    textAlign: 'left',
    marginLeft: 20,
    fontFamily: 'Lato-Black'
  },
  subTitle: {
    color: '#484848',
    fontSize: 24,
    textAlign: 'left',
    marginLeft: 20,
    marginTop: 20,
    fontFamily: 'Lato-Regular'
  },
  subtext: {
    color: '#484848',
    fontSize: 18,
    textAlign: 'left',
    marginLeft: 20,
    marginTop: 20,
    fontWeight: '400',
    fontFamily: 'Lato-Regular'
  },
  textDesc: {
    color: '#FFFFFF',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5
  },
  btn: {
    backgroundColor: '#E9446A',
    width: '40%',
    height: 40,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40
  },
  btnText: {
    color: '#FFFFFF',
    fontFamily: 'Lato-Bold'
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10
  },
  prevContainer: {
    margin: 20
  },
  prevTitle: {
    marginTop: 20,
    fontSize: 27,
    fontFamily: 'Lato-Bold',
    color: '#484848'
  },
  icons: {
    width: 100,
    height: 100
  },
  prevIconContainer: {
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center'
  },
  prevIconText: {
    fontSize: 10,
    fontFamily: 'Lato-Regular'
  }
});

export default styles;
