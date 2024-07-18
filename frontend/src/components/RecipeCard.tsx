import { Recipe } from "../types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  recipe: Recipe;
  isFavorite: boolean;
  onClick: () => void;
  onFavorite: (recipe: Recipe) => void;
}

const RecipeCard = ({ recipe, isFavorite, onClick, onFavorite }: Props) => {
  return (
    <div className="recipe-card" onClick={onClick}>
      <img src={recipe.image} alt={recipe.title} />
      <div className="recipe-card-title">
        <span
          onClick={(event) => {
            event.stopPropagation();
            onFavorite(recipe);
          }}
        >
          {isFavorite ? (
            <AiFillHeart size={25} color="red" />
          ) : (
            <AiOutlineHeart size={25} />
          )}
        </span>
        <h3>{recipe.title}</h3>
      </div>
    </div>
  );
};

export default RecipeCard;
