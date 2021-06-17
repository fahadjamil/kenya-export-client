import React, { useState, useEffect, useContext } from "react";
import { ImUserTie } from "react-icons/im";
import InnerHeadingFrame from "../shared/InnerHeadingFrame";
import "./Employees.css";
import Input from "../../../portal/components/shared/Input";
import { AuthContext } from "../../../shared/context/auth-context";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import {
  validate,
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAX,
  VALIDATOR_MIN,
} from "../../../shared/utils/validators";
import { ObjIsEmpty } from "../../../shared/utils/functions";
const Employees = () => {
  const [api, setapi] = useState(null);
  const auth = useContext(AuthContext);
  const { sendRequest } = useHttpClient();
  const EmployeeApi = async () => {
    try {
      const response = await sendRequest(`user/user_list/employee`);
      console.log(response.data.users);
      setapi(response.data.users);
    } catch (error) {}
  };
  useEffect(() => {
    EmployeeApi();
    console.log(api);
  }, []);
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const [error, setError] = useState({
    nameerror: "",
    usernameerror: "",
    emailerror: "",
    passworderror: "",
    signuperror: "",
  });

  const radio = (e) => {
    setData({ ...data, role: e.target.value });
  };
  const changehandler = (e) => {
    console.log(e.target.id);
    console.log(e.target.value);
    if (e.target.id == "name") {
      if (!validate(e.target.value, [VALIDATOR_REQUIRE()])) {
        setError({ ...error, nameerror: "Name is required!" });
      } else {
        setError({ ...error, nameerror: "" });
      }
      setData({ ...data, name: e.target.value });
    }
    if (e.target.id == "username") {
      if (!validate(e.target.value, [VALIDATOR_REQUIRE()])) {
        setError({ ...error, usernameerror: "Name is required!" });
      } else {
        setError({ ...error, usernameerror: "" });
      }
      setData({ ...data, username: e.target.value });
    }
    if (e.target.id == "email") {
      if (!validate(e.target.value, [VALIDATOR_EMAIL()])) {
        setError({ ...error, emailerror: "Please enter correct email" });
      } else {
        setError({ ...error, emailerror: "" });
      }
      setData({ ...data, email: e.target.value });
    }
    if (e.target.id == "password") {
      if (!validate(e.target.value, [VALIDATOR_MINLENGTH(8)])) {
        setError({ ...error, passworderror: "Please enter correct email" });
      } else {
        setError({ ...error, passworderror: "" });
      }
      setData({ ...data, password: e.target.value });
    }
  };
  const submit = (e) => {
    e.preventDefault();
    if (!ObjIsEmpty(data)) {
      setError({ ...error, signuperror: "All fields are required...." });
    }
    signupapi();
    console.log(data);
  };
  const signupapi = async () => {
    await sendRequest("user/signup", "POST", data);
  };

  return (
    <InnerHeadingFrame
      heading="Employees"
      icon={<ImUserTie className="mt-3" size={45} />}
    >
      <div className="card-wrapper shadow ">
        <div className="d-flex justify-content-end mx-5">
          <button
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Add Employees
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Add Employee
                  </h5>
                </div>
                <div class="modal-body employee">
                  <h2>{error.signuperror}</h2>
                  <Input
                    label="Full Name"
                    type="text"
                    id="name"
                    error={error.nameerror}
                    value={data.name}
                    onChange={changehandler}
                  />

                  <Input
                    label="User Name"
                    type="text"
                    id="username"
                    error={error.usernameerror}
                    value={data.username}
                    onChange={changehandler}
                  />

                  <Input
                    label="Email"
                    type="email"
                    id="email"
                    error={error.emailerror}
                    value={data.email}
                    onChange={changehandler}
                  />

                  <Input
                    label="Password"
                    type="Password"
                    id="password"
                    error={error.passworderror}
                    value={data.password}
                    onChange={changehandler}
                  />

                  <div className="d-flex justify-content-around mt-4">
                    <input
                      type="radio"
                      checked={data.role === "admin"}
                      value="admin"
                      onChange={radio}
                    />
                    <label for="admin">Admin</label>

                    <input
                      type="radio"
                      checked={data.role === "employee"}
                      value="employee"
                      onChange={radio}
                    />
                    <label for="employee">Employee</label>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={submit}
                    class="btn btn-primary"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h4>Employee Detail:</h4>
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Full Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
              </tr>
            </thead>
            <tbody>
              {api?.map((user, index) => (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </InnerHeadingFrame>
  );
};
export default Employees;
