import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  chatHead: {
    height: Dimensions.get('window').height * 0.12,
    // height: 80,
    width: '100%',
    backgroundColor: '#E9446A',
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  chatHeadText: {
    fontSize: 25,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
    marginTop: 20
  },
  chatContainer: {
    height: Dimensions.get('window').height * 0.7,
    alignItems: 'center',
    width: '100%'
  },
  msgContainer: {
    paddingTop: 20,
    paddingBottom: 10,
    width: '100%',
    zIndex: 2,
    backgroundColor: '#ffffff'
  },
  botChatboxHead: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  userChatboxHead: {
    color: '#484848',
    fontSize: 15,
    fontWeight: 'bold'
  },
  botChatText: {
    color: '#fcfcfc'
  },
  userChatText: {
    color: '#353535'
  },
  botImgContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'column',
    bottom: 20
  },
  botMsgContainer: {
    flexDirection: 'row',
    paddingLeft: 10
  },
  botMsgWrapper: {
    marginBottom: 15,
    justifyContent: 'flex-end'
  },
  botMsgTime: {
    marginTop: 10,
    color: '#353535',
    marginLeft: 10
  },
  botMsg: {
    maxWidth: '70%',
    backgroundColor: '#E9446A',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 7,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    padding: 15,
    alignSelf: 'flex-start',
    marginLeft: 10,
    zIndex: 1
  },
  userMsg: {
    alignSelf: 'flex-end',
    maxWidth: '70%',
    backgroundColor: '#e6e6e6',
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    padding: 15,
    marginBottom: 15,
    marginRight: 10,
    zIndex: 1
  },
  inputBoxContainer: {
    height: Dimensions.get('window').height * 0.1,
    backgroundColor: '#ffffff',
    marginTop: 15,
    width: '80%',
    elevation: 8,
    padding: 5,
    borderRadius: 30,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40
  },
  chatboxTextInput: {
    fontSize: 15,
    width: '80%'
  },
  botImage: {
    width: 36,
    height: 36,
    borderRadius: 18
  },
  sendImage: {
    borderRadius: 25,
    padding: 2,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fb8c8e4f'
  },
  sendImg: {
    width: 25,
    height: 25
  }
});

export default styles;
