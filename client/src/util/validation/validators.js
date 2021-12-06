const getErrorObject = (error, fieldName) => ({
  valid: false,
  error,
  fieldName: fieldName,
});

const getValidObject = fieldName => ({
  valid: true,
  error: '',
  fieldName: fieldName,
});

export const requiredField = (value, fieldName, validator, ...args) => {
  if (value === '' || value === null || value === undefined) {
    return getErrorObject('Field is required', fieldName);
  } else if (validator === undefined) {
    return getValidObject(fieldName);
  } else {
    return validator(value, fieldName, ...args);
  }
};

export const strictSymbols = (value, fieldName, validator, ...args) => {
  const valid = /^[A-Za-z0-9_]+$/.test(value);
  if (!valid) {
    return getErrorObject(`Only letters, digits and _`, fieldName);
  } else if (validator === undefined) {
    return getValidObject(fieldName);
  } else {
    return validator(value, fieldName, ...args);
  }
};

export const textFieldLength = (value, fieldName, minLength) => {
  return value.length < minLength
    ? getErrorObject(`Enter at least ${minLength} characters`, fieldName)
    : getValidObject(fieldName);
};

export const emailPattern = (value, fieldName) => {
  const valid = /^[A-Za-z0-9._%+-]+@[a-z0-9.]+.[a-z]{2,4}$/.test(value);
  return valid ? getValidObject(fieldName) : getErrorObject('Enter full email address', fieldName);
};

export const confirmPassword = (value, fieldName, confirmValue) => {
  if (value === confirmValue) {
    return getValidObject(fieldName);
  } else {
    return getErrorObject("Passwords don't match", fieldName);
  }
};
