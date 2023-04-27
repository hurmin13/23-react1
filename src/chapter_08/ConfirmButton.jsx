import React, {useState} from "react";

function ConfrimButton(props){
    cost [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfrim = () =>{
        setIsConfirmed((prevIsConfirmed)=>!prevIsConfirmed);
    };

    return(
        <button onClick={handleConfrim} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfrimButton;