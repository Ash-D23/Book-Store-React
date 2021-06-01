const INITIAL_STATE = {
  sections: [
    {
      title: 'Computer Science',
      imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80',
      id: 1,
      linkUrl: 'shop/0'
    },
    {
      title: 'Mechanical',
      imageUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80',
      id: 2,
      linkUrl: 'shop/1'
    },
    {
      title: 'Electrical',
      imageUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80',
      id: 3,
      linkUrl: 'shop/2'
    },
    {
      title: 'Auto-mobile',
      imageUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80',
      size: 'large',
      id: 4,
      linkUrl: 'shop/3'
    },
    {
      title: 'Management',
      imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80',
      size: 'large',
      id: 5,
      linkUrl: 'shop/4'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
