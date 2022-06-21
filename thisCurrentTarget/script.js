document.getElementById("paragraph").addEventListener("click", 
  function (event) {
    console.log(
    `PARAGRAPH FUNCTION EXPRESSION
     Target = ${event.target.tagName},
     Current Target = ${event.currentTarget.tagName},
     This = ${this.tagName}`
    );
});

document.getElementById("btn").addEventListener("click", 
  function (event) {
    console.log(
    `BUTTON FUNCTION EXPRESSION
     Target = ${event.target.tagName}, 
     Current Target = ${event.currentTarget.tagName},
     This = ${this.tagName}`
    );
});

document.getElementById("paragraph").addEventListener("click", 
  (event) => {
    console.log(
    `PARAGRAPH W/ ARROW FUNCTION
     Target = ${event.target.tagName},
     Current Target = ${event.currentTarget.tagName},
     This = ${this.tagName}`
    );
});

document.getElementById("btn").addEventListener("click", 
  (event) => {
    console.log(
    `BUTTON W/ ARROW FUNCTION
     Target = ${event.target.tagName}, 
     Current Target = ${event.currentTarget.tagName},
     This = ${this.tagName}`
    );
});

document.getElementById("paragraph").addEventListener("click", fdParagraph);

document.getElementById("btn").addEventListener("click", fdButton);

function fdParagraph() {
    console.log(
    `PARAGRAPH W/ FUNCTION DECLARATION
     Target = ${event.target.tagName}, 
     Current Target = ${event.currentTarget.tagName},
     This = ${this.tagName}`
    );
}

function fdButton() {
    console.log(
    `BUTTON W/ FUNCTION DECLARATION
     Target = ${event.target.tagName}, 
     Current Target = ${event.currentTarget.tagName},
     This = ${this.tagName}`
    );
}