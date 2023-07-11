
import cam from '../images/cam (1).png'
import Add from '../images/Add.png'
import More from '../images/more (1).png'
import Messages from './Messages'
import Input from "./Input"
import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
   <div className="chat">
    <div className="chatInfo">
      <span>{data.user?.displayName}</span>
      <div className="chatIcons">
        <img src={cam} alt=''/>
        <img src={Add} alt=''/>
        <img src={More} alt=''/>
      </div>
    
    </div>
    <Messages/>
    <Input/>
   </div>

  )
}
export default Chat