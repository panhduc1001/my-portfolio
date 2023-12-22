import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
	DiJava,
	DiJavascript1,
	DiPython,
	DiHtml5,
	DiCss3,
	DiBootstrap,
	DiReact,
	DiNodejs,
	DiMsqlServer,
	DiMongodb,
	DiSqllite,
	DiPostgresql,
} from "react-icons/di";
import { SiDotnet, SiCsharp, SiMysql } from "react-icons/si";

function Techstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<SiDotnet />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiCsharp />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJava />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJavascript1 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiPython />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiHtml5 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiCss3 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiBootstrap />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiReact />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiNodejs />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiMsqlServer />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiMysql />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiSqllite />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiPostgresql />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiMongodb />
			</Col>
		</Row>
	);
}

export default Techstack;
