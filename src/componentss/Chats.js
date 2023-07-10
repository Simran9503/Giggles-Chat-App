import Image from '../images/Image.jpeg'
const Chats = () => {
  return (
    <div className="chats">
    <div className="userChat">
        <img src={Image} alt='img'/>
        <div className="userChatInfo">
            <span>Simran</span>
            <p>Hello</p>
        </div>
    </div>
    <div className="userChat">
        <img src={Image} alt='img'/>
        <div className="userChatInfo">
            <span>Simran</span>
            <p>Hello</p>
        </div>
    </div>
    <div className="userChat">
        <img src={Image} alt='img'/>
        <div className="userChatInfo">
            <span>Simran</span>
            <p>Hello</p>
        </div>
    </div>
    <div className="userChat">
        <img src={Image} alt='img'/>
        <div className="userChatInfo">
            <span>Simran</span>
            <p>Hello</p>
        </div>
    </div>
    </div>
  )
}
export default Chats