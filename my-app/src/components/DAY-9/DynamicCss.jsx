import { useState } from "react";
import './DynamicCss.css'


const DynamicCSS =() =>{
    const [isUserActive, setIsUserActive]= useState(true);
    const Styles= isUserActive? "active" : "inactive";
    // console.log(Styles, "styles");
    function handleonClick(){
        setIsUserActive(!isUserActive)
    }
    return (
        <div>
            <button onClick={handleonClick} className={Styles}>{isUserActive? "Active" : "Inactive"}</button>
        </div>
    )

}

export default DynamicCSS;