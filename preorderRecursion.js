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

function preorder(noeud) {

 if (noeud == null) return;

 console.log(noeud.valeur);
 preorder(noeud.gauche);
 preorder(noeud.droit);

}

racine = new node(1);
racine.gauche = new node(2);
racine.droit = new node(3);
racine.gauche.gauche = new node(4);
racine.gauche.droit = new node(5);

preorder(racine);
/*

1
2
4
5
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