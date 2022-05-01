const request = require('supertest')(process.env.URL);
const { expect } = require('chai');

require('dotenv').config();

describe('Login', () => {
  it('Valid Credential', async () => {
    const response = await request.post('/wp-json/jwt-auth/v1/token')
        .send({ username: process.env.LOGIN, password: process.env.PASSWORD });

    expect(response.status).to.eql(200);
    expect(response.body.data.token.length).to.greaterThan(30);
  });
});
