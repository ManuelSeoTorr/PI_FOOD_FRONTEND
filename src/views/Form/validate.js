export const validate = (newRecipe) => {
    let errors = {};
    const imgRegex = /\.(jpg|jpeg|png|gif|bmp)$/;

    const name_length = 50;
    const summary_length = 600;

    //validacion de name/title
    if (!newRecipe.name) {
      errors.name = "Title required";
    } else if (newRecipe.name.length > name_length){
        errors.name = `Title must be less than ${name_length}` 
    }

    //validacion de summary
    if (!newRecipe.summary) {
      errors.summary = "Summary required";
    }else if (newRecipe.summary.length > summary_length){
        errors.summary = `Summary must be less than ${summary_length}` 
    }

    //validacion de healthScore
    if(!newRecipe.healthScore){
        errors.healthScore = "Health Score required"
    } else if (newRecipe.healthScore > 100 || newRecipe.healthScore < 0) {
      errors.healthScore = "Health Score must be between 0 and 100";
    }

    //validacion de imagen
    if (!imgRegex.test(newRecipe.imgUri)){
        errors.imgUri = "Image must be jpg, speg, png or bmp"
    }
    
    //validacion de diets
    // if(!newRecipe.diets.length){
    //     errors.diets = "At least one diet is require"
    // }

    
    //validacion de steps
    if(!newRecipe.steps.length){
        errors.steps = "At least one step is require"
    }
    return errors;
  };