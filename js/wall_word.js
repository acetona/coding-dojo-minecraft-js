'use strict';
// Declaration de variable globale : necessaire a l'utilisation du drone dans Minecraft/Scriptcraft
var Drone = require('drone'),
    blocks = require('blocks');


/**
 *
 * Fonction qui a partir d'une chaine de caracteres, dessine un mur avec la chaine de caracteres en ASCII dans Minecraft.
 *
 * IN  | caracteres : le caractere ou la chaine de caracteres a afficher en ASCII dans Minecraft.
 * OUT | N/A
 *
 * PREREQUIS SCRIPTCRAFT : drone, blocks
 *
 */
function mur(caracteres) {

  // Initialisation des blocks qui constituront le mur
  var diese = blocks.wool.gray;
  var espace = blocks.gold;

  // Initialisation du drone avec sa position de depart
  var drone = up(1).chkpt("position-depart");

  // Appel de la fonction qui va transformer la chaine de caracteres en code ASCII
  var tableauAscii = caracteresVersAscii(caracteres);

  // Parcours chaque ligne du tableau ASCII
  for(var ligne = 0; ligne < tableauAscii.length; ligne++) {
    var ligneAscii = tableauAscii[ligne].split("");
    // Le drone revient a sa position de depart et monte a la ligne courante
    drone.move("position-depart").up(ligne);

    // Parours chaque caractere de la ligne courante
    for(var caractere = 0; caractere < ligneAscii.length; caractere++) {
      if(ligneAscii[caractere] == "#") drone.box(diese);
      else drone.box(espace);
      drone.right(1);
    }
  }

}


/**
 *
 * Fonction qui a partir d'une chaine de caracteres, retourne son equivalent en ASCII.
 *
 * IN  | caracteres : le caractere ou la chaine de caracteres a afficher en ASCII.
 * OUT | tableau de  5 occurences (lignes) contenant une succession d'espace ' ' et de dièse '#' representant sous forme ASCII
 *       le chaine de caracteres passee en entree.
 *
 */
exports.caracteresVersAscii = function(caracteres) {
  // Initialisation du tableau contenant l'alphabet en ASCII
  var alphabet = new Array(5);
  alphabet[4] = " #  ##   ## ##  ### ###  ## # # ###  ## # # #   # # ###  #  ##   #  ##   ## ### # # # # # # # # # # ### ";
  alphabet[3] = "# # # # #   # # #   #   #   # #  #    # # # #   ### # # # # # # # # # # #    #  # # # # # # # # # #   # ";
  alphabet[2] = "### ##  #   # # ##  ##  # # ###  #    # ##  #   ### # # # # ##  # # ##   #   #  # # # # ###  #   #   #  ";
  alphabet[1] = "# # # # #   # # #   #   # # # #  #  # # # # #   # # # # # # #    ## # #   #  #  # # # # ### # #  #  #   ";
  alphabet[0] = "# # ##   ## ##  ### #    ## # # ###  #  # # ### # # # #  #  #     # # # ##   #  ###  #  # # # #  #  ### ";

  // Ta tache commence ici :)

  return alphabet;
}

Drone.extend( mur );
