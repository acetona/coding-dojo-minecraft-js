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
