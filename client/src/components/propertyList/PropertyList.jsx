import "./propertyList.css";
import { useEffect } from "react";
import useFetch from "../../hooks/usefetch";
const PropertyList = () => {
  const {data, loading, error, reFetch,dataLoaded} = useFetch("http://localhost:8800/api/hotels/countByType");


  useEffect(() => {
    if (!dataLoaded && !loading && !error) {
      reFetch();
    }
  }, [dataLoaded, loading, error, reFetch]);

  const images = [
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/334709566.jpg?k=88728a2e1b1cea6197d47a071739a9514334ad583a2304887d2dc8468a65dfb8&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
  ];
 console.log(data)
  return (
    <div className="pList">
      {loading ? "Loading..." : (
        <>
          {data && images.map((img, i) => (
            <div className="pListItem" key={i}>
              <img
                src={img}
                alt=""
                className="pListImg"
              />
              <div className="pListTitles">
                <h1>{data[i]?.type}</h1>
                <h2>{data[i]?.count} {data[i]?.type}  </h2>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};


export default PropertyList;
