import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiMacos, SiWindows } from "react-icons/si";

function Platform() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<SiMacos />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiWindows />
			</Col>
		</Row>
	);
}

export default Platform;
