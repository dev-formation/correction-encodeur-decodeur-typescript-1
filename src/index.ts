/**
 * Completer cette fonction
 *
 */
function encode() {}

/******************************************************
 * LE CODE CI-DESSOUS FAIT FONCTIONNER LA PAGE TU PEUX
 * LE MODIFIER POUR COMPRENDRE COMMENT IL FONCTIONNE
 * MAIS ATTENTION DE NE PAS L'EFFACER...
 ******************************************************
 */

const FORM = document.querySelector('form');

FORM?.addEventListener('submit', function (e: SubmitEvent) {
  e.preventDefault();
  const CURRENT_FORM = e.target as HTMLFormElement;

  const INPUT_TEXT_TO_ENCODE = CURRENT_FORM.textToEncode;
  const INPUT_ENCODED_TEXT = CURRENT_FORM.textEncoded;

  const RESULT = encode(INPUT_TEXT_TO_ENCODE.value);

  if (!RESULT) {
    INPUT_ENCODED_TEXT.value = `💻 Il faut d'abord implémenter la fonction encode pour voir le résultat 😉`;
  } else {
    INPUT_ENCODED_TEXT.value = RESULT;
  }
});
