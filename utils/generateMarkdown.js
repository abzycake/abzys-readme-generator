// Creating a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
    if (license !== "none") {
        return `![Github licence](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return "";
}

//Creating a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title} 
${renderLicenseBadge(data.licence)}
## Description
${data.description}
## Deployed Application URL
${data.link}
## Screenshot
![alt-text](${data.image})
## Table of Contents
* [Languages, Dependencies, Libraries](#Required)
* [How to Use This Application](#Instructions)
* [Features](#features)
* [Contributors](#contributors)
## Features
${data.features}
## Languages & Required Dependencies
${data.required}
## Instructions
${data.usage}
## Contributors
${data.contributors}
## Questions
Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
`;
}

module.exports = generateMarkdown;