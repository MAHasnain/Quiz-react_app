import { useParams } from "react-router";
import { QuesCard } from "../../components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestionsByQuizId } from "../../features/asyncThunk";

const Quiz = () => {
  const params = useParams();
  const dispatch = useDispatch();
  // console.log(searchParams.get("quiz_id"));
  console.log(params.quiz_id);
  const quizId = params.quiz_id;

  const state = useSelector((state) => state);
  console.log(state);

  const { questions } = useSelector((state) => state.question);

  useEffect(() => {
    dispatch(fetchQuestionsByQuizId(quizId));
  }, []); 
  console.log("questions", questions);

  return (
    <>
      <h1>Quiz Page</h1>
      {
        questions.map( question => (
          <QuesCard question={question?.question}/>
        ))
      }
    </>
  );
};

export default Quiz;
