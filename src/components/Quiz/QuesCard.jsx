import { useDispatch, useSelector } from "react-redux";
import { ButtonComp, Option } from "../index.js";
import { Box } from "@mui/material";
import { nextQuestion } from "../../features/index.js";
useSelector;
const QuesCard = ({ currentIndex, question, options }) => {
  //   const { questions } = useSelector((state) => state.question);
  // console.log(questions);
  const dispatch = useDispatch();
  return (
    <>
      <Box>
        <p>
          Q{currentIndex + 1}. {question}
        </p>
        {
          // questions.map(ques => <Option options={ques?.options} />)
        }
        <Option options={options} />
        
      </Box>
    </>
  );
};

export default QuesCard;
