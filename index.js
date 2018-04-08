import validate from './validations';
  /**
   * @name squareIt
   * @desc A method that takes in integer and returns the squared digits of the integer
   * 
   * @param {number} integer
   * 
   * @returns {number} squared digits of the integer
   */
  const squareIt = (integer) => {

    // handling edge cases
    const error = validate(integer);
    if (error) return;

    // run the squareIt method only if the parameter is valid
    const numStringify = integer.toString();
    let square = '';
    const splitted = (numStringify.split(''));
    splitted.map((digit) => square += parseInt(Math.pow(digit, 2)), 10);
    return Number(square);
  };
  
export default squareIt;
