import { db } from './config/Firebase';
import Firebase from "./config/Firebase"
import "./App.css";
import {doc, setDoc, Timestamp} from 'firebase/firestore'
import { useState } from 'react';


function App() {
  const[name, setName] = useState("")
const[email, setEmail] = useState("")

const handleSubmit = ()=>{
  fetchData();
}

  const fetchData=async()=>{
    await setDoc(doc(db,"credentials"), {
      Name: {name},
      Email:{email}
    })

    // const ref= doc(db, "cities", "india");
    // await setDoc(ref, {
    //   capital:"delhi"
    // }, {merge:true})

//     const data = {
//     age:"22",
//     college:"NIT hamirpur",
//     branch:"mechanical",
//     dateExample: Timestamp.fromDate(new Date()),  // dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
//     love_partner:{
//       naam:"digvijay",
//     location:{
//       mine:"mumbai",
//     his:"bilaspur"},
//     branchOfLover:"computer science"
//     },
//     his_details:[20, "cute", "handsome"],
//   }
//   await setDoc(doc(db, "important", "credentials"), data)
//   }
// fetchData();


// class City {
//   constructor (name, state, country ) {
//       this.name = name;
//       this.state = state;
//       this.country = country;
//   }
//   toString() {
//       return this.name + ', ' + this.state + ', ' + this.country;
//   }
// }

// // Firestore data converter
// const cityConverter = {
//   toFirestore: (city) => {
//       return {
//           name: city.name,
//           state: city.state,
//           country: city.country
//           };
//   },
//   fromFirestore: (snapshot, options) => {
//       const data = snapshot.data(options);
//       return new City(data.name, data.state, data.country);
//   }
 };

  return (
    <div className="App">
     <input type='email' placeholder='email' onChange={(e)=>{setEmail(e.target.value)}}/>
     <input type='text' placeholder='name' onChange={(e)=>{setName(e.target.value)}}/>
     <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default App;
