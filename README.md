# medics-tool-template

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve or npm start
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Documentation

https://docs.google.com/document/d/1QRnS4Dzx8e4DGYxQq7rRnbuTYRkf-D4rGQNp6tdVeJQ/edit?usp=sharing


### Point sur l'état actuel de l'app

Score à faire : (cf. Colonne To Do - Score sur Trello)
- Clairance de la créatine
- BASFI
- ESSDAI
- Syndrome de Sharp
- LDL-Cible
- GSLA

Score en cours :
- Critères de New-York
- BVAS
- PPR EULAR ACR 2012
- Lesquesnes genou et hanche

Au niveau du CSS, il y a des problème entre le CSS contenu dans src/sass/glbal.scss et les styles contenu dans les différents Scores (problèmes causés par les balises "style" qui ne sont pas "scoped"). 
Il faudra donc repasser sur tout le CSS 
Certains input ne sont plus checkés à cause du CSS et impacte le bon fonctionnement des algo.
