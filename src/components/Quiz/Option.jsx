import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonComp } from "../index";
import { selectAnswer } from "../../features";
import { Box } from "@mui/material";

const Option = ({ options }) => {
  // const { currentQuestion } = useSelector(state => console.log(state));
  // console.log(currentQuestion);
  const dispatch = useDispatch();
  const { selectedAnswers, currentIndex } = useSelector(
    (state) => state.question
  );
  const selectedOption = selectedAnswers[currentIndex];

  const handleOptionClick = (option) => {
    dispatch(selectAnswer({ answer: option }));
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {options?.map((option, index) => {
          const isSelected = selectedOption === option;
          return (
            <div>
              <ButtonComp
                key={index}
                containedValue={option}
                onClick={() => handleOptionClick(option)}
                variant={isSelected ? "contained" : "outlined"}
                sx={{
                  mb: 1,
                  width: "100%",
                  backgroundColor: isSelected ? "#1976d2" : "transparent",
                  color: isSelected ? "#fff" : "#1976d2",
                  "&:hover": {
                    backgroundColor: isSelected ? "#1565c0" : "#e3f2fd",
                  },
                }}
              />
            </div>
          );
        })}
      </Box>
    </>
  );
};

export default Option;
