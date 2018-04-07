const validate = (number) => {
    let error;
    if (!number || isNaN(number)) {
      return error = 'squareIt requires a valid parameter';
    }
  }

  export default validate;
