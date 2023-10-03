import "./Form.css";
import { useEffect, useState } from "react";

import React from "react";

function Form(props) {
  const { addMember } = props;

  const [memberList, setMemberList] = useState({
    username: "",
    email: "",
    position: "",
  });

  const handleChange = (event) => {
    setMemberList({ ...memberList, [event.target.name]: event.target.value });
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    addMember(memberList);
  };

  return (
    <>
      <form onSubmit={HandleSubmit}>
        <div className="textInputs">
          <label htmlFor="username">
            Username:
            <input
              id="username"
              type="text"
              name="username"
              value={memberList.username}
              onChange={(event) => handleChange(event)}
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              id="email"
              type="email"
              name="email"
              value={memberList.email}
              onChange={(event) => handleChange(event)}
            />
          </label>
        </div>
        <div className="radioInputs">
          <p>Position</p>
          <input
            type="radio"
            name="position"
            id="frontend"
            value={memberList.position}
            // checked={memberList.position === "frontend"}
            onChange={handleChange}
          />
          <label htmlFor="frontend">Frontend Engineer</label>
          <input
            type="radio"
            name="position"
            id="backend"
            value={memberList.position}
            // checked={memberList.position === "backend"}
            onChange={handleChange}
          />
          <label htmlFor="backend">Backend Engineer</label>
          <input
            type="radio"
            name="position"
            id="designer"
            value={memberList.position}
            // checked={memberList.position === "designer"}
            onChange={handleChange}
          />
          <label htmlFor="designer">Graphic Designer</label>

          <div className="button">
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
      {memberList.isim !== "" && <p>Yazdığın isim {memberList.username}.</p>}
      {memberList.email !== "" && <p>Yazdığın email {memberList.email}.</p>}
      {memberList.rol !== "" && <p>Yazdığın rol {memberList.position}.</p>}
    </>
  );
}

export default Form;
