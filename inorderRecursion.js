/*

     1
    / \
   2   3
  / \
 4   5

*/

class node {
 constructor(valeur) {
  this.valeur = valeur;
  this.gauche = null;
  this.droit = null;
 }
}

let racine = null;

function inorder(noeud) {

 if (noeud == null) return;

 inorder(noeud.gauche);
 console.log(noeud.valeur);
 inorder(noeud.droit);

}

racine = new node(1);
racine.gauche = new node(2);
racine.droit = new node(3);
racine.gauche.gauche = new node(4);
racine.gauche.droit = new node(5);

inorder(racine);
/*

4
2
5
1
3

*/

console.log(racine);
/*

node {
  valeur: 1,
  gauche: node {
    valeur: 2,
    gauche: node { valeur: 4, gauche: null, droit: null },
    droit: node { valeur: 5, gauche: null, droit: null }
  },
  droit: node { valeur: 3, gauche: null, droit: null }
}

*/