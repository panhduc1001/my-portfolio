import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	SiVisualstudiocode,
	SiVisualstudio,
	SiPycharm,
	SiAmazonaws,
	SiAzuredevops,
	SiMicrosoftoffice,
	SiPostman,
	SiSlack,
	SiGithub,
	SiGit,
	SiJira,
	SiConfluence,
	SiFigma,
	SiTrello,
} from "react-icons/si";

function Toolstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<SiVisualstudiocode />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiVisualstudio />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPycharm />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiAmazonaws />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiAzuredevops />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiMicrosoftoffice />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPostman />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiSlack />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiGit />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiGithub />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiSlack />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiJira />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiConfluence />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiTrello />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiFigma />
			</Col>
		</Row>
	);
}

export default Toolstack;
