import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { Box, Typography, Button, Container } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();
  const { auth } = useSelector((state) => state.persistedReducer);

  return (
    <Box sx={{ bgcolor: "#f9fafb", minHeight: "100vh" }}>
      {/* HERO SECTION */}
      <Box
        sx={{
          py: 10,
          textAlign: "center",
          background: "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)",
          color: "#fff",
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Learn Smarter with Interactive Quizzes
        </Typography>

        <Typography variant="h6" sx={{ maxWidth: 600, mx: "auto", mb: 4 }}>
          Quizora helps you practice concepts, test knowledge, and track your
          progress — all in one place.
        </Typography>

        {!auth.isAuthenticated ? (
          <>
            <Button
              variant="contained"
              size="large"
              sx={{ mr: 2, bgcolor: "#fff", color: "#4f46e5" }}
              onClick={() => navigate("/register")}
            >
              Get Started
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{ color: "#fff", borderColor: "#fff" }}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            size="large"
            sx={{ bgcolor: "#22c55e" }}
            onClick={() => navigate("/dashboard")}
          >
            Go to Dashboard
          </Button>
        )}
      </Box>

      {/* WHY SECTION */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
          Why Quizora?
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { md: "repeat(2, 1fr)" },
            gap: 4,
          }}
        >
          {[
            "🧠 Smart MCQ‑based quizzes",
            "📊 Real‑time score & result tracking",
            "✅ One‑attempt quiz system",
            "📱 Fully responsive experience",
          ].map((item, i) => (
            <Box
              key={i}
              sx={{
                p: 3,
                bgcolor: "#fff",
                borderRadius: 2,
                boxShadow: 2,
              }}
            >
              <Typography variant="h6">{item}</Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* HOW IT WORKS */}
      <Box sx={{ bgcolor: "#f3f4f6", py: 8 }}>
        <Container>
          <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
            How It Works
          </Typography>

          <Box
            component="ol"
            sx={{
              maxWidth: 500,
              mx: "auto",
              lineHeight: 2,
              fontSize: "18px",
            }}
          >
            <li>Create your free account</li>
            <li>Select a quiz</li>
            <li>Answer questions</li>
            <li>View your result instantly</li>
          </Box>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold" mb={2}>
          Ready to Test Your Knowledge?
        </Typography>

        <Typography mb={3}>
          Start learning today and improve step by step.
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() =>
            auth.isAuthenticated
              ? navigate("/dashboard")
              : navigate("/register")
          }
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
