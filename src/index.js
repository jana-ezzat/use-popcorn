import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';

// import StarRating from "./StarRating";
// import './Challenge';
// import Expander from "./Challenge";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} by us</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( 
  <React.StrictMode>
    <App />

    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating defaultRating={3} />
    <Test />  */}
    {/* <Expander /> */}
    
  </React.StrictMode>
);
