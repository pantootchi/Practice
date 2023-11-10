import { recipes } from './data.js';

function Recipe(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <ul>
        {props.ingredients.map(ingredient =>
          <li key={ingredient}>
            {ingredient}
          </li>
        )}
      </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <Recipe id={recipe.id} name={recipe.name} ingredients={recipe.ingredients} key={recipe.id} />
      )}
    </div>
  );
}

// OR


function Recipe2({ id, name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map(ingredient =>
          <li key={ingredient}>
            {ingredient}
          </li>
        )}
      </ul>
    </div>
  );
}

export default function RecipeList2() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <Recipe {...recipe} key={recipe.id} />
      )}
    </div>
  );
}

// Note that the key is specified on the <Recipe> itself rather than on the root <div> returned from Recipe. This is because this key is needed directly within the context of the surrounding array. Previously, you had an array of <div>s so each of them needed a key, but now you have an array of <Recipe>s. In other words, when you extract a component, don’t forget to leave the key outside the JSX you copy and paste.
// OR

export default function RecipeList3() {
    return (
      <div>
        <h1>Recipes</h1>
        {recipes.map(recipe =>
          <div key={recipe.id}>
            <h2>{recipe.name}</h2>
            <ul>
              {recipe.ingredients.map(ingredient =>
                <li key={ingredient}>
                  {ingredient}
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    );
}


//   You can copy-paste the JSX from the outer map into a new Recipe component and return that JSX. Then you can change recipe.name to name, recipe.id to id, and so on, and pass them as props to the Recipe: