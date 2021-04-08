const stringOperations = require('./stringOperations');
const { expect } = require('chai');


describe("Tests", function () {
    let st;

    this.beforeEach(function () {
        st = stringOperations;
    })
    describe("stringSlicer", function () {
        it("returns the first 3 chars of the str and adds '...' to it", function () {
            expect(st.stringSlicer('hello')).to.equal('hel...');
        });
        it("returns the first 3 chars of the str and adds '...' to it", function () {
            expect(st.stringSlicer('pet')).to.equal('pet...');
        });
        it("returns the whole string, and also adds '...' to it", function () {
            expect(st.stringSlicer('on')).to.equal('on...');
        });
    });

    describe("wordChecker", function () {
        it("checks if the word is existing in the text ", function () {
            expect(st.wordChecker(' Apple ', 'I like apple')).to.equal('apple');
        });
        it("checks if the word is existing in the text ", function () {
            expect(st.wordChecker(' Hello', 'Hello World')).to.equal('hello');
        });
        it("checks if the word is existing in the text ", function () {
            expect(st.wordChecker(' Banana', 'Banana is yellow')).to.equal('banana');
        });

        it("checks if the word is not included in the text ", function () {
            expect(st.wordChecker(' pen ', 'I like Orange')).to.equal('pen not found!');
        });
        it("checks if the word is not included in the text ", function () {
            expect(st.wordChecker(' Hello', 'Hi World')).to.equal('hello not found!');
        });
        it("checks if the word is not included in the text ", function () {
            expect(st.wordChecker(' Banana', 'Sun is yellow')).to.equal('banana not found!');
        });

    });

    describe("printEveryNthElement", function () {
        it("checks the inputs wrong", function () {
            expect(() => st.printEveryNthElement('a', 'a')).to.throw(Error, 'The input is not valid!');
        });
        it("checks the inputs wrong", function () {
            expect(() => st.printEveryNthElement(2, 'a')).to.throw(Error, 'The input is not valid!');
        });
        it("checks the inputs wrong", function () {
            expect(() => st.printEveryNthElement('a', [1, 2, 3])).to.throw(Error, 'The input is not valid!');
        });

        it('returns an array with the filtered elements', function () {
            expect(st.printEveryNthElement(2, [1, 2, 3])).to.deep.equal([1, 3]);
        });
        it('returns an array with the filtered elements', function () {
            expect(st.printEveryNthElement(1, [1, 2, 3])).to.deep.equal([1, 2, 3]);
        });
    });

});
