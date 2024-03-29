import React, { Suspense } from 'react';
import styled from 'styled-components';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Cube from './Cube';

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	justify-content: center;
`;

const Container = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	width: 1400px;
	display: flex;
	justify-content: space-between;
`;

const Left = styled.div`
	flex: 1;

	@media only screen and (max-width: 768px) {
		display: none;
	}
`;

const Title = styled.h1`
	font-size: 74px;

	@media only screen and (max-width: 768px) {
		font-size: 60px;
	}
`;

const Right = styled.div`
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

const Who = () => {
	return (
		<Section>
			<Container>
				<Left>
					<Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
						<Suspense fallback={null}>
							<ambientLight intensity={0.5} />
							<directionalLight position={[3, 2, 1]} />
							<Cube />
							<OrbitControls enableZoom={false} autoRotate />
						</Suspense>
					</Canvas>
				</Left>
				<Right>
					<Title>About Me</Title>
					<WhatWeDo>
						<Line src='./img/line.png' />
						<Subtitle>Jae Shin</Subtitle>
					</WhatWeDo>
					<Desc>
						My name is Jae, or Jay if you're a Starbucks barista. I'm a
						Full-Stack Software Engineer with a background in copywriting. I'm
						seeking to merge my creativity with PERN stack development to create
						enriching solutions and apps while expanding my technical skills.
					</Desc>
				</Right>
			</Container>
		</Section>
	);
};

export default Who;
