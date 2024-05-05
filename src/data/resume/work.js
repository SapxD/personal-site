/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Tata Consultancy Services - IBM',
    position: 'Systems Engineer - Cloud Developer',
    startDate: '2023-01-01',
    summary: 'Working as Cloud Developer for IBM as a Contractor',
    highlights: [
      'One among the top 25 contributors for the IBM Cloud storage repository, and retrospectives.',
      'Working collaboratively in an agile team environment, with daily utilisation of technologies such as Go, Kubernetes, Docker and more.',
      'Contributed the various feature development for storage team by collaborating with partners like NetApp and HashiCorp.',
      'Played a key role in addressing technical debt through timely bug-fixing efforts.',
      'Contributed to development of infrastructure as a Service (IaaS) solution similar to AWS, GCP and Azure for IBM File/Share Storage',
    ],
  },
  {
    name: 'Tata Consultancy Services - IBM',
    position: 'Assistant System Engineer - Cloud Developer',
    startDate: '2022-03-04',
    summary: 'Working as Cloud Developer for IBM as a Contractor',
    highlights: [
      'Played a pivotal role in the development of dynamic lifecycle management for secrets and digital certificates in a kubernetes cluster.',
      'Developed Observability and Monitoring stack for IBM Cloud Storage.',
      'Major contribution towards Ansible automation for Storage SRE',
    ],
  },
  {
    name: 'Tata Consultancy Services - IBM',
    position: 'Assistant System Engineer Trainer - Cloud Developer',
    startDate: '2021-03-04',
    summary: 'Working as Cloud Developer for IBM as a Contractor',
    highlights: [
      'Contributed to IBM SRE tooling initiative.',
      'Worked on backlog and regulat technical debt clearance through bug fixes',
      'Contributed the internal metrics developement for Storage team',
    ],
  },
];

export default work;
