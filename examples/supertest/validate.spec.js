const request = require('supertest')(process.env.URL);
const { expect } = require('chai');
require('dotenv').config();

let token = null;

describe('Validate', () => {
  before(async () => {
    const respone = await request.post('/wp-json/jwt-auth/v1/token')
      .send({ username: process.env.LOGIN, password: process.env.PASSWORD });
    token = respone.body.data.token;
  });

  it(' Valid Correct Credentials', async () => {
    const response = await request.post('/wp-json/jwt-auth/v1/token/validate')
      .set('Authorization', `Bearer ${token}`).send();

    expect(response.status).to.eql(200);
  });
});
