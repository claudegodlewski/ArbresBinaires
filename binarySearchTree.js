/*

     10
    /  \
   5   15
  / \
 2   7

*/

class node {
 constructor(valeur) {
  this.valeur = valeur;
  this.gauche = null;
  this.droit = null;
 }
}

let racine = null;

function inserer(valeur) {

 if (valeur == null) return;

 let nouveauNoeud = new node(valeur);
 let noeudActuel = racine;

 while (noeudActuel != null) {

   if (valeur < noeudActuel.valeur) {

      if (noeudActuel.gauche == null) { noeudActuel.gauche = nouveauNoeud; return; }
       else { noeudActuel = noeudActuel.gauche; }

   } else {

      if (noeudActuel.droit == null) { noeudActuel.droit = nouveauNoeud; return; }
       else { noeudActuel = noeudActuel.droit; }

     }

 }

}
 
function inorder(noeud) {
 if (noeud != null) {
  inorder(noeud.gauche);
  console.log(noeud.valeur);
  inorder(noeud.droit);
 }
}
 
racine = new node(10);
  
inserer(15);
inserer(5);
inserer(2);
inserer(7);

inorder(racine);
/*

2
5
7
10
15

*/

console.log(racine);
/*

node {
  valeur: 10,
  gauche: node {
    valeur: 5,
    gauche: node { valeur: 2, gauche: null, droit: null },
    droit: node { valeur: 7, gauche: null, droit: null }
  },
  droit: node { valeur: 15, gauche: null, droit: null }
}

*/