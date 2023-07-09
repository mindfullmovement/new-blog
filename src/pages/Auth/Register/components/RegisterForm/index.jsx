import React, { useState } from "react";
import styles from "./style.module.css";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormControl, { Row, Col } from "../../../../../common/Formik";
import FormikControl from "../../../../../common/Formik";

const initialValues = {
  username: "ruud",
  password: "123",
  firstName: "Ruud",
  lastName: "Juffermans",
  email: "user@blog.com",
  postalCode: "1234",
  address: "123 Main St",
  city: "Anytown",
  state: "California",
  country: "United States",
};

const RegisterForm = () => {
  const [formData, setFormData] = useState(initialValues);
  const {
    username,
    password,
    firstName,
    lastName,
    email,
    address,
    city,
    postalCode,
    country,
  } = formData;

  const validationSchema = Yup.object({
    email: Yup.string().required("required"),
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const onSubmit = (values) => console.log("submit", { values });
  return (
    <Formik
      enableReinitialize
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <Row>
            <Col min={"250px"} max={"900px"} flex={1}>
              <FormControl
                control="input"
                type="text"
                label="first name"
                name="firstname"
                onChange={handleFormChange}
              ></FormControl>
            </Col>
            <Col min={"250px"} max={"900px"} flex={1}>
              <FormControl
                control="input"
                type="text"
                label="last name"
                name="lastname"
                onChange={handleFormChange}
              ></FormControl>
            </Col>
          </Row>
          <Row>
            <Col min={"250px"} max={"900px"} flex={1}>
              <FormControl
                control="input"
                type="email"
                label="email"
                name="email"
                onChange={handleFormChange}
              ></FormControl>
            </Col>
          </Row>
          <Row>
            <Col min={"250px"} max={"900px"} flex={1}>
              <FormControl
                label={"address"}
                name="address"
                type="text"
                id="address"
                value={address}
                placeholder="address"
                onChange={handleFormChange}
                required
              />
            </Col>

            <Col min={"250px"} max={"900px"} flex={1}>
              <FormControl
                label={"city"}
                name="city"
                type="text"
                id="city"
                value={city}
                placeholder="city"
                onChange={handleFormChange}
                required
              />
            </Col>
            <Col min={"250px"} max={"900px"} flex={1}>
              <FormControl
                label={"country"}
                name="country"
                type="text"
                id="country"
                value={country}
                placeholder="country"
                onChange={handleFormChange}
                required
              />
            </Col>
            <Col min={"250px"} max={"900px"} flex={1}>
              <FormControl
                label={"postal Code"}
                name="postalCode"
                type="text"
                id="postalCode"
                value={postalCode}
                placeholder="postalCode"
                onChange={handleFormChange}
                required
              />
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
