/**
 * Completer cette fonction 
 * 
 */
function encode() {
    
}









/******************************************************
 * LE CODE CI-DESSOUS FAIT FONCTIONNER LA PAGE TU PEUX
 * LE MODIFIER POUR COMPRENDRE COMMENT IL FONCTIONNE
 * MAIS ATTENTION DE NE PAS L'EFFACER...
 ******************************************************
 */

 const BTN_SUBMIT = document.querySelector('button');
 const FORM = document.querySelector('form');
 const ENCODED_TEXT = document.querySelector('#textEncoded')
 
 FORM.addEventListener('submit', function (e) {
     e.preventDefault();
     console.log(e);
     const TEXT_TO_ENCODE = e.target[0].value;
     const RESULT = encode(TEXT_TO_ENCODE);
     if(!RESULT) {
         ENCODED_TEXT.value = "💻 Il faut d'abord implémenter la fonction encode pour voir le résultat 😉"
     } else {
         ENCODED_TEXT.value = RESULT;
     }
 })