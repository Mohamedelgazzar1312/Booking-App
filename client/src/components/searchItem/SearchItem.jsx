// import "./searchItem.css";
// import {Link} from "react-router-dom"
// import useFetch from "../../hooks/usefetch";
// import { useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";

    
//     const SearchItem = ({ item }) => {
//       const location = useLocation();
//       const [destination, setDestination] = useState(location.state.destination);
//       console.log(destination)

//       const { data, loading, error, reFetch, dataLoaded } = useFetch(
//         `/hotels/${destination}`
//       );
//     useEffect(() => {
  
//       reFetch();
//     }, [destination]);
  

// console.log(data)

//   return (
//     <div className="searchItem">
//       <img
//         src={item.photos[0]}
//         alt=""
//         className="siImg"
//       />
//       <div className="siDesc">
//         <h1 className="siTitle">{item.name}</h1>
//         <span className="siDistance">{item.distance}m from center</span>
//         <span className="siTaxiOp">Free airport taxi</span>
//         <span className="siSubtitle">
//           Studio Apartment with Air conditioning
//         </span>
//         <span className="siFeatures">
//          {item.desc}
//           {/* Entire studio • 1 bathroom • 21m² 1 full bed */}
//         </span>
//         <span className="siCancelOp">Free cancellation </span>
//         <span className="siCancelOpSubtitle">
//           You can cancel later, so lock in this great price today!
//         </span>
//       </div>
//       <div className="siDetails">
//        {item.rating}&& <div className="siRating">
//           <span>Excellent</span>
//           <button>{item.rating}</button>
//         </div>
//         <div className="siDetailTexts">
//           <span className="siPrice">${item.cheapestPrice}</span>
//           <span className="siTaxOp">Includes taxes and fees</span>
//           <Link to={`/hotels/${item._id}`} >
         
//           <button className="siCheckButton">See availability</button>
//           </Link> 
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchItem;


import "./searchItem.css";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/usefetch";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchItem = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  console.log(location.state);

  console.log(destination);

  const { data, loading, error, reFetch, dataLoaded } = useFetch(
    `/hotels/${destination}`
  );

  useEffect(() => {
   
  }, [destination]);

  console.log(data);

  return (<>
    {data.map((hotel) => (
        <div className="searchItem">
        <div key={hotel._id}>
          <img src={hotel.photos[0]} alt="" className="siImg" />
          <div className="siDesc">
            <h1 className="siTitle">{hotel.name}</h1>
            <span className="siDistance">{hotel.distance}m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
              Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
              {hotel.desc}
              {/* Entire studio • 1 bathroom • 21m² 1 full bed */}
            </span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">
              You can cancel later, so lock in this great price today!
            </span>
          </div>
          <div className="siDetails">
            {hotel.rating && (
              <div className="siRating">
                <span>Excellent</span>
                <button>{hotel.rating}</button>
              </div>
            )}
            <div className="siDetailTexts">
              <span className="siPrice">${hotel.cheapestPrice}</span>
              <span className="siTaxOp">Includes taxes and fees</span>
              <Link to={`/hotels/${hotel._id}`}>
                <button className="siCheckButton">See availability</button>
              </Link>
            </div>
          </div>
        </div>
    </div>
      ))}
      </>
  );
};
   
export default SearchItem;
