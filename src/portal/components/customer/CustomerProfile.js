import React, { useState } from "react";
import { MdPerson, MdLocationOn } from "react-icons/md";
import { VscLocation } from "react-icons/vsc";
import { AiFillEdit } from "react-icons/ai";
import {
  validate,
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
} from "../../../shared/utils/validators";
import Input from "../../components/shared/Input";
import InnerHeadingFrame from "../shared/InnerHeadingFrame";
import { ObjIsEmpty } from "../../../shared/utils/functions";
import "./CustomerProfile.css";

const CustomerProfile = () => {
  const [editProfile, setEditProfile] = useState(true);

  const [profileError, setProfileError] = useState({
    nameErr: "",
    phoneErr: "",
    countryErr: "",
    cityErr: "",
    addressErr: "",
    address1Err: "",
    emptyFieldErr: "",
  });
  const [profileInput, setProfileInput] = useState({
    username: "mughalfrazk",
    email: "mughalfrazk@gmail.com",
    name: "Faraz",
    phone: "03234114779",
    city: "Lahore",
    address: "Township",
    address1: "Johar Town",
  });
  const [updatePassword, setUpdatePassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const updateProfile = () => {
    setEditProfile((prevMode) => !prevMode);
    setProfileError({
      nameErr: "",
      phoneErr: "",
      countryErr: "",
      cityErr: "",
      addressErr: "",
      address1Err: "",
      emptyFieldErr: "",
    });
  };

  const setStateHandler = (e) => {
    if (e.target.id == "name") {
      if (!validate(e.target.value, [VALIDATOR_REQUIRE()])) {
        setProfileError({
          ...profileError,
          nameErr: "Name is required!",
        });
      } else {
        setProfileError({ ...profileError, nameErr: "" });
      }
      setProfileInput({ ...profileInput, name: e.target.value });
    }

    if (e.target.id == "phone") {
      if (!validate(e.target.value, [VALIDATOR_REQUIRE()])) {
        setProfileError({
          ...profileError,
          phoneErr: "Phone number is required!",
        });
      } else {
        setProfileError({ ...profileError, phoneErr: "" });
      }
      setProfileInput({ ...profileInput, phone: e.target.value });
    }

    if (e.target.id == "city") {
      if (!validate(e.target.value, [VALIDATOR_REQUIRE()])) {
        setProfileError({
          ...profileError,
          cityErr: "City name is required!",
        });
      } else {
        setProfileError({ ...profileError, cityErr: "" });
      }
      setProfileInput({ ...profileInput, city: e.target.value });
    }

    if (e.target.id == "address") {
      if (!validate(e.target.value, [VALIDATOR_REQUIRE()])) {
        setProfileError({
          ...profileError,
          addressErr: "Permanent Adrress is required!",
        });
      } else {
        setProfileError({ ...profileError, addressErr: "" });
      }
      setProfileInput({ ...profileInput, address: e.target.value });
    }

    if (e.target.id == "address1") {
      if (!validate(e.target.value, [VALIDATOR_REQUIRE()])) {
        setProfileError({
          ...profileError,
          address1Err: "Temporary Adrress is required!",
        });
      } else {
        setProfileError({ ...profileError, address1Err: "" });
      }
      setProfileInput({ ...profileInput, address1: e.target.value });
    }
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!ObjIsEmpty(profileInput)) {
      setProfileError({
        ...profileError,
        emptyFieldErr: "All fields are required!",
      });
      return;
    }
    console.log(profileInput);
  };

  return (
    <InnerHeadingFrame
      heading="Profile"
      icon={<MdPerson className="mt-2" size={40} />}
    >
      <div className="row">
        <div className="col-md-4 main-profile pr-md-0">
          <div className="card-wrapper shadow">
            <div className="profile-left-section">
              <div className="profile-image-section">
                <img
                  className="profile-image"
                  src="https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg"
                  alt="profile-image"
                  width="100%"
                />
                <div className="profile-image-icon">
                  <AiFillEdit size={20} />
                </div>
              </div>
              <div className="">
                <input
                  className={`h4 profile-name mt-2 ${
                    !editProfile ? "active" : "inactive"
                  }`}
                  id="name"
                  value={profileInput.name}
                  onChange={setStateHandler}
                />
                {profileError.nameErr && (
                  <p className="text-danger px-4">{profileError.nameErr}</p>
                )}
                <p className="">mughalfrazk@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="card-wrapper shadow">
            <div className="collapse" id="updatePasswordCollapse">
              <div className="update-password">
                <div className="col-md-12 px-4">
                  <div className="mt-2">
                    <Input
                      label="Old Password"
                      type="password"
                      value={updatePassword.oldPassword}
                      onChange={(e) =>
                        setUpdatePassword({
                          ...updatePassword,
                          oldPassword: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mt-2">
                    <Input
                      label="New Password"
                      type="password"
                      value={updatePassword.newPassword}
                      onChange={(e) =>
                        setUpdatePassword({
                          ...updatePassword,
                          newPassword: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mt-2">
                    <Input
                      label="Confirm Password"
                      type="password"
                      value={updatePassword.confirmPassword}
                      onChange={(e) =>
                        setUpdatePassword({
                          ...updatePassword,
                          confirmPassword: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mt-2">
                    <button className="btn btn-primary">Update Password</button>
                  </div>
                  <p className="text-white m-0">...</p>
                </div>
              </div>
            </div>
            <button
              className="btn w-100 py-0 font-weight-bold m-0 text-info"
              type="button"
              data-toggle="collapse"
              data-target="#updatePasswordCollapse"
              aria-expanded="false"
              aria-controls="updatePasswordCollapse"
            >
              Change Password
            </button>
          </div>
        </div>
        <div className="col-md-8 main-information ">
          <div className="card-wrapper shadow">
            {profileError.emptyFieldErr && (
              <p className="valid-error text-danger px-4">
                {profileError.emptyFieldErr}
              </p>
            )}
            <div className="d-flex justify-content-end align-items-center pb-3">
              <div>
                {editProfile ? (
                  <button
                    type="button"
                    class="edit-btn"
                    onClick={updateProfile}
                  >
                    Edit Profile
                    <AiFillEdit size={15} className="ml-2" />
                  </button>
                ) : (
                  <button onClick={HandleSubmit} className="edit-btn">
                    Save
                  </button>
                )}
                &nbsp; &nbsp;
                {!editProfile && (
                  <button onClick={updateProfile} className="cancel-btn">
                    Cancel
                  </button>
                )}
              </div>
            </div>

            <div className="px-4">
              <Input
                label="Username"
                type="text"
                id="phone"
                value={profileInput.username}
                onChange={setStateHandler}
                readOnly
              />
              <Input
                label="Phone Number"
                type="text"
                id="phone"
                value={profileInput.phone}
                readOnly={editProfile}
                onChange={setStateHandler}
                error={profileError.phoneErr}
              />
              <Input
                label="City"
                type="text"
                id="city"
                value={profileInput.city}
                readOnly={editProfile}
                onChange={setStateHandler}
                error={profileError.cityErr}
              />
              <Input
                element="textarea"
                label="Primary Address"
                type="text"
                id="address"
                value={profileInput.address}
                readOnly={editProfile}
                onChange={setStateHandler}
                error={profileError.addressErr}
              />
              <Input
                element="textarea"
                label="Secondary Address"
                type="text"
                id="address1"
                value={profileInput.address1}
                readOnly={editProfile}
                onChange={setStateHandler}
                error={profileError.address1Err}
              />
            </div>
          </div>
        </div>
      </div>
    </InnerHeadingFrame>
  );
};

export default CustomerProfile;
