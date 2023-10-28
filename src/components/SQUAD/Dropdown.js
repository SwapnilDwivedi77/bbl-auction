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
          {teamsList?.filter(team=>team.key==='BULLET')[0].players.length < 5 &&<div
            onClick={(e) => handleChange(e)}
            className="item"
            value={'BULLET'}
          >
            BULLET
          </div>}
          {teamsList?.filter(team=>team.key==='CONTINENTAL')[0].players.length < 5 &&<div
            className="item"
            onClick={(e) => handleChange(e)}
            value={'CONTINENTAL'}
          >
            CONTINENTAL
          </div>}
          {teamsList?.filter(team=>team.key==='HIMALAYAN')[0].players.length < 5 &&<div
            className="item"
            onClick={(e) => handleChange(e)}
            value={'HIMALAYAN'}

          >
            HIMALAYAN
          </div>}
          {teamsList?.filter(team=>team.key==='HUNTER')[0].players.length < 5 &&<div
            className="item"
            onClick={(e) => handleChange(e)}
            value={'HUNTER'}

          >
            HUNTER
          </div>}
          {teamsList?.filter(team=>team.key==='INTERCEPTOR')[0].players.length < 5 &&<div
            className="item"
            onClick={(e) => handleChange(e)}
            value={'INTERCEPTOR'}

          >
            INTERCEPTOR
          </div>}
          <div
            className="item"
            onClick={(e) => handleChange(e)}
            value={'METEOR'}

          >
            Meteor
          </div>
        </div>
      </div>
    </div>
  );
}
