export const validateDiets = (checkboxes) => {
  let errors = {};
  let validate = false;
  for (const key in checkboxes) {
    if (checkboxes[key] === true) {
      validate = true;
    }
  }
  if (!validate) {
    errors.diets = "At least one diet is require";
  }
  return errors; //errors = {diets:"text"}
};

