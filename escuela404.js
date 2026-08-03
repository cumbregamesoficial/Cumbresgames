// =====================================
// ESCUELA 404 - CUMBRES GAMES
// JAVASCRIPT
// =====================================



// ===============================
// GALERÍA / CARRUSEL
// ===============================


const imagenPrincipal =
document.getElementById(
    "imagenPrincipal"
);



const botonAnterior =
document.getElementById(
    "anterior"
);



const botonSiguiente =
document.getElementById(
    "siguiente"
);



const puntos =
document.querySelectorAll(
    ".puntos span"
);





const imagenes = [


    "ESCUELA404_1.png",

    "ESCUELA404_2.png",

    "ESCUELA404_3.png",

    "ESCUELA404_4.png",

    "ESCUELA404_5.png"


];





let imagenActual = 0;






function cambiarImagen(indice){



    if(!imagenPrincipal)
        return;



    imagenActual = indice;



    imagenPrincipal.style.opacity="0";



    setTimeout(()=>{


        imagenPrincipal.src =
        imagenes[imagenActual];



        imagenPrincipal.style.opacity="1";



    },200);



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







// BOTÓN SIGUIENTE


if(botonSiguiente){


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


}







// BOTÓN ANTERIOR


if(botonAnterior){


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


}







// PUNTOS


puntos.forEach(
(punto,index)=>{


    punto.addEventListener(
    "click",
    ()=>{


        cambiarImagen(
            index
        );


    });


});







// CARRUSEL AUTOMÁTICO


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
// VALORACIÓN
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






let valoracion =
localStorage.getItem(
"escuela404-rating"
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









estrellas.forEach(
(estrella)=>{



    estrella.addEventListener(
    "click",
    ()=>{



        let valor =
        estrella.dataset.star;



        localStorage.setItem(
            "escuela404-rating",
            valor
        );



        mostrarEstrellas(
            valor
        );



        mensaje.innerHTML =
        "Gracias por valorar Escuela 404 ⭐";



        promedio.innerHTML =
        valor;



    });



});









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
// ANIMACIONES SCROLL
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



            seccion.style.transform =
            "translateY(0)";



        }




    });



});








// ESTADO INICIAL


secciones.forEach(
seccion=>{



    seccion.style.opacity="0";



    seccion.style.transform =
    "translateY(40px)";



    seccion.style.transition =
    "all .8s ease";



});