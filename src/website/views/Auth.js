import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import SignInImage from "../../shared/assets/263.png";
import LoadingSpinner from "../../portal/components/shared/LoadingSpinner";
import ImgCardBg from "../../website/components/ImgCardBg";
import LogoImage from "../../shared/assets/logo.png";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import "./Auth.css";

const Auth = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [loginState, setLoginState] = useState(true);
  const [signupInput, setSignupInput] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "customer",
  });

  const loginFormHandler = () => {
    setLoginState((prevMode) => !prevMode);
    clearError();
  };

  const formSubmitHandler = async () => {
    clearError();

    try {
      if (loginState) {
        const response = await sendRequest("user/signin", "POST", {
          email: signupInput.email,
          password: signupInput.password,
        });
        auth.login(response.data);
        history.push("/dashboard");
      } else {
        await sendRequest("user/signup", "POST", signupInput);
        history.push(`/verify-email/signup/${signupInput.email}`);
      }
    } catch (err) {
      if (err?.response?.status === 401) {
        history.push(`/verify-email/login/${signupInput.email}`);
      }
    }
  };

  return (
    <ImgCardBg size="md">
      <div className="col-md-6 col-lg-6 left-box">
        <div className="text-center">
          <div className="col-md-12 log-img">
            <img src={LogoImage} className="auth-logo" />
          </div>
          <p className="font-weight-bold h5 mt-2 mb-3">
            {loginState ? "Welcome Back" : "Register Yourself"}
          </p>
          {loginState ? (
            <form className="form-fields px-2">
              <input
                type="text"
                placeholder="Username/Email"
                className="form-control"
                id="email"
                value={signupInput.email}
                onChange={(e) =>
                  setSignupInput({
                    ...signupInput,
                    email: e.target.value,
                  })
                }
              />
              <input
                type="Password"
                placeholder="Password"
                className="form-control mt-2"
                id="password"
                value={signupInput.password}
                onChange={(e) =>
                  setSignupInput({
                    ...signupInput,
                    password: e.target.value,
                  })
                }
              />

              <div className="form-checkbox">
                <p className="clear-password text-right">Forgot password?</p>
              </div>

              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={formSubmitHandler}
              >
                {isLoading ? (
                  <LoadingSpinner small color="white" />
                ) : (
                  <span className="auth-submit-txt">Login</span>
                )}
              </button>
            </form>
          ) : (
            <form className="form-fields px-2">
              <input
                type="text"
                placeholder="Full Name"
                id="name"
                className="form-control"
                value={signupInput.name}
                onChange={(e) =>
                  setSignupInput({
                    ...signupInput,
                    name: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="Username"
                id="username"
                className="form-control mt-2"
                value={signupInput.username}
                onChange={(e) =>
                  setSignupInput({
                    ...signupInput,
                    username: e.target.value,
                  })
                }
              />
              <input
                type="email"
                placeholder="Email Address"
                id="email"
                className="form-control mt-2"
                value={signupInput.email}
                onChange={(e) =>
                  setSignupInput({
                    ...signupInput,
                    email: e.target.value,
                  })
                }
              />
              <input
                type="Password"
                placeholder="Password"
                id="password"
                className="form-control mt-2"
                value={signupInput.password}
                onChange={(e) =>
                  setSignupInput({
                    ...signupInput,
                    password: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="Phone Number"
                id="phoneNumber"
                className="form-control mt-2"
                value={signupInput.phoneNumber}
                onChange={(e) =>
                  setSignupInput({
                    ...signupInput,
                    phoneNumber: e.target.value,
                  })
                }
              />
              <button
                type="button"
                className="btn btn-primary w-100 mt-2"
                onClick={formSubmitHandler}
              >
                {isLoading ? (
                  <LoadingSpinner small color="white" />
                ) : (
                  <span className="auth-submit-txt">Signup</span>
                )}
              </button>
            </form>
          )}

          {error && (
            <h6 className="text-danger pt-3">{error?.data?.message}</h6>
          )}
          <p className="pt-3">
            {loginState ? "Don't have an account?" : "Already hav an account?"}
            <b>
              <a
                className="btn p-0 text-primary font-weight-bold pb-1 pl-1"
                onClick={loginFormHandler}
              >
                {loginState ? "SIGN UP" : "LOG IN"}
              </a>
            </b>
          </p>
        </div>
      </div>
      <div className="col-md-6 col-lg-6  right-box">
        <img
          src={SignInImage}
          alt="Login Image"
          className={loginState ? `login-image` : `signup-image`}
        />
      </div>
    </ImgCardBg>
  );
};

export default Auth;
