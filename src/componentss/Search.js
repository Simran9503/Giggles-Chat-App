import Image from '../images/Image.jpeg'
const Search = () => {
  return (
   <div className="search">
    <div className="searchForm">
        <input type="text" placeholder='find a user'/>
    </div>
    <div className="userChat">
        <img src={Image} alt='img'/>
        <div className="userChatInfo">
            <span>Simran</span>
        </div>
    </div>
   </div>
  )
}
export default Search