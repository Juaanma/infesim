// Seleccionamos sección por defecto en caso de que URL no especifique
if (window.location.hash == '') {
    window.location.hash = '#intro';
}

// N = poblacion total

// S = susceptibles
// I = infectados
// R = recuperados / removidos (ver terminologia)

// b = tasa de transmision
// g = tasa de .. (ver terminologia)

// S + I + R = N

// S'(t) = -bSI
// I'(t) = bSI - gI
// R'(t) = gI