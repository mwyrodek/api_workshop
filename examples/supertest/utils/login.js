const request = require('supertest')(process.env.URL);

// module.exports.login = function () {
//   return request.post('/wp-json/jwt-auth/v1/token')
//     .send({ username: process.env.LOGIN, password: process.env.PASSWORD });
// };


module.exports.asynclogin = async function () {
  const resp = await request.post('/wp-json/jwt-auth/v1/token')
      .send({ username: process.env.LOGIN, password: process.env.PASSWORD });
  return resp.body.data.token;
};