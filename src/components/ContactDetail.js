import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user1.jpg";
import female from "../images/female.jpg"

const ContactDetail = (props) => {
  const { name, email ,gender} = props.location.state.contact;
  console.log(gender);
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
        {
          gender=== "Male" && <img src={user} value={gender}/> || gender==="Female" && <img src={female} value={gender}/>
        }
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
