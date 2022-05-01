import {setToken} from "./pernament/authtoken";

describe('test2', () => {
    beforeEach(() => {
        setToken();
    })

    it('check if token is cool', () => {
        expect(localStorage.getItem('dtk')).to.eq('tokentrue');
    })
})