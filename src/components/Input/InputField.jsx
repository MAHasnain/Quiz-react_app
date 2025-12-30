// Component banao
import { TextField } from "@mui/material";
import { useField } from "formik";

export const FormikInput = ({ type, label, ...props }) => {
  const [field, meta] = useField(props);
  const showError = meta.touched && Boolean(meta.error);

  return (
    <TextField style={{margin: 3 }}
      {...field}
      type={type}
      label={label}
      error={showError}
      helperText={showError ? meta.error : ""}
    fullWidth/>
  );
};

// import TextField from "@mui/material/TextField";

// export const InputComp = (props) => {
//   // ✅ Let's see what props we're getting
//   console.log("InputComp Props:", props);
//   console.log("Field:", props.field);
//   console.log("Meta:", props.meta);
//   console.log("Form:", props.form);

//   const { label, field, form, meta, ...rest } = props;

//   // ✅ Check if meta exists and has the right properties
//   const hasError = meta?.touched && Boolean(meta?.error);

//   console.log("Has Error:", hasError);
//   console.log("Touched:", meta?.touched);
//   console.log("Error:", meta?.error);

//   return (
//     <TextField
//       {...field}
//       {...rest}
//       label={label}
//       variant="outlined"
//       fullWidth
//       margin="normal"
//       error={hasError}
//       helperText={hasError ? meta.error : ""}
//     />
//   );
// };
