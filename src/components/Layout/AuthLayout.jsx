import { Box, Container, Typography } from "@mui/material";
import { Outlet, useNavigate } from "react-router";

const AuthLayout = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Container maxWidth="sm">
          {/* Logo */}
          <Box
            sx={{
              textAlign: "center",
              mb: 4,
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            <Typography variant="h4" fontWeight="bold">
              Quizora
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Learn • Practice • Grow
            </Typography>
          </Box>
          <Box
            sx={{
              p: 4,
            }}
          >
            <Outlet />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AuthLayout;
