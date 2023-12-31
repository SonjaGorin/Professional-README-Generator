// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "No license") {
    return ""
  } else if (license) {
    return `[![license](https://img.shields.io/badge/license-${license}-purple.svg)](${renderLicenseLink(license)})`
  }
}

// Object of licenses
const licenses = {
  "MIT": {"fullName": "MIT-license-link", "link": "https://opensource.org/licenses/MIT"},
  "Apache": {"fullName": "Apache-license-link", "link": "https://opensource.org/license/apache-2-0/"},
  "Boost": {"fullName": "Boost-license-link", "link": "https://www.boost.org/LICENSE_1_0.txt"},
  "BSD": {"fullName": "BSD-3-Clause-license-link", "link": "https://opensource.org/license/bsd-3-clause/"},
  "Eclipse": {"fullName": "Eclipse-license-link", "link": "https://opensource.org/license/epl-1-0/"},
  "GPLv3": {"fullName": "GNU-GPL-v3-license-link", "link": "https://www.gnu.org/licenses/gpl-3.0"},
  "IBM": {"fullName": "IBM-license-link", "link": "https://www.ibm.com/docs/en/linux-on-z?topic=examples-common-public-license-v10"},
  "ISC": {"fullName": "ISC-license-link", "link": "https://opensource.org/license/isc-license-txt/"},
  "Mozilla": {"fullName": "Mozilla-license-link", "link": "https://opensource.org/license/mpl-2-0/"},
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseName) {
  const license = licenses[licenseName];
  
  if (license) {
    return `${license.link}`;
  } else {
    return "";
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "No license") {
    return "Please refer to the license badge on top of the README file. For more information about the license please click on the license badge."
  } else {
    return "There is no license chosen for this project."
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation:
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.test}
  ## Questions
  * Github: [${data.github}](https://github.com/${data.github})
  * Email: [${data.email}](mailto:user@example.com)
`;
}

module.exports = generateMarkdown;
