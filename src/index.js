function generatrePoem(event){
 event.preventDefault();

 new Typewriter("#poem", {
  strings:"Je marcherai les yeux fixés sur mes pensées",
  autoStart: true,
  delay: 1,
  cursor: ""
});

}

let poemFormElement = document.querySelector("poem-generator-form");
poemFormElement.addEventListener("submit",generatrePoem);
