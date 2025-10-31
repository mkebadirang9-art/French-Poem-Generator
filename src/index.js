function displayPoem(response){
new Typewriter("#poem", {
  strings:response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: ""
});

}



function generatePoem(event){
 event.preventDefault();
let instructionInput = document.querySelector("#user-instructions")
 let apiKey = "2ab140051tc6a33060fa9bfdb4fbcocf";
let context =
           "You are a romantic poem expert and love to write short poems.your mission is to generate four line poem in basic HTML and separate each line with <br /> . make sure you follow user instructions";
 let prompt =`user instructions:Generate french poems about ${instructionInput.value}`;
let apiUrl =`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("Generating poem");
console.log(`prompt :${prompt}`);
console.log(`context: ${context}`);



 axios.get(apiUrl).then(displayPoem);
 

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit",generatePoem);
