# XSS Vulnerability Demo in Node.js

Ce projet est une application simple développée avec Node.js et Express qui démontre une vulnérabilité Cross-Site Scripting (XSS). Il implémente un système de commentaires basique où les utilisateurs peuvent soumettre des commentaires qui sont ensuite affichés à tous.

## Fonctionnement

L'application offre une page unique où les utilisateurs peuvent soumettre des commentaires via un formulaire. Les commentaires sont stockés dans une liste sur le serveur et rendus directement dans le HTML de la page, créant ainsi une vulnérabilité XSS.

## Comment lancer le projet

### Prérequis

- Node.js installé sur votre machine.

### Installation

1. Clonez le dépôt sur votre machine locale :


2. Installez les dépendances du projet :

npm i


L'application sera accessible à l'adresse `http://localhost:3000`.

## Comment tester la vulnérabilité XSS

Pour tester la vulnérabilité XSS, suivez ces étapes :

1. Ouvrez votre navigateur et naviguez vers `http://localhost:3000`.
2. Dans le champ de texte du formulaire de commentaire, saisissez un script JavaScript malveillant. Par exemple :
ex: <script>alert('XSS')</script>

3. Soumettez le formulaire. Si une boîte d'alerte apparaît, cela démontre que l'application est vulnérable aux attaques XSS.
