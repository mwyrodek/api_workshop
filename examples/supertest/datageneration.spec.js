const factory = require('factory-girl').factory;
const { faker } = require('@faker-js/faker');
require('dotenv').config();


class Author {
    constructor(attrs={}){
        this.id=""
        this.name = ""
        this.email = ""
        Object.assign(this,attrs)
    }}

factory.define('author',Author,{
    id: factory.sequence('Author.id'),
    name: () => faker.name.findName(),
    email:() =>  faker.internet.email(),
})

describe('Generate Data', () => {
  it("Test simple data generation", () =>{
      factory.build('author').then(author => {
          console.log(author); // => User {username: 'Bob', score: 50}
      });
      factory.build('author').then(author => {
          console.log(author); // => User {username: 'Bob', score: 50}
      });
      factory.build('author').then(author => {
          console.log(author); // => User {username: 'Bob', score: 50}
      });
  })
});

