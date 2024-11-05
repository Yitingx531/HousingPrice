import UserDataType from "../../types/userDataType";
import emailValidator from "../../utils/emailValidator";
import passwordValidator from "../../utils/passwordValidator";

const validateForm = (data: UserDataType) => {
    const errors: Partial<Record<keyof UserDataType, string>> = {};

    if (!data.username.trim()) {
      errors.username = 'Username is required.';
    }

    if (!emailValidator(data.email)) {
      errors.email = 'Please enter a valid email.';
    }

    if (!passwordValidator(data.password)) {
      errors.password = 'Password must be at least 16 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.';
    }

    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match.';
    }

    return errors;
  }

  export default validateForm;