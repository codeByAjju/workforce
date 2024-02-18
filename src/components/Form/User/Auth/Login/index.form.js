import { ErrorMessage, Field, Form, Formik } from "formik";
import validation from "./validation";
import routesMap from "../../../../../routeControl/userRoutMap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
function LoginForm({ onSubmit }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const showSweetAlert = () => {
    setIsAlertVisible(true);
  };
  return (
    <>
      <Formik
        initialValues={{ ...initialValues }}
        validationSchema={validation()}
        onSubmit={onSubmit}
      >
        {(props) => {
          return (
            <Form>
              <section style={{ backgroundColor: "#e9ebef" }}>
                <div className="container py-3 h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                      <div
                        className="card shadow-2-strong"
                        style={{ borderRadius: "1rem" }}
                      >
                        <div className="card-body p-5 text-center">
                          <h3 className="mb-5">Log In</h3>

                          <div className="form-outline mb-4">
                            <Field
                              type="email"
                              name="email"
                              id="email"
                              placeholder="Email"
                              className="form-control form-control-lg"
                            />
                          </div>

                          <div className="form-outline mb-4 text-start">
                            <div className="input-group">
                              <Field
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder="Password"
                                className="form-control form-control-lg"
                              />
                              <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={togglePasswordVisibility}
                              >
                                <i
                                  className={`fa ${
                                    showPassword ? "fa-eye-slash" : "fa-eye"
                                  }`}
                                ></i>
                              </button>
                            </div>
                          </div>

                          <div className="form-check d-flex justify-content-start mb-4">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="form1Example3"
                              style={{ cursor: "pointer" }}
                            />
                            <label className="form-check-label" for="form1Example3">
                              Stay logged in
                            </label>
                          </div>

                          <button
                            className="btn btn-primary btn-lg btn-block"
                            type="submit"
                          >
                            <span>Login</span>
                            <span>
                              <i className="mx-3 fa fa-long-arrow-right"></i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default LoginForm;
