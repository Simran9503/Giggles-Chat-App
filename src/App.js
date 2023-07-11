import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Firebase from "./config/Firebase3"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { AuthContext } from "./context/AuthContext";
import './style.scss'
import { useContext } from "react";


function App() {
  
const {currentUser} =useContext(AuthContext);
// console.log(currentUser);
const ProtectedRoute = ({children})=>{
  if(!currentUser){
    return <Navigate to ='/login'/>
  }
  return children
}
  return (
    <Router>
      <Routes>
        <Route path='/'>
        <Route path='signup' element={<Signup/>}/>
    <Route path='login' element={<Login/>}/>
    <Route index   element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        </Route>

      </Routes>
    </Router>


   
  );
}

export default App;




























// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./components/Home";
// import Login from "./components/Login/Login";
// import Signup from "./components/Signup/Signup";

// import { auth } from "./config/Firebase2";

// import "./App.css";

// function App() {
//   const [userName, setUserName] = useState("");

//   useEffect(() => {
//     auth.onAuthStateChanged((user) => {
//       if (user) {
//         setUserName(user.displayName);
//       } else setUserName("");
//     });
//   }, []);

//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/" element={<Home name={userName} />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
