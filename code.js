testimonios = [ 
    {nombre: "Bautista Moresco", img: 1, frase: "Lorem ipsum dolor sit amet. Ea exercitationem totam eos internos repellendus qui recusandae mollitia et placeat velit est fugit nemo! Sit quia officia est quae repellendus aut quas saepe sed adipisci rerum et dicta nesciunt non voluptas deleniti." },
    {nombre: "Nacho Rojas", img: 2, frase: "Lorem ipsum dolor sit amet. Et sunt incidunt vel eaque vero cum molestiae odio non praesentium autem qui culpa quaerat? Vel porro natus ea aspernatur quia ut maiores dolorem et suscipit natus et assumenda tempore aut ipsa praesentium. 33 fugiat dicta qui odio itaque vel nesciunt facilis. Vel nostrum magni qui omnis molestiae sed atque fugiat quo quibusdam voluptatem." },
    {nombre: "Marvo Bodini", img: 3, frase: "Lorem ipsum dolor sit amet. Ut quisquam consequatur hic dignissimos sapiente ex harum consectetur. Et fugiat rerum et doloremque consequatur aut sint galisum nam saepe adipisci ut corrupti tempore ut tempora nihil et tempora omnis. Qui odio ratione et voluptates molestias ut molestias enim." },
    {nombre: "Lucas Quaroni", img: 4, frase: "Lorem ipsum dolor sit amet. Aut sint laudantium ad explicabo dolore in deserunt voluptatibus sit impedit reiciendis At quibusdam voluptates id laborum quae. Quo nostrum sapiente et incidunt porro eos exercitationem sunt sit voluptas voluptatem et eveniet repudiandae aut error esse sed inventore obcaecati. Id alias consequatur in possimus soluta 33 eius omnis aut sequi deserunt." },
    {nombre: "Marce benitez", img: 5, frase: "Lorem ipsum dolor sit amet. Qui accusantium aperiam ut libero voluptatum sed harum itaque ex nisi modi. Qui expedita quisquam eum enim odit sed nulla vitae in ratione minima non excepturi dolor id repellendus corrupti aut saepe consequuntur? Et sint iste quo quisquam velit vel inventore deserunt qui libero eveniet qui architecto corrupti. Aut labore debitis ab voluptas corrupti sed porro soluta!" }
]

let i = 0
let j = testimonios.length

let testimonioContainer = document.getElementById("testimonio-container")
let izquierda = document.getElementById("fa-arrow-left")
let derecha = document.getElementById("fa-arrow-right")


izquierda.addEventListener("click",() => {
    i = (j+i+1) % j
    cambiarTestimonio()
})

derecha.addEventListener("click",() => {
    i = (j+i-1) % j
    cambiarTestimonio()
})

let cambiarTestimonio = () =>{
    testimonioContainer.innerHTML = `
    <p>${testimonios[i].frase}</p>
    <img src= "./img/${testimonios[i].img}.PNG"</img>
    <h3>${testimonios[i].nombre}</h3>
    `
}

window.onload = cambiarTestimonio