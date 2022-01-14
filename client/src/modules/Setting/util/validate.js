import * as yup from 'yup';

const validationSettingSchema = yup.object({
  username: yup
    .string()
    .min(3, 'Too Short')
    .max(50, 'Too Long')
    .required('Required'),
  email: yup.string('Enter your email').email('not valid email'),
});

export default validationSettingSchema;