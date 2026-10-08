import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Resume from './pages/Resume';
import ResumeAnalysis from './pages/ResumeAnalysis';
import SkillGap from './pages/SkillGap';
import JobRecommendations from './pages/JobRecommendations';
import JobAnalysis from './pages/JobAnalysis';
import SavedJobs from './pages/SavedJobs';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Logout from './pages/Logout';

import Sidebar from './components/Sidebar';

import './App.css';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Login Page */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Main Application */}
        <Route
          path="*"
          element={
            <>
              <Sidebar />

              <main className="main-content">
                <Routes>

                  {/* Home */}
                  <Route path="/" element={<Home />} />

                  {/* Dashboard */}
                  <Route
                    path="/dashboard"
                    element={<Dashboard />}
                  />

                  {/* My Resume */}
                  <Route
                    path="/resume"
                    element={<Resume />}
                  />

                  {/* Resume Analysis */}
                  <Route
                    path="/resume-analysis"
                    element={<ResumeAnalysis />}
                  />

                  {/* Skill Gap */}
                  <Route
                    path="/skill-gap"
                    element={<SkillGap />}
                  />

                  {/* Job Recommendations */}
                  <Route
                    path="/jobs"
                    element={<JobRecommendations />}
                  />

                  {/* Job Analysis */}
                  <Route
                    path="/job-analysis"
                    element={<JobAnalysis />}
                  />

                  {/* Saved Jobs */}
                  <Route
                    path="/saved-jobs"
                    element={<SavedJobs />}
                  />

                  {/* Profile */}
                  <Route
                    path="/profile"
                    element={<Profile />}
                  />

                  {/* Settings */}
                  <Route
                    path="/settings"
                    element={<Settings />}
                  />

                  {/* Logout */}
                  <Route
                    path="/logout"
                    element={<Logout />}
                  />

                </Routes>
              </main>
            </>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;