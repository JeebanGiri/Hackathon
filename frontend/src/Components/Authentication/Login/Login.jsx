import React, { useContext, useState } from "react";
import "../Login/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

export default function Login() {
  // const { user } = ChatState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please Fill all Fields",
        isClosable: true,
        duration: 5000,
        status: "warning",
        position: "top-right",
      });
      setLoading(false);
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/user/authUser",
        {
          email,
          password,
        },
        config
      );

      toast({
        title: "User successfully logged in",
        isClosable: true,
        duration: 5000,
        status: "success",
        position: "top-right",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/signup");

      setLoading(false);
    } catch (error) {
      console.log(error.message);
      toast({
        title: "Error Occured",
        description: error.response.data,
        isClosable: true,
        duration: 5000,
        status: "error",
        position: "top-right",
      });
      setLoading(false);
      return;
    }
  };

  return (
    <div>
      <section className="login-components-container">
        <div className="login-wrapper-container">
          <form action="post" onSubmit={(e) => submitHandler(e)}>
            <div className="login-authentication-form-container">
              <div className="organized-components">
                <div className="heading-authentication-paragraph-container">
                  <div className="login-heading-paragraph-container">
                    <h1>Welcome Fellow UrbanEco Planner!</h1>
                  </div>
                  <hr style={{ color: "#d1d8e6", opacity: 0.5 }} />
                </div>

                <div className="option-input-submit-button-signup-container">
                  <div className="option">
                    <p>Or, sign-in with with your email</p>
                  </div>
                  <div className="input-button-feild">
                    <div className="input-group">
                      <div className="InputFields_ZX">
                        <input
                          type="email"
                          className="input__UYa2t"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="input-icon">
                          <img
                            src="https://www.locofy.ai/assets/email.svg"
                            alt=""
                            placeholder="Email"
                          />
                        </div>
                      </div>

                      <div className="InputFields_ZX">
                        <input
                          type="text"
                          className="input__UYa2t"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="input-icon">
                          <img
                            src="https://www.locofy.ai/assets/password.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="signinButton">
                      <button  onClick={submitHandler}>Sign in</button>
                      <p>
                        Don't have an account?{" "}
                        <Link
                          to="/signup"
                          style={{
                            fontFamily: "'Roboto', sans-serif",
                            textDecoration: "none",
                            fontWeight: 900,
                            color: "#457eff",
                          }}
                        >
                          Sign up
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
