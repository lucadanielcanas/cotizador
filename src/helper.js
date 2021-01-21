//obtiene la diferencia de años
export function getYearsDifference (year) {
    return new Date().getFullYear() - year;
};

//calcula el total a pagar segun la marca
export function calculateBrand(mark) {
    let increment;

    switch(mark) {
        case 'european': 
            increment = 1.30;
            break;
        case 'american':
            increment = 1.15;
            break;
        case 'asian':
            increment = 1.05;
            break;
        default:
            break;
    }

    return increment;
};

// Calcula el tipo de seguro

export function getPlan(plan) {
    return (plan === 'basic') ? 1.20 : 1.50;
}