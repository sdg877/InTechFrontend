import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./JobDetailPage.css";

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

export default function JobDetailPage() {
  const [saved, setSaved] = useState(false);
  const location = useLocation();
  const job = location.state;

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    const isSaved = savedJobs.some((savedJob) => savedJob.id === job.id);
    setSaved(isSaved);
  }, [job]);

  if (!job) {
    return <div>Loading...</div>;
  }

  const generateGoogleMapsEmbedUrl = (area) => {
    const defaultArea = "UK";
    const encodedArea = encodeURIComponent(area || defaultArea);
    return `https://maps.google.com/maps?output=embed&q=${encodedArea}`;
  };

  const handleSaveJob = () => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    const updatedSavedJobs = [...savedJobs, job];
    localStorage.setItem("savedJobs", JSON.stringify(updatedSavedJobs));
    setSaved(true);
  };

  return (
    <>
      <div className="job-card-detail no-hover">
        <h1>{job.title}</h1>
        <h3>{job.company.display_name.toUpperCase()}</h3>
        <p><strong>Job Description:</strong> {job.description}</p>
        <p>
          Salary: £
          {job.salary_min.toLocaleString("en-GB", { maximumFractionDigits: 0 })}
          +
        </p>
        <p>{job.location.area[3] || job.location.area[4]}</p>
        <div className="button-container">
          { isAuthenticated() ? ( 
            <button
              onClick={handleSaveJob}
              disabled={saved}
              className="btn btn-primary"
            >
              {saved ? "Job Saved" : "Save Job"}
            </button>
          ) : (
            <Link to="/profile" className="btn btn-primary"> {/* Redirect to profile page if not authenticated */}
              Save Job
            </Link>
          )}
          <a
            href={job.redirect_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            See Full Description
          </a>
        </div>
        <div className="map-container">
          <iframe
            src={generateGoogleMapsEmbedUrl(job.location.area[3])}
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </>
  );
}
