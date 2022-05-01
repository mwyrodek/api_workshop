import factory from './factory'
import {TestData } from './types'
const chai = require('chai');
chai.config.truncateThreshold = 0
const expect = chai.expect;





describe('test data', () => {
    let testdata: TestData;
    before(() => {
        testdata = factory.build();

    })


    it('check if generated data is correct', () => {
        let expectedData: TestData = {
            ID: 5,
            name: "Rosa",
            surname:"Elen",
            sekt: "QA"
        };

        expect(testdata).to.deep.equal(expectedData);
    });


})