import { useEffect, useState } from 'react';
import './ResumeBuilder.css';

const STORAGE_KEY = 'career-studio-resume';
const templates = ['Modern', 'Classic', 'Minimal', 'Creative', 'Corporate', 'ATS-Friendly'];

const emptyResume = {
  personal: {
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    linkedin: '',
  },
  summary: '',
  education: [],
  experience: [],
  skills: [],
  projects: [],
  certifications: [],
  achievements: [],
  languages: [],
  template: 'Modern',
  color: '#6257e8',
};

function loadResume() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return emptyResume;
    const parsed = JSON.parse(saved);
    if (!parsed || typeof parsed !== 'object' || !parsed.personal) return emptyResume;
    return {
      ...emptyResume,
      ...parsed,
      personal: { ...emptyResume.personal, ...parsed.personal },
      education: Array.isArray(parsed.education) ? parsed.education : [],
      experience: Array.isArray(parsed.experience) ? parsed.experience : [],
      skills: Array.isArray(parsed.skills) ? parsed.skills : [],
      projects: Array.isArray(parsed.projects) ? parsed.projects : [],
      certifications: Array.isArray(parsed.certifications) ? parsed.certifications : [],
      achievements: Array.isArray(parsed.achievements) ? parsed.achievements : [],
      languages: Array.isArray(parsed.languages) ? parsed.languages : [],
    };
  } catch (error) {
    console.error('Unable to load the saved resume.', error);
    return emptyResume;
  }
}

function newId() {
  return globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function TextField({ label, value, onChange, placeholder = '', type = 'text', required = false }) {
  return (
    <label className="rb-field">
      <span>{label}</span>
      <input
        type={type}
        value={value ?? ''}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required={required}
      />
    </label>
  );
}

function TextAreaField({ label, value, onChange, placeholder = '', rows = 3 }) {
  return (
    <label className="rb-field">
      <span>{label}</span>
      <textarea
        value={value ?? ''}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={rows}
      />
    </label>
  );
}

function formatDate(value) {
  if (!value) return '';
  const [year, month, day] = value.split('-').map(Number);
  if (!year || !month) return value;
  const date = new Date(year, month - 1, day || 1);
  return date.toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
}

function ResumeSection({ title, children }) {
  return (
    <section className="rb-resume-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function ResumePaper({ resume, paperRef }) {
  const { personal, education, experience, skills, projects, certifications, achievements, languages } = resume;
  const contact = [
    personal.email,
    personal.phone,
    personal.location,
    personal.website,
    personal.linkedin,
  ].filter(Boolean);

  return (
    <article
      className={`rb-paper rb-template-${resume.template.toLowerCase().replace(/[^a-z]+/g, '-')}`}
      style={{ '--resume-accent': resume.color }}
      ref={paperRef}
    >
      <header className="rb-resume-header">
        <div>
          <h1>{personal.name || 'Your Name'}</h1>
          <p className="rb-resume-title">{personal.title || 'Professional title'}</p>
        </div>
        {contact.length > 0 && (
          <div className="rb-resume-contact">
            {contact.map((item) => <span key={item}>{item}</span>)}
          </div>
        )}
      </header>

      <ResumeSection title="Professional Summary">
        <p className={resume.summary ? '' : 'rb-resume-placeholder'}>
          {resume.summary || 'Your professional summary will appear here.'}
        </p>
      </ResumeSection>

      {experience.length > 0 && (
        <ResumeSection title="Work Experience">
          {experience.map((item) => (
            <div className="rb-resume-entry" key={item.id}>
              <div className="rb-entry-heading">
                <strong>{item.role || 'Job title'}</strong>
                <span>{[formatDate(item.startDate), item.current ? 'Present' : formatDate(item.endDate)].filter(Boolean).join(' – ')}</span>
              </div>
              <div className="rb-entry-subheading">
                <span>{item.company}</span><span>{item.location}</span>
              </div>
              {item.description && <p>{item.description}</p>}
            </div>
          ))}
        </ResumeSection>
      )}

      {education.length > 0 && (
        <ResumeSection title="Education">
          {education.map((item) => (
            <div className="rb-resume-entry" key={item.id}>
              <div className="rb-entry-heading">
                <strong>{item.degree || 'Degree or qualification'}</strong>
                <span>{[formatDate(item.startDate), formatDate(item.endDate)].filter(Boolean).join(' – ')}</span>
              </div>
              <div className="rb-entry-subheading">
                <span>{item.school}</span><span>{item.location}</span>
              </div>
              {item.details && <p>{item.details}</p>}
            </div>
          ))}
        </ResumeSection>
      )}

      {skills.length > 0 && (
        <ResumeSection title="Technical Skills">
          <div className="rb-resume-skills">
            {skills.filter((skill) => skill.name).map((skill) => (
              <span key={skill.id}>
                {skill.category && <strong>{skill.category}: </strong>}{skill.name}
              </span>
            ))}
          </div>
        </ResumeSection>
      )}

      {projects.length > 0 && (
        <ResumeSection title="Projects">
          {projects.map((item) => (
            <div className="rb-resume-entry" key={item.id}>
              <div className="rb-entry-heading">
                <strong>{item.name || 'Project name'}</strong>
                <span>{item.link}</span>
              </div>
              {item.description && <p>{item.description}</p>}
              {item.technologies && <p><strong>Tools: </strong>{item.technologies}</p>}
            </div>
          ))}
        </ResumeSection>
      )}

      {certifications.length > 0 && (
        <ResumeSection title="Certifications">
          {certifications.map((item) => (
            <div className="rb-resume-entry" key={item.id}>
              <div className="rb-entry-heading">
                <strong>{item.name || 'Certification'}</strong><span>{formatDate(item.date)}</span>
              </div>
              {item.issuer && <div className="rb-entry-subheading"><span>{item.issuer}</span></div>}
            </div>
          ))}
        </ResumeSection>
      )}

      {achievements.length > 0 && (
        <ResumeSection title="Achievements">
          <ul className="rb-resume-list">
            {achievements.filter((item) => item.text).map((item) => <li key={item.id}>{item.text}</li>)}
          </ul>
        </ResumeSection>
      )}

      {languages.length > 0 && (
        <ResumeSection title="Languages">
          <div className="rb-resume-skills">
            {languages.filter((item) => item.name).map((item) => (
              <span key={item.id}>{item.name}{item.proficiency ? ` · ${item.proficiency}` : ''}</span>
            ))}
          </div>
        </ResumeSection>
      )}
    </article>
  );
}

function ResumeBuilder() {
  const [resume, setResume] = useState(loadResume);
  const [previewOnly, setPreviewOnly] = useState(false);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(resume));
    } catch (error) {
      console.error('Unable to save the resume in this browser.', error);
    }
  }, [resume]);

  const updatePersonal = (key, value) => {
    setResume((current) => ({
      ...current,
      personal: { ...current.personal, [key]: value },
    }));
    setNotice('');
  };

  const updateValue = (key, value) => {
    setResume((current) => ({ ...current, [key]: value }));
    setNotice('');
  };

  const addItem = (key, initialValues) => {
    setResume((current) => ({
      ...current,
      [key]: [...current[key], { id: newId(), ...initialValues }],
    }));
  };

  const updateItem = (key, id, field, value) => {
    setResume((current) => ({
      ...current,
      [key]: current[key].map((item) => item.id === id ? { ...item, [field]: value } : item),
    }));
    setNotice('');
  };

  const removeItem = (key, id) => {
    setResume((current) => ({
      ...current,
      [key]: current[key].filter((item) => item.id !== id),
    }));
  };

  const downloadResume = () => {
    const paper = document.querySelector('.rb-paper');
    if (!paper) {
      setNotice('The resume preview is not available to download.');
      return;
    }

    const clone = paper.cloneNode(true);
    const sourceNodes = [paper, ...paper.querySelectorAll('*')];
    const cloneNodes = [clone, ...clone.querySelectorAll('*')];
    sourceNodes.forEach((node, index) => {
      const computed = window.getComputedStyle(node);
      const styles = Array.from(computed).map((property) => `${property}:${computed.getPropertyValue(property)}`).join(';');
      cloneNodes[index].setAttribute('style', `${cloneNodes[index].getAttribute('style') || ''};${styles}`);
    });
    const html = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Resume</title><style>body{margin:0;padding:24px;background:#eef0f6;font-family:Arial,sans-serif}.rb-paper{margin:0 auto;max-width:794px;min-height:1123px;box-shadow:0 12px 35px #18213a22}@media print{body{padding:0;background:#fff}.rb-paper{box-shadow:none;max-width:none;min-height:0}}</style></head><body>${clone.outerHTML}</body></html>`;
    const file = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(file);
    const link = document.createElement('a');
    const safeName = (resume.personal.name || 'resume').trim().replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase();
    link.href = url;
    link.download = `${safeName || 'resume'}.html`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    setNotice('Resume downloaded as a standalone HTML file. Open it in a browser to print or save as PDF.');
  };

  const printResume = () => window.print();

  const clearForm = () => {
    if (!window.confirm('Clear all resume details? This also removes the saved resume from this browser.')) return;
    setResume({ ...emptyResume, personal: { ...emptyResume.personal } });
    setPreviewOnly(false);
    setNotice('Resume details cleared.');
  };

  const renderEntryFields = (key, item, fields) => (
    <div className="rb-record" key={item.id}>
      <button className="rb-remove" type="button" onClick={() => removeItem(key, item.id)} aria-label={`Remove ${fields[0].label.toLowerCase()}`}>
        Remove
      </button>
      <div className="rb-form-grid">
        {fields.map((field) => (
          <label className={`rb-field ${field.wide ? 'rb-field-wide' : ''}`} key={field.key}>
            <span>{field.label}</span>
            {field.multiline ? (
              <textarea
                rows={3}
                value={item[field.key] ?? ''}
                placeholder={field.placeholder || ''}
                onChange={(event) => updateItem(key, item.id, field.key, event.target.value)}
              />
            ) : (
              <input
                type={field.type || 'text'}
                value={item[field.key] ?? ''}
                placeholder={field.placeholder || ''}
                onChange={(event) => updateItem(key, item.id, field.key, event.target.value)}
              />
            )}
          </label>
        ))}
        {key === 'experience' && (
          <label className="rb-checkbox">
            <input
              type="checkbox"
              checked={Boolean(item.current)}
              onChange={(event) => updateItem(key, item.id, 'current', event.target.checked)}
            />
            I currently work here
          </label>
        )}
      </div>
    </div>
  );

  return (
    <div className={`rb-page ${previewOnly ? 'rb-preview-mode' : ''}`}>
      <header className="rb-page-header">
        <div>
          <div className="rb-eyebrow">CAREER STUDIO <span>·</span> YOUR NEXT CHAPTER</div>
          <h1>Resume builder</h1>
          <p>Build a polished, job-ready resume. Your work is saved automatically.</p>
        </div>
        <div className="rb-header-actions">
          <button className="rb-button rb-button-light" type="button" onClick={() => setPreviewOnly((value) => !value)}>
            {previewOnly ? '← Back to editor' : '◫ Preview'}
          </button>
          <button className="rb-button rb-button-light" type="button" onClick={printResume}>Print</button>
          <button className="rb-button rb-button-primary" type="button" onClick={downloadResume}>↓ Download resume</button>
        </div>
      </header>
      {notice && <div className="rb-notice" role="status">{notice}</div>}

      <div className="rb-workspace">
        <section className="rb-preview-panel" aria-label="Live resume preview">
          <div className="rb-panel-heading">
            <div><span className="rb-live-dot" /> LIVE PREVIEW</div>
            <span>A4 · Updates automatically</span>
          </div>
          <div className="rb-paper-wrap">
            <ResumePaper resume={resume} />
          </div>
        </section>

        {!previewOnly && (
          <aside className="rb-editor-panel" aria-label="Resume details form">
            <div className="rb-editor-intro">
              <span className="rb-step-label">YOUR CONTENT</span>
              <h2>Make it yours</h2>
              <p>Fill in the details below. You can skip anything that does not apply.</p>
            </div>

            <section className="rb-form-section">
              <h3><span className="rb-section-number">01</span> Personal details</h3>
              <div className="rb-form-grid">
                <TextField label="Full name" value={resume.personal.name} onChange={(value) => updatePersonal('name', value)} placeholder="e.g. Jordan Lee" />
                <TextField label="Professional title" value={resume.personal.title} onChange={(value) => updatePersonal('title', value)} placeholder="e.g. Product Designer" />
                <TextField label="Email" value={resume.personal.email} onChange={(value) => updatePersonal('email', value)} placeholder="you@example.com" type="email" />
                <TextField label="Phone" value={resume.personal.phone} onChange={(value) => updatePersonal('phone', value)} placeholder="+1 (555) 000-0000" type="tel" />
                <TextField label="Location" value={resume.personal.location} onChange={(value) => updatePersonal('location', value)} placeholder="City, Country" />
                <TextField label="Website / portfolio" value={resume.personal.website} onChange={(value) => updatePersonal('website', value)} placeholder="yourportfolio.com" />
                <TextField label="LinkedIn" value={resume.personal.linkedin} onChange={(value) => updatePersonal('linkedin', value)} placeholder="linkedin.com/in/you" />
              </div>
            </section>

            <section className="rb-form-section">
              <h3><span className="rb-section-number">02</span> Professional summary</h3>
              <TextAreaField label="A few lines about your experience and strengths" value={resume.summary} onChange={(value) => updateValue('summary', value)} placeholder="Summarize your experience, strengths, and the value you bring..." rows={5} />
            </section>

            <section className="rb-form-section">
              <h3><span className="rb-section-number">03</span> Work experience</h3>
              {resume.experience.map((item) => renderEntryFields('experience', item, [
                { key: 'role', label: 'Job title' },
                { key: 'company', label: 'Company' },
                { key: 'location', label: 'Location' },
                { key: 'startDate', label: 'Start date', type: 'date' },
                { key: 'endDate', label: 'End date', type: 'date' },
                { key: 'description', label: 'Highlights and impact', multiline: true, wide: true },
              ]))}
              <button className="rb-add-button" type="button" onClick={() => addItem('experience', { role: '', company: '', location: '', startDate: '', endDate: '', description: '', current: false })}>＋ Add experience</button>
            </section>

            <section className="rb-form-section">
              <h3><span className="rb-section-number">04</span> Education</h3>
              {resume.education.map((item) => renderEntryFields('education', item, [
                { key: 'degree', label: 'Degree / qualification' },
                { key: 'school', label: 'School / institution' },
                { key: 'location', label: 'Location' },
                { key: 'startDate', label: 'Start date', type: 'date' },
                { key: 'endDate', label: 'End date', type: 'date' },
                { key: 'details', label: 'Additional details', multiline: true, wide: true },
              ]))}
              <button className="rb-add-button" type="button" onClick={() => addItem('education', { degree: '', school: '', location: '', startDate: '', endDate: '', details: '' })}>＋ Add education</button>
            </section>

            <section className="rb-form-section">
              <h3><span className="rb-section-number">05</span> Technical skills</h3>
              {resume.skills.map((item) => renderEntryFields('skills', item, [
                { key: 'name', label: 'Skill' },
                { key: 'category', label: 'Category (optional)' },
              ]))}
              <button className="rb-add-button" type="button" onClick={() => addItem('skills', { name: '', category: '' })}>＋ Add skill</button>
            </section>

            <section className="rb-form-section">
              <h3><span className="rb-section-number">06</span> Projects</h3>
              {resume.projects.map((item) => renderEntryFields('projects', item, [
                { key: 'name', label: 'Project name' },
                { key: 'link', label: 'Project link' },
                { key: 'technologies', label: 'Technologies' },
                { key: 'description', label: 'What you built', multiline: true, wide: true },
              ]))}
              <button className="rb-add-button" type="button" onClick={() => addItem('projects', { name: '', link: '', technologies: '', description: '' })}>＋ Add project</button>
            </section>

            <section className="rb-form-section">
              <h3><span className="rb-section-number">07</span> Certifications</h3>
              {resume.certifications.map((item) => renderEntryFields('certifications', item, [
                { key: 'name', label: 'Certification name' },
                { key: 'issuer', label: 'Issuing organization' },
                { key: 'date', label: 'Date earned', type: 'date' },
              ]))}
              <button className="rb-add-button" type="button" onClick={() => addItem('certifications', { name: '', issuer: '', date: '' })}>＋ Add certification</button>
            </section>

            <section className="rb-form-section">
              <h3><span className="rb-section-number">08</span> Achievements</h3>
              {resume.achievements.map((item) => renderEntryFields('achievements', item, [
                { key: 'text', label: 'Achievement', placeholder: 'A result, award, or recognition', wide: true },
              ]))}
              <button className="rb-add-button" type="button" onClick={() => addItem('achievements', { text: '' })}>＋ Add achievement</button>
            </section>

            <section className="rb-form-section">
              <h3><span className="rb-section-number">09</span> Languages</h3>
              {resume.languages.map((item) => renderEntryFields('languages', item, [
                { key: 'name', label: 'Language' },
                { key: 'proficiency', label: 'Proficiency', placeholder: 'e.g. Fluent' },
              ]))}
              <button className="rb-add-button" type="button" onClick={() => addItem('languages', { name: '', proficiency: '' })}>＋ Add language</button>
            </section>

            <section className="rb-form-section rb-design-section">
              <h3><span className="rb-section-number">10</span> Design</h3>
              <label className="rb-field">
                <span>Resume template</span>
                <select value={resume.template} onChange={(event) => updateValue('template', event.target.value)}>
                  {templates.map((template) => <option key={template}>{template}</option>)}
                </select>
              </label>
              <label className="rb-color-field">
                <span><strong>Accent color</strong><small>Personalize your resume's highlights</small></span>
                <input type="color" value={resume.color} onChange={(event) => updateValue('color', event.target.value)} aria-label="Choose resume accent color" />
              </label>
            </section>

            <div className="rb-editor-footer">
              <button className="rb-button rb-button-light" type="button" onClick={clearForm}>Clear form</button>
              <span>Saved automatically on this device</span>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}

export default ResumeBuilder;
