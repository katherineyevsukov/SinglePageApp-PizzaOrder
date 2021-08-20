import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required()
    .min(2, "name must be at least 2 characters"),
    size: yup
    .string()
    .required(),
    cheese: yup
    .boolean(),
    pepperoni: yup
    .boolean(),
    pineapple: yup
    .boolean(),
    peppers: yup
    .boolean(),
    special: yup
    .string()

})

export default schema