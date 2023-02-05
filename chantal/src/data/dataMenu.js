import { v4 as uuidv4 } from "uuid";
import salade from '../produits/salade-cesar.jpg'
import soupe from '../produits/soupe-oignon.jpg'
import chevre from '../produits/chevre-miel.jpg'
import coquille from '../produits/Coquilles.jpg'
import oeuf from '../produits/oeuf.jpg'
import carbo from '../produits/carbonnade.jpg'
import choucroute from '../produits/Choucroute.jpg'

const dataMenu = [
    { 
        id: uuidv4(),
        categorie: "entree",
        nom: "salade césar",
        image: salade,
        prix: "10,50€"
    },
    {
        id: uuidv4(),
        categorie: "entree",
        nom: "soupe à l'oignon",
        image: soupe,
        prix: "5,00€"
    },
    {
        id: uuidv4(),
        categorie: "entree",
        nom: "croustillant de chèvre et poires au miel",
        image: chevre,
        prix: "8,00€"
    },
    {
        id: uuidv4(),
        categorie: "entree",
        nom: "Coquilles saint-jacques",
        image: coquille,
        prix: "15,00€"
    },
    {
        id: uuidv4(),
        categorie: "entree",
        nom: "Oeufs mimosa",
        image: oeuf,
        prix: "3,50€"
    },
    {
        id: uuidv4(),
        categorie: "plat",
        nom: "Carbonnade flammande",
        image: carbo,
        prix: "17,00€"
    },
    {
        id: uuidv4(),
        categorie: "plat",
        nom: "Choucroute",
        image: choucroute,
        prix: "18,00€"
    },
    {
        id: uuidv4(),
        categorie: "plat",
        nom: "Dahl de lentilles corail.",
        // image:
        prix: "15,00€"
    },
    {
        id: uuidv4(),
        categorie: "plat",
        nom: "Tartare de saumon",
        // image:
        prix: "3,50€"
    },
    {
        id: uuidv4(),
        categorie: "plat",
        nom: "Burger de Chantal",
        // image:
        prix: "16,50€"
    },
    {
        id: uuidv4(),
        categorie: "dessert",
        nom: "Tiramisu",
        // image:
        prix: "6,00€"
    },
    {
        id: uuidv4(),
        categorie: "dessert",
        nom: "Café gourmand",
        // image:
        prix: "7,50€"
    },
    {
        id: uuidv4(),
        categorie: "dessert",
        nom: "Fondant au chocolat",
        // image:
        prix: "6,00€"
    },
    {
        id: uuidv4(),
        categorie: "dessert",
        nom: "Dame blanche",
        // image:
        prix: "8,00€"
    },
    {
        id: uuidv4(),
        categorie: "dessert",
        nom: "Cheesecake",
        // image:
        prix: "6,50€"
    },
    {
        id: uuidv4(),
        categorie: "boisson",
        nom: "Boissons sans alcool",
        // image:
        prix: "3,00€"
    },
    {
        id: uuidv4(),
        categorie: "boisson",
        nom: "Vin rouge",
        // image:
        prix: "3,70€"
    },
    {
        id: uuidv4(),
        categorie: "boisson",
        nom: "Vin blanc",
        // image:
        prix: "3,70€"
    },
    {
        id: uuidv4(),
        categorie: "boisson",
        nom: "Bière",
        // image:
        prix: "6,50€"
    },
    {
        id: uuidv4(),
        categorie: "boisson",
        nom: "Café",
        // image:
        prix: "2,50€"
    },
];

export default dataMenu;
