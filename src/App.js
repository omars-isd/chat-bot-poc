import React, { useState } from 'react';
import './App.css';

import OcatChatbot from './chatbot/OcatChatbot'
import OcatChatbotTrigger from './chatbot/OcatChatbotTrigger'

function App() {
const [chatVisible, setChatVisible] = useState(true)

function toggleChatWindow() {
    setChatVisible(!chatVisible)
}


  return (
    <>
    { !chatVisible && <OcatChatbotTrigger onClick={toggleChatWindow} /> }
    { chatVisible && <div className="chat-container">
        <OcatChatbot onCloseClick={toggleChatWindow} />
    </div> }
    </>
  );
}

export default App;
