import React, { useState } from "react";
import SearchPanel from "./components/search-panel/search-panel";
import Album from "./components/album/album";
import Data from "./services/data";
import MySlider from "./components/slider/slider";
import "./App.css";
import { type } from "@testing-library/user-event/dist/type";

function App() {
  const [term, setTerm] = useState("");
  const [index, setIndex] = useState(0);
  const [dark, setDark] = useState(null)
  const [display, setDisplay] = useState('none')

  const onSearch = (term) => {
    setTerm(term);
  };

  const findIndex = (index) => {
    setIndex(index)
  }

  const onBack = (index) => {
    setIndex(-1)
  }

  const searchImg = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  const openSettings = () => {
    display == 'none'? setDisplay('block') : setDisplay('none');
  }

  return (
    <div className={dark ? "app_wrapper dark" : "app_wrapper"}>
      <div className="menu_wrapper">
        <div className="btn_container">
          <button className="prev_btn"
          style={{'display' : index > -1 ? 'block' : 'none'}}
            onClick={onBack}>
              <img src={require("./resourses/arrow.png")} alt="prev" />
              Voltar
            </button>
        </div>
        <SearchPanel onSearch={onSearch}/>
        <div className="btn_container">
          <button 
          className="theme_btn"
          onClick={openSettings}>
            <img src={require("./resourses/settings.png")} alt="Change theme" />
          </button>
        <div style={{'display': display}} className="theme_modal">
          <p>Modo Dark</p>
          <input 
              type="checkbox" 
              id="highload1"
              name="highload1"
              className="setting_btn"
              onClick={() => {
                setDark(!dark)
                }
              }
              />
              <label for="highload1" data-onlabel="Ativada" data-offlabel="Desativado" class="lb1"></label>
        </div>
        </div>
      </div>
      {index > -1 ? <MySlider data={Data()} ind={index}/> : <Album data={() => searchImg(Data(), term)} findIndex={findIndex}/>}
    </div>
  );
}

export default App;
