// Aufgabe:

// In dieser Übung lernst du DOM Elements und Forms Value kennen.
// Schreibe hierfür eine Funktion, die beim Anklicken des Buttons die Werte in der Konsole ausgibt.
// Der Code ist vorgegeben (siehe Code-Snippet).

// * Methode 1: via input attribute  (wie bisher)

const land_select = document.querySelector('select[name="land"]');
const submit_button = document.querySelector('input[type="submit"]');

let first_name = "";
let last_name = "";
let land = "";

submit_button.addEventListener("click", () => {
  console.log(" --- via id & name tags: ---");
  first_name = document.getElementById("vorname").value;
  last_name = document.getElementById("nachname").value;
  land = land_select.value;
  console.log(`Full name: ${first_name} ${last_name}, Land: ${land} `);
});

// * Methode 2: via forms

const my_form = document.body.children[0].firstElementChild;
const submit_button_2 = my_form.lastElementChild;

let first_name_2 = "";
let last_name_2 = "";
let land_2 = "";

submit_button_2.addEventListener("click", () => {
  console.log(" --- via form input methode: ---");
  first_name_2 = my_form.vorname.value;
  last_name_2 = my_form.nachname.value;
  land_2 = my_form.lastElementChild.previousElementSibling.value;
  console.log(`Full name: ${first_name_2} ${last_name_2}, Land: ${land_2} `);
});

// * beide Methoden haben genau die gleiche Funktion und
// * sind auch gleich lang vom code

// vier Wege um an das gleiche Element zu kommen:
console.log(document.getElementById("form1")); // via id
console.log(document.querySelector("form")); // via element tag

console.log(document.body.children[0].children[0]); // via parent/child
console.log(document.body.children[0].firstElementChild);
