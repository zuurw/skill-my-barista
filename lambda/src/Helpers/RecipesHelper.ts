import { RECIPE_NAMES, RECIPE_INGREDIENTS, RECIPE_STEPS } from '../Data';
import Recipe from '../Models/Recipe';
import { MessagesHelper } from '../../../../skill-lilasoft-toolkit/dist/src';

export default class RecipesHelper {
    messagesHelper: MessagesHelper;

    constructor() {
        this.messagesHelper = new MessagesHelper();
    }

    public getRandomRecipe(): Recipe {
        const recipeName = this.messagesHelper.getRandomMessage(Object.keys(RECIPE_NAMES));
        return this.getRecette(recipeName);
    };
    public getRecette(recipeName: string): Recipe {
        let recipe = new Recipe();
        recipe.name = RECIPE_NAMES[recipeName];
        recipe.ingredients = RECIPE_INGREDIENTS[recipeName];
        recipe.steps = RECIPE_STEPS[recipeName];
        return recipe;
    };
};