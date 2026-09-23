const inventaire = [
  { nom: "pommes", quantité: 2 },
  { nom: "bananes", quantité: 0 },
  { nom: "cerises", quantité: 5 },
];

function estCerises(fruit) {
  return fruit.nom === "cerises";
}

console.log(inventaire.find(estCerises));
// { nom: 'cerises', quantité: 5}