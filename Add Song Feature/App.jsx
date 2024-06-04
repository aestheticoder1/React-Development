import React, { useState } from 'react';
import Card from './components/Card';
import Navbar from "./components/Navbar";

function App() {

  const data = [
    { artist: "Raftaar", song: "Aage Chal", added: false, image: "https://plus.unsplash.com/premium_photo-1671659205007-2a34bda065de?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" },
    { artist: "Kr$na", song: "Untitled", added: false, image: "https://images.unsplash.com/photo-1716184047641-bd7c469853c7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D" },
    { artist: "J-trix", song: "Zindagi", added: false, image: "https://images.unsplash.com/photo-1716417511759-dd9c0f353ef9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D" },
    { artist: "Young Stunners", song: "Afsanay", added: false, image: "https://images.unsplash.com/photo-1715041348269-2341a5b3256c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D" },
  ]

  const [realData, setRealData] = useState(data);

  const handleClick = (index) => {
    setRealData((prev) => {
      return prev.map((val, idx) => {
        if (idx === index) return { ...val, added: !val.added };

        return val;
      })
    })

  }

  return (
    <div className='w-full h-screen'>
      <Navbar data={realData} />
      <div className='px-20 py-10 flex flex-wrap gap-14'>
        {realData.map((item, index) => {
          return <Card key={index} data={item} index={index} handleClick={handleClick} />
        })}
      </div>
    </div>
  )



















  // const data = [
  //   {name:"Nihal", prof :"Coder" ,image:"https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym95c3xlbnwwfHwwfHx8MA%3D%3D", friends:false},
  //   {name:"Rohit", prof :"Mistry" ,image:"https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJveXN8ZW58MHx8MHx8fDA%3D", friends:false},
  //   {name:"Nikhil", prof :"Web Developer" ,image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJveXN8ZW58MHx8MHx8fDA%3D", friends:false},
  //   {name:"Jitender", prof :"App Developer" ,image:"https://images.unsplash.com/photo-1620228922597-cca58f177310?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJveXN8ZW58MHx8MHx8fDA%3D", friends:false},
  // ]

  // const [realdata,setRealData] = useState(data);
  // STATE JAHA BNTI H WAHIN MODIFY HO SKTI H
  // PROPS ME DIRECT STATE KO NHI BHEJ SKTE

  // const handleFriendsButton = (index)=>{
  //   setRealData((prev)=>{
  //     return prev.map((val,idx)=>{
  //       if(idx==index){
  //         return {...val, friends:!val.friends}
  //       }
  //       return val;
  //     })
  //   })
  // }

  // return(
  //   <div className='bg-white h-screen w-screen flex items-center justify-center gap-4'>
  //     {realdata.map((val,idx)=>(
  //       <Card key={idx} index={idx} values={val} handleClick = {handleFriendsButton}/>
  //     ))}
  //   </div>

  // )
  // const [score, setScore] = useState({ name: 'Nihal', banned: false });

  // const data = ["Nihal","Rawat","12212039"]

  // const [val,setVal] = useState([1,2,3,4,5,6]);
  // return (
  // <div>
  //   {data.map((val,idx)=>(
  //     <div key={idx} className='w-fit p-3 m-3 bg-zinc-400 rounded-sm'>
  //       {val}
  //     </div>
  //   ))}
  // </div>


  // <div>
  //   <Card/>
  // </div>

  // <div className='p-4'>
  //   Name : {score.name}
  //   <br />
  //   Banned : {score.banned.toString()}
  //   <br />
  //   {/* <button onClick={() => setScore({ ...score, banned: !score.banned })} className={`${score.banned ? "bg-blue-500" : "bg-red-600"} py-0.5 px-2 mt-2 rounded-lg text-white`}>Change</button> */}
  //   <button onClick={() => setScore({ ...score, gender : "male" })} className={`${score.banned ? "bg-blue-500" : "bg-red-600"} py-0.5 px-2 mt-2 rounded-lg text-white`}>Change</button>
  // </div>

  // <div className='p-4'>
  //   {val.map((item,idx)=>(
  //     <div key={idx} className='w-fit p-3 m-3 bg-blue-400 text-white rounded-sm'>
  //       {item}
  //     </div>
  //   ))}


  {/* REMOVAL IN ARRAY  */ }
  {/* <button onClick={()=>setVal(()=>{
        return val.filter((item,idx)=> idx!=val.length-1)
      })} className='px-2 py-1 m-3 text-xs text-white rounded-md bg-black'>
        Click
      </button> */}



  {/* ADDITION IN ARRAY  */ }
  // <button onClick={()=>setVal([...val,val[val.length-1]+1])} 
  //  className='px-2 py-1 m-3 text-xs text-white rounded-md bg-black'>
  // Click
  // </button>


  // </div>
}

export default App;