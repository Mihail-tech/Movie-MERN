import {
  requiredField,
  confirmPassword,
  textFieldLength,
  emailPattern,
  strictSymbols,
} from '../../../util/validation/validators';
import validateFields from '../../../util/validation/validateFields';

const getRegisterRules = (user) => [
  () => requiredField(user.username, 'username', strictSymbols, textFieldLength, 6),
  () => requiredField(user.email, 'email', emailPattern),
  () => requiredField(user.password, 'password', textFieldLength, 6),
  () => requiredField(user.confirmPassword, 'confirmPassword', confirmPassword, user.password),
];

export default user => {
  return validateFields(...getRegisterRules(user));
};
