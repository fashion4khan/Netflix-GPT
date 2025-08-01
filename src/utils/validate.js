export const FormValidation = (email, password) => {
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const isEmailValid = regexEmail.test(email);
  const isPasswordValid = passwordRegex.test(password);

  if (!isEmailValid) return "Email is Invalid :";
  if (!isPasswordValid) return "Password is Invalid :";

  return null;
};
export const FormValidationWithName = (name, email, password) => {
  const nameRegex = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/;
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const isNameValid = nameRegex.test(name);
  const isEmailValid = regexEmail.test(email);
  const isPasswordValid = passwordRegex.test(password);

  if (!isNameValid) return "name is Invalid :";
  if (!isEmailValid) return "Email is Invalid :";
  if (!isPasswordValid) return "Password is Invalid :";

  return null;
};
