import { Box, TextField, Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
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
          height: "320px",
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
            Login
          </Typography>
          
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
          

          <Button variant="outlined" sx={{
           backgroundColor: '#7e0099',
           color:'white',
           ":hover":{
            backgroundColor:'#2dbd34'
           },
           mt:'20px',
           width:'35vw'
          }}>Login</Button>
          <p>You don't have an account?  <Link to='/'>Signup</Link></p>

          
        </Stack>
      </Box>
    </Box>
  );
};
export default Login;
