import React from "react"
import "./style.css"

const GrayImg = (props) => {
  return (
    <React.Fragment>
    <img className="gray-img" src={props.img_url}></img>
    </React.Fragment>
  )
}

export default GrayImg