import { useNavigate, useParams } from "react-router";
import { ButtonComp, QuesCard } from "../../components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestionsByQuizId } from "../../features/asyncThunk";
import { nextQuestion } from "../../features";
import { calculateScore } from "../../features/resultSlice";

const Quiz = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(searchParams.get("quiz_id"));
  // console.log(params.quiz_id);
  const quizId = params.quiz_id;

  const state = useSelector((state) => state);
  console.log(state);

  const { questions, currentIndex, selectedAnswers } = useSelector(
    (state) => state.question
  );
  useEffect(() => {
    dispatch(fetchQuestionsByQuizId(quizId));
  }, []);
  console.log("questions", questions);

  const question = questions[currentIndex];
  console.log(currentIndex);

  // if (!questions.length) {
  //   return <p>Loading questions...</p>;
  // }

  // const calculateScore = () => {
  //   let score = 0;

  //   questions.forEach((ques, index) => {
  //     const selected = ques?.selectedAnswers[index];

  //     if (selected && selected === ques.correct_answer) {
  //       score += 1;
  //     }
  //   });
  //   return score;
  // };

  const handleSubmitQuiz = () => {
    dispatch(calculateScore({ questions, selectedAnswers }));
    // console.log("Final Score: ", finalScore);
    // dispatch(setScore())
    navigate("/result");
  };

  return (
    <>
      <div>
        <QuesCard
          currentIndex={currentIndex}
          options={question?.options}
          question={question?.question}
        />
        {currentIndex < questions.length - 1 ? (
          <ButtonComp
            containedValue="Next Question"
            onClick={() => dispatch(nextQuestion())}
          />
        ) : (
          <ButtonComp containedValue="Submit Quiz" onClick={handleSubmitQuiz} />
        )}
      </div>
    </>
  );
};

export default Quiz;
