import React, { useState } from 'react';
import styled from 'styled-components';
import GitTube from './GitTube';
import FullFreak from './FullFreak';

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	justify-content: center;
	position: relative;
	color: black;
	font-size: 14px;
	font-weight: 300;
`;

const Container = styled.div`
	width: 1400px;
	display: flex;
	justify-content: space-between;

	@media only screen and (max-width: 768px) {
		width: 100%;
		flex-direction: column;
	}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;

	@media only screen and (max-width: 768px) {
		padding: 20px;
		justify-content: center;
	}
`;

const List = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const ListItem = styled.li`
	font-size: 90px;
	font-weight: bold;
	cursor: pointer;
	color: transparent;
	-webkit-text-stroke: 1px white;
	position: relative;

	@media only screen and (max-width: 768px) {
		font-size: 24px;
		color: white;
		-webkit-text-stroke: 0px;
	}

	::after {
		content: '${(props) => props.text}';
		position: absolute;
		top: 0;
		left: 0;
		color: pink;
		width: 0px;
		overflow: hidden;
		white-space: nowrap;
	}

	&:hover {
		::after {
			animation: moveText 0.5s linear both;

			@keyframes moveText {
				to {
					width: 100%;
				}
			}
		}
	}
`;

const Title = styled.h1`
	font-size: 74px;
	color: white;

	@media only screen and (max-width: 768px) {
		font-size: 60px;
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

const Link = styled.a`
	text-decoration: none;
`;

const Right = styled.div`
	flex: 1;
`;

const Works = () => {
	const [work, setWork] = useState('FullFreak Inc.');
	return (
		<Section>
			<Container>
				<Left>
					<List>
						<Title>Works</Title>
						<WhatWeDo>
							<Line src='./img/line.png' />
							<Subtitle>What I've worked on</Subtitle>
						</WhatWeDo>
						{/* {data.map((item) => (
							<ListItem key={item} text={item} onClick={() => setWork(item)}>
								{item}
							</ListItem>
						))} */}
						<Link href='https://www.fullfreak.games/games' target='_blank'>
							<ListItem
								text={'FullFreak Inc.'}
								onMouseEnter={() => setWork('FullFreak Inc.')}
							>
								FullFreak Inc.
							</ListItem>
						</Link>
						<Link href='https://github.com/jaenanigans/gittube' target='_blank'>
							<ListItem
								text={'GitTube'}
								onMouseEnter={() => setWork('GitTube')}
							>
								GitTube
							</ListItem>
						</Link>
					</List>
				</Left>
				<Right>{work === 'FullFreak Inc.' ? <FullFreak /> : <GitTube />}</Right>
			</Container>
		</Section>
	);
};

export default Works;
