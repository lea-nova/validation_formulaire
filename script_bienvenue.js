let maDiv = document.createElement("div")

let h1 = document.querySelector(".titre")
let section = document.getElementById("maDiv")



let nom = localStorage.getItem("nom");
let prenom = localStorage.getItem("prenom");
let naissanceDate = localStorage.getItem("date")
let lieuNaissance = localStorage.getItem("naissance")
let signeAstro = localStorage.getItem("astro")
let email = localStorage.getItem("email");
let description = localStorage.getItem("description")


console.log(prenom)
console.log(nom)
console.log(naissanceDate)
console.log(lieuNaissance)

document.body.appendChild(section)

section.appendChild(maDiv)



const creerParagraphe = (chaineCaractere, element) => {

    let paragraphe = document.createElement("p");
    paragraphe.innerText = chaineCaractere + element

    return paragraphe
}

maDiv.append(creerParagraphe("Nom : ", nom))
maDiv.append(creerParagraphe("Prénom : ", prenom))
maDiv.append(creerParagraphe("Date de naissance : ", naissanceDate))
maDiv.append(creerParagraphe("Lieu de Naissance : ", lieuNaissance))
maDiv.append(creerParagraphe("Signe astrologique : ", signeAstro))
maDiv.append(creerParagraphe("Email : ", email))
maDiv.append(creerParagraphe("Description : ", description))

