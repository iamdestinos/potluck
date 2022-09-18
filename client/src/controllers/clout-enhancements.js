import axios from 'axios';

// create a helper function to use to up the clout
const cloutEnhancer = (id, num) => {
  // send a put request to the current user's id to update their clout level
  axios.put(`/user/clout/${id}`, { numVal: num })
    .catch((err) => {
      console.error('THIS is the error from cloutEnhancer:\n', err);
    });
};

export default cloutEnhancer;
