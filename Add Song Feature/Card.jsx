import React from 'react';

function Card({ data, index, handleClick }) {
  const { artist, song, added, image } = data;
  return (
    <div className='text-white flex gap-6 px-4 py-3 bg-gray-400 w-fit rounded-lg'>

      {/* IMAGE DIV  */}
      <div className='w-14 h-20 object-cover overflow-hidden'>
        <img src={image} alt="" />
      </div>

      {/* CONTENT DIV  */}

      <div>
        <h2 className='text-lg font-bold underline'>{song}</h2>
        <h3 className='text-sm mb-2 font-semibold'>{artist}</h3>

        <button onClick={()=>handleClick(index)} className={`text-xs font-semibold ${added ? "bg-cyan-600" : "bg-orange-700"} px-2 py-1 rounded-lg`}>{added == true ? "Added" : "Add to Favorites"}</button>
      </div>
    </div>
  )
  // const {name,prof,image,friends} = values;
  // return(
  //   <div className='bg-zinc-200 h-fit w-52 rounded-md overflow-hidden'>
  //     {/* IMAGE DIV */}
  //     <div className='h-36 w-full object-cover overflow-hidden  '>
  //       <img src={image} />
  //     </div>

  //     {/* CONTENT DIV */}
  //     <div className='w-full h-full px-2 py-2 overflow-hidden'>
  //       <h2 className='text-lg font-bold'>{name}</h2>
  //       <p className='text-xs'>{prof}</p>
  //       <button onClick={()=>handleClick(index)} className={`mt-3 text-xs text-white ${friends ? "bg-green-600":"bg-blue-600"} px-2 py-1 rounded-lg`}>{friends == false ? "Add Friend":"Friends"}</button>
  //     </div>

  //   </div>
  // )
  // return(
  //   <button className={`py-1 px-2 text-white font-semibold m-2 ${color}`}>{text}</button>
  // )
  //EVENT HANDLING
  // function dothis() {
  //   alert('Button is clicked');
  // }


  //   const data = [
  //       {instock:true, imgadd:"https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name:"Amazon Basics",desc:"Lorem ipsum cing elit. Lorem ipsum dolor sit amet consectetur. Hus perspiciatis eaque voluptas in. Eius placeat voluptatem rerum!"},
  //       {instock:false, imgadd:"https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFpbHklMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",name:"Daily Products",desc:"Lorem ipsum dolor sit amet consectetur andras. Lorem ipsum dolor sit amet consectet perspiciatis eaque voluptas in."},
  //       {instock:true, imgadd:"https://images.unsplash.com/photo-1611251135345-18c56206b863?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Table Tennis",desc:"Lor sit amet consectetur. Hus perspiciatis eaque voluptas in. Eius placea voluptas in. Eius placeat voluptatem kendaichi!"}
  //   ]

  //   return (
  //     <div className='w-full h-screen bg-zinc-400 flex justify-center items-center gap-8'>

  //       {data.map((val,idx)=>(
  //           <div key={idx} className='w-52 h-fit bg-zinc-100 rounded-md overflow-hidden shadow-sm'>
  //                {/* IMAGE DIV  */}
  //               <div className='w-full h-36 bg-zinc-400'>
  //                   <img className="h-full w-full object-cover" src={val.imgadd} alt="" />
  //               </div>

  //                {/* CONTENT DIV */}
  //               <div className='w-full px-3 py-4'>
  //                   <h2 className='font-bold'>{val.name}</h2>
  //                   <p className='text-xs mt-2'>{val.desc}</p>

  //                   <button onClick={dothis} className={`py-1 px-3 mt-3 ${val.instock? 'bg-blue-600':'bg-red-500'} text-xs rounded text-zinc-100`}>
  //                       {val.instock? "In stock" : "Out of stock"}
  //                   </button>
  //               </div>
  //           </div>
  //       ))}

  //     </div>
  //   )
}
export default Card;