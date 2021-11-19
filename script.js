function cleanUpIndex() {
    elements = document.querySelectorAll('.contact');

    for (let i = 0; i < elements.length; i++) {
        elements[i].remove();
    }
};

function createSingleIndex(contact) {

    let main = document.querySelectorAll('.main');

    let createA = document.createElement('a');
    let createDiv = document.createElement('div');
    let createP = document.createElement('p')

    createP.append(contact.name);
    createDiv.appendChild(createP);
    createDiv.classList.add("contact");

    createA.appendChild(createDiv);
    createA.href = "page3.html";

    main[0].appendChild(createA);
};

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
];

function renderIndex(contact) {

    let main = document.querySelectorAll('.main');
       
    for (let i = 0; i < contact.length; i++) {
        let createA = document.createElement('a');
        let createDiv = document.createElement('div');
        let createP = document.createElement('p');

        createP.append(contact[i].name);
        createDiv.appendChild(createP);
        createDiv.classList.add("contact");

        createA.appendChild(createDiv);
        createA.href = "page3.html";

        main[0].appendChild(createA);
    }
};



function cleanUpView() {
    let contactinfo = document.querySelectorAll('.contactinfo');
    contactinfo[0].remove();    
}

function renderView(contact) {
    let main = document.querySelectorAll('.main')[0];
    
    let divInfo = document.createElement('div');
    let divName = document.createElement('div');
    let createImg = document.createElement('img');
    let divEmail = document.createElement('div');
    let divPhone = document.createElement('div');
    let divAddress = document.createElement('div');
    let divButtons = document.createElement('div');
    let buttonEdit = document.createElement('button')
    let buttonClose = document.createElement('button')

    createImg.src = './img/profile.jpg';
    createImg.classList.add('profilepic');
    createImg.alt = 'Profile Picture';

    divName.append(contact.name);
    divName.classList.add('contactname');

    divInfo.classList.add('contactinfo');

    divName.appendChild(createImg);
    divInfo.appendChild(divName);
    main.appendChild(divInfo);

    divEmail.append('email: ', contact.email);
    divEmail.classList.add('contactemail');

    divInfo.appendChild(divEmail);

    divPhone.append('cell: ', contact.phone);
    divPhone.classList.add('contactphone');

    divInfo.appendChild(divPhone);

    divAddress.append('address: ', contact.address);
    divAddress.classList.add('contactaddress');

    divInfo.appendChild(divAddress);

    buttonEdit.classList.add('button');
    buttonEdit.classList.add('edit');
    buttonEdit.value = 'Edit';
    buttonEdit.append('Edit');

    buttonClose.classList.add('button');
    buttonClose.classList.add('close');
    buttonClose.value = 'Close';
    buttonClose.append('Close');

    divButtons.classList.add('buttons');
    divButtons.appendChild(buttonEdit);
    divButtons.appendChild(buttonClose);

    divInfo.appendChild(divButtons);

}