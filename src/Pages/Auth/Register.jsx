import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ButtonComp, FormikInput } from "../../components";
import { useDispatch } from "react-redux";
import { registerUser } from "../../features/asyncThunk";
import { Box, Typography } from "@mui/material";

const Register = () => {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        minHeight: "60vh",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "lato, sans-serif",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 420,
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
          textAlign: "center",
          alignItems: "center",
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="h5" fontWeight="bold" textAlign="center" mb={3}>
          Sign Up
        </Typography>
        <p>Join Quizora today and start practicing smarter, not harder. </p>
        <Box sx={{ p: 1 }}>
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
                <Box mb={2}>
                  <FormikInput name="firstName" label="First Name" fullWidth />
                </Box>
                <Box mb={2}>
                  <FormikInput name="lastName" label="Last Name" fullWidth />
                </Box>
                <Box mb={2}>
                  <FormikInput name="email" label="Email" type="email" />
                </Box>
                <Box mb={2}>
                  <FormikInput
                    name="password"
                    label="Password"
                    type="password"
                  />
                </Box>
                <div style={{ margin: "20px" }}>
                  <ButtonComp
                    containedValue={isSubmitting ? "Submitting..." : "Sign up"}
                    type="submit"
                    disabled={isSubmitting}
                    fullWidth
                  />
                </div>
              </Form>
            )}
          </Formik>
        </Box>
        <Typography variant="body2" textAlign="center" mt={1} color="gray">
          Already have an account? <a href="/login"  className="text-blue-700 bold">Log in</a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;
