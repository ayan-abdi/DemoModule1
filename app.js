const fs = require('fs')
// fs est utilisée lorsqu'on veut ecrire un file
const path = require('path')

// Création du "filename" via le module 'path' de NodeJs
 const filename = path.resolve('data', 'todo-list.txt');
//  data, todo-list est le chemin pour atteinde le file en question sans metttre des ./
console.log(`Le fichier est dispo sur : '${filename}'`);

// Lecture du contenu du fichier via le module 'fs' (Async)
fs.readFile(filename, { encoding:'utf-8' },(error, data) => {
    console.log('>Lecture du fichier (Async)');
    // demander comment integrer dans ma methode readFile  l'objet pour faire afficher mon buffer en string 

    if (error) {
        console.error(error);
        return; 
        
    }
    console.log('Le contenu du fichier est : ');
    console.log(data);  //Les données sous forme d ...
    console.log(data.toString('utf-8'));  //Convertion sous forme de string
});

// Demo de la création dd'un fichier

const newFile = path.resolve('data', 'exemple.txt'); 
console.log(`Le nouveau fichier est : '${newFile}'`);

const data = 'Je comprend un peu moins '

fs.writeFile(newFile, data, { flag: 'w' }, (error) =>{
    console.log('>Ecriture d\'un fichier');
}); 

// Obtenir les informations d'un element

fs.stat(filename, (error, stats) =>{
    console.log('>Obtenir les metadatas d\'un fichier');

    if(error) {
        console.log(error);
        return; 
    }

    console.log(stats);
    console.log('L\'objet "stats"');

    console.log('L\'element est un fichier ou un dossier');
    if(stats.isFile()){
    
        console.log('L\'element est un fichier ou un dossier');
    }
    else if(stats.isDirectory) {
    console.log('C\'est un repertoire');
    }
    console.log('\n');
})
// Utilisation  des Flux
const buffer = Buffer.alloc(128)
// Methode open
// r+(lecture et ecriture du fichier)
fs.open(filename , 'r+', (error, fd) => {

    for (let demo = 0; demo < 9; demo += 10) {
        const buffer = Buffer.alloc(10);
        
        const bytes = fs.read(fd, buffer, 0, buffer.length, null, (error, bytes) => {
            if(error) {
                // En cas d'erreur
                    console.error();
                    return;
                }
            
                console.log(`Nombre de bytes lu : ${bytes}`);
            
                if(bytes > 0) {
                    const data = buffer.slice(0, bytes);
                    console.log(data);
                    console.log(data);
                    console.log(data.toString('utf-8'));
                }
                
            });
        }
    } 

};  
// buffer:Correspond à un bloc memoire qui permet de stockage temporaire 
// offset: A partir d'ou on debute
//  le but de la lecture programmé est d'obtimiser l'espace de rame memoire
