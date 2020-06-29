import React, { useState } from 'react';
import OcatChatbot from './OcatChatbot';

export default ({ onClick }) => {


return (
    <div className="chat-trigger">
        <img src="http://www.fillmurray.com/g/20/20" onClick={onClick} />
    </div>
)

}