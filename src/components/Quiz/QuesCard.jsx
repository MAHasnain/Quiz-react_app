import { useDispatch, useSelector } from "react-redux";
import { ButtonComp, Option } from "../index.js";
import { Box, Typography } from "@mui/material";
import { nextQuestion } from "../../features/index.js";
useSelector;
const QuesCard = ({ currentIndex, question, options }) => {
  //   const { questions } = useSelector((state) => state.question);
  // console.log(questions);
  const dispatch = useDispatch();
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Q{currentIndex + 1}. {question}
      </Typography>

      <Option options={options} />
    </Box>
  );
};

export default QuesCard;
