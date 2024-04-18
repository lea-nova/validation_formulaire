

function validerForm() {


    let nom = document.getElementById("nom");
    let erreurNom = document.getElementById("erreurNom");

    let prenom = document.getElementById("prenom")
    let erreurPrenom = document.getElementById("erreurPrenom");


    let dateNaissance = document.getElementById("date");
    let erreurDate = document.getElementById("erreurDate");
    let regexDateNaissance = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/

    let lieuNaissance = document.getElementById("naissance");
    let erreurLieuNaissance = document.getElementById("erreurLieu");

    let signeAstro = document.getElementById("signeAstro")

    let erreurAstro = document.getElementById("erreurSigne")




    let email = document.getElementById("email");
    let erreurEmail = document.getElementById("erreurEmail");
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    let motDePasse = document.getElementById("mdp");
    let erreurMdp = document.getElementById("erreurMdp");
    let regexMdp = /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,}$/

    let confirmationMdp = document.getElementById("confirmation");
    let erreurConfirmation = document.getElementById("erreurConfirmationMdp")

    let description = document.getElementById("description");
    let erreurDescription = document.getElementById("erreurDescription")




    /*Nom*/
    if (nom.value.length < 3) {
        erreurNom.innerText = "Votre nom doit contenir plus de 2 caractères";
        erreurNom.style.color = "red";
        nom.focus();
    } else {
        erreurNom.innerText = "";
    }

    /*Prénom */
    if (prenom.value.length < 3) {
        erreurPrenom.innerText = "Votre prénom doit contenir plus de 2 caractères"
        erreurPrenom.style.color = "red";
        erreurPrenom.focus();
    } else {
        erreurPrenom.innerText = "";
    }

    /*Date de naissance*/
    if (!regexDateNaissance.test(dateNaissance.value)) {
        erreurDate.innerText = "Le champ n'est pas au format JJ-MM-AAAA";
        erreurDate.style.color = "red";
        erreurDate.focus();
    } else {
        erreurDate.innerText = "";
    }

    /*Lieu de naissance*/
    if (lieuNaissance.value.length < 3) {
        erreurLieuNaissance.innerText = "Le champ doit contenir au moins 2 caractères."
        erreurLieuNaissance.style.color = "red"
        lieuNaissance.focus();

    } else {
        erreurLieuNaissance.innerText = "";
    }


    /*Signe astro */

    if (signeAstro.value == "") {
        erreurAstro.innerText = "Il faut sélectionner un signe astrologique.";
        erreurAstro.style.color = "red"
        signeAstro.focus()

    } else {
        erreurAstro.innerText = "";
    }

    /*Email*/
    if (!regexEmail.test(email.value)) {
        erreurEmail.innerText = "Le champ email ne correspond pas au bon format";
        erreurEmail.style.color = "red";
        email.focus();
    } else {
        erreurEmail.innerText = "";
    }


    /*Mot de passe*/

    if (motDePasse.value.length < 6 || !regexMdp.test(motDePasse.value)) {
        erreurMdp.innerText = "Le champ n'est pas correctement rempli. 5 Caractères minimum, 1 majuscule, 1 minuscule et 1 caractère spécial";
        erreurMdp.style.color = "red";
        motDePasse.focus();

    } else {
        erreurMdp.innerText = "";
    }

    /* Confirmation mot de passe */

    if (motDePasse.value !== confirmationMdp.value) {
        erreurConfirmation.innerText = "Champ différent de 'Mot de passe'";
        erreurConfirmation.style.color = "red";
        confirmationMdp.focus();
    } else {
        erreurConfirmation.innerText = "";
    }


    // vérifier entre 10 et 15

    if (description.value.length < 10 || description.value.length > 16) {
        erreurDescription.innerText = "Erreur, le nombre de caractères doit être entre 10 et 15 caractères."
        erreurDescription.style.color = "red";
        description.focus();
    } else {
        erreurDescription.innerText = "";
    }

    /* Vérifier si tous les champs sont OK, sinon en renvoie FALSE */
    if (nom.value.length < 3 || prenom.value.length < 3 || (!regexDateNaissance.test(dateNaissance.value)) || lieuNaissance.value.length < 3 || !regexEmail.test(email.value) || (motDePasse.value.length < 6 || !regexMdp.test(motDePasse.value)) || motDePasse.value !== confirmationMdp.value || (description.value.length < 10 || description.value.length > 16) || signeAstro.value === "") {
        return false;
        // on peut marquer ici si erreur === true 
    } else {
        sauvegarderDonnees()
    }


    function sauvegarderDonnees() {
        localStorage.setItem("nom", nom.value)
        localStorage.setItem("prenom", prenom.value)
        localStorage.setItem("date", dateNaissance.value)
        localStorage.setItem("naissance", lieuNaissance.value)
        localStorage.setItem("astro", signeAstro.value)
        localStorage.setItem("email", email.value)
        localStorage.setItem("description", description.value)
        window.location.href = "bienvenue.html"
    }




}

function compteur() {

    let compteur = document.getElementById("compteur");
    let description = document.getElementById("description");

    compteur.innerText = description.value.length + " Caractère(s) "
    if (description.value.length < 10 || description.value.length > 15) {
        compteur.style.color = "red";
    } else {
        compteur.style.color = "green";
    }
}



let afficherMdp = document.querySelectorAll(".fa-eye")
let cacherMdp = document.querySelectorAll(".hidden")
let inputPassword = document.querySelector("#mdp")
let inputPasswordConf = document.querySelector("#confirmation")

const eventPassword = (nodeList) => {
    nodeList.forEach(element => {
        element.addEventListener("click", () => {
        })
    });
}
// eventPassword(afficherMdp)
// eventPassword(cacherMdp)

const motDePasseChamp = (elementUn, elementDeux, input) => {
    elementUn.addEventListener("click", () => {

        elementDeux.classList.remove("hidden")
        elementUn.style.display = "none"
        elementDeux.style.display = "inline"
        input.type = "text"

    })

    elementDeux.addEventListener('click', () => {
        elementUn.style.display = "inline"
        elementDeux.style.display = "none";
        input.type = "password"
    })
}
console.log(afficherMdp)
motDePasseChamp(afficherMdp[0], cacherMdp[0], inputPassword);
motDePasseChamp(afficherMdp[1], cacherMdp[1], inputPasswordConf);

// Pour charger les données 
window.addEventListener('load', () => {
    //Récupérer les valeurs save dans le localStorage et les entrer dans les champs.
    localStorage.getItem("nom") || '';
    localStorage.getItem("prenom") || '';
    localStorage.getItem("date") || '';
    localStorage.getItem("naissance") || '';
    localStorage.getItem("astro") || '';
    localStorage.getItem("email") || '';
    localStorage.getItem("description") || '';
})
