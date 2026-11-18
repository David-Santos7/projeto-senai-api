
const container = document.getElementById("container")

fetch("https://dragonball-api.com/api/characters?race=Saiyan")    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        data.forEach(warriors => {
            const images = document.createElement("div")
            images.className = "box"
            images.innerHTML = `
                <img src="${warriors.image}"/>
                <p>Posição: ${warriors.id}</p>
                <p>Nome: ${warriors.name}</p>
                <p>Raça: ${warriors.race}</p>
                <p>Ki: ${warriors.ki}</p>
                <p>Afiliação: ${warriors.affiliation}</p>
                <p>Gênero: ${warriors.gender}</p>
            `
            container.appendChild(images)
        })
    })