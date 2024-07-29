const template = document.querySelector("#pet-card-template")
const wrapper = document.createDocumentFragment()


async function wait() {


    const weatherPromis = await fetch("https://api.weather.gov/gridpoints/MFL/110,50/forecast")
    const weatherdata = await weatherPromis.json()
    const ourtemperature = weatherdata.properties.periods[0].temperature
    document.querySelector("#temperature-output").textContent = ourtemperature



}
wait()
async function petsArea() {
    const petsPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json")
    const petsData = await petsPromise.json()
    petsData.forEach((pet) => {
        const clone = template.content.cloneNode(true)
        clone.querySelector("h1").textContent = pet.name
        clone.querySelector(".pet-description").textContent = pet.description
        clone.querySelector(".pet-age").textContent = currentAgeText(pet.birthYear)
        clone.querySelector(".pet-card-photo img").src = pet.photo
        clone.querySelector(".pet-card-photo img").alt = `A ${pet.species} named ${pet.name} `

        wrapper.appendChild(clone)
    })
    document.querySelector(".list-of-pets").appendChild(wrapper)
}
petsArea()
function currentAgeText(birthYear) {
    const currentYear = new Date().getFullYear()
    const age = currentYear - birthYear

    if (age == 1) return "one year old"
    if (age == 0) return "leas than one a year old"

    return age + " years old"
}

