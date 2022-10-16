import GrayImg from "../../shared/gray_img"
import Desciption_with_link from "../../shared/descipton-with-link"

export default function planet(props) {
  return (
    <div>
      <h4>{props.name}</h4>
      <p>{props.text}</p>
      <GrayImg img_url={props.img_url} />
      <Desciption_with_link DescriptionLink={props.DescriptionLink}/>
    </div>
  )
}