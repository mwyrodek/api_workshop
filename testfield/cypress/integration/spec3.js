import {setToken} from "./pernament/authtoken";

describe('test3', () => {
    before(() => {
        setToken();
    })


    it('check if token is cool', () => {
        expect(localStorage.getItem('dtk')).to.eq('tokentrue');
    })

    it('check if token is cool still', () => {
        expect(localStorage.getItem('dtk')).to.eq('tokentrue');
    })
})