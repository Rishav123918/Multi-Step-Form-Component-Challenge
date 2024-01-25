

export const validateFullName = (value) => {
    if (!value || value.trim().length < 3) {
      return 'Full Name is required and must be at least 3 characters.';
    }
    return '';
  };
  
  export const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value || !emailRegex.test(value)) {
      return 'Please enter a valid email address.';
    }
    return '';
  };
  
  export const validateDateOfBirth = (value) => {
    if (!value) {
      return 'Date of Birth is required.';
    }
  
    const enteredDate = new Date(value);
    const currentDate = new Date();
  
    if (enteredDate > currentDate) {
      return 'Date of Birth cannot be in the future.';
    }
  
    return '';
  };
  
  export const validateStreetAddress = (value) => {
    if (!value || value.trim().length < 5) {
      return 'Street Address is required and must be at least 5 characters.';
    }
    return '';
  };
  
  export const validateCity = (value) => {
    if (!value || value.trim().length < 3) {
      return 'City is required and must be at least 3 characters.';
    }
    return '';
  };
  
export const validateState = (value) => {
    if (!value) {
      return 'State is required.';
    }
    return '';
  };
  
  
  export const validateZipCode = (value) => {
    const numericRegex = /^\d+$/;
  
    if (!value) {
      return 'Zip Code is required.';
    }
  
    if (!numericRegex.test(value)) {
      return 'Zip Code must be numeric.';
    }
  
    if (value.length !== 6) {
      return 'Zip Code must be exactly 6 digits.';
    }
  
    return '';
  };
  
  
  export const validateUsername = (value) => {
    if (!value || value.trim().length < 3) {
      return 'Username is required and must be at least 3 characters.';
    }
    return '';
  };
  
  export const validatePassword = (value) => {
    if (!value || value.length < 6) {
      return 'Password is required and must be at least 6 characters.';
    }
    return '';
  };
  
  export const validateConfirmPassword = (password, confirmPassword) => {
    if (!confirmPassword || confirmPassword !== password) {
      return 'Passwords do not match.';
    }
    return '';
  };
  