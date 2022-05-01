// eslint-disable-next-line import/no-extraneous-dependencies
const {expect } = require('chai')

describe("Learning first Tests", () => {
  it("Hello World", () => {
    expect(2).to.not.eql(200);
  });

  it("Second Test", () => {
    const x = 2;
    const y = 3;
    expect(x+y).to.eql(5)
  });

  it("Thrid Test", () => {
    const x = "wFirma to dobra firma";
    expect(x).to.contain("wFirma")
    expect(x.length).to.eql(21)
  });
});
