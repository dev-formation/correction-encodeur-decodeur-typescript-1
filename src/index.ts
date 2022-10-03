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

/**
 * Je vais chercher dans le DOM le premier élément qui a la balise <form>
 */
const FORM = document.querySelector('form');
console.log(FORM);

/**
 * Test permettant de montrer que l'on peut aller chercher
 * un élement possédatn la classe .color-pink à l'intérieur
 * d'une <div>
 */
const estcequecaexiste = document.querySelector('div .color-pink');
console.log('estcequecaexiste', estcequecaexiste);

/**
 * Ici le ? permet de vérifier si FORM n'est pas null avant de continuer l'execution de la ligne
 */
FORM?.addEventListener('submit', function (e: SubmitEvent) {
  /**
   * Contenu de l'event déclenché lors du Submit
   */
  console.log('contenu de notre event : ', e);

  /**
   * Je change le comportement par défaut de l'event submit
   * car si je ne le fais pas ma page va se recharger
   */
  e.preventDefault();

  /**
   * On vient expliquer le type de e.target pour pouvoir
   * bénéficier des l'autocomplétion
   */
  const CURRENT_FORM = e.target as HTMLFormElement;

  /**
   * Grâce à l'objet Formulaire récupéré via le déclenchement
   * je peux avoir accès aux champs de ce même formulaire plus facilement
   * Ici je récupère l'objet concernant mon premier <input>
   * dont l'id est 'textToEncode'
   */
  const INPUT_TEXT_TO_ENCODE = CURRENT_FORM.textToEncode;
  console.log('INPUT_TEXT_TO_ENCODE: ', INPUT_TEXT_TO_ENCODE);

  /**
   * Ces lignes ci-dessous permettent aussi de récupérer le
   * premier champ texte mais on voit qu'on doit faire plus d'étapes
   */
  const monPremierInput = document.getElementById('textToEncode');
  if (monPremierInput) {
    console.log('monPremierInput: ', monPremierInput);
  } else {
    console.log("Erreur durant la récupération de l'élément");
  }

  /**
   * Grâce à l'objet Formulaire récupéré via le déclenchement
   * je peux avoir accès aux champs de ce même formulaire plus facilement
   * Ici je récupère l'objet concernant mon second <input>
   * dont l'id est 'textEncoded'
   */
  const INPUT_ENCODED_TEXT = CURRENT_FORM.textEncoded;

  /**
   * Ici on appel notre fonction encode() en mettant en argument
   * la valeur du premier champ texte en accédant à sa propriété .value
   * Le retour de cette fonction est stocké dans une constante RESULT
   */
  const RESULT = encode(INPUT_TEXT_TO_ENCODE.value);

  /**
   * Si la constante RESULT est différente de null (elle contient donc une valeur)
   */
  if (!RESULT) {
    /**
     * On remplace la valeur du second champ texte par un message d'erreur
     */
    INPUT_ENCODED_TEXT.value = `💻 Il faut d'abord implémenter la fonction encode pour voir le résultat 😉`;
  } else {
    /**
     * On remplace la valeur du second champ texte par le résultat
     */
    INPUT_ENCODED_TEXT.value = RESULT;
  }
});
