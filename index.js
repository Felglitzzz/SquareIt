import validate from './validations';
  
  const squareIt = (integer) => {

    // handling edge cases
    const error = validate(integer);
    if (error) return;

    // Hit the squareIt method only if the parameter is valid
    const numStringify = integer.toString();
    let square = '';
    const splitted = (numStringify.split(''));
    splitted.map((digit) => square += parseInt(Math.pow(digit, 2)), 10);
    return Number(square);
  };
  
export default squareIt;
