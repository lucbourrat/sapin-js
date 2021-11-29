Le projet sapin-js est un exercice d'algorythmie.
Vous devez écrire la fonction "sapin" pour dessiner celui-ci.
Il est interdit de toucher au DOM directement.
Vous devez utiliser les fonctions "addSpace", "addTree", "addTrunk" et "addLineBreak" pour dessiner le sapin.
Ces fonctions vont respectivement ajouter un cube "espace", un cube "arbre", un cube "tronc", et aller à la ligne.

La taille du sapin est passée en paramètre de la fonction "sapin". Soit x une taille demandée :
 - Le sapin doit comporter x étages (x triangles).
 - Le 1er étage comporte 4 lignes.
 - Chaque étage comporte une ligne de plus que l'étage précédent.
 - La 1ere ligne du 1er étage comporte un seul cube "arbre".
 - Chaque ligne d'un même étage comporte 2 cubes "arbre" de plus que la ligne précédente.
 - La 1ere ligne des étages 2 et 3 comporte 2 cubes "arbre" de moins que la dernière ligne de l'étage précédent. Tous les 2 étages, ce nombre de cubes en moins augmente de 2.
 - La largeur du tronc est égale à x si celui-ci est impaire. Dans le cas contraire, il est égale au nombre impaire inférieur le plus proche.
 - La hauteur du tronc est supérieur à sa largeur, de 1.


 sapin.css :
 - ligne 15 => décommenter cette ligne permet de centrer le sapin. Cela est intéressant dans un premier temps, avant d'implémenter l'ajout des espaces.
 - ligne 26 => décommenter cette ligne permet de quadriller le sapin, cela permet une meilleure visualisation des chose / des cubes pendant la phase de développement.