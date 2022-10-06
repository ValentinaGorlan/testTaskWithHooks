import React, { useEffect, useState } from "react";
import Spinner from "../spinner/spinner";
import './album.css'

const Album = ({data, findIndex}) => {
    const [pictureList, setPictureList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setPictureList(data);
        setLoading(false)
    }, [data])


    const imgListItems = (arr) => {
        const elements = arr.map((item,i) => {
          return (
            <li
              key={i}
              className="img__item"
              onClick={()=> findIndex(i)}
            >
              <img
                src={require(`../../resourses/${item.imgSrc}`)}
                alt="picture"
                style={{'objFit':'cover'}}
              />
            </li>
          );
        });
    
      const spinner = loading ? <Spinner/> : null;
      const content = !loading ? elements: null;


        return <ul className="imgs__flex">
            {spinner}
            {content}
            </ul>;
      };

      

    return (
        <div className="album-wrapper">
            {
                imgListItems(pictureList)
            }
        </div>
    )
}

export default Album;