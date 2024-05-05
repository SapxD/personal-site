// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Postgresql',
    competency: 3,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 4,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 3,
    category: ['Web Development', 'Tools', 'Cloud', 'CI/CD'],
  },
  {
    title: 'MySQL/SQL',
    competency: 4,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Flask',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git',
    competency: 5,
    category: ['Tools', 'Cloud', 'CI/CD'],
  },
  {
    title: 'Android Native',
    competency: 3,
    category: ['Android Development'],
  },
  {
    title: 'React-Native',
    competency: 3,
    category: ['Android Development', 'Javascript'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Shell Scripting',
    competency: 4,
    category: ['Languages', 'CI/CD'],
  },
  {
    title: 'Go',
    competency: 5,
    category: ['Languages', 'Cloud'],
  },
  {
    title: 'Docker',
    competency: 5,
    category: ['Tools', 'Cloud', 'CI/CD'],
  },
  {
    title: 'Docker Swarm',
    competency: 5,
    category: ['Tools', 'Cloud', 'CI/CD'],
  },
  {
    title: 'Kubernetes',
    competency: 5,
    category: ['Tools', 'Cloud', 'CI/CD'],
  },
  {
    title: 'Jenkins',
    competency: 3,
    category: ['Tools', 'Cloud', 'CI/CD'],
  },
  {
    title: 'Terraform',
    competency: 3,
    category: ['Tools', 'Cloud'],
  },
  {
    title: 'Slack',
    competency: 5,
    category: ['Collaboration and Communication'],
  },
  {
    title: 'Microsoft Teams',
    competency: 5,
    category: ['Collaboration and Communication'],
  },
  {
    title: 'Jira',
    competency: 5,
    category: ['Collaboration and Communication'],
  },
  {
    title: 'Confluence',
    competency: 5,
    category: ['Collaboration and Communication'],
  },
  {
    title: 'Ansible',
    competency: 4,
    category: ['Tools', 'Cloud'],
  },
  {
    title: 'Chef',
    competency: 2,
    category: ['Tools', 'Cloud'],
  },
  {
    title: 'Puppet',
    competency: 2,
    category: ['Tools', 'Cloud'],
  },
  {
    title: 'Maven',
    competency: 3,
    category: ['Tools', 'Cloud', 'CI/CD'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python'],
  },
  {
    title: 'Java',
    competency: 3.5,
    category: ['Languages'],
  },
  {
    title: 'C',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Unix/Linux',
    competency: 5,
    category: ['Tools', 'Pentesting'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Burp Suite',
    competency: 3,
    category: ['Pentesting', 'Tools'],
  },
  {
    title: 'Metasploit',
    competency: 3,
    category: ['Pentesting', 'Tools'],
  },
  {
    title: 'Powershell',
    competency: 3,
    category: ['Tools', 'Pentesting'],
  },
  {
    title: 'PHP',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'Pandas',
    competency: 3,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
