const request = require('supertest')(process.env.URL);
const expect = require("chai").expect;
require('dotenv').config()

describe("Login", function () {
    it("Post - Valid Credential", async function () {
        
    const response = await request.post("/wp-json/jwt-auth/v1/token")
      .send({ username: 'wyrodek.maciej+api.workshop@gmail.com', password: 'GS(VbNixw8g6snD^ik$SPX!%' });
      
      expect(response.status).to.eql(200);
      expect(response.body.data.token.length).to.greaterThan(30);
      
    });
  });

 // https://stackoverflow.com/questions/26453990/supertest-test-secure-rest-api