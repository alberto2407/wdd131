/** ============================================
 *  REVIEW CONFIRMATION - localStorage Counter
 *  ============================================ */

// ----- 1. OBTENER CONTADOR ACTUAL -----
const reviewCountElement = document.getElementById('reviewCount');

// Obtener el contador de localStorage o empezar en 0
let reviewCount = Number(window.localStorage.getItem('reviewCount')) || 0;

// ----- 2. INCREMENTAR EL CONTADOR -----
reviewCount++;

// ----- 3. GUARDAR EN LOCALSTORAGE -----
localStorage.setItem('reviewCount', reviewCount);

// ----- 4. MOSTRAR EN LA PÁGINA (YA ACTUALIZADO) -----
reviewCountElement.textContent = reviewCount;