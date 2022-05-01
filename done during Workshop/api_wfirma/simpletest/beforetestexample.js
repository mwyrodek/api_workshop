// eslint-disable-next-line import/no-extraneous-dependencies
const {expect } = require('chai')

describe("Examples of using before", () => {
    let name;

    it("First Test for Name", () => {
      expect(name).to.eql("Stefan");
      name="Kamil"
    });

    it("Second Test for Name", () => {
        expect(name).to.eql("Stefano");
      });

    before(()=>{
        
        console.log(`To jest before 1`)
    })


    beforeEach(()=>{
        name="Stefan";
        console.log(`To jest beforeeach1`)
    })

    afterEach(()=>{
        console.log(`To jest aftereach`)
    })

    after(()=>{
               console.log(`To jest after`)
    })
  });
  