import React from 'react';
import Card from "./Card";

function Cards({removeItem,data}) {
    return(
        <div className=' max-h-96 w-[100%] p-4 flex flex-wrap gap-5 overflow-auto justify-center'>
            {data.map((item,idx)=>{
                return (
                    <Card removeItem={removeItem} key={idx} index={idx} item={item}/>
                )
            })}
        </div>
    )
    
}

export default Cards;
