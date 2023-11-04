// // Add your code here
const baseUrl = 'http://localhost:3000/users';

function submitData(name, email){
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
        }),
    })
    .then(resp => resp.json())
    .then((object) => {
        document.body.innerHTML = object.id
    })
    .catch((error) => {
        document.body.innerHTML = error.message
    })
}

