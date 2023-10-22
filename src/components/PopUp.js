import React from "react"
export const PopUp = () =>{
    return <div className = "overlay">
    <p>Sushi</p>
    <div className = "headings">
        <h2>Total Amount </h2>
        <h3>35.62</h3>
        </div>
        <div className = "btn">
            <button type = "button"> close</button>
            <button type = "button"> Open</button>
        </div>
    </div>
    }