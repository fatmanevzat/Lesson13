//  id ile ulaşim  (tek sonuç verir)
let firstH1 = document.getElementById('first-title')

console.log(firstH1.innerHTML)
console.log(firstH1.innerText)

//   class ile ulaşim  (array çıktı verir)
let allH1 = document.getElementsByClassName('title')

console.log(allH1[0].innerText)


for (let i = 0; i < allH1.length; i++) {
    console.log(allH1[i].innerText);
}

//  tag ile ulaşim   (array çıktı verir)
let allTagH1 = document.getElementsByTagName('h1')
console.log(allTagH1)

for (let i = 0; i < allTagH1.length; i++) {
    console.log(allTagH1[i].innerText);
}

//   queryselectorAll ile ulaşim   (array çıktı verir)
const queryclass = document.querySelectorAll('.title')
console.log(queryclass)

const queryid = document.querySelectorAll('#first-title')
console.log(queryid)

const querytag = document.querySelectorAll('h1')
console.log(querytag)

const queryspan = document.querySelectorAll('h1 span')
console.log(queryspan)

const queryH1H4 = document.querySelectorAll('h1 , h4')
console.log(queryH1H4)


//    queryselector ile ulaşim(ilk bulduğunu getirir)
const queryH1classFirst = document.querySelector('h1.title')
console.log(queryH1classFirst)


let new1 = "h1";
let new2 = "h4";
const querynew  = document.querySelectorAll(`${new1}, ${new2}`)
console.log(querynew)


let firstItem = document.getElementById('first-title')

firstItem.innerHTML = "Zero Title"
//firstItem.innerText = "<p>Zero Title</p>"


let center = document.querySelector(".center")
//center.innerHTML ="<li>ödev yapma</li><li>yemek yapma</li>"

let searchInput = document.getElementById("search")
//console.log(searchInput.style.border)

//searchInput.style["border-color"] = "red"
//searchInput.style.borderColor = "yellow"


let firstBtn = document.getElementById("btn")
console.log(firstBtn.innerHTML)

//document.getElementById("btn").innerHTML = "Tikla"

console.log(firstBtn.class)
console.log(firstBtn.title)

firstBtn.style["color"] = "red"
firstBtn.title = "merhaba dünya"


let img = document.getElementById("img")
img.src = "resim.jpg"
img.alt = "resim"

console.log(img.getAttribute("alt"))  // olan bir attribute alir.
img.setAttribute("class" , "image")   // olmayan bir özellik atar.

img.className = "mer"
img.setAttribute("ab" , "cd")

firstBtn.classList.add("active")
firstBtn.classList.remove("active")
console.log(firstBtn.classList.entries())

// yeni eleman oluşturma
let paramItem = document.createElement("p")
paramItem.innerHTML = "bu yeni paragraf"
paramItem.style["color"] = "green";
console.log(paramItem)
document.write("<p>paramItem</p>")

document.body.appendChild(paramItem)
//document.body.div.appendChild(paramItem)

let container = document.querySelector(".container")
let card = document.querySelector(".card")
console.log(container)
//container.appendChild(paramItem)  
//card.appendChild(paramItem)        //ekler
//card.remoweChild(paramItem)       //siler
//container.removeChild(card)

const listeItems = document.querySelectorAll("#list li")
console.log(listeItems)
console.log(listeItems[listeItems.length-1])

for (let i  = 0; i  < listeItems.length; i ++) {
    listeItems[i].setAttribute("class", "list-item")
}

const h1Items = document.getElementsByClassName("title")
//console.log(h1Items)

for (let i = 0; i < h1Items.length; i++) {
console.log(h1Items[i].childNodes)

    //let newSpan = document.createElement("span")
    //newSpan.innerHTML = `bu h1 - ${i+ 1}`
    //newSpan.style.display = "none"
    //h1Items[i].appendChild(newSpan)
}













