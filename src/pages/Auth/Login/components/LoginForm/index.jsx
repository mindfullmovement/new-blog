import React from "react";
import styles from "./style.module.css";
import * as Yup from "yup";
import FormikControl, { Row, Col } from "../../../../../common/Formik";
import { Form, Formik } from "formik";

const initialValues = {
  email: "user@blog.com",
  password: "123",
};

const validationSchema = Yup.object({
  email: Yup.string().required("required"),
  password: Yup.string().required("required"),
});

const onSubmit = (values) => console.log("submit", { values });

const LoginForm = () => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <Row>
            <Col min={"250px"} max={"900px"} flex={1}>
              <FormikControl
                control="input"
                type="email"
                label="email"
                name="email"
              />
            </Col>
          </Row>
          <Row>
            <Col min={"250px"} max={"900px"} flex={1}>
              <FormikControl
                control="input"
                type="password"
                label="password"
                name="password"
              />
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
