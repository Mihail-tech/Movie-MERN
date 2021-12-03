const userSchema = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      required: true,
      minLength: 6,
    },
    email: {
      type: 'string',
      required: true,
      pattern: '^[A-Za-z0-9._%+-]+@[a-z0-9.]+.[a-z]{2,4}$',
    },
    password: {
      type: 'string',
      required: true,
      minLength: 6,
    },
  },
};

export default userSchema;
