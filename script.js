const correctPassword = '934'; // Change ce mot de passe selon tes besoins

document.getElementById('submit').addEventListener('click', () => {
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    const secretContent = document.getElementById('secret-content');

    // Efface le message et cache le contenu secret
    message.textContent = '';
    secretContent.classList.add('hidden');

    // Crée le loader
    let loader = document.createElement('p');
    loader.id = 'loader';
    loader.textContent = 'Désamorçage';
    document.body.appendChild(loader); // Ajoute le loader au body

    let dotCount = 0;
    const maxDots = 10;

    // Ajoute des points progressivement
    const dotInterval = setInterval(() => {
        if (dotCount < maxDots) {
            loader.textContent += '.';
            dotCount++;
        } else {
            loader.textContent = 'Désamorçage'; // Réinitialise les points
            dotCount = 0;
        }
    }, 500); // Ajoute un point toutes les 500 ms

    // Délai avant d'afficher le message
    setTimeout(() => {
        clearInterval(dotInterval); // Stoppe l'animation des points
        loader.remove(); // Supprime le loader

        if (password === correctPassword) {
            message.textContent = 'DÉSAMORÇAGE RÉUSSI !';
            message.style.color = 'green';
            secretContent.classList.remove('hidden');
        } else {
            message.textContent = 'ERREUR LORS DU DÉSAMORÇAGE !';
            message.style.color = 'red';
        }
    }, 5000); // Délai de 5 secondes (5000 ms)
});
