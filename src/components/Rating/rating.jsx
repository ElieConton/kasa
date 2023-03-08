import { ReactComponent as Star } from "./star.svg";
import './rating.css'

function Rating(props) {
  const ratingNumber = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {ratingNumber.map((el) => {
        return (
            <Star
            fill={el <= props.ratings ? "#ff6060" : "#f7f7f7"}
            key={`star-${el}`}
            className="star"
          ></Star>
        );
      })}
    </div>
  );
}

export default Rating;

