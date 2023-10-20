// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "NONE"){
    return`![Github licence](https://img.shields.io/badge/license-${license}-blue.svg)`
  } else{
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "NONE"){
    return `* [License](#license)`
  } else{
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if(license !== "NONE"){
  return`## License 
  
  This project is licensed under ${license}`
} 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ${renderLicenseBadge(data.license)}

  ## Descritpiton

  ${data.description}

  ## Table of Contents 

  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 

  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contribution
  
  ${data.contribution}

  ## Tests

  ${data.test}

  ## Questions

  If you would like to checkout other projects feel free to check out my github at [${data.github}](https://github.com/${data.github}).
  If you have any questions please contact me directly at [${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
