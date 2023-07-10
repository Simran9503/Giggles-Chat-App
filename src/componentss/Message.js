import pic from "../images/pic.png"
const Message = () => {
  return (
    <div className="message owner">
        <div className="messageInfo">
            <img src={pic} alt=''/>
            <span>just now</span>
        </div>
        <div className="messageContent">
            <p>Hello</p>
            <img src={pic} alt=''/>
        </div>
    </div>
  )
}
export default Message