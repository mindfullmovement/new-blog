import React from "react";
import * as Yup from "yup";
import FormikControl, { Row, Col } from "../../../../common/Formik";

import styles from "./style.module.css";
import { Form } from "formik";

const CreateForm = () => {
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
    quill: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("required"),
    quill: Yup.string().required("required"),
    description: Yup.string().required("required"),
    selectOption: Yup.string().required("required"),
    radioOption: Yup.string().required("required"),
    checkboxOption: Yup.array().required("required"),
  });
  const onSubmit = (values) => console.log("submit", { values });
  return (
    <Form
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <Row>
        <Col min={"250px"} max={"900px"} flex={1}>
          <FormikControl
            control="input"
            type="email"
            label="email"
            name="email"
          />
        </Col>
        <Col min={"250px"} max={"900px"} flex={1}>
          <FormikControl
            control="input"
            type="email"
            label="email"
            name="email"
          />
        </Col>
        <Col min={"300px"} max={"850px"} flex={3}>
          <FormikControl
            control="input"
            type="email"
            label="email"
            name="email"
          />
        </Col>
      </Row>
      {/* <FormikControl
              control="textarea"
              label="description"
              name="description"
            />
            <FormikControl
              control="select"
              options={dropdownOptions}
              label="selectOption"
              name="selectOption"
            />
            <FormikControl
              control="radio"
              options={radioOptions}
              label="radio options"
              name="radioOption"
            />
            <FormikControl
              control="checkbox"
              options={checkboxOptions}
              label="checkbox options"
              name="checkboxOption"
            />
            <FormikControl control="quill" name="quill" /> */}
      <button type="submit">submit</button>
    </Form>
  );
};

export default CreateForm;
