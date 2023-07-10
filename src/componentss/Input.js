import Image from "../images/img.png"
import Attach from "../images/attach.png"
const Input = () => {
  return (
  <div className="input">
    <input type="text" placeholder="type something..."/>
    <div className="send">
        <img src={Attach} alt=''/>
        <input type='file' style={{display:'none'}} id='file'/>
        <label htmlFor="file">
            <img src={Image} alt=''/>
        </label>
        <button>Send</button>
    </div>
  </div>
  )
}
export default Input