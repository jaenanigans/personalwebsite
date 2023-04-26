import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
	const { nodes, materials } = useGLTF('/pikachu-transformed.glb');
	return (
		<group {...props} dispose={null}>
			<primitive object={nodes._rootJoint} />
			<skinnedMesh
				geometry={nodes.Object_6.geometry}
				material={materials.Material_160}
				skeleton={nodes.Object_6.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Object_7.geometry}
				material={materials.Material_161}
				skeleton={nodes.Object_7.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Object_8.geometry}
				material={materials.Material_162}
				skeleton={nodes.Object_8.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Object_9.geometry}
				material={materials.Material_163}
				skeleton={nodes.Object_9.skeleton}
			/>
		</group>
	);
}

useGLTF.preload('/pikachu-transformed.glb');
