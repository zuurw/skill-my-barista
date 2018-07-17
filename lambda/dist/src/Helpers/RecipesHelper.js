"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Data_1 = require("../Data");
const Recipe_1 = require("../Models/Recipe");
const skill_lilasoft_toolkit_1 = require("skill-lilasoft-toolkit");
class RecipesHelper {
    constructor() {
        this.messagesHelper = new skill_lilasoft_toolkit_1.MessagesHelper();
    }
    getRandomRecipe() {
        const recipeName = this.messagesHelper.getRandomMessage(Object.keys(Data_1.RECIPE_NAMES));
        return this.getRecette(recipeName);
    }
    ;
    getRecette(recipeName) {
        let recipe = new Recipe_1.default();
        recipe.name = Data_1.RECIPE_NAMES[recipeName];
        recipe.ingredients = Data_1.RECIPE_INGREDIENTS[recipeName];
        recipe.steps = Data_1.RECIPE_STEPS[recipeName];
        return recipe;
    }
    ;
}
exports.default = RecipesHelper;
;
//# sourceMappingURL=RecipesHelper.js.map