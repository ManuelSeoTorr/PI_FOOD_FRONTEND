import Card from "../Card/Card";
import style from "./CardsContainer.module.css"




const CardsContainer = ({currentRecipes}) => {
    return(
        <div className={style.container}>
            {currentRecipes.map(recipe => {
                return <Card
                    id = {recipe.id}
                    name = {recipe.name}
                    imgUri = {recipe.imgUri}
                    diets = {recipe.diets}
                    Diets = {recipe.Diets} 
                    healthScore = {recipe.healthScore}
                />
            })}
        </div>
    )
};

export default CardsContainer;