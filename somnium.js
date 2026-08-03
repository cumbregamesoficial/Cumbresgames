// =====================================
// SOMNIUM - CUMBRES GAMES
// JAVASCRIPT
// =====================================



// ===============================
// GALERÍA / CARRUSEL
// ===============================


const imagenPrincipal = document.getElementById(
    "imagenPrincipal"
);


const botonAnterior = document.getElementById(
    "anterior"
);


const botonSiguiente = document.getElementById(
    "siguiente"
);


const puntos = document.querySelectorAll(
    ".puntos span"
);



// Imágenes del juego

const imagenes = [

    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png"

];


let imagenActual = 0;



// Cambiar imagen

function cambiarImagen(indice){


    imagenActual = indice;


    imagenPrincipal.style.opacity = "0";


    setTimeout(()=>{


        imagenPrincipal.src =
        imagenes[imagenActual];


        imagenPrincipal.style.opacity = "1";


    },200);



    actualizarPuntos();

}



// Actualizar puntos inferiores

function actualizarPuntos(){


    puntos.forEach((punto,index)=>{


        punto.classList.remove(
            "activo"
        );


        if(index === imagenActual){

            punto.classList.add(
                "activo"
            );

        }


    });


}



// Botón siguiente

botonSiguiente.addEventListener(
"click",
()=>{


    imagenActual++;


    if(imagenActual >= imagenes.length){

        imagenActual = 0;

    }


    cambiarImagen(imagenActual);


});




// Botón anterior

botonAnterior.addEventListener(
"click",
()=>{


    imagenActual--;


    if(imagenActual < 0){

        imagenActual =
        imagenes.length - 1;

    }


    cambiarImagen(imagenActual);


});





// Click en puntos


puntos.forEach(
(punto,index)=>{


    punto.addEventListener(
    "click",
    ()=>{


        cambiarImagen(index);


    });


});




// Carrusel automático


setInterval(()=>{


    imagenActual++;


    if(imagenActual >= imagenes.length){

        imagenActual=0;

    }


    cambiarImagen(imagenActual);



},5000);









// ===============================
// SISTEMA DE RESEÑAS
// ===============================


const estrellas =
document.querySelectorAll(
".estrellas-votar span"
);



const mensaje =
document.getElementById(
"mensaje-voto"
);



const promedio =
document.getElementById(
"promedio"
);




// Cargar valoración guardada


let valoracion =
localStorage.getItem(
"somnium-rating"
);



if(valoracion){


    mostrarEstrellas(
        valoracion
    );


    mensaje.innerHTML =
    "Tu valoración: "
    + valoracion
    + " estrellas";


    promedio.innerHTML =
    valoracion;


}







// Seleccionar estrellas


estrellas.forEach(
(estrella)=>{


    estrella.addEventListener(
    "click",
    ()=>{


        let valor =
        estrella.dataset.star;



        localStorage.setItem(
            "somnium-rating",
            valor
        );



        mostrarEstrellas(
            valor
        );



        mensaje.innerHTML =
        "Gracias por valorar Somnium ⭐";



        promedio.innerHTML =
        valor;



    });



});





// Pintar estrellas


function mostrarEstrellas(valor){


    estrellas.forEach(
    estrella=>{


        if(
        estrella.dataset.star <= valor
        ){


            estrella.classList.add(
                "activa"
            );


        }
        else{


            estrella.classList.remove(
                "activa"
            );


        }


    });


}







// ===============================
// ANIMACIONES AL SCROLL
// ===============================


const secciones =
document.querySelectorAll(
"section"
);



window.addEventListener(
"scroll",
()=>{


    secciones.forEach(
    seccion=>{


        let posicion =
        seccion.getBoundingClientRect()
        .top;


        let pantalla =
        window.innerHeight;



        if(posicion < pantalla - 100){


            seccion.style.opacity="1";

            seccion.style.transform=
            "translateY(0)";


        }


    });


});



// Estado inicial

secciones.forEach(
seccion=>{


    seccion.style.opacity="0";

    seccion.style.transform=
    "translateY(40px)";

    seccion.style.transition=
    "all .8s ease";


});
