let mainContent = document.querySelector("main")
console.log(mainContent)

let currentUsers = [
    'zohdi',
    'dmg',
    'ghost_snacks',
    'brandons',
]

// loop over the list of usernames
// put each username inside a <li>
// put each <li> inside the <ul>
let ul = document.createElement("ul")

for (let index = 0; index < currentUsers.length; index += 1) {
    let username = currentUsers[index]
    let li = document.createElement("li")
    li.append(username)
    ul.append(li)
    li.classList.add("company-accent-color-1")
    
    let isEven = index % 2 !== 0
    if (isEven) {
        // li.style.backgroundColor = "salmon"
        // li.classList.remove("company-accent-color-1")
        // li.classList.add("company-accent-color-2")
        li.classList.replace("company-accent-color-1", "company-accent-color-2")
    }
}

mainContent.append(ul)

let firstItem = document.querySelector("ul > li:first-child")
let listB = document.querySelector(".list-b")

listB.append(firstItem.cloneNode(true)) // copies the element over (copies the element deeply, so we get not just the element, but also its contents)
listB.append(firstItem) // moves the element over
