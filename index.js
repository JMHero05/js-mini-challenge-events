/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

const header = document.querySelector('#header')

header.addEventListener('click', function () {
  toggleColor(header)
});


/***** Deliverable 2 *****/
const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const playerDiv = document.createElement("div")

  playerDiv.className = "player"
  playerDiv.dataset.number = form.number.value

  playerDiv.innerHTML = `
    <h3>${form.name.value} (<em>${form.nickname.value}</em>)</h3>
    <img src="${form.photo.value}" alt="${form.name.value}">
    <p class="likes">1000 likes</p>
    <button class="like-button">❤️</button>
  `

  playerContainer.append(playerDiv)
})


/***** Deliverable 3 *****/

/* */

const button = document.querySelector("button")
const likesArr = Array.from(document.querySelectorAll(".player .likes"));
let likes = document.querySelector(".player .likes")

// for (let i = 0; i < likesArr.length; i++) {
// function likeButton() {
button.addEventListener("click", function (e) {
  let likesText = likes.innerText
  let value = parseInt(likesText)
  value = isNaN(value) ? 0 : value;
  value++;
  e.target = likes.innerText = value.toString() + ' likes';
})
// }