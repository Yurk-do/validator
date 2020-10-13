import {
  checkType,
  nonEmptyString,
  numberInRange,
} from "../validation/validation_type.js";

const userScheme = {
  firstName: [
    {
      validator: {
        params: ["string"],
        rule: checkType,
      },
      // validationRule: checkType,
      // validationParams: ["string"],
      validationMessage: "First Name is not a string",
    },
    {
      validator: {
        params: [],
        rule: nonEmptyString,
      },
      validationMessage: "First Name is empty",
    },
  ],
  lastName: [
    {
      validator: {
        params: ["string"],
        rule: checkType,
      },
      validationMessage: "Last Name is not a string",
    },
    {
      validator: {
        params: [],
        rule: nonEmptyString,
      },
      validationMessage: "Last Name is empty",
    },
  ],
  age: [
    {
      validator: {
        params: ["number"],
        rule: checkType,
      },
      validationMessage: "Age is not a number",
    },
    {
      validator: {
        params: [10, 56],
        rule: numberInRange,
      },
      validationMessage: `Age is not in range between 10 and 56`,
    },
  ],
  phone: [
    {
      validator: {
        params: ["string"],
        rule: checkType,
      },
      validationMessage: "Phone is not a string",
    },
  ],
};

export { userScheme as default };
