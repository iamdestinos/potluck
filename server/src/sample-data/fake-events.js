export default [
  {
    _id: '6',
    time: '2022-09-25T12:00:00Z',
    location: {
      address: '347 Verret St',
      city: 'New Orleans',
      state: 'LA',
      zip: '70114',
    },
    foods: [{
      userId: '1',
      name: 'BBQ Chicken',
      course: 'main',
      ref: 'User',
    },
    {
      userId: '3',
      name: 'Macaroni',
      course: 'side',
      ref: 'User',
    },
    {
      userId: '2',
      name: 'Veggie Burgers',
      course: 'main',
      ref: 'User',
    },
    {
      userId: '4',
      name: 'Enchiladas',
      course: 'main',
      ref: 'User',
    }],
    attending: {
      userIds: ['1', '2', '3', '4'],
    },
  },
  {
    _id: '7',
    time: '2022-09-24T12:00:00Z',
    location: {
      address: '700 Elysian Fields Ave',
      city: 'New Orleans',
      state: 'LA',
      zip: '70117',
    },
    foods: [{
      userId: '2',
      name: '7 layer bean dip',
      course: 'side',
      ref: 'User',
    },
    {
      userId: '3',
      name: '239-bean Irish bean stew',
      course: 'side',
      ref: 'User',
    },
    {
      userId: '4',
      name: 'Bean soup',
      course: 'side',
      ref: 'User',
    },
    {
      userId: '5',
      name: 'can of beans',
      course: 'side',
      ref: 'User',
    }],
    attending: {
      userIds: ['2', '3', '4', '5'],
    },
  },
  {
    _id: '8',
    time: '2022-09-23T12:00:00Z',
    location: {
      address: '1 Canal St',
      city: 'New Orleans',
      state: 'LA',
      zip: '70130',
    },
    foods: [{
      userId: '3',
      name: 'Pulled pork',
      course: 'main',
      ref: 'User',
    },
    {
      userId: '4',
      name: 'Pork chops',
      course: 'main',
      ref: 'User',
    },
    {
      userId: '5',
      name: 'whole pig',
      course: 'main',
      ref: 'User',
    },
    {
      userId: '1',
      name: 'pork ribs',
      course: 'main',
      ref: 'User',
    }],
    attending: {
      userIds: ['1', '5', '3', '4'],
    },
  },
  {
    _id: '9',
    time: '2022-09-22T12:00:00Z',
    location: {
      address: '500 De Armas St',
      city: 'New Orleans',
      state: 'LA',
      zip: '70114',
    },
    foods: [{
      userId: '4',
      name: 'Potato Salad',
      course: 'side',
      ref: 'User',
    },
    {
      userId: '5',
      name: 'Green bean casserole',
      course: 'side',
      ref: 'User',
    },
    {
      userId: '1',
      name: 'Hamburgers',
      course: 'main',
      ref: 'User',
    },
    {
      userId: '2',
      name: 'Pringles',
      course: 'side',
      ref: 'User',
    }],
    attending: {
      userIds: ['1', '2', '5', '4'],
    },
  },
];
