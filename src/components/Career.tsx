import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst</h4>
                <h5>Truist</h5>
              </div>
              <h3>2024-2025</h3>
            </div>
            <p>
              Leveraged data analysis and reporting to identify trends, solve
              business problems, and improve operational outcomes.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Business Analyst</h4>
                <h5>Truist</h5>
              </div>
              <h3>2025-2026</h3>
            </div>
            <p>
              Bridged business and technology teams by translating business
              needs into requirements and practical technology solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Analytics Specialist</h4>
                <h5>Truist</h5>
              </div>
              <h3>June 2026</h3>
            </div>
            <p>
              Analyzed business data and performance trends to deliver
              insights, improve processes, and support data-driven decision
              making.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
