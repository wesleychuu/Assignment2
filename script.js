function cleanUpIndex() {
    elements = document.querySelectorAll('.contact')

    for (let i = 0; i < elements.length; i++) {
        elements[i].remove()
    }
}

function createSingleIndex(fullName) {

    let main = document.querySelectorAll('.main');

    let createA = document.createElement('a');
    let createDiv = document.createElement('div');
    let createP = document.createElement('p')

    createP.append(fullName);
    createDiv.appendChild(createP);
    createDiv.classList.add("contact");

    createA.appendChild(createDiv);
    createA.href = "page3.html";

main[0].appendChild(createA);
}

let contactList = [
    {
      name: "Roberta Dobbs",
      phone: "778-555-1234",
      address: "101 Main St, Anytown, USA",
      email: "subgenius@slack.example.com",
    }, 
    {
      name: "Bugs Bunny",
      phone: "123-867-5309",
      address: "Warner Brothers Animation Lot",
      email: "whatsup@doc.example.com",
    },
]



function renderIndex(contact) {

    let main = document.querySelectorAll('.main');
       
    for (let i = 0; i < contact.length; i++) {
        let createA = document.createElement('a');
        let createDiv = document.createElement('div');
        let createP = document.createElement('p')

        createP.append(contact[i].name);
        createDiv.appendChild(createP);
        createDiv.classList.add("contact");

        createA.appendChild(createDiv);
        createA.href = "page3.html";

        main[0].appendChild(createA);
    }
}

