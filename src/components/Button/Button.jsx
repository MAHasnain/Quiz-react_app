import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const ButtonComp = ({ containedValue, onClick, ...props }) => {
  return (
    <Stack direction="row" display="flex" justifyContent="center" alignItems="center">
      <Button onClick={onClick} variant="contained" {...props}>
        {containedValue}
      </Button>
    </Stack>
  );
};
