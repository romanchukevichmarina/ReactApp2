import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "../../AuthProvider";

export const initialValues = {
  name: "",
  email: "",
  password: "",
  number: +7,
};

const SignUp = () => {
  const { login } = useContext(AuthContext);
  const [values, setValues] = useState(initialValues);
  const nav = useNavigate();
  var Airtable = require("airtable");
  var base = new Airtable({
    apiKey:
      "patmq07nXDKSmxPGa.bf193391d158de5f392c7b54e0e7f5a259a4cd29326d8ebe144611a15e7adac3",
  }).base("appFf2I31ajPGdyGi");

  const HandleOnClick = async (e) => {
    e.preventDefault();
    base("users").create(
      [
        {
          fields: {
            name: values.name,
            password: values.password,
            email: values.email,
            number: values.number,
          },
        },
      ],
      function (err, records) {
        if (err) {
          console.log("err");
          return;
        }
      }
    );
    const user = { name: values.name, password: values.password, }; 
    login(user, () => nav("/index", {replace: true}));
  };
  const handleChange = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <section className="vh-100 bg-image">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Create an account
                  </h2>

                  <form>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        value={values.name}
                        name="name"
                        onChange={handleChange}
                        id="form3Example1cg"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example1cg">
                        Your Name
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        value={values.email}
                        name="email"
                        onChange={handleChange}
                        id="form3Example3cg"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example3cg">
                        Your Email
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="tel"
                        value={values.number}
                        name="number"
                        onChange={handleChange}
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example3cg">
                        Your number
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        value={values.password}
                        name="password"
                        onChange={handleChange}
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
                        Register
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?{" "}
                      <a href="/login" className="fw-bold text-body">
                        <u>Login here</u>
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignUp;
