# coding-dojo-minecraft-js

====

Kit d'animation de coding dojo avec Minecraft / Javascript en Test Driven Development et Peer Programming.

# Préambule : c'est quoi un coding dojo ?
Le coding dojo a pour objectif de réunir des développeurs hors contexte projet, dans la joie et la bonne humeur, afin de résoudre un problème algorithmique dans un temps impartie.
Chaque personne présente s'engage à respecter les Beck Design Rules (http://martinfowler.com/bliki/BeckDesignRules.html en référence à Kent Beck) par ordre de priorité :
* Passer les tests (ça implique que le code code est couvert pas des tests unitiares)
* Le code est lisible et facilement compréhensible
* Pas de duplication de code
* Le stricte minimum nécessaire d'élèments (classes, méthodes, etc...)


# Références du sujet
- Minecraft (le jeu) : https://fr.wikipedia.org/wiki/Minecraft
- canarymod (le serveur) : https://github.com/CanaryModTeam/CanaryMod
- ScriptCraft (le plugin du serveur) : https://github.com/walterhiggins/ScriptCraft
- Javascript (le langage) : https://fr.wikipedia.org/wiki/JavaScript
- Drone (le drone constructeur dans Minecraft avec ScriptCraft) : https://youtu.be/G523yLqZtZA

# Références des méthodes
- TDD : https://fr.wikipedia.org/wiki/Test_driven_development
- Pair Programming : https://fr.wikipedia.org/wiki/Programmation_en_bin%C3%B4me
- Pour aller plus loin : https://fr.wikipedia.org/wiki/Extreme_programming


# Prérequis
- Java JDK 6.x ou supérieur
- Minecraft 1.8.8 ou supérieur

# Installation
- Se rendre sur http://scriptcraftjs.org/download/latest/
- Télécharger le JAR de CanaryMod disponible et le placer dans le répertoire de votre choix (attention, à la première exécution il va placer à la racine du répertoire ou se trouve le JAR un ensemble de fichiers répertoire nécessaires à son fonctionnement)
- Télécharger le JAR de Scriptcraft
- Lancer un terminal de commande et se déplacer dans le répertoire ou se trouve vote JAR CanaryMod puis éxecuter le JAR :
      java -jar CanaryMod-1.8.0-1.2.1-SNAPSHOT-shaded.jar
- Normalement, le lancement doit créer un tas de répertoire et de fichiers dans le répertoire racine ou se trouve le JAR de CanaryMod. Editer le fichier eula.txt :&hellip;

    eula.txt:
      eula=true

- Copier scriptcraft.jar dans le répertoire CanaryMod/plugins
- Penser a éditer votre fichier de configuration serveur comme indiqué ici : https://github.com/walterhiggins/ScriptCraft/blob/e3079047a1f97603c6f0ce5f6893e1ed17735825/docs/YoungPersonsGuideToProgrammingMinecraft.md#configuring-your-server-optional
- Lancer à nouveau dans le terminal de commande le JAR CanaryMod :
      java -jar CanaryMod-1.8.0-1.2.1-SNAPSHOT-shaded.jar

Félicitation, votre serveur est installé !

# Minecraft : connexion au serveur et test de Scriptcraft
- Lancer Minecraft jusqu'à arriver à l'écran de choix du mode de jeu (Single Player, Multiplayer, etc..)
- Choisir Multiplayer puis Direct Connect
- Saisir l'adresse du serveur dans le champ éponyme. Si vous le lancez en local, vous pouvez saisir localhost
- Rejoignez le serveur
- Une fois dans le jeu, ouvrir la console (par défaut touche T), et saisir :
      /js 1+2
- Si l'interface vous répond 3, c'est que tout est OK

# Place au coding dojo : le randori
- Récupérer wall_world.js et wall_world-test.js
- Les déposer sur votre serveur local CanaryMod/scriptcraft/plugins/
- Pour qu'ils soient pris en compte, il faut soit redémarrer le serveur. Soit dans la console in-game saisir "/js refresh"

Si tout se passe bien, dans le jeu, vous pouvez utiliser les deux fonctions suivantes :
- /js mur("texte")  | cette fonction permet de faire un mur de votre texte en ASCII
- /js testMur     | passe l'ensemble des tests unitaires de la partie fonctionnelle qui génère le mur que vous aurez pu écrire, pour vous donner un résultat visuel.

L'objectif c'est de faire en sorte que la fonction mur puisse générer un mur (si si!), sur lequel on pourra choisir le texte en ASCII positionné dessus.

Biensur de base, ça ne marche pas. A vous d'implémenter la solution :)

# TDD : le Test Driven Development
Le TDD est un des piliers de l'extreme programming, il vise non seulement à faire des tests, mais surtout à écrire test réduit, d'une fonctionnalité réduite en amont du développement. Dans un second temps, il s'agira de faire en sorte que le test écrit précédement passe sans anticipé les étapes suivantes.
Le déroulement schématique est le suivant :

1 - écriture du test

2 - vérification que le test ne passe pas (rouge)

3 - écriture du code répondant de façon minimale au test

4 - vérification que le test passe (vert) + que les précédents n'ont pas été dégradés

5 - nettoyage et refactorisation du code avant de repasser à la phase 1

# Pair Programming
Autre élément majeur de l'extreme programming, le pair programming ou programmation en binome vise à maximiser le feedback et ceux le plus tôt possible : sur la tâche qui est en train de se réaliser. Le binome peut opter pour différentes stratégies :
- tourner au bout d'une timebox définie
- le premier rédige les tests, l'autre répond aux tests (cf. TDD)
etc..

Le dialogue doit toutefois rester intense dans la fréquence d'échange orale. A défaut, ce n'est plus du pair programming mais un développeur et son assistant :)
