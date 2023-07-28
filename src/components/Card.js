import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRwA3o3u0AnZPx1aM-w_e9lzvXy6ENwl-Zxw&usqp=CAU"
          alt=""
        />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>Title</h3>
        </div>
        <div className="card-body">
          <p>
            In the project directory, you can run: ### `npm start` Runs the app
            in the development mode.\
          </p>
        </div>
        <div className="btn">
          <button>View more</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
