import { Factory } from 'fishery'
import {TestData } from './types'
const chai = require('chai');
chai.config.truncateThreshold = 0
const expect = chai.expect;



const testFactory = Factory.define<TestData>(({ sequence }) => ({
    ID: 5,
    name: 'Rosa',
    surname: 'Elo',
    sekt: "SQ"
}));


describe('test data', () => {
    let testdata: TestData;
    before(() => {
        testdata = testFactory.build();

    })


    it('check if generated data is correct', () => {
        let expectedData: TestData = {
            ID: 5,
            name: "Alex",
            surname:"Elen",
            sekt: "QA"
        };

        expect(testdata).to.deep.equal(expectedData);
    });

    it('check if generated data is correct', () => {
        let expectedData: TestData = {
            ID: 5,
            name: "Rosa",
            surname:"Elo",
            sekt: "SQ"
        };

        expect(testdata).to.deep.equal(expectedData);
    });

})