async function wait() {


    const weatherPromis = await fetch("https://api.weather.gov/gridpoints/MFL/110,50/forecast")
    const weatherdata = await weatherPromis.json()
    const ourtemperature = weatherdata.properties.periods[0].temperature

    document.querySelector("#temperature-output").textContent = ourtemperature



}
wait()

