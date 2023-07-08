import { useEffect, useState } from "react";
import "./dropdown.css";

export default function Dropdown({handleDropdownChange,teamsList}) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Choose Team");
  function handleBlur(e) {
    console.log(e);
  } 

  useEffect(() => {
    setIsSelected('Choose Team')
  }, [teamsList])
  

  function handleChange (e) {
    setIsSelected(e.target.textContent);
    setIsActive(!isActive);
    handleDropdownChange(e.target.getAttribute("value"))
  }
  return (
    <div>
      <div className="dropdown">
        <div
          onClick={(e) => {
            setIsActive(!isActive);
          }}
          className="dropdown-btn"
        >
          {selected}
          <span
            className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"}
          />
        </div>
        <div
          className="dropdown-content"
          style={{ display: isActive ? "block" : "none" }}
        >
          {teamsList?.filter(team=>team.key==='GARUD')[0].players.length < 4 &&<div
            onClick={(e) => handleChange(e)}
            className="item"
            value={'GARUD'}
          >
            GARUD
          </div>}
          {teamsList?.filter(team=>team.key==='BLACKCATS')[0].players.length < 4 &&<div
            className="item"
            onClick={(e) => handleChange(e)}
            value={'BLACKCATS'}
          >
            BlackCats
          </div>}
          {teamsList?.filter(team=>team.key==='FORCEONE')[0].players.length < 4 &&<div
            className="item"
            onClick={(e) => handleChange(e)}
            value={'FORCEONE'}

          >
            ForceOne
          </div>}
          {teamsList?.filter(team=>team.key==='MARCOS')[0].players.length < 4 &&<div
            className="item"
            onClick={(e) => handleChange(e)}
            value={'MARCOS'}

          >
            MARCOS
          </div>}
          {teamsList?.filter(team=>team.key==='SPECIALFRONTIER')[0].players.length < 4 &&<div
            className="item"
            onClick={(e) => handleChange(e)}
            value={'SPECIALFRONTIER'}

          >
            SpecialFrontier
          </div>}
          <div
            className="item"
            onClick={(e) => handleChange(e)}
            value={'COBRA'}

          >
            Cobra
          </div>
        </div>
      </div>
    </div>
  );
}
