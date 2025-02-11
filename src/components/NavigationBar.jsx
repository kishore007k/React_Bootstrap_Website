import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
	.navbar {
		background-color: #222;
	}

	.navbar-toggler-icon {
		background-color: grey;
		border-radius: 5px;
	}

	a,
	.navbar-brand,
	.navbar-nav .nav-link {
		color: #fff;

		&:hover {
			color: white;
		}
	}
`;

export default function NavigationBar() {
	return (
		<Styles>
			<Navbar expand="lg" fixed="top" collapseOnSelect>
				<Navbar.Brand href="/">Kumar</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Item>
							<Nav.Link href="/">Home</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="/about">About</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="/contact">Contact</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Styles>
	);
}
