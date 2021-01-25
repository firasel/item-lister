//edit for list item text
function editTextForLi() {
    var editBtn = document.querySelectorAll('.editBtn')
    for (let i = 0; i < editBtn.length; i++) {
        const btn = editBtn[i];
        btn.addEventListener('click', function (event) {
            var editInput = event.target.previousElementSibling
            if (editInput.value != '' && editInput.value.trim() != '') {
                event.target.parentNode.parentNode.previousElementSibling.textContent = editInput.value
                editInput.value = ''
                event.target.parentNode.className = 'd-none'
                event.target.parentNode.nextElementSibling.className = 'fas fa-edit editIcon d-block'
                editInput.classList.remove('editInputPlaceholder')
            }else{
                editInput.classList.add('editInputPlaceholder')
            }
        })
    }
}
editTextForLi()


//edit button add event listener
function editButton() {
    var editIcons = document.querySelectorAll('.editIcon')
    for (let i = 0; i < editIcons.length; i++) {
        const editIcon = editIcons[i];
        editIcon.addEventListener('click', function (event) {
            event.target.previousElementSibling.className = 'd-flex align-items-center me-2 d-block'
            event.target.className = 'd-none'
        })
    }
}
editButton()


//remove item form list
function removeItem() {
    var removeBtn = document.querySelectorAll('.closeBtn')
    for (let i = 0; i < removeBtn.length; i++) {
        var rmvBtn = removeBtn[i];
        rmvBtn.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.remove()
        })
    }
}
removeItem()


//new item add
document.getElementById('submitBtn').addEventListener('click', newItemAdd)
function newItemAdd(event) {
    event.preventDefault()
    var userInput = document.getElementById('userText');
    var listItemsParent = document.getElementById('listItemParent')
    if (userInput.value != '' && userInput.value.trim() != '') {
        //create li element for new item list
        var newItem = document.createElement('li')
        newItem.className = 'd-md-flex justify-content-between text-center align-items-center list-group-item listDesign listItem';
        //create a element for li inner text
        var anchorTag = document.createElement('a')
        anchorTag.setAttribute('href', '#')
        anchorTag.className = 'text-decoration-none text-dark'
        anchorTag.textContent = `${userInput.value}`;
        //create div for input and button
        var mainDiv = document.createElement('div')
        mainDiv.className = 'd-flex mt-3 mt-md-0 align-items-center justify-content-center'
        //create mainDiv in child div
        var childDiv = document.createElement('div')
        childDiv.className = 'd-none'
        //create input
        var inputTag = document.createElement('input')
        inputTag.setAttribute('type', 'text')
        inputTag.setAttribute('placeholder', 'write your message')
        inputTag.className = 'form-control editInput'
        //create ok button
        var okButton = document.createElement('button')
        okButton.className = 'btn btn-outline-dark ms-3 editBtn'
        okButton.textContent = 'Ok'
        //create close button 
        var closeBtn = document.createElement('button')
        closeBtn.className = 'btn-close p-2 closeBtn'
        closeBtn.setAttribute('type', 'button')
        //create edit icon
        var editIcon = document.createElement('i')
        editIcon.className = 'fas fa-edit editIcon'
        //edit input and ok button append for child div
        childDiv.appendChild(inputTag)
        childDiv.appendChild(okButton)
        //child div,edit icon,close button append for main div
        mainDiv.appendChild(childDiv)
        mainDiv.appendChild(editIcon)
        mainDiv.appendChild(closeBtn)
        //edit div and a element append for new li item
        newItem.appendChild(anchorTag)
        newItem.appendChild(mainDiv)
        // append for parent ul list
        listItemsParent.appendChild(newItem);
        //call function for event listener added in new item
        editTextForLi()
        removeItem()
        editButton()
        //clean(empty) to add input
        userInput.value = ''
        userInput.classList.remove('editInputPlaceholder')
    } else{
        userInput.classList.add('editInputPlaceholder')
    }
}
