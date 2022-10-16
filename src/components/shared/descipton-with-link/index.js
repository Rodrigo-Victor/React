import React from "react";

const Desciption_with_link = (props) => {
  return(
    <React.Fragment>
      <br/>
      <a href={props.DescriptionLink}>Clique para mais informações</a>
    </React.Fragment>
  )
}

export default Desciption_with_link