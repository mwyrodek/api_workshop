import {TestData } from './types'
import { Factory } from 'fishery'
const { faker } = require('@faker-js/faker');

const testDataFactory = Factory.define<TestData>(({ sequence }) => ({
    ID: 5,
    name: faker.name.findName(),
    surname: faker.name.findName(),
    sekt: faker.lorem.words(2)
 }),
);

export default  testDataFactory;