import React from "react"
import { useHistory } from 'react-router-dom'
import { ChatEngine } from "react-chat-engine"
import { auth } from "firebase"


const Chats = () =>{
    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    Unli Chat
                </div>
                <div className="logout-tab">
                    Logout
                </div>
            </div>
            <ChatEngine
                height="calc(100vh - 66px)"
                projectId="
                fa792996-3bf3-422c-be9f-a03b86d07b60"
            />
        </div>
    )
}

export default Chats;