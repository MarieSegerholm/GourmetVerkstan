# AI Prompt Library

## 1. Recipe generation prompt

Generate accurate, cookable recipes in Swedish. The API must output JSON and a Markdown-formatted recipe. The JSON object should include:
- `title`: Title of the recipe.
- `summary`: A 1‑2 sentence summary of the dish.
- `prepTime`: Preparation time in minutes.
- `totalTime`: Total time in minutes (prep + cook).
- `difficulty`: An integer from 1 (easy) to 5 (very difficult).
- `servings`: Number of servings.
- `calories`: Estimated calories per serving.
- `ingredients`: A list of objects with `quantity`, `unit` (SI units), and `name`.
- `instructions`: A list of step-by-step instructions using imperative sentences.
- `allergyWarnings`: A list of any allergens contained in the recipe.
- `substitutions`: Suggested ingredient substitutions.
- `storageTips`: Advice on how to store leftovers.
- `shoppingList`: An object grouping all ingredients into categories: Fruits & Vegetables; Dairy & Eggs; Pantry; Meat/Fish/Alternatives; Spices & Misc.
- `story`: A narrative between 60–80 words written in the selected chef's voice.
- `reasoning_checks`: An array with checks such as `quantities reasonable`, `times reasonable`, `allergies marked`.

The Markdown section should present the recipe with headings, ingredient list, numbered steps, and the story in Swedish.

## 2. Chef storytelling prompt

Generate a 60–80 word story introducing the recipe in Swedish. The voice and cultural references should reflect the chosen chef’s background. Include exactly one concrete cooking technique tip. The tone must match the chef profile.

## 3. Weekly menu prompt

Generate a weekly menu in Swedish based on user preferences, allergies, available ingredients, and budget. The output should be a JSON object containing:
- `menu`: A list with seven entries for each day of the week. Each entry should include `day`, `mealType` (e.g., Breakfast, Lunch, Dinner), `recipeTitle`, and a short description.
- `shoppingList`: A consolidated shopping list categorized as in the recipe prompt.
- `summary`: A short Swedish summary describing the overall theme and balance of the menu.

## Guardrails

- Validate that ingredient quantities and cooking times are realistic.
- Always identify and propagate known allergens.
- Constrain the story length to between 60 and 80 words.
- Ensure all user-facing content is in Swedish.
- Reject or flag hallucinated ingredients or unrealistic steps.
