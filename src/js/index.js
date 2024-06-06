const charactersIcons = document.querySelectorAll(".icon")
const charactersCards = document.querySelectorAll(".character")

charactersIcons.forEach((characterIcon, index) => {
    characterIcon.addEventListener("click", () => {
        updateCharacterIcon(characterIcon)

        updateCharacterActiveCard(index)
    })
})

function updateCharacterActiveCard(index) {
    const activeCharacterCard = document.querySelector(".active")
    activeCharacterCard.classList.remove("active")
    charactersCards[index].classList.add("active")
}

function updateCharacterIcon(characterIcon) {
    const characterIconSelected = document.querySelector(".selected")
    characterIconSelected.classList.remove("selected")
    characterIcon.classList.add("selected")
}