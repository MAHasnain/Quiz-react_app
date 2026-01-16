import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ButtonComp, FormikInput } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/asyncThunk";
import { Link, useNavigate } from "react-router";
import { Box, Typography } from "@mui/material";
// import { useEffect } from "react";

const Login = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { auth } = useSelector((state) => state.persistedReducer);

  // useEffect(() => {
  //   if (auth.isAuthenticated) {
  //     navigate("/dashboard");
  //   }
  // }, []);

  return (
    <Box
      sx={{
        minHeight: "50vh",
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
          Welcome back 👋
        </Typography>
        <p>Log in to continue learning and track your progress</p>
        <Box sx={{ p: 1, mt: 2}}>
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

              dispatch(loginUser(userData));
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
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
                <div style={{ marginTop: "16px" }}>
                  <ButtonComp
                    containedValue="Login"
                    type="submit"
                    disabled={isSubmitting}
                    fullWidth
                  />
                </div>
              </Form>
            )}
          </Formik>
        </Box>
         <Typography variant="body2" textAlign="center" mt={3} color="gray">
          New to Quizora? <Link to="/register" className="text-blue-700 bold"> Sign up</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
