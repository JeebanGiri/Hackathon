import React from "react";
import "./Choosing.css";
import avatar from "../../images/446003-200.png";
import admin from "../../images/admin.jpg";
import { useNavigate } from "react-router-dom";

export default function ChoosingPage() {

    const navigate = useNavigate()

    const  redirectToAdmin  = () => {
        navigate("/Login")
    }

    const redirectToUser = () => {
        navigate("/Signup")
    }

  return (
    <section className="choosingContainer">
      <div className="main-contanier" onClick={redirectToUser}>
        <img src={avatar} alt="" />
        User
      </div>

      <div className="main-contanier" onClick={redirectToAdmin} style={{ paddingTop: '40px' ,gap:'10px' }}>
        <img src={admin} alt="" />
        Admin
      </div>
    </section>
  );
}
