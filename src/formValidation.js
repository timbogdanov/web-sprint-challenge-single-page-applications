import * as Yup from 'yup';

const formValidation = Yup.object().shape({
  name: Yup
    .string()
    .min(2, "name must be at least 2 characters long.")
    .required("You name is Required"),
  size: Yup
    .string()
    .oneOf(['Small', 'Large', 'Family'], 'Please select a Size'),
  instructions: Yup
    .string()
    .min(10, "instructions must be at least 10 characters long.")
    .required("Instructions are Required"),
});

export default formValidation