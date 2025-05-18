import React from 'react';
import './vision.css'
import vision_icon from "../../assets/vision_icon.png"
import mission_icon from "../../assets/mission_icon.png"

const Vision = () => {
  return (
    <div className="visnmisn">
      <div className="visnmisn-container">
        <div className="visnmisn-card">
          <div className="visnmisn-card-head">
            <img src={vision_icon} alt="Vision Icon" />
            <span>VISION</span>
          </div>
          <p>
            To emerge as an institution of excellence by providing high quality education in
            Engineering, Technology and Management to contribute for the economic as well as societal
            growth of our nation.
          </p>
        </div>

        <div className="visnmisn-card">
          <div className="visnmisn-card-head">
            <img src={mission_icon} alt="Mission Icon" />
            <span>MISSION</span>
          </div>
          <ul>
            <li>
              To impart strong fundamental and value-based academic knowledge in various Engineering, Technology and Management disciplines to nurture creativity.
            </li>
            <li>
              To promote innovative Research and Development activities collaborating with Industries, R &amp; D organisations and other statutory bodies.
            </li>
            <li>
              To provide a conducive learning environment and training so as to empower the students with dynamic skill development for employability.
            </li>
            <li>
              To foster entrepreneurial spirit amongst the students for making a positive impact on remarkable community development.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Vision;
