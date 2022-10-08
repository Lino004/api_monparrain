# api_monparrain
Ceci est une api en node.js avec express.js pour un projet nommé "Mon Parrain"
## Etape pour initialiser le projet
- ``yarn install``
- Créer un fichier `.env` avec `DB_DEV=postgres://user:password@localhost:5432/databasename`
- Si la base donnée n'est pas encore créée, lancer la commande `npx sequelize db:create` pour le faire
- Lancer les migrations `yarn migrate`
- Si vous avez besoin de données initial lancer `yarn seed`
