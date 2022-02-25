// Objectif: la lecture du fichier avec le fs.read 
// 1) Créer une app Node qui permet à l'utilisateur d'encoder des personnes (nom et prénom). Ensuite, les donnes sont enregistrer dans une fichier texte. Si l'utilisateur relance l'app, les données précédentes ne doivent pas être perdu !


// console.log('A quoi sert cette constante');
const READLINE = require('readline'); 
// const fs = require('fs)'); //Une formule predefinie
const path = require('path'); 

const reader = READLINE.createInterface({
    // Avec la méthode createInterface on a 2 param 
    input: process.stdin,
    output: process.stdout
});
// console.log(`Ceci est le debut de mon file`);
const fs = require('fs');
// const { error } = require('console');
// const { options } = require('nodemon/lib/config');
const filename = path.resolve(__dirname,'data', 'personne.txt');

function SetPeople(){
    // console.log('>\n');
    reader.question('Veuillez encodez un nom et prénom:', answer => {
        writeOptions(answer);
        nextPerson(answer);
});

}

function writeOptions(people){
    
const optionFile = {
    encoding: 'utf-8',
    flag: "a"
  
};
fs.writeFile(filename,people + '\n', optionFile, (error)=>{
    // if(error){
    //     console.log(err);
    //     return
    // }
});
console.log(`les données que vous venez de rajouter est : ${people} \n`);
}

// Etape ou il faut poser la question

function nextPerson(){
    // Je pause ma seconde question pour pouvoir remplir mes donnés
    reader.question('Avez-vous un autre nom pour moi? (yes-no)', next =>{
        // Creer une variable pour mettre par default lowercase et qui signifie le nom ou prenom encodés
        next = next.toLowerCase();
        switch(next) {
            case 'yes':
                SetPeople();
                break;
            case 'no':
                reader.close();
                break;
            default:
                console.log(`Les données saisis ${next} ne sont pas valide (yes-no)`);
                nextPerson();
                break;
        };


    })

}
SetPeople();
