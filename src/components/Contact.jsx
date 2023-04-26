import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	gap: 50px;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;

	@media only screen and (max-width: 768px) {
		align-items: center;
		text-align: center;
	}
`;

const WhatWeDo = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

const Line = styled.img`
	height: 5px;
`;

const Subtitle = styled.h2`
	color: #da4ea2;
`;

const Desc = styled.p`
	font-size: 24px;
	color: lightgray;
`;

const Right = styled.div`
	flex: 1;
	@media only screen and (max-width: 768px) {
		display: none;
	}
`;

const Contact = () => {
	return (
		<Section>
			<Container>
				<Left>
					<WhatWeDo>
						<Line src='./img/line.png' />
						<Subtitle>Contact</Subtitle>
					</WhatWeDo>
					<Desc>Email: shin.jw11@gmail.com</Desc>
					<Desc>
						Sorry, no form submission. Too many spam emails from foreign
						countries.
					</Desc>
				</Left>
				<Right></Right>
			</Container>
		</Section>
	);
};

export default Contact;
