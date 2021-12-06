export default (...validators) => {
  return validators.reduce(
    (value, current) => {
      const result = current();
      if (!result.valid) {
        value.errors[result.fieldName] = result.error;
        value.valid = false;
      }
      return value;
    },
    { valid: true, errors: {} }
  );
};
