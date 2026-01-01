import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import { ButtonComp } from "../Button/Button";
import { useNavigate } from "react-router";

const QuizCard = ({ quiz_id, quizName, quiz_description, total_questions }) => {
  const navigate = useNavigate()

const handleQuizStart = () => {
  navigate(`/quiz/${quiz_id}`)
}

  return (
    <>
      <Box id={quiz_id}>
        <Card
          sx={{
            minWidth: 300,
            textAlign: "center",
            p: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
              {quizName}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {quiz_description}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Questions: {total_questions}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ButtonComp containedValue="Start Quiz" onClick={handleQuizStart} />
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default QuizCard;
