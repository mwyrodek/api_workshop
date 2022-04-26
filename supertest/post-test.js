const request = require('supertest')(process.env.URL);
const expect = require("chai").expect;
require('dotenv').config()

var token = null;


describe("Validate", function () {
    before(async function () {
        request.post("/wp-json/jwt-auth/v1/token")
        .send({ username: 'wyrodek.maciej+api.workshop@gmail.com', password: 'GS(VbNixw8g6snD^ik$SPX!%' })
        .end(function(err, res) {
            token = res.body.data.token; // Or something
            })
      });
    
    it("Post - Valid Credential", async function () {
     const response = await request.post("/wp-json/jwt-auth/v1/token/validate")
          .set('Authorization', 'Bearer ' + token).send();
    
          expect(response.status).to.eql(200);
    });
  });
