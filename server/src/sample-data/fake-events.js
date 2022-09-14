export default [
  {
    time: 'FILL_ME_IN',
    location: {
      address: 'FILL_ME_IN',
      city: 'FILL_ME_IN',
      state: 'FILL_ME_IN',
      zip: 'FILL_ME_IN',
    },
    foods: [{
      type: Schema.Types.ObjectId,
      name: 'FILL_ME_IN',
      course: 'FILL_ME_IN',
      ref: 'User',
    }],
    attending: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
    }],
  },
];
