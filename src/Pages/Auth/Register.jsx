import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ButtonComp, FormikInput } from "../../components";
import { useDispatch } from "react-redux";
import { registerUser } from "../../features/asyncThunk";

const Register = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("First name is required"),
          lastName: Yup.string().required("Last name is required"),
          email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
          password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters")
            .matches(/[a-zA-Z]/, "Password can only contain Latin letters"),
        })}
        onSubmit={(userData, { setSubmitting }) => {
          console.log("Submit", userData);
          dispatch(registerUser(userData));
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <FormikInput name="firstName" label="First Name" />

            <FormikInput name="lastName" label="Last Name" />

            <FormikInput name="email" label="Email" type="email" />

            <FormikInput name="password" label="Password" type="password" />

            <div style={{ margin: "20px" }}>
              <ButtonComp
                containedValue={isSubmitting ? "Submitting..." : "Submit"}
                type="submit"
                disabled={isSubmitting}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
