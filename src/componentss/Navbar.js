
import { signOut } from 'firebase/auth'
import { auth } from '../config/Firebase3'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className="navbar">
        <span className="logo">Giggles </span>
        <div className="user">
            <img src={currentUser.photoURL} alt=''/>
            <span>{currentUser.displayName}</span>
            <button onClick={()=>{signOut(auth)}}>logout</button>
        </div>
    </div>
  )
}
export default Navbar