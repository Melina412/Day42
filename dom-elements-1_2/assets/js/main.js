// Aufgabe:

// Schreibe eine Funktion, die beim Anklicken der Buttons die Hintergrundfarben aller Elemente ändert.
// HTML- und CSS-Code findest du im Code-Snippet.
// Nutze zum Beispiel: getElementsByClassName, for-loop oder length.
// Bonus: Wenn man nochmal auf den Button klickt, ändert sich die Hintergrundfarbe wieder zurück.

console.log("test");

const example_elements = document.getElementsByClassName("example");
console.log(example_elements); // nur die elemente mit der klasse

const all_elements = document.body.children[0].children;
console.log(all_elements); // alle child elemente

// function myFunction() {
//   for (let i = 0; i < example_elements.length; i++) {
//     const element = example_elements[i];
//     // example_elements ist bereits die liste der elemente
//     element.style.backgroundColor = "skyblue";
//   }
// }

function myFunction() {
  for (let i = 0; i < example_elements.length; i++) {
    const element = example_elements[i];
    element.classList.toggle("background");
    // zurück ändern der farbe mit classList.toggle
  }
}
