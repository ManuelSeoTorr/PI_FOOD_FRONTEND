import Card from "../Card/Card";
import style from "./CardsContainer.module.css"
import { useSelector } from "react-redux";



const CardsContainer = ({currentRecipes}) => {

    return(
        <div className={style.container}>
            {currentRecipes.map(recipe => {
                return <Card
                    id = {recipe.id}
                    name = {recipe.name}
                    imgUri = {recipe.imgUri}
                    diets = {recipe.diets}
                    healthScore = {recipe.healthScore}
                    key = {recipe.id}
                />
            })}
        </div>
    )
};

export default CardsContainer;