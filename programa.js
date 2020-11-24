var desayunos=["Tostadas con queso <br> Pan y algun queso untable", 
                "Wafles de banana <br> 1 huevo, 1 banana, 2 cdas harina", 
                "Ensalada de fruta", 
                "Medialunas",
                "Yogurt",
                "Tostadas con palta", 
                "Cereales con yogurt y frutas", 
                "Sándwich de lo que haiga", 
                "Tomatican <br> Pan, tomate, cebolla y huevo", 
                "Tostadas francesas <br> Pan en huevo y despues a tostar",
                "Tortilla francesa <br> 2 huevos, 1cda crema, queso rallado, tomate, jamon",
                "Licuado de frutas",
                ];

function elegir(){
    var posicion=Math.floor(Math.random()*3);
    var desayunoElegido=desayunos[posicion];
    
    document.getElementById("mensaje").innerHTML=desayunoElegido;

    return false;
}