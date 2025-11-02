// Option : 2
function makeRed() {
    document.body.style.backgroundColor = 'red';
}


// option : 3
const makeBlue = document.getElementById('make-blue');
makeBlue.onclick = function () {
    document.body.style.backgroundColor = 'blue';
}


// Option : 4   Add Event Listener

document.getElementById('make-green').addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
})

document.getElementById('make-green').addEventListener('mouseover', function () {
    let sectionCreate = document.createElement('section');

    sectionCreate.innerHTML = `
    <h3>Add Event Listener Added</h3>
    `;
    document.body.appendChild(sectionCreate);
})



// -------------------------------------
// -------------------------------------


document.getElementById('btn-update').addEventListener('click', function () {
    const inputField = document.getElementById('update-input-field');
    let inputValue = inputField.value;

    document.getElementById('h3-update').innerText = inputValue;
})


// -------------------------------------
// Make Comment Box
// -------------------------------------


document.getElementById('btn-post').addEventListener('click', function () {

    const comment = document.getElementById('comment-textarea');
    const newComment = comment.value;

    const commentContainer = document.getElementById('post-container');

    const createP = document.createElement('p');

    createP.innerText = newComment;

    commentContainer.appendChild(createP);

    createP.classList.add('comment');

    comment.value = ' ';


})



// -------------------------------------
// Delete
// -------------------------------------


document.getElementById('delete-input').addEventListener('keyup', function (event) {

    const btnDelete = document.getElementById('btn-delete');
    btnDelete.addEventListener('click', function () {
        document.getElementById('delete-secret').style.display = 'none';
    })

    const text = event.target.value;

    if (text === 'delete') {
        btnDelete.removeAttribute('disabled');
        const secret = document.getElementById('delete-secret');
        // secret.style.display = 'none';
    }
    else {
        btnDelete.setAttribute('enabled');
    }
})




// -------------------------------------
// Event Delegate
// -------------------------------------


document.getElementById('item-container').addEventListener('click', function (event) {
    event.target.parentNode.removeChild(event.target);
})


document.getElementById('btn-item').addEventListener('click', function () {
    const ol = document.getElementById('item-container');

    const li = document.createElement('li');
    li.innerText = 'New Item Added';

    ol.appendChild(li);
})

