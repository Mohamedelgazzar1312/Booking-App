import useFetch from "../../hooks/usefetch";
import "./featured.css";

const Featured = () => {
 const {data,loading,error,reFetch}=useFetch("http://localhost:8800/api/hotels/countByCity?cities=cairo,Hurghada,Alex")
console.log(data)
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://www.hotelscombined.com/himg/76/b7/f9/leonardo-1128388-Exterior_Night_Shot_O-145902.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Cairo</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src= "https://content.r9cdn.net/rimg/himg/e2/a8/e1/ice-84631-72552209_3XL-846105.jpg"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Hurghada</h1>
          <h2>{data[1]}  properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/0a/11/98/alexandria.jpg?w=1200&h=-1&s=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Alex</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
