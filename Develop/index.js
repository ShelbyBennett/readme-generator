// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");
  
// TODO: Create an array of questions for user input
const questions = [{
  type:"input",
  name:"title",
  message:"what is the title of your project?"

},{
  type:"input",
  name:"description",
  message:"Please give a description of your project."
},{
  type:"input",
  name:"installation",
  message:"Give insturctions to install any package necessary for project."

},{
  type:"input",
  name:"usage",
  message:"Explain how to use your project"
},{
  type:"input",
  name:"contribution",
  message:"What are the guidelines to contribute to your project"
},{
  type:"input",
  name:"test",
  message:"How to run tests on your project"
},{
  type:"list",
  name:"license",
  message:"What license is your project under",
  choices:["MIT","ISC","GNU","APACHE2.0","NONE"]
},{
  type:"input",
  name:"github",
  message:"Enter your github username.",
},{
  type:"input",
  name:"email",
  message:"Enter your email address."
}];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(fileName),data)
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers)=>{
    writeToFile("README2.md",generateMarkdown({...answers}))
  })
}

// Function call to initialize app
init();
