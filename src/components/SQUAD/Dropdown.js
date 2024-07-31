import { useEffect, useState } from "react";
import "./dropdown.css";
import { teamDropdownValue } from "../../constant";



export default function Dropdown({handleDropdownChange,teamsList}) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Choose Team");


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

          {
            teamDropdownValue.map((teamData, index) => {
              console.log({teamData},teamsList?.filter(team => team.key === teamData.key))
              return (
                <>
                  {teamsList?.filter(team => team.key === teamData.key)[0].players.length < 5 && <div
                    className="item"
                    onClick={(e) => handleChange(e)}
                    value={teamData.key}
                  >
                    {teamData.teamName}
                  </div>}
                </>
              )
            })
          }



        
          
          
        </div>
      </div>
    </div>
  );
}
