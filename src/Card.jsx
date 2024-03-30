import React from "react";
import Logo2 from "./school-bus (1).png"


const Card = (props) => {

    return(

        <div className="bg-white w-5/6 rounded-md p-4 max-w-screen-sm shadow-lg">

            <div className="flex mb-1">

                <img className = "h-20 self-center" src = {Logo2}/>
                <h1 className="self-center pl-4">Bus no. {props.BusNumber}</h1>

            </div>

            <pre className="text-wrap mt-4">{props.Location}</pre>
            
        </div>


    );

}

export default Card;
