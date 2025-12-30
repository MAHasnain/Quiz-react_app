import React, { useEffect } from "react";
import { QuizCard } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getAllQuizzes } from "../../Supabase";
import {
  fetchQuestionsByQuizId,
  fetchAllQuizzes,
} from "../../features/asyncThunk.js";
import { useNavigate } from "react-router";
import { Box } from "@mui/material";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { score } = useSelector((state) => state.result);
  // const { user, isAuthenticated } = useSelector((state) => state.persistedReducer.auth);
  // const fetchQuestions = useSelector(() => );

  // const { auth } = persistedReducer;

  const { quizzes } = useSelector((state) => state.quiz);
  useEffect(() => {
    dispatch(fetchAllQuizzes()); /// async thunk
  }, []);
  console.log("quizzes", quizzes);

  // getAllQuizzes();

  // console.log(useSelector((state) => state));
  // console.log("auth state", user, "isAuthenticated", isAuthenticated);
  // console.log("result attemptedQuizIds state", fetchQuestions);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
          padding: 3,
        }}
      >
        {quizzes.length === 0 ? (
          <p>No quizzes available</p>
        ) : (
          quizzes.map((quiz) => (
            <QuizCard
              quiz_id={quiz?.id}
              quizName={quiz?.quiz_name}
              quiz_description={quiz?.quiz_description}
              total_questions={quiz?.total_questions}
            />
          ))
        )}
      </Box>
    </>
  );
};

export default Dashboard;
