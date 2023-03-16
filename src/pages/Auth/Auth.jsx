import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import {AuthContext} from "../../AuthProvider";
const initialValues = {
  name: "",
  password: "",
};

const Auth = () => {
  const { login } = useContext(AuthContext);
  const [values, setValues] = useState(initialValues);
  var Airtable = require("airtable");
  var base = new Airtable({
    apiKey:
      "patmq07nXDKSmxPGa.bf193391d158de5f392c7b54e0e7f5a259a4cd29326d8ebe144611a15e7adac3",
  }).base("appFf2I31ajPGdyGi");
  const navigate = useNavigate();
  const HandleChange = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const HandleOnClick = async (e) => {
    e.preventDefault();
    base("users")
      .select({
        filterByFormula: `AND({name} = "${values.name}", {password} = "${values.password}")`,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            const user = { name: values.name, password: values.password };
            login(user, () => navigate("/index", { replace: true }));
            console.log("Retrieved", record.get("name"));
            console.dir(record);
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
          }
        }
      );
  };
  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <div className="form-outline mb-4">
          <input
            type="text"
            value={values.name}
            name="name"
            onChange={HandleChange}
            id="form3Example1cg"
            className="form-control form-control-lg"
          />
          <label className="form-label" htmlFor="form3Example1cg">
            Your Name
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            value={values.password}
            name="password"
            onChange={HandleChange}
            id="form3Example4cg"
            className="form-control form-control-lg"
          />
          <label className="form-label" htmlFor="form3Example4cg">
            Password
          </label>
        </div>

        <div className="d-flex justify-content-center">
          <button
            onClick={HandleOnClick}
            className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
