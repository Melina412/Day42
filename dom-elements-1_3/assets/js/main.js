// Aufgabe:

// Schreibe eine Funktion, die beim Anklicken der Buttons jeweils den Inhalt der Elemente anzeigt. Schau dir das Ergebnis in der Ergebnisvorschau an.
// Den HTML- und CSS-Code findest du im Code-Snippet.
// Nutze: firstElementChild, lastElementChild, nextElementSibling, previousElementSibling, innerHTML, querySelectorAll, querySelector und addEventListener.

const my_nodelist = document.querySelectorAll("#myList");
console.log(my_nodelist);

console.log(document.body.children[0].children); // HTMLCollection

console.log(document.body.children[0].firstElementChild.innerHTML); // Super Mario

console.log(document.body.children[0].lastElementChild.innerHTML); // GTA

console.log(
  document.body.children[0].firstElementChild.nextElementSibling.innerHTML
); // Zelda

console.log(
  document.body.children[0].lastElementChild.previousElementSibling.innerHTML
); // RDR

console.log(document.body.children[1].children); // HTMLCollection

// 1. button
console.log(document.body.children[1].firstElementChild.innerHTML);

// 2. button
console.log(
  document.body.children[1].firstElementChild.nextElementSibling
    .nextElementSibling.innerHTML
);

// 3. button
console.log(
  document.body.children[1].lastElementChild.previousElementSibling
    .previousElementSibling.innerHTML
);

// 4. button
console.log(document.body.children[1].lastElementChild.innerHTML);

// output

let output = document.body.children[3]; // .innerHTML
console.log(output);

// * ---------------------------------------------------------------------------------

document.body.children[1].firstElementChild.addEventListener("click", () => {
  output.innerHTML = document.body.children[0].firstElementChild.innerHTML;
});

document.body.children[1].firstElementChild.nextElementSibling.nextElementSibling.addEventListener(
  "click",
  () => {
    output.innerHTML = document.body.children[0].lastElementChild.innerHTML;
  }
);

document.body.children[1].lastElementChild.previousElementSibling.previousElementSibling.addEventListener(
  "click",
  () => {
    output.innerHTML =
      document.body.children[0].firstElementChild.nextElementSibling.innerHTML;
  }
);

document.body.children[1].lastElementChild.addEventListener("click", () => {
  output.innerHTML =
    document.body.children[0].lastElementChild.previousElementSibling.innerHTML;
});
