import Recipe from '../Models/Recipe';
import { MessagesHelper } from 'skill-lilasoft-toolkit';
export default class RecipesHelper {
    messagesHelper: MessagesHelper;
    constructor();
    getRandomRecipe(): Recipe;
    getRecette(recipeName: string): Recipe;
}
