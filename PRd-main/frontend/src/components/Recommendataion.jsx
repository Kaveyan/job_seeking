import React from 'react';

const Project_guide = {
  // ... (Your Project_guide data here)
};

const AWS = {
  // ... (Your AWS data here)
};

const Google = {
  // ... (Your Google data here)
};

const Nvidia = {
  // ... (Your Nvidia data here)
};

const IBM = {
  // ... (Your IBM data here)
};

// Sample data for the job seeker (with skills and projects)
const job_seeker = {
  "skills": ["Python", "Data Analysis", "JavaScript"],
  "projects": ["Project a"],
  "companies": ["Nvidia", "AWS"]
};

function JobSeekerSuggestions({ missingSkills, missingProjects }) {
  return (
    <div>
      {missingSkills.length > 0 && (
        <div>
          <h2>Skills to Learn:</h2>
          <ul>
            {missingSkills.slice(0, 5).map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}

      {missingProjects.length > 0 && (
        <div>
          <h2>Real-Time Projects to Work On:</h2>
          {missingProjects.slice(0, 3).map((project, index) => (
            <div key={index}>
              <h3>Project: {project}</h3>
              <h4>Steps to proceed:</h4>
              <ul>
                {Project_guide[project].map((step, stepIndex) => (
                  <li key={stepIndex}>{step}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  const candidates = {};

  const selectedCompanies = job_seeker.companies;
  selectedCompanies.forEach((company) => {
    switch (company) {
      case "AWS":
        candidates[company] = AWS;
        break;
      case "Google":
        candidates[company] = Google;
        break;
      case "Nvidia":
        candidates[company] = Nvidia;
        break;
      case "IBM":
        candidates[company] = IBM;
        break;
      default:
        break;
    }
  });

  const skillCounts = {};
  const projectCounts = {};

  for (const candidate of Object.values(candidates)) {
    for (const skill of candidate.skills) {
      skillCounts[skill] = (skillCounts[skill] || 0) + 1;
    }
    for (const project of candidate.projects) {
      projectCounts[project] = (projectCounts[project] || 0) + 1;
    }
  }

  const topSkills = Object.entries(skillCounts).sort((a, b) => b[1] - a[1]).map(([skill]) => skill);
  const topProjects = Object.entries(projectCounts).sort((a, b) => b[1] - a[1]).map(([project]) => project);

  const commonSkills = topSkills.filter((skill) => job_seeker.skills.includes(skill));
  const commonProjects = topProjects.filter((project) => job_seeker.projects.includes(project));

  const missingSkills = topSkills.filter((skill) => !job_seeker.skills.includes(skill));
  const missingProjects = topProjects.filter((project) => !job_seeker.projects.includes(project));

  return (
    <div>
      <h1>Job Seeker Suggestions</h1>
      <JobSeekerSuggestions missingSkills={missingSkills} missingProjects={missingProjects} />
    </div>
  );
}

export default App;