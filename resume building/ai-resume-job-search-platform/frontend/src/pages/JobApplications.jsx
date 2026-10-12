import { useEffect, useMemo, useState } from 'react';
import './JobApplications.css';

const STORAGE_KEY = 'career-studio-job-applications';
const statuses = ['Applied', 'Interview Scheduled', 'Shortlisted', 'Rejected', 'Offer Received'];
const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Internship', 'Temporary'];
const emptyApplication = {
  title: '',
  company: '',
  description: '',
  location: '',
  jobType: 'Full-time',
  salary: '',
  applicationDate: new Date().toISOString().slice(0, 10),
  status: 'Applied',
};

function readApplications() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Unable to load saved job applications.', error);
    return [];
  }
}

function JobApplications() {
  const [applications, setApplications] = useState(readApplications);
  const [form, setForm] = useState(emptyApplication);
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All statuses');
  const [typeFilter, setTypeFilter] = useState('All job types');
  const [notice, setNotice] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
    } catch (error) {
      console.error('Unable to save job applications in this browser.', error);
    }
  }, [applications]);

  const filteredApplications = useMemo(() => {
    const query = search.trim().toLowerCase();
    return applications
      .filter((item) => statusFilter === 'All statuses' || item.status === statusFilter)
      .filter((item) => typeFilter === 'All job types' || item.jobType === typeFilter)
      .filter((item) => !query || [item.title, item.company, item.location, item.description].some((value) => value?.toLowerCase().includes(query)))
      .sort((a, b) => (b.applicationDate || '').localeCompare(a.applicationDate || ''));
  }, [applications, search, statusFilter, typeFilter]);

  const updateForm = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
    setNotice('');
  };

  const resetForm = () => {
    setForm({ ...emptyApplication });
    setEditingId(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.title.trim() || !form.company.trim()) return;

    if (editingId) {
      setApplications((current) => current.map((item) => item.id === editingId ? { ...form, id: editingId } : item));
      setNotice('Application updated.');
    } else {
      setApplications((current) => [{ ...form, id: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}` }, ...current]);
      setNotice('Application added.');
    }
    resetForm();
  };

  const editApplication = (application) => {
    const { id, ...details } = application;
    setForm({ ...emptyApplication, ...details });
    setEditingId(id);
    document.querySelector('.ja-form-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const deleteApplication = (id) => {
    if (!window.confirm('Delete this job application?')) return;
    setApplications((current) => current.filter((item) => item.id !== id));
    if (editingId === id) resetForm();
    setNotice('Application deleted.');
  };

  const statusCounts = statuses.reduce((counts, status) => ({
    ...counts,
    [status]: applications.filter((application) => application.status === status).length,
  }), {});

  return (
    <div className="ja-page">
      <header className="ja-header">
        <div>
          <div className="ja-eyebrow">CAREER STUDIO <span>·</span> YOUR JOB SEARCH</div>
          <h1>Application tracker</h1>
          <p>Keep every opportunity organized, from first application to offer.</p>
        </div>
        <a className="ja-header-link" href="#ja-add-application">＋ Add application</a>
      </header>

      {notice && <div className="ja-notice" role="status">{notice}</div>}

      <section className="ja-stats" aria-label="Application status summary">
        <article className="ja-stat ja-stat-total">
          <span className="ja-stat-icon">▤</span>
          <div><small>Total applications</small><strong>{applications.length}</strong></div>
        </article>
        {[
          ['Applied', '↗'],
          ['Interview Scheduled', '◷'],
          ['Offer Received', '✦'],
        ].map(([status, icon]) => (
          <article className="ja-stat" key={status}>
            <span className="ja-stat-icon">{icon}</span>
            <div><small>{status}</small><strong>{statusCounts[status]}</strong></div>
          </article>
        ))}
      </section>

      <div className="ja-layout">
        <section className="ja-list-panel">
          <div className="ja-list-heading">
            <div><h2>Your applications</h2><p>{filteredApplications.length} {filteredApplications.length === 1 ? 'opportunity' : 'opportunities'}</p></div>
          </div>

          <div className="ja-filters">
            <label className="ja-search">
              <span aria-hidden="true">⌕</span>
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search title, company, location..." aria-label="Search applications" />
            </label>
            <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} aria-label="Filter by application status">
              <option>All statuses</option>
              {statuses.map((status) => <option key={status}>{status}</option>)}
            </select>
            <select value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)} aria-label="Filter by job type">
              <option>All job types</option>
              {jobTypes.map((type) => <option key={type}>{type}</option>)}
            </select>
          </div>

          {filteredApplications.length > 0 ? (
            <div className="ja-cards">
              {filteredApplications.map((application) => (
                <article className="ja-card" key={application.id}>
                  <div className="ja-card-top">
                    <div className="ja-company-mark" aria-hidden="true">{application.company.trim().slice(0, 1).toUpperCase()}</div>
                    <div className="ja-card-title">
                      <h3>{application.title}</h3>
                      <p>{application.company}</p>
                    </div>
                    <span className={`ja-status ja-status-${application.status.toLowerCase().replace(/[^a-z]+/g, '-')}`}>{application.status}</span>
                  </div>
                  <div className="ja-meta">
                    {application.location && <span>⌖ {application.location}</span>}
                    <span>▣ {application.jobType}</span>
                    {application.salary && <span>＄ {application.salary}</span>}
                    {application.applicationDate && <span>◷ {new Date(`${application.applicationDate}T12:00:00`).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>}
                  </div>
                  {application.description && <p className="ja-description">{application.description}</p>}
                  <div className="ja-card-footer">
                    <label className="ja-status-select">
                      <span>Status</span>
                      <select
                        value={application.status}
                        onChange={(event) => setApplications((current) => current.map((item) => item.id === application.id ? { ...item, status: event.target.value } : item))}
                        aria-label={`Update status for ${application.title}`}
                      >
                        {statuses.map((status) => <option key={status}>{status}</option>)}
                      </select>
                    </label>
                    <div className="ja-card-actions">
                      <button type="button" onClick={() => editApplication(application)}>Edit</button>
                      <button className="ja-delete" type="button" onClick={() => deleteApplication(application.id)}>Delete</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="ja-empty">
              <span className="ja-empty-icon">▤</span>
              <h3>{applications.length ? 'No matching applications' : 'Your next opportunity starts here'}</h3>
              <p>{applications.length ? 'Try changing your search or filters.' : 'Add an application to keep your job search organized in one place.'}</p>
              {!applications.length && <a href="#ja-add-application">Add your first application →</a>}
            </div>
          )}
        </section>

        <aside className="ja-form-card" id="ja-add-application">
          <div className="ja-form-heading">
            <span className="ja-form-icon">{editingId ? '✎' : '＋'}</span>
            <div><h2>{editingId ? 'Edit application' : 'Add an application'}</h2><p>Capture the important details.</p></div>
          </div>
          <form onSubmit={handleSubmit}>
            <label className="ja-field">
              <span>Job title <i>*</i></span>
              <input required value={form.title} onChange={(event) => updateForm('title', event.target.value)} placeholder="e.g. Product Designer" />
            </label>
            <label className="ja-field">
              <span>Company name <i>*</i></span>
              <input required value={form.company} onChange={(event) => updateForm('company', event.target.value)} placeholder="e.g. Acme Studio" />
            </label>
            <label className="ja-field">
              <span>Job description</span>
              <textarea rows={4} value={form.description} onChange={(event) => updateForm('description', event.target.value)} placeholder="Notes about the role, requirements, or contact..." />
            </label>
            <div className="ja-form-grid">
              <label className="ja-field">
                <span>Location</span>
                <input value={form.location} onChange={(event) => updateForm('location', event.target.value)} placeholder="City or remote" />
              </label>
              <label className="ja-field">
                <span>Job type</span>
                <select value={form.jobType} onChange={(event) => updateForm('jobType', event.target.value)}>
                  {jobTypes.map((type) => <option key={type}>{type}</option>)}
                </select>
              </label>
            </div>
            <div className="ja-form-grid">
              <label className="ja-field">
                <span>Salary range</span>
                <input value={form.salary} onChange={(event) => updateForm('salary', event.target.value)} placeholder="e.g. $80k–$100k" />
              </label>
              <label className="ja-field">
                <span>Application date</span>
                <input type="date" value={form.applicationDate} onChange={(event) => updateForm('applicationDate', event.target.value)} />
              </label>
            </div>
            <label className="ja-field">
              <span>Application status</span>
              <select value={form.status} onChange={(event) => updateForm('status', event.target.value)}>
                {statuses.map((status) => <option key={status}>{status}</option>)}
              </select>
            </label>
            <div className="ja-form-actions">
              {editingId && <button className="ja-cancel-button" type="button" onClick={resetForm}>Cancel</button>}
              <button className="ja-submit-button" type="submit">{editingId ? 'Save changes' : 'Add application'} <span>→</span></button>
            </div>
          </form>
          <p className="ja-local-note">🔒 Your application data stays in this browser.</p>
        </aside>
      </div>
    </div>
  );
}

export default JobApplications;
