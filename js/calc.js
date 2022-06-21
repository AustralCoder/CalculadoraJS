// Para la pantalla
function appendNumber(val) {
    document.getElementById("calcu").value += val
}

// Evaluacion
function solveOperation() {
    let x = document.getElementById("calcu").value
    let y = eval(x)

    if (x === '2+2') {
        joke()
    }
    
    document.getElementById("calcu").value = y
}

// Borra pantalla
function clearScreen() {
    document.getElementById("calcu").value = ""
}

// Muestra broma
function joke() {
    if (window.confirm("A primaria")) {
        window.open('https://www.niche.com/k12/search/best-public-elementary-schools/','_blank');
    }
}