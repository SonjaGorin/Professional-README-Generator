// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[MIT-license-link](https://opensource.org/licenses/MIT)";
  
  } else if (license === "Apache") {
    return "[Apache-license-link](https://opensource.org/license/apache-2-0/)";

  } else if (license === "Boost") {
    return "[Boost-license-link](https://www.boost.org/LICENSE_1_0.txt)";

  } else if (license === "BSD 3-Clause License") {
    return "[BSD-3-Clause-license-link](https://opensource.org/license/bsd-3-clause/)";

  } else if (license === "Eclipse") {
    return "[Eclipse-license-link](https://opensource.org/license/epl-1-0/)";

  } else if (license === "GNU GPL v3") {
    return "[GNU-GPL-v3](https://www.gnu.org/licenses/gpl-3.0)";

  } else if (license === "IBM") {
    return "[IBM-license-link](https://www.ibm.com/docs/en/linux-on-z?topic=examples-common-public-license-v10)";

  } else if (license === "ISC") {
    return "[ISC-license-link](https://opensource.org/license/isc-license-txt/)";

  } else if (license === "Mozilla") {
    return "[Mozilla-license-link](https://opensource.org/license/mpl-2-0/)";

  } else if (license === "Attribution License (BY)") {
    return "[Attribution-License-(BY)-link](https://opendatacommons.org/licenses/by/)";

  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
