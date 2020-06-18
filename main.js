let newButton = document.createElement('button')
newButton.id = 'newButtonID'
newButton.append('remove')
let bodyElement = document.querySelector('body')
bodyElement.append(newButton)

let mainElement = document.createElement('main')
bodyElement.append(mainElement)

let imageElement = document.createElement('img')
imageElement.className = 'image'

mainElement.append(imageElement)
imageElement.src = 'https://researchbreeder.com/images/Puppies/norwegian-elkhound-puppies.jpg'

let linkElement = document.createElement('a')
linkElement.href = 'https://researchbreeder.com'
linkElement.className = 'link'
mainElement.append(linkElement)
linkElement.append('Research Breeder')

newButton.addEventListener('click', function() {
    mainElement.remove()
})
