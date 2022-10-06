import React, { useCallback, useEffect, useState } from "react";
import Spinner from "../spinner/spinner";
import "./slider.css";

const MySlider = ({ data, ind }) => {
  const [loading, setLoading] = useState(false);
  const [slides, setSlides] = useState(data);
  const [index, setIndex] = useState(ind)

  useEffect(() => {
    setLoading(false)
    setIndex(ind)
    setSlides(data);
  }, [ind])

  
  const showSlides = (n) => {

    if (n > slides.length - 1) {
      n = 0
      setIndex(n)
    }

    if (n < 0) {
      n = slides.length - 1
      setIndex(n)
    }
      return (
      <div className="slide_container">
        {loading ? <Spinner/> : null }
           <div key={n} className="slide">
              <img
              src={require(`../../resourses/${slides[n].imgSrc}`)}
              alt="picture"
            />
            </div>
            <div className="info">
              <h2>{slides[n].name}</h2>
              <p>{slides[n].description}</p>
            </div>
           
      </div>
      )    
  }

  useEffect(() => {
    showSlides(index)
  }, [index])

  return (
    <>
    <div className="slider_container">
      {showSlides(index)}
      </div>
      <div className="slider_btns">
        <button className="prev_btn" onClick={() => setIndex(index - 1)}>
          <img src={require("../../resourses/arrow.png")} alt="prev" />
          Anterior
        </button>
        <button className="next_btn" onClick={() => setIndex(index + 1)}>
          Próximo
          <img src={require("../../resourses/arrow.png")} alt="next" />
        </button>
      </div>
    </>
  );
};

export default MySlider;
