
import { useEffect, useState } from "react";




export const NewsFeed = ({ handleLogout }) => {
  // array destructuring
  const [img, setImg] = useState([]);

  useEffect(() => {
    let handleFetch = async () => {
      try{
      let response = await fetch("https://picsum.photos/v2/list?page=3&limit=10");
      if (response.status !== 200) {
        throw new Error("Oops!");
      }
      // json parsing
      let data = await response.json()
      console.log("response", data);
      images(data);
      } catch (error) {
        console.error("error:", error);
      }}
      handleFetch();
  }, []);

  const images = (data) => {
    let tempArr = [];

    data.forEach((event) => {
      let item = {
        ...event
      };
      tempArr.push(item);
    })
    setImg(tempArr);
  }
 
  return (
    <div className="NewsFeed">

        {img.map((item, index) => {
            return(
              
              
              
              <div className="container" key={index}>
            <p>{item.author}</p>
            <img
            key={index}
            src={item.download_url}
            alt="picsum lorem"
            width={item.width = 360}
            height={item.height = 360}
            />
            </div>

            )
        })}
    </div>
  );
};