import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import styled from 'styled-components';
import Pikachu from './Pikachu';

const Desc = styled.div`
	width: 200px;
	height: 70px;
	padding: 20px;
	background-color: white;
	border-radius: 10px;
	position: absolute;
	top: 100px;
	right: 100px;

	@media only screen and (max-width: 768px) {
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}
`;

const FullFreak = () => {
	return (
		<>
			<Canvas>
				<Suspense fallback={null}>
					<Stage environment='city' intensity={0.1}>
						<Pikachu />
					</Stage>
					<OrbitControls enableZoom={false} autoRotate />
				</Suspense>
			</Canvas>
			<Desc>Play multiple mini-games inspired by Pokemon</Desc>
		</>
	);
};

export default FullFreak;
