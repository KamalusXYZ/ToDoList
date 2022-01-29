let boutonNouvelleTache = document.querySelector('#ajouter')
let pageLaterale = document.querySelector('.laterale')
let pageCentrale = document.querySelector('.conteneur')




const tableauTaches = []

const triTableau = (x, y) => {

    if (x.verificationUrgence === true && y.verificationUrgence === false) return 1
    if (x.verificationUrgence === false && y.verificationUrgence === true) return -1
    if (x.verificationUrgence === y.verificationUrgence) return 0

}

/***************FONCTION OUVRIR FENTRE DE TEXTE AVANT ENVOI */
let messageOuvert = false
const ouvrirFenetreTache = () => {


    console.log(messageOuvert)
    if (messageOuvert === false) {

        newDiv = document.createElement('div')
        newDiv.className = "message"

        pageLaterale.appendChild(newDiv)
        newDiv.innerHTML = `

    <h3>Nouvelle tâche :</h3>

    <div class="Urgence">
        <label for="urgence">Cochez si la tâche est urgente</label>
        <input type="checkbox" name="urgence" id="urgence">
    </div>


    <textarea name="tachetexte" id="tachetexte" cols="20" rows="10"></textarea>

    <input id="envoyertache" type="submit">

`


        messageOuvert = !messageOuvert

        let boutonCreerTache = document.querySelector('#envoyertache')




        /**********************FONCTION CREER ET AFFICHER UNE TACHE SUR LA PAGE CENTRALE ne peux pas etre sortie de la fonction MESSAGEOUVERT car elle depend d'un element creer dans celle ci ******************************/

        const CreerAfficherTache = () => {



            tableauTaches.push({
                texte: document.getElementById("tachetexte").value,
                verificationUrgence: document.getElementById("urgence").checked
            })





            console.log(document.getElementById("urgence").checked)
            console.log(tableauTaches)



            if (tableauTaches[tableauTaches.length - 1].verificationUrgence === false) {

                newPostIt = document.createElement('div')
                newPostFond = document.createElement('div')

                newPostIt.className = `tache ${tableauTaches.length}`
                newPostFond.className = `tachevert ${tableauTaches.length}`
                newPostIt.id = `${tableauTaches.length}`
                newPostFond.id = `${tableauTaches.length}`


                pageCentrale.appendChild(newPostFond)
                newPostFond.appendChild(newPostIt)
                newPostIt.innerHTML = `
                <br>
                ${tableauTaches[tableauTaches.length -1].texte}
                <div class="corbeille"  id="${tableauTaches.length}">
    <img src="/ToDoList/img/trash-can-solid.svg">
</div>`

                console.log(tableauTaches)
            } else {

                newPostIt = document.createElement('div')
                newPostFond = document.createElement('div')

                newPostIt.className = `tache ${tableauTaches.length}`
                newPostFond.className = `prioritaire tacherouge ${tableauTaches.length}`
                newPostIt.id = `${tableauTaches.length}`
                newPostFond.id = `${tableauTaches.length}`


                pageCentrale.appendChild(newPostFond)
                newPostFond.appendChild(newPostIt)
                newPostIt.innerHTML =
                    `
                    <br>
                ${tableauTaches[tableauTaches.length -1].texte}
                <div class="corbeille" id="${tableauTaches.length}">
    <img src="/ToDoList/img/trash-can-solid.svg">
</div>
                `


                console.log(tableauTaches)
            }
            newDiv.remove()
            messageOuvert = !messageOuvert
        }

        boutonCreerTache.onclick = CreerAfficherTache




    }

}
boutonNouvelleTache.onclick = ouvrirFenetreTache



const suppressionTache = (event) => {
    console.log(event)
    if (event.target.attributes[0].textContent === "/ToDoList/img/trash-can-solid.svg") {

        for (i = 0; i < tableauTaches.length + 1; ++i) {

            j = String(i)
            console.log(j)

            if (event.target.parentElement.id === j) {

                divSupprimable = document.getElementById(j)
                divSupprimable.remove()

                console.log(divSupprimable)
            }
        }
    }
}

document.onclick = suppressionTache

