import { Box, Card, CardContent, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { ButtonComp } from "../../components";
import { resetQuiz, resetResult } from "../../features";

const Result = () => {
  const navigate = useNavigate();
  const { score } = useSelector((state) => state.result);
  const { questions } = useSelector((state) => state.question);
  const dispatch = useDispatch();

  const handleGoToHome = () => {
    dispatch(resetResult());
    dispatch(resetQuiz());
    navigate("/");
  };

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ width: 400, textAlign: "center", p: 3 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            🎉 Quiz Result
          </Typography>

          <Typography variant="h6" sx={{ mb: 2 }}>
            Your Score
          </Typography>

          <Typography variant="h3" color="success.main">
            {score} / {questions.length}
          </Typography>

          <Typography sx={{ mt: 2 }}>
            {score >= questions.length / 2
              ? "Great job! 🔥"
              : "Keep practicing 💪"}
          </Typography>

          <ButtonComp
            style={{ mt: 3, display: "flex", justifyContent: "center" }}
            containedValue="Go to Home"
            variant="contained"
            sx={{ mt: 3 }}
            onClick={handleGoToHome}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Result;
