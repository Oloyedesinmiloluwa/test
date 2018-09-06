import axios from 'axios';

export default history => dispatch => history.replace('http://localhost:3000/api/users/login/google'); // axios.get('http://localhost:3000/api/users/login/google')
  // .then((res) => {
  //   if (res.status === 200) {
  //     // dispatch(setCurrentUser(userData));
  //     localStorage.setItem('token', res.data.user.token);
  //   }
  //   return res.data;
  // });
