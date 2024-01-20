import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import Axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const [pic, setPic] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const toast = useToast();
  const [verify, setVerify] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("this is being clicked");
    setLoading(true);
    if (!name || !email || !password ) {
      toast({
        title: "Please Fill all the fields",
        duration: 5000,
        isClosable: true,
        status: "warning",
        position: "top-right",
      });
      setLoading(false);
      return;
    }
    console.log(name, email, password);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await Axios.post(
        "http://localhost:5000/api/user/registerUser",
        {
          name,
          email,
          password,
          pic,
        },
        config
      );
      console.log(data);
      toast({
        title: "Verification send to the mail",
        status: "success",
        isClosable: true,
        duration: 5000,
        position: "top-right",
      });
      // localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.log("Error during registration:", error.message);
      toast({
        description: error.message,
        title: "Error Occured",
        isClosable: true,
        duration: 5000,
        position: "top-right",
      });
      setLoading(false);
    }
  };

  return (
    <section className="authentication-signup-section">
      <div className="box-form-image-container">
        <form action="post" className="main-form"  onSubmit={(e) => submitHandler(e)}>
          <div className="signup-authentication-form-container">
            <div className="multiple-organize-components">
              <div className="heading-paragraph">
                <p className="join-blendy">Join the Blendy Community!</p>
                <p className="quote-pargraph">
                  Committed to excellence and driven to make a difference, I'm
                  ready to contribute my skills to your team.
                </p>
              </div>

              <div className="authentication-button-group">
                <p className="conutine-paragraph">Continue with</p>
                <hr
                  className="line"
                  style={{ color: "#d1d8e6", opacity: 0.5 }}
                />
              </div>

              <div className="input-button-paragraph-container">
                <p className="sign-up-with-mail">Or, sign-up with your mail</p>
                <div className="input-buttons-containers">
                  <div className="input_ZXU">
                    <input
                      type="text"
                      className="input_YUT"
                      placeholder="Full name"
                      onChange={(e) => setName(e.target.value)}
                    />
                    <div className="icon-input">
                      <img src="" alt="" />
                    </div>
                  </div>

                  <div className="input_ZXU">
                    <input
                      type="text"
                      className="input_YUT"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="icon-input">
                      <img
                        src="https://www.locofy.ai/assets/email.svg"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="input_ZXU">
                    <input
                      type="text"
                      className="input_YUT"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="icon-input">
                      <img
                        src="https://www.locofy.ai/assets/password.svg"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="button-container">
                    <button
                      className="signup-button"
                      isLoading={loading}
                      onClick={submitHandler}
                    >
                      Sign up
                    </button>
                  </div>
                </div>

                <div className="already-signin-Terms-and-condition">
                  <p className="adlready-have">
                    Already have an account?{" "}
                    <span>
                      {" "}
                      <NavLink
                        style={{ textDecoration: "none", color: "#457EFF" }}
                        to={"/Login"}
                      >
                        Sign in
                      </NavLink>
                    </span>
                  </p>
                  <p className="terms-and-condition">
                    By proceeding, you are agreeing to the{" "}
                    <span>Terms & Conditions</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
} 
