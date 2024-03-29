/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 snorlax.gltf --transform
Author: Christian Day (https://sketchfab.com/biochrisdd)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/snorlax-f6a4dd098bdf417581171aff638a848b
Title: Snorlax!
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
	const { nodes, materials } = useGLTF('/snorlax-transformed.glb');
	return (
		<group {...props} dispose={null}>
			<group position={[0, 0.45, 0]} scale={2.49}>
				<mesh
					geometry={nodes.Object_6.geometry}
					material={materials.material_1}
				/>
				<mesh
					geometry={nodes.Object_7.geometry}
					material={materials.material_1}
				/>
				<mesh
					geometry={nodes.Object_8.geometry}
					material={materials.material_1}
				/>
				<mesh
					geometry={nodes.Object_9.geometry}
					material={materials.material_1}
				/>
				<mesh
					geometry={nodes.Object_10.geometry}
					material={materials.material_1}
				/>
				<mesh
					geometry={nodes.Object_11.geometry}
					material={materials.material_1}
				/>
				<mesh
					geometry={nodes.Object_12.geometry}
					material={materials.material_1}
				/>
				<mesh
					geometry={nodes.Object_13.geometry}
					material={materials.material_1}
				/>
				<mesh
					geometry={nodes.Object_14.geometry}
					material={materials.material_1}
				/>
				<mesh
					geometry={nodes.Object_15.geometry}
					material={materials.material_1}
				/>
			</group>
			<mesh
				geometry={nodes.Object_4.geometry}
				material={materials.material_0}
			/>
			<mesh
				geometry={nodes.Object_17.geometry}
				material={materials.material_2}
			/>
			<mesh
				geometry={nodes.Object_18.geometry}
				material={materials.material_2}
			/>
			<mesh
				geometry={nodes.Object_19.geometry}
				material={materials.material_2}
			/>
			<mesh
				geometry={nodes.Object_20.geometry}
				material={materials.material_2}
			/>
			<mesh
				geometry={nodes.Object_22.geometry}
				material={materials.material_3}
			/>
		</group>
	);
}

useGLTF.preload('/snorlax-transformed.glb');
