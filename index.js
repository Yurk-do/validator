/* eslint-disable valid-typeof */
/* eslint-disable no-console */

import validateObject from "./my_modules/validation/validation_area.js";
import user from "./my_modules/data/object-user.js";
import userScheme from "./my_modules/data/userScheme.js";

import dumpErrors from "./my_modules/print/errors_print.js";

const result = validateObject(user, userScheme);

if (result.length !== 0) {
  dumpErrors(result, user);
} else {
  console.log(`All is ok`);
}
