console.log(project);

var Card = document.querySelector('#card')

for (let i = 0; i < project.length; i++) {
    const element = project[i];
    
    var Box = document.createElement("div")
    Box.className = "box"

    var BoxImg = document.createElement("img")
    BoxImg.setAttribute("src", element.Image)

    var BoxText = document.createElement("div")
    BoxText.className = "text"

    var BoxName = document.createElement("h3")
    BoxName.textContent = element.name

    var BoxType = document.createElement("p")
    BoxType.textContent = element.type

    BoxText.appendChild(BoxName)
    BoxText.appendChild(BoxType)

    Box.appendChild(BoxImg)
    Box.appendChild(BoxText)

    Card.appendChild(Box)
}

console.log(Team);

var Card = document.querySelector('#team')

for (let i = 0; i < Team.length; i++) {
    const element = Team[i];
    
    var Box = document.createElement("div")
    Box.className = "box"

    var BoxImg = document.createElement("img")
    BoxImg.setAttribute("src", element.Image)

    var BoxText = document.createElement("div")
    BoxText.className = "text"

    var BoxName = document.createElement("h3")
    BoxName.textContent = element.name

    var JobName = document.createElement("p")
    JobName.textContent = element.job

    var BoxIcon = document.createElement("img")
    BoxIcon.setAttribute("src", element.icon)
    BoxIcon.className = "icon"

    BoxText.appendChild(BoxName)
    BoxText.appendChild(JobName)
    BoxText.appendChild(BoxIcon)

    Box.appendChild(BoxImg)
    Box.appendChild(BoxText)

    Card.appendChild(Box)
}