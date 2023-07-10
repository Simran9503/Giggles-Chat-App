import { Box } from "@mui/material"
import Navbar from "./Navbar"
import Search from './Search'
import Chats from './Chats'
const Slidebar = () => {
  return (
    <div className="sidebar">
      <Navbar/>
      <Search/>
      <Chats/>
    </div>

  )
}
export default Slidebar