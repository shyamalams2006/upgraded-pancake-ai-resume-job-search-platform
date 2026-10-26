const API_BASE_URL = "http://127.0.0.1:8000";

export async function fetchJobs(params = {}) {
  const query = new URLSearchParams(params);
  const response = await fetch(
    `${API_BASE_URL}/jobs/search?${query.toString()}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch jobs: ${response.status}`);
  }

  const result = await response.json();
  return result.data;
}

export async function fetchSkills() {
  const response = await fetch(`${API_BASE_URL}/skills`);

  if (!response.ok) {
    throw new Error(`Failed to fetch skills: ${response.status}`);
  }

  const result = await response.json();
  return result.data;
}

export async function fetchSkillGap(resumeId) {
  const response = await fetch(
    `${API_BASE_URL}/skill-gap/${encodeURIComponent(resumeId)}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch skill gap: ${response.status}`);
  }

  const result = await response.json();
  return result.data;
}