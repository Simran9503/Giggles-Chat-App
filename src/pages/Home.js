import { Box, Stack } from "@mui/material"
import Slidebar from '../componentss/Slidebar'
import Chat from '../componentss/Chat'

const Home = () => {
  return (
    <div className="home">
      <div className="container">
<Slidebar/>
<Chat/>
      </div>

    </div>
//    <Box 
//     justifyContent="center"
//       alignItems="center"
//       flexDirection='row'
//       display="flex"
//       sx={{
//         backgroundColor: "#d199d4",
//         height: "100vh",
//         width: "100vw",
      
//       }}
//    >
// <Box sx={{
//     border:'white',
//     height:'490px',
//     width:'900px',
//     backgroundColor:'#c900dd',
//      borderRadius:'20px'
// }}>
//   <Stack direction='row' gap='230px' sx={{

//   }}>
//   <Slidebar/>
//  <Chat/>
//   </Stack>

// </Box>
//    </Box>
  )
}
export default Home