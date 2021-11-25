const userSchema = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      required: true,
      minLength: 6,
    },
    password: {
      type: 'string',
      required: true,
      minLength: 6,
    },
  },
};

export default userSchema;
