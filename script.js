//1 je récupère les éléments de mon form (inputs) et mon form (myForm)
const inputs = document.getElementById("form").elements;
const myForm = document.getElementById("form");
const user = {
    username: "majid@gmail.com",
    password: "admin"
}

//2 je colle un mouchard à mon form
myForm.addEventListener("submit", (event) => {

//3 j'itère sur les éléments de mon form car tableau
for (let i = 0; i < inputs.length; i++) {

    //je fais une condition pour récupérer uniquement les types input (le bouton ne sera pas récupéré)
    if (inputs[i].nodeName === "INPUT") {
        //si un des input est vide, je retourne une alert et stop le script
        if (inputs[i].value === "") {
            return alert("les champs doivent être remplis")
        }
      }
}

//4 Je check si l'utilisateur est le bon
if(inputs["emailInput"].value !== user.username || inputs["passwordInput"].value !== user.password) {
    return alert("Utilisateur ou mot de passe incorrect")
} else {
    return alert("Welcome !")
}

//fonction afin d'éviter de refresh la page, doit être appelé à la soumission d'un form
event.preventDefault();
})
