import React, { useMemo } from 'react';
import ReactWebChat, { createDirectLine } from 'botframework-webchat';
import './OcatChatbot.css'

export default ({ onCloseClick }) => {
  const options = {
    avatarSize: 60,
    botAvatarInitials: 'OCAT',
    userAvatarInitials: 'OS',
    bubbleBackground: 'lightgray',
    bubbleFromUserBackground: '#2F5496',
    bubbleFromUserTextColor: 'White',
    bubbleBorderRadius: 20,
    bubbleFromUserBorderRadius: 20,
    hideUploadButton: true,
    hideSendBox: true,
    bubbleNubSize: 3,
    bubbleNubOffset: 'top',
    bubbleFromUserNubSize: 3,
    bubbleFromUserNubOffset: 'top',
    sendBoxButtonColor: '#2F5496', // defaults to subtle
  }

  const store = window.WebChat.createStore({}, ({ dispatch }) => next => action => {
    console.log(action.type)
    if (action.type === 'DIRECT_LINE/CONNECT_FULFILLED') {
      // dispatch({
      //   type: 'WEB_CHAT/SEND_EVENT',
      //   payload: {
      //     name: 'webchat/join',
      //     value: { language: window.navigator.language }
      //   }
      // });
    dispatch({
        type: 'WEB_CHAT/SEND_MESSAGE',
        payload: {
          text: "Hi, I'm looking for assistance"
        }
      });}

    return next(action);
  });

  const directLine = useMemo(() => createDirectLine({ token: 'CHAT_TOKEN_GOES_HERE',  }), []);
  
  return (
    <div className="chatbot-container">
      <div className="chat-header">
        <div>
          Chat with O-Bot
        </div>
        <a className="close-button" href="#" onClick={onCloseClick}>X</a>
      </div>
      <ReactWebChat  directLine={directLine} styleOptions={options} store={store} userID="shaikho" />
    </div>
  );
};