const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
       const joueur = buttons[i].innerHTML;
       const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
       let resultat = '';

       if (joueur === robot) {
           resultat = 'Egalité';
       }
       else if ((joueur === 'Pierre' && robot ==='Ciseaux') || 
       (joueur === 'Feuille' && robot ==='Pierre') || 
       (joueur ==='Ciseaux' && robot ==='Feuille')) {
           resultat = 'Gagné'
       }
       else {
           resultat = 'Perdu';
       }

       document.querySelector('.resultat').innerHTML = `
       ${resultat}`

       document.querySelector('.resultatSubText').innerHTML = `
       Joueur : ${joueur} VS
       Robot : ${robot} `
    })
}
