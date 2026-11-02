/* =====================================================================
   CONTENU DU SITE ADVENTICE
   ---------------------------------------------------------------------
   Tout le texte du site est ici. Pour modifier le site, il suffit de
   changer ce qui est entre guillemets "…", puis d'enregistrer (Commit).

   - Ajouter un cocktail : copie un bloc { … }, de l'accolade ouvrante
     à la fermante (virgule comprise), colle-le juste en dessous et
     change le texte.
   - base : "cucumis", "rubus" ou "fragaria" (la bouteille utilisée).
   - verre : "highball", "tumbler", "coupe", "vin", "ballon" ou "mug".
   - preparation : facultatif. Laisse [] s'il n'y en a pas.
   ===================================================================== */

const CONTENU = {

  accroche: "Adventice est un apéritif sans alcool original à base de fruits et plantes 100 % français. Il saura accompagner vos moments conviviaux en cocktail ou simplement bien frais rallongé avec de l'eau gazeuse ou au tonic.",

  histoire: {
    titre: "L'histoire",
    paragraphes: [
      "Paul, écris ici l'histoire d'Adventice avec tes mots : d'où vient l'idée, pourquoi le sans alcool, pourquoi ces plantes."
    ],
    signature: "Paul Benedetti, fondateur"
  },

  bouteilles: [
    {
      id: "cucumis",
      nom: "Cucumis",
      notes: "Concombre · Menthe · Citron vert",
      texte: "",
      ingredients: "Eau, concombre, sucre, poivron, infusions de plantes, jus de citron vert"
    },
    {
      id: "rubus",
      nom: "Rubus",
      notes: "Framboise · Rose · Basilic",
      texte: "Rubus est un apéritif sans alcool aux arômes de framboise, rose et basilic. Le poivre de Timut apporte des notes d'agrumes et la gentiane offre une légère amertume en fin de bouche.",
      ingredients: "Eau, framboise, sucre, infusions de plantes, eau de rose. Produits issus de l'agriculture biologique"
    },
    {
      id: "fragaria",
      nom: "Fragaria",
      notes: "Fraise · Poivron · Piment",
      texte: "",
      ingredients: "Eau, fraise, sucre, poivron, infusions de plantes, jus de citron"
    }
  ],

  cocktails: [
    {
      nom: "Vert Cucumis",
      base: "cucumis",
      verre: "highball",
      ingredients: [
        "30 ml de Cucumis",
        "60 ml de thé vert de Chine",
        "15 ml de sirop de sucre",
        "2-3 feuilles de menthe",
        "Compléter à la ginger beer (30 ml)"
      ],
      preparation: []
    },
    {
      nom: "Rose Rubus",
      base: "rubus",
      verre: "tumbler",
      ingredients: [
        "30 ml de Rubus",
        "60 ml de thé noir aux fruits rouges",
        "15 ml de jus de citron vert",
        "15 ml de sirop de fleur de sureau",
        "2-3 feuilles de basilic"
      ],
      preparation: []
    },
    {
      nom: "Rouge Fragaria",
      base: "fragaria",
      verre: "coupe",
      ingredients: [
        "30 ml de Fragaria",
        "60 ml de thé vert menthe",
        "15 ml de sirop de grenadine",
        "2-3 feuilles de menthe",
        "Compléter à l'eau gazeuse (30 ml)"
      ],
      preparation: []
    }
  ],

  producteurs: {
    titre: "Le poivre du Gers",
    texte: "Paul, présente ici la productrice de poivre du Gers chez qui tu achètes ton poivre : son nom, sa ferme, ce qu'elle cultive.",
    lien_video: ""
  },

  tshirt: {
    titre: "Le tee-shirt Adventice",
    texte: "Le monogramme A, « Apéritif sans alcool ».",
    infos: ""
  },

  contact: {
    ville: "31400 Toulouse",
    email: "contact@adventice-aperitif.fr",
    instagram: "adventice_aperitif",
    conservation: "À conserver au réfrigérateur et à consommer dans les 4 semaines après ouverture."
  }
};
