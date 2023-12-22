import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: "justify" }}>
						Hi everyone,
						<br />
						<br />I am: <span className="purple">Jackson Phan </span>.
						<br />
						Age: <b className="purple">21</b>
						<br />
						<br />
						Gender: <b className="purple">Male</b>
						<br />
						<br />
						I graduated with the Bachelor of Information Technology, majors in
						Computer Science and Data Science in December 2023 from Queensland
						University of Technology, Brisbane.
						<br />
						<br />I am fluent in
						<i>
							<b className="purple">
								{" "}
								C#, Java, JavaScript, Python, HTML, CSS.{" "}
							</b>
						</i>
						<br />
						<br />
						My experiences:
					</p>
					<ul>
						<li className="about-activity">
							<ImPointRight /> Software Engineer at{" "}
							<b className="purple">Volvo Group Australia</b>
							<br />
							<i>
								Coordinated and delivered projects globally, documented
								solutions, and modernised legacy applications for
								digitalisation. Assessed risks from a Business Analysis
								perspective, proposing necessary changes in processes or IT
								implementations.
							</i>
						</li>
						<br />
						<li className="about-activity">
							<ImPointRight /> Software Engineer at{" "}
							<b className="purple">ARQ Group (NCS Next)</b>
							<br />
							<i>
								Engaged in a year-long QUT capstone project. Collaborated in a
								four-person team to develop predictive analytical algorithms,
								enhancing tide predictions and weather forecasts. The goal was
								to deliver an improved forecast for Brisbane City Council flood
								warnings, achieving a successful 93% accuracy in flood
								forecasting.
							</i>
						</li>
						<br />
						<li className="about-activity">
							<ImPointRight /> Software Engineer at{" "}
							<b className="purple">Planté</b>
							<br />
							<i>
								Collaborated in a four-person team to develop a company website,
								automated and optimized data handling processes for diverse
								trees and plants, actively supported mobile application
								development, and increased software security by 40%.
							</i>
						</li>
					</ul>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
