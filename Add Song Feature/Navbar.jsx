import React from "react";
import styles from "./styles.module.css"

function Navbar({data}) {
    return(
        <div className=" px-20 py-4 flex items-center justify-between">
            {/* HEADING  */}
            <h1 className={`font-bold underline text-2xl ${styles.a}`}>ORANGE</h1>

            {/* Favourites button  */}
            <div className="flex items-center gap-2 w-fit px-3 py-1 text-xs text-white rounded-md bg-orange-700">
                <h2 className="font-semibold text-sm  ">Favourites </h2>
                <h2 className="bg-red-800 w-4 mt-0.5 text-center rounded-full">{(data.filter((item)=>item.added)).length}</h2>
            </div>
            
        </div>
    )
}

export default Navbar;