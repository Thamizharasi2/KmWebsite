import React, { useState, useEffect } from 'react';
import './Career.css';
// import jobData from './JobData';

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    setJobs(jobData);
  }, []);

  const filteredJobs = filter === 'All' ? jobs : jobs.filter(job => job.department === filter);

  return (
    <section className="career-section">
      <h1 className="career-title" data-aos="fade-down">Join Our Team</h1>

      <div className="career-filter" data-aos="fade-up">
        <label htmlFor="filter-select">Filter by Department:</label>
        <select
          id="filter-select"
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="filter-select"
        >
          <option value="All">All</option>
          <option value="Engineering">Engineering</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
          <option value="HR">HR</option>
        </select>
      </div>

      <div className="job-listings" data-aos="fade-up" data-aos-delay="100">
        {filteredJobs.length === 0 ? (
          <p>No jobs available in this department right now.</p>
        ) : (
          filteredJobs.map(job => (
            <article key={job.id} className="job-card">
              <h2 className="job-title">{job.title}</h2>
              <p className="job-location">{job.location}</p>
              <p className="job-department">{job.department}</p>
              <p className="job-description">{job.description}</p>
              <button
                className="apply-btn"
                onClick={() => alert(`Applying for ${job.title}`)}
              >
                Apply Now
              </button>
            </article>
          ))
        )}
      </div>
    </section>
  );
};

export default Career;
