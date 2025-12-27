import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const ButtonComp = ({containedValue, onClick, ...props}) => {
  return (
    <Stack direction="row">
      <Button onClick={onClick} variant="contained" {...props}>{containedValue}</Button>
    </Stack>
  );
}
