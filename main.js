function calcularPromedio(seccion) {
    let nota1, nota2, nota3, resultadoElement;

    
    if (seccion === 'Frontend') {
        nota1 = parseFloat(document.getElementById("notaFrontend1").value) || 0;
        nota2 = parseFloat(document.getElementById("notaFrontend2").value) || 0;
        nota3 = parseFloat(document.getElementById("notaFrontend3").value) || 0;
        resultadoElement = document.getElementById("resultadoFrontend");
    } else if (seccion === 'Backend') {
        nota1 = parseFloat(document.getElementById("notaBackend1").value) || 0;
        nota2 = parseFloat(document.getElementById("notaBackend2").value) || 0;
        nota3 = parseFloat(document.getElementById("notaBackend3").value) || 0;
        resultadoElement = document.getElementById("resultadoBackend");
    } else if (seccion === 'Metodologias') {
        nota1 = parseFloat(document.getElementById("notaMetodologias1").value) || 0;
        nota2 = parseFloat(document.getElementById("notaMetodologias2").value) || 0;
        nota3 = parseFloat(document.getElementById("notaMetodologias3").value) || 0;
        resultadoElement = document.getElementById("resultadoMetodologias");
    }

    if(nota1 > 5||nota2> 5||nota3>5||nota1<1||nota2<1||nota3<1){
            resultadoElement.textContent = "Solo se aceptan notas mayores de 1 y menores de 5"
    }else{
        const promedio = (nota1 + nota2 + nota3) / 3;
        resultadoElement.textContent = "El promedio es: " + promedio.toFixed(2);
    }

}
