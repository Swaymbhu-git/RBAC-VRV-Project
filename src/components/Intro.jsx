import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <>
      {/* Separator between the sections */}
      <div className="separator"></div>

      {/* About Us Section */}
      <div className="intro">
        <div className="about-us">
          <h1 className="ppy">About Us</h1>
          <p className="ppy2">
            VRV Security, founded in 2020 in Chennai, Tamil Nadu, is a global
            powerhouse in AI-driven cybersecurity solutions. With a presence in
            over 12 countries, we have rapidly expanded to protect digital
            assets for Fortune 500 companies and government organizations.In 2024, our company valuation soared to $400 million, and we
            continue to set new benchmarks in cybersecurity. We deliver more
            than 500,000 hours of proactive threat monitoring annually and have
            secured over 1 million endpoints worldwide.Trusted by over 200 international clients across 5 continents, our
            expert team ensures unparalleled security and client satisfaction.
          </p>
        </div>

        {/* What We Do and Mission */}
        <div className="content">
          {/* What We Do */}
          <div className="box">
            <h2>What We Do</h2>
            <p>
              Our advanced cybersecurity offerings, powered by AI and cloud
              technologies, safeguard modern digital infrastructures. Key
              services include:
            </p>
            <ul>
              <li>
                <strong>AI-Dependent Services and Solutions VAPT:</strong>{" "}
                Comprehensive Vulnerability Assessment and Penetration Testing
                (VAPT) using AI to efficiently identify and mitigate threats.
              </li>
              <li>
                <strong>Cloud Infrastructure VAPT:</strong> Securing cloud
                environments by identifying vulnerabilities and ensuring robust
                defenses for sensitive data and applications.
              </li>
              <li>
                <strong>Threat Monitoring & SOC:</strong> 24/7 monitoring,
                incident response, and real-time analytics through our Security
                Operations Center (SOC) to counter evolving cyber threats.
              </li>
            </ul>
          </div>

          {/* Our Mission */}
          <div className="box">
            <h2 className="mission-title">Our Mission</h2>
            <p>
              VRV Security leverages advanced artificial intelligence to deliver
              solutions that adapt to dynamic threats. Our systems predict and
              mitigate risks before they manifest, providing proactive and
              comprehensive protection for digital infrastructures.

            </p>
            <p>
              We aim to set a new standard in threat management by emphasizing
              early detection and prevention. With cutting-edge technology and
              strategic planning, we enable businesses to operate securely in an
              ever-evolving digital landscape.
              
            </p>
            <p>
              As a pioneer in cybersecurity innovation, we strive to stay ahead
              of emerging threats and trends. VRV Security is committed to
              redefining industry standards, ensuring clients remain resilient
              in a rapidly changing digital era.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
