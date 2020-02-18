require ('bootstrap/dist/js/bootstrap.min.js')
require ('bootstrap/dist/css/bootstrap.min.css')

fetch(`${__PATH_PREFIX__}/src/products`)
    .then(function(response) {
        console.log(response)
        return
    })