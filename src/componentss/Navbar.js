import Image from '../images/Image.jpeg'
const Navbar = () => {
  return (
    <div className="navbar">
        <span className="logo">Giggles </span>
        <div className="user">
            <img src={Image} alt=''/>
            <span>Simran</span>
            <button>logout</button>
        </div>
    </div>
  )
}
export default Navbar