import React from "react";
import logo from "./menu-bar.png"

const Header = () => {

    return(

        <div className="bg-white flex sticky top-0">

            <h1 className="grow self-center p-3 font-semibold">NIST BUSES</h1>
            <img className = "h-16 self-center p-3 hover:bg-slate-300" src = {logo}/>

        </div>


    );

}


export default Header;