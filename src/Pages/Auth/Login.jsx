import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ButtonComp, FormikInput } from "../../components";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/asyncThunk";

const Login = () => {

  const dispatch = useDispatch()
  return (
    <div style={{ padding: "20px", maxWidth: "550px", margin: "0 auto" }}>
      <h1>Log in</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
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
          
          dispatch(loginUser(userData))
            setSubmitting(false);
          // setTimeout(() => {
          //   alert(JSON.stringify(userData, null, 2));
            
          // }, 500);
        }}
      >
        {({ isSubmitting, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <FormikInput name="email" label="Email" type="email" />

            <FormikInput name="password" label="Password" type="password" />

            <div style={{ marginTop: "16px" }}>
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

export default Login;
