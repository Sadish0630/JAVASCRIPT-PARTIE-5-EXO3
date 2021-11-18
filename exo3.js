//Regex qui accepte lettres minuscule/majuscule + accents + tirets
const regexName = /^[a-zÀ-ÖØ-öø-ÿ]*([\-][a-zÀ-ÖØ-öø-ÿ]*)?$/i
//Regex acceptant un format mail
const regexMail = /^[a-z0-9]([a-z0-9\-\_\.]*)[@]([a-z0-9\.]+)[\.]([a-z]){2,5}/i
//Regex qui accepte un âge de 1 à 130 ans
const regexAge = /^(([1-9])|([1-9][0-9])|(1[0-2][0-9])|(130))$/
//Message d'erreur pour les différents champs
const errorMessageName = "Merci d'entrer un nom uniquement en lettres, il est possible d'utiliser un tiret."
const errorMessageFirstname = "Merci d'entrer un prénom uniquement en lettres, il est possible d'utiliser un tiret."
const errorMessageMail = "Merci d'entrer une adresse mail avec un format valide."
const errorMessageAge = "Merci d'entrer un age entre 1 et 130 en chiffre."


nameInput.addEventListener("input", function () {
    regexTest(this, regexName, errorMessageName)
})
firstnameInput.addEventListener("input", function () {
    regexTest(this, regexName, errorMessageFirstname)
})
mailInput.addEventListener("input", function () {
    regexTest(this, regexMail, errorMessageMail)
})
ageInput.addEventListener("input", function () {
    regexTest(this, regexAge, errorMessageAge)
})
//Création de la fonction qui vérifie la saisie utilisateur et qui affiche le message correspondant.
function regexTest(inputFull, regex, errorMessage) {
    //Création de la constante permettant de faire l'id du p
    const pId = "p" + inputFull.id
    let p = document.getElementById(pId)
    //On vérifie que le p existe. Si c'est le cas on le modifie. Sinon on le crée
    if (p == null) {
        //Création du paragraphe virtuel
        p = document.createElement("p")
        p.id = pId
    }

    //Création de la condition du test RegExp.
    if (!regex.test(inputFull.value)) {
        //Création texte refus de validation.
        p.innerText = errorMessage
        //Changement de couleur.
        p.style.color = "red"
    } else {
        //Création du texte du paragraphe de validation.
        p.innerText = "Bien joué !"
        //Changement de couleur.
        p.style.color = "green"
    }
    inputFull.insertAdjacentElement("afterend", p)
}