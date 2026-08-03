// =====================================
// CONECTANDO LA RIOJA
// CUMBRES GAMES
// JAVASCRIPT
// =====================================



// ===============================
// CARRUSEL DE IMÁGENES
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





const imagenes = [

    "conectando1.png",

    "conectando2.png",

    "conectando3.png",

    "conectando4.png",

    "conectando5.png"

];



let imagenActual = 0;





function cambiarImagen(indice){


    imagenActual = indice;



    imagenPrincipal.style.opacity="0";



    setTimeout(()=>{


        imagenPrincipal.src =
        imagenes[imagenActual];


        imagenPrincipal.style.opacity="1";


    },250);



    actualizarPuntos();



}







function actualizarPuntos(){



    puntos.forEach(
    (punto,index)=>{


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

        imagenActual=0;

    }



    cambiarImagen(
        imagenActual
    );



});








// Botón anterior


botonAnterior.addEventListener(
"click",
()=>{


    imagenActual--;



    if(imagenActual < 0){


        imagenActual =
        imagenes.length-1;


    }



    cambiarImagen(
        imagenActual
    );



});








// Puntos clickeables


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



    cambiarImagen(
        imagenActual
    );



},5000);










// ===============================
// SISTEMA DE VALORACIÓN
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





let valorGuardado =
localStorage.getItem(
"conectando-rating"
);





if(valorGuardado){



    pintarEstrellas(
        valorGuardado
    );


    promedio.innerHTML =
    valorGuardado;



    mensaje.innerHTML =
    "Tu valoración: "
    + valorGuardado
    +" ⭐";



}







estrellas.forEach(
(estrella)=>{


    estrella.addEventListener(
    "click",
    ()=>{


        let valor =
        estrella.dataset.star;



        localStorage.setItem(
            "conectando-rating",
            valor
        );



        pintarEstrellas(
            valor
        );



        promedio.innerHTML =
        valor;



        mensaje.innerHTML =
        "Gracias por valorar Conectando La Rioja ⭐";



    });



});








function pintarEstrellas(valor){



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
// ANIMACIONES DE ENTRADA
// ===============================



const secciones =
document.querySelectorAll(
"section"
);




secciones.forEach(
(seccion)=>{


    seccion.style.opacity="0";


    seccion.style.transform=
    "translateY(40px)";


    seccion.style.transition=
    "all .8s ease";


});






window.addEventListener(
"scroll",
()=>{


    secciones.forEach(
    (seccion)=>{


        let posicion =
        seccion
        .getBoundingClientRect()
        .top;



        if(
        posicion <
        window.innerHeight-100
        ){


            seccion.style.opacity="1";


            seccion.style.transform=
            "translateY(0)";


        }



    });



});
