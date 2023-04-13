const form = document.querySelector("form")
const submit = document.querySelector("submit")
const scriptURL = ''

form.addEventListener('submit', e => {
    submit.disabled = true
    e.preventDefault()
    let requestBody = new FormData(form)
    fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => {
        alert('Success!', response)
        submit.disabled = false
        })
    .catch(error => {
    alert('Error!', error.message)
        submit.disabled = false

    }
    )
})