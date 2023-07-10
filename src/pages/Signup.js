import { Box, TextField, Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import gallary from '../images/gallery.webp'
const Signup = () => {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      sx={{
        backgroundColor: "#d199d4",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box
        justifyContent="center"
        display="flex"
        sx={{
          backgroundColor: "#fcf9fc",
          height: "450px",
          borderRadius: "30px",
          width: {
            xs: "70vw",
            sm: "60vw",
            md: "50vw",
            lg: "40vw",
          },
          ":hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Stack direction="column" alignItems="center">
          <Typography
            fontWeight="200px"
            fontFamily="cursive"
            fontSize="30px"
            color="#7e0099"
            sx={{
                mt:'10px',
                mb:'10px'
            }}
          >
            Giggles
          </Typography>
          <Typography
            fontWeight="100px"
            fontFamily="cursive"
            fontSize="20px"
            color="#7e0099"
          >
            Register
          </Typography>
          <TextField type="text"
            label="Display Name"
            size="small"
            InputProps={{
              height: "30px",
              width: "35vw",
            }}
            inputProps={{
              style: {
                height: "90%", // Ensure the input takes up the full height

                fontSize: "15px", // Adjust font size as needed,
                color: "#7e0099",
              },
            }}
            sx={{
              mt: "50px",
              //height: "20px",
              width: "35vw",
              border: "none",
              borderBottom: "#7e0099",
           
            }}
          />
          <TextField type="email"
            label="Email"
            size="small"
            InputProps={{
              height: "30px",
              width: "35vw",
            }}
            inputProps={{
              style: {
                height: "90%", // Ensure the input takes up the full height

                fontSize: "15px", // Adjust font size as needed,
                color: "#7e0099",
              },
            }}
            sx={{
              mt: "20px",
              //height: "20px",
              width: "35vw",
              border: "none",
              borderBottom: "#7e0099",
           
            }}
          />
          <TextField type="password"
            label="Password"
            size="small"
            InputProps={{
              height: "30px",
              width: "35vw",
            }}
            inputProps={{
              style: {
                height: "90%", // Ensure the input takes up the full height

                fontSize: "15px", // Adjust font size as needed,
                color: "#7e0099",
              },
            }}
            sx={{
              mt: "20px",
              //height: "20px",
              width: "35vw",
              border: "none",
              borderBottom: "#7e0099",
           
            }}
          />
          <input type="file" id='file' style={{
            marginTop:'20px',
            display:'none'
          }}/>
          <label htmlFor="file" style={{
            marginTop:'20px',
            display:'flex',
            alignItems:'center',
            gap:'10px',
            color:'#7e0099',
            cursor:'pointer'
          }}>
<img src={gallary} alt='gallary' style={{
    height:'30px',
    width:'30px'
}}/> 
<span>Add an avatar</span>

          </label>

          <Button variant="outlined" sx={{
           backgroundColor: '#7e0099',
           color:'white',
           ":hover":{
            backgroundColor:'#2dbd34'
           },
           mt:'20px',
           width:'35vw'
          }}>Signup</Button>
          <p>Already a user?  <Link to='/login'>Login</Link></p>

          
        </Stack>
      </Box>
    </Box>
  )
}
export default Signup