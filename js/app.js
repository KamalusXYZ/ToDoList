let boutonNouvelleTache = document.querySelector('#ajouter')
let pageLaterale = document.querySelector('.laterale')
let pageCentrale = document.querySelector('.conteneur')

let messageOuvert = false

const ouvrirFenetreTache = () => {

    
    messageOuvert = !messageOuvert
    console.log('test')
    newDiv = document.createElement('div')
    newDiv.className = "message"
    

    pageLaterale.appendChild(newDiv)
    newDiv.innerHTML = `fdsfsf`



}

boutonNouvelleTache.onclick = ouvrirFenetreTache
addEventListener()