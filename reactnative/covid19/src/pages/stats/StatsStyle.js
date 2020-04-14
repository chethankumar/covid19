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
    marginTop: 200,
    marginRight: 20,
    marginLeft: 20
  },
  title: {
    color: '#484848',
    fontSize: 40,
    textAlign: 'left',
    marginLeft: 0,
    fontFamily: 'Lato-Bold'
  },
  textDesc: {
    color: '#FFFFFF',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5
  },
  country: {
    color: '#484848',
    fontSize: 30,
    fontFamily: 'Lato-Bold',
    marginTop: 20
  },
  statContainer: {
    margin: 20,
    flexDirection: 'column'
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  confirmed: {
    flexDirection: 'column',
    padding: 10,
    margin: 4,
    backgroundColor: 'yellow',
    width: '44%',
    height: 160,
    borderRadius: 10,
    justifyContent: 'center'
  },
  active: {
    flexDirection: 'column',
    padding: 10,
    margin: 4,
    backgroundColor: 'orange',
    width: '44%',
    height: 160,
    borderRadius: 10,
    justifyContent: 'center'
  },
  fatal: {
    flexDirection: 'column',
    padding: 10,
    margin: 4,
    backgroundColor: 'red',
    width: '44%',
    height: 160,
    borderRadius: 10,
    justifyContent: 'center'
  },
  recovered: {
    flexDirection: 'column',
    padding: 10,
    margin: 4,
    backgroundColor: 'green',
    width: '44%',
    height: 160,
    borderRadius: 10,
    justifyContent: 'center'
  },
  statTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 24
  },
  statNumber: {
    fontFamily: 'Lato-Bold',
    fontSize: 31,
    marginTop: 31
  }
});

export default styles;
