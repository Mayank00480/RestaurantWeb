import React from "react"
export const PopUp = (props) =>{
    const closeHandler = () =>{
          props.closeHandler();
    }
    return <div className = "overlay">
    <p>Sushi</p>
    <div className = "headings">
        <h2>Total Amount </h2>
        <h3>35.62</h3>
        </div>
        <div className = "btn">
            <button type = "button" onClick = {closeHandler}> close</button>
            <button type = "button"> Open</button>
        </div>
    </div>
    }