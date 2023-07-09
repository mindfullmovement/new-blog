import React, { useState } from "react";
import * as Yup from "yup";

import styles from "./style.module.css";
import { Form, Formik } from "formik";
import FormikControl, { Row, Col } from "../../../../../common/Formik";

const ResetForm = () => {
  const initialValues = {
    email: "ruudjuf@gmail.com",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("required"),
  });
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
              <FormikControl
                control="input"
                type="email"
                label="email"
                name="email"
              />
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default ResetForm;
