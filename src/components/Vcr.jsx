import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
	const { nodes, materials } = useGLTF('/vcr-transformed.glb');
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.Object_4.geometry}
				material={materials.ELX0002_Body}
			/>
			<mesh
				geometry={nodes.Object_6.geometry}
				material={materials.ELX0002_Parts}
				position={[0.05, 0.02, 0.14]}
			/>
			<mesh
				geometry={nodes.Object_8.geometry}
				material={materials.ELX0002_Parts}
				position={[0.04, 0.02, 0.14]}
			/>
			<mesh
				geometry={nodes.Object_10.geometry}
				material={materials.ELX0002_Parts}
				position={[-0.07, 0.02, 0.14]}
			/>
			<mesh
				geometry={nodes.Object_12.geometry}
				material={materials.ELX0002_Parts}
				position={[0.04, 0.07, -0.18]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<mesh
				geometry={nodes.Object_14.geometry}
				material={materials.ELX0002_Parts}
				position={[0.03, 0.06, -0.18]}
			/>
			<mesh
				geometry={nodes.Object_16.geometry}
				material={materials.ELX0002_Parts}
				position={[-0.08, 0.02, 0.14]}
			/>
			<mesh
				geometry={nodes.Object_18.geometry}
				material={materials.ELX0002_Body}
				position={[0.01, 0.01, 0.14]}
			/>
			<mesh
				geometry={nodes.Object_20.geometry}
				material={materials.ELX0002_Parts}
				position={[0.12, 0.01, 0.13]}
			/>
			<mesh
				geometry={nodes.Object_22.geometry}
				material={materials.ELX0002_Parts}
				position={[0.01, 0.04, -0.17]}
			/>
			<mesh
				geometry={nodes.Object_24.geometry}
				material={materials.ELX0002_Circuit_Board_COL}
				position={[0.05, 0.09, -0.05]}
			/>
			<mesh
				geometry={nodes.Object_26.geometry}
				material={materials.ELX0002_Parts}
				position={[0.07, 0.02, 0.14]}
			/>
			<mesh
				geometry={nodes.Object_28.geometry}
				material={materials.ELX0002_Parts}
				position={[0.03, 0.02, 0.14]}
			/>
			<mesh
				geometry={nodes.Object_30.geometry}
				material={materials.ELX0002_Parts}
				position={[-0.06, 0.09, 0.14]}
			/>
			<mesh
				geometry={nodes.Object_32.geometry}
				material={materials.ELX0002_Parts}
				position={[-0.13, 0.04, 0.14]}
			/>
			<mesh
				geometry={nodes.Object_34.geometry}
				material={materials.ELX0002_Parts}
				position={[0.06, 0.02, 0.14]}
			/>
			<mesh
				geometry={nodes.Object_36.geometry}
				material={materials.ELX0002_Parts}
				position={[-0.06, 0.04, 0.14]}
			/>
			<mesh
				geometry={nodes.Object_38.geometry}
				material={materials.ELX0002_Mechanisms_COL}
				position={[0, 0.03, -0.02]}
				scale={0.3}
			/>
			<mesh
				geometry={nodes.Object_40.geometry}
				material={materials.ELX0002_Parts}
				position={[-0.06, 0.02, 0.14]}
			/>
			<mesh
				geometry={nodes.Object_42.geometry}
				material={materials.ELX0002_Parts}
				position={[-0.03, 0.02, 0.14]}
			/>
			<mesh
				geometry={nodes.Object_44.geometry}
				material={materials.ELX0002_Parts}
				position={[-0.04, 0.02, 0.14]}
			/>
			<mesh
				geometry={nodes.Object_46.geometry}
				material={materials.ELX0002_Parts}
				position={[-0.09, 0.02, 0.14]}
			/>
			<mesh
				geometry={nodes.Object_48.geometry}
				material={materials.ELX0002_Parts}
				position={[-0.13, 0.02, 0.14]}
			/>
			<mesh
				geometry={nodes.Object_50.geometry}
				material={materials.ELX0002_Parts}
				position={[-0.14, 0.04, 0.14]}
			/>
			<mesh
				geometry={nodes.Object_52.geometry}
				material={materials.ELX0002_Parts}
				position={[-0.03, 0.04, 0.14]}
			/>
			<mesh
				geometry={nodes.Object_54.geometry}
				material={materials.ELX0002_Parts}
				position={[-0.08, 0.04, 0.14]}
			/>
			<mesh
				geometry={nodes.Object_56.geometry}
				material={materials.ELX0002_Parts}
				position={[0.02, 0.02, 0.14]}
			/>
			<mesh
				geometry={nodes.Object_58.geometry}
				material={materials.ELX0002_Parts}
				position={[-0.01, 0.02, 0.14]}
			/>
			<mesh
				geometry={nodes.Object_60.geometry}
				material={materials.ELX0002_Parts}
				position={[-0.05, 0.04, 0.14]}
			/>
			<mesh
				geometry={nodes.Object_62.geometry}
				material={materials.ELX0002_Parts}
				position={[-0.09, 0.04, 0.14]}
			/>
			<mesh
				geometry={nodes.Object_64.geometry}
				material={materials.ELX0002_Parts}
				position={[0.04, 0.04, -0.18]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<mesh
				geometry={nodes.Object_66.geometry}
				material={materials.ELX0002_Parts}
				position={[0, 0.05, -0.03]}
			/>
			<mesh
				geometry={nodes.Object_68.geometry}
				material={materials.ELX0002_Parts}
				position={[0.19, 0.03, 0.08]}
			/>
			<mesh
				geometry={nodes.Object_70.geometry}
				material={materials.ELX0002_Parts}
				position={[0.19, 0.03, -0.14]}
			/>
			<mesh
				geometry={nodes.Object_72.geometry}
				material={materials.ELX0002_Parts}
				position={[-0.19, 0.03, 0.08]}
			/>
			<mesh
				geometry={nodes.Object_74.geometry}
				material={materials.ELX0002_Parts}
				position={[-0.19, 0.03, -0.14]}
			/>
			<mesh
				geometry={nodes.Object_76.geometry}
				material={materials.ELX0002_Parts}
				position={[0.12, 0.02, 0.13]}
			/>
			<mesh
				geometry={nodes.Object_78.geometry}
				material={materials.ELX0002_Parts}
				position={[-0.05, 0.02, 0.14]}
			/>
			<mesh
				geometry={nodes.Object_80.geometry}
				material={materials.ELX0002_Parts}
				position={[-0.11, 0.04, 0.14]}
			/>
			<mesh
				geometry={nodes.Object_82.geometry}
				material={materials.ELX0002_Parts}
				position={[0.04, 0.06, -0.17]}
			/>
			<mesh
				geometry={nodes.Object_84.geometry}
				material={materials.ELX0002_Parts}
				position={[0.01, 0.07, -0.17]}
			/>
			<mesh
				geometry={nodes.Object_86.geometry}
				material={materials.ELX0002_Parts}
				position={[0.01, 0.07, -0.18]}
			/>
			<mesh
				geometry={nodes.Object_88.geometry}
				material={materials.ELX0002_Parts}
				position={[0.08, 0.02, 0.14]}
			/>
			<mesh
				geometry={nodes.Object_90.geometry}
				material={materials.ELX0002_Parts}
				position={[0.09, 0.02, 0.14]}
			/>
			<mesh
				geometry={nodes.Object_92.geometry}
				material={materials.ELX0002_Plastic_Red}
				position={[0.11, 0.05, 0.13]}
				scale={[0.05, 0.01, 0]}
			/>
		</group>
	);
}

useGLTF.preload('/vcr-transformed.glb');
