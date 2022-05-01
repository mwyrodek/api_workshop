// eslint-disable-next-line import/no-extraneous-dependencies
const { expect } = require("chai");
require('dotenv').config()
const request = require("supertest")(process.env.URL);

describe("Tests for Login", () => {
  it("Proper login user got token", async () => {

    const response = await request.post("/wp-json/jwt-auth/v1/token").send({
      username: process.env.LOGIN,
      password: process.env.PASSWORD,
    });

    expect(response.status).to.eql(200);
    expect(response.body.data.token.length).to.greaterThan(30);
    expect(response.body.data.id).to.eql(7);
    expect(response.body.code).to.eql("jwt_auth_valid_credential");
  });
});
