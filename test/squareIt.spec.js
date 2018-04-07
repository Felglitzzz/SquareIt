import { expect } from 'chai';
import squareIt from '../index';
import validate from '../validations';


describe('SQUARE IT TEST', () => {
    it('should throw error if no parameter is provided', () => {
        const error = validate(squareIt());
        expect(squareIt()).to.be.undefined;
        expect(error).to.be.a('string');
        expect(error).to.equal('squareIt requires a valid parameter');
    });

    it('should throw error if invalid parameter is provided', () => {
        const error = validate(squareIt('felix'));
        expect(squareIt()).to.be.undefined;
        expect(error).to.be.a('string');
        expect(error).to.equal('squareIt requires a valid parameter');
    });
    
    it('should square every digit of a number', () => {
        const squared = squareIt(9119);
        expect(squared).to.equal(811181);
    });

    it('should square every digit of a number', () => {
        const squared = squareIt(1000);
        expect(squared).to.equal(1000);

    });
})