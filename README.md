# Site Adventice

Le site, c'est 3 choses :

- `contenu.js` : **tous les textes et les recettes**. C'est le seul fichier à modifier.
- `img/` : les images (logo, étiquettes, photos).
- `index.html` : la mise en page. Pas besoin d'y toucher.

## Modifier un texte ou une recette

1. Ouvre `contenu.js` sur GitHub et clique sur le crayon ✏️.
2. Change le texte entre guillemets `"…"`.
3. Clique sur **Commit changes**. Le site se met à jour en une minute environ.

## Ajouter un cocktail

Dans `contenu.js`, copie un bloc de cocktail, de `{` à `},`, colle-le juste en dessous et change le texte :

```js
{
  nom: "Mon nouveau cocktail",
  base: "rubus",          // cucumis, rubus ou fragaria
  verre: "coupe",         // highball, tumbler, coupe, vin, ballon ou mug
  ingredients: [
    "30 ml de Rubus",
    "…"
  ],
  preparation: []         // facultatif : ["Étape 1", "Étape 2"]
},
```

Attention à garder les guillemets, les virgules entre les lignes et les crochets. Si la page devient blanche après une modification, c'est souvent une virgule ou un guillemet en trop ou en moins.

## Changer une image

Remplace le fichier dans `img/` par un fichier qui porte **exactement le même nom** (par exemple `rubus.jpg`).

## QR codes

- Site : https://minitid.github.io/ADVENTICE/
- Cocktails au Cucumis : https://minitid.github.io/ADVENTICE/#cucumis
- Cocktails au Rubus : https://minitid.github.io/ADVENTICE/#rubus
- Cocktails au Fragaria : https://minitid.github.io/ADVENTICE/#fragaria
