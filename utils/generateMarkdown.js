// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

const licenses = {
  "MIT": {"fullName": "MIT-license-link", "link": "https://opensource.org/licenses/MIT"},
  "Apache": {"fullName": "Apache-license-link", "link": "https://opensource.org/license/apache-2-0/"},
  "Boost": {"fullName": "Boost-license-link", "link": "https://www.boost.org/LICENSE_1_0.txt"},
  "BSD 3-Clause License": {"fullName": "BSD-3-Clause-license-link", "link": "https://opensource.org/license/bsd-3-clause/"},
  "Eclipse": {"fullName": "Eclipse-license-link", "link": "https://opensource.org/license/epl-1-0/"},
  "GNU GPL v3": {"fullName": "GNU-GPL-v3-license-link", "link": "https://www.gnu.org/licenses/gpl-3.0"},
  "IBM": {"fullName": "IBM-license-link", "link": "https://www.ibm.com/docs/en/linux-on-z?topic=examples-common-public-license-v10"},
  "ISC": {"fullName": "ISC-license-link", "link": "https://opensource.org/license/isc-license-txt/"},
  "Mozilla": {"fullName": "Mozilla-license-link", "link": "https://opensource.org/license/mpl-2-0/"},
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseName) {
  const license = licenses[licenseName];

  if (license) {
    return `[ + ${license.fullName} + ]( + ${license.link} + )`;

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
