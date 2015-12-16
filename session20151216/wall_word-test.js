/**
 * Methode de tests unitaires inspiré par l'article suivant :
 * - http://blog.xebia.fr/2013/03/21/introduction-aux-tests-unitaires-en-javascript/
 */
var wall_word = require("./wall_word.js");
var total;
var succeed;

/**
 * Fonction d'assertion qui a pour parametres :
 *  - message : un resume du test affichable
 *  - expr : l'expression a evaluer
 *
 * ==> Cette fonction va faire appel à la methode output pour affichage du rendu
 */
 function assert(message, expr){
   total++;
  if(!expr){
   output(false, message);
  } else {
   succeed++;
   output(true, message);
  }
 }

/**
 * Fonction d'affichage et de mise en forme conditionne Cas OK / KO qui a pour parametres :
 *  - result : l'etat de validite du test
 *  - message : un resume du test affichable
 *
 * ==> Cette fonction va faire appel à la methode output pour affichage du rendu
 */
 function output(result, message){
  // Si le resultat du test est valide
  if(result) {
    // Le drone cree un mur de 3x5x1 a la suite du mur de test
    // et ecrit sur un panneau en bois le rendu du test ainsi qu'une torche allumée au dessus
    drone.move("position-depart-test").right((total*3)-3).box(blocks.wool.green,3,5,1);
    drone.move("position-depart-test").right((total*3)+1-3).up(4).box(blocks.torch_redstone_active,1,1,1);
  }
  // Sile resultat du test est invalide
  else {
    // Le drone cree un mur de 3x5x1 a la suite du mur de test
    // et ecrit sur un panneau en bois le rendu du test
    drone.move("position-depart-test").right((total*3)-3).box(blocks.wool.red,3,5,1);
    drone.move("position-depart-test").right((total*3)+1-3).back(1).signpost([message, 'Test KO']);
  }
 }

/**
 * Fonction de comparaison de deux tableaux de chaine de caracteres
 * IN  | tableau1 : le premier tableau de chaine de caracteres a comparer avec le tableau 2
 * IN  | tableau2 : le deuxième tableau de chaine de caracteres a comparer avec le tableau 1
 * OUT | retourne TRUE si les deux tableaux en entree contiennent les memes valeurs, sinon retourne FALSE
 */
function comparerTableaux(tableau1, tableau2) {
  var reponse = true;
  if (tableau1.length != tableau2.length) reponse = false;
  else for(var i = 0; i < tableau1.length; i++) {
    if(tableau1[i] != tableau2[i]) reponse = false;
  }
  return reponse;
}

/**
 * Exemple des tests
 *
 */
function testMur() {
  // Initialisation du drone avec sa position de depart
  drone = up(1).chkpt("position-depart-test");
  // Initialisation du bilan d'execution des tests
  total = 0;
  succeed = 0;

  // Initialisation du tableau contenant l'alphabet en ASCII
  var test1 = new Array(5);
  test1[4] = " #  ##   ## ##  ### ###  ## # # ###  ## # # #   # # ###  #  ##   #  ##   ## ### # # # # # # # # # # ###     ";
  test1[3] = "# # # # #   # # #   #   #   # #  #    # # # #   ### # # # # # # # # # # #    #  # # # # # # # # # #   #     ";
  test1[2] = "### ##  #   # # ##  ##  # # ###  #    # ##  #   ### # # # # ##  # # ##   #   #  # # # # ###  #   #   #      ";
  test1[1] = "# # # # #   # # #   #   # # # #  #  # # # # #   # # # # # # #    ## # #   #  #  # # # # ### # #  #  #       ";
  test1[0] = "# # ##   ## ##  ### #    ## # # ###  #  # # ### # # # #  #  #     # # # ##   #  ###  #  # # # #  #  ###     ";

  var testA = new Array(5);
  testA[4] = " #  ";
  testA[3] = "# # ";
  testA[2] = "### ";
  testA[1] = "# # ";
  testA[0] = "# # ";

  var testB = new Array(5);
  testB[4] = "##  ";
  testB[3] = "# # ";
  testB[2] = "##  ";
  testB[1] = "# # ";
  testB[0] = "##  ";

  var testAB = [];
  testAB[4] = " #  ##  ";
  testAB[3] = "# # # # ";
  testAB[2] = "### ##  ";
  testAB[1] = "# # # # ";
  testAB[0] = "# # ##  ";

  var testA_B = [];
  testA_B[4] = " #      ##  ";
  testA_B[3] = "# #     # # ";
  testA_B[2] = "###     ##  ";
  testA_B[1] = "# #     # # ";
  testA_B[0] = "# #     ##  ";

  var testArobase = [];
  testArobase[4] = " #   #  ##  ";
  testArobase[3] = "# # # # # # ";
  testArobase[2] = "### ### ##  ";
  testArobase[1] = "# # # # # # ";
  testArobase[0] = "# # # # ##  ";

  assert('Test alphabet', comparerTableaux(wall_word.caracteresVersAscii('abcdefghijklmnopqrstuvwxyz '),test1));
  assert('Lettre A', comparerTableaux(wall_word.caracteresVersAscii('A'), testA));
  assert('Lettre B', comparerTableaux(wall_word.caracteresVersAscii('B'), testB));
  assert('Lettre AB', comparerTableaux(wall_word.caracteresVersAscii('AB'), testAB));
  assert('Lettre A B', comparerTableaux(wall_word.caracteresVersAscii('A B'), testA_B));
  assert('Lettre A@B', comparerTableaux(wall_word.caracteresVersAscii('A@B'), testArobase));
// TESTEUR : ta tache commence ici !

  // Tout a la fin, le drone cree un mur de 3x5x1
  // et ecrit sur un panneau en bois le nombre de tests en succes sur le nombre de test total
  drone.move("position-depart-test").right((total*3)).box(blocks.wool.blue,3,5,1);
  drone.move("position-depart-test").right((total*3)+1).back(1).signpost(['Bilan tests OK :',succeed + '/' + total]) ;

}

Drone.extend( testMur );
