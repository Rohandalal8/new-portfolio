import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Computer from "./Computer";

const ContactExperience = () => {
    return (
        <Canvas
            shadows
            camera={{ position: [-5, 2, 6], fov: 45 }}
            gl={{
                antialias: true,
                toneMappingExposure: 1.2,
            }}
        >
            {/* DARK PREMIUM BACKGROUND */}
            <color attach="background" args={["#070812"]} />

            {/* Soft neutral light */}
            <ambientLight
                intensity={1.2}
                color="#ffffff"
            />

            {/* Main light */}
            <directionalLight
                position={[5, 8, 6]}
                intensity={3}
                color="#ffffff"
                castShadow
            />

            {/* Purple rim */}
            <pointLight
                position={[-5, 4, 3]}
                intensity={4}
                distance={12}
                color="#8b5cf6"
            />

            {/* Blue rim */}
            <pointLight
                position={[5, 3, -2]}
                intensity={3}
                distance={10}
                color="#38bdf8"
            />

            {/* Front fill - prevents black crush */}
            <pointLight
                position={[0, 4, 6]}
                intensity={5}
                distance={12}
                color="#ffffff"
            />

            <OrbitControls
                enableZoom={false}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />

            {/* Floor */}
            <mesh
                receiveShadow
                position={[0, -1.5, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
            >
                <planeGeometry args={[30, 30]} />

                <meshStandardMaterial
                    color="#070812"
                    roughness={0.6}
                    metalness={0.1}
                />
            </mesh>

            <group
                scale={0.03}
                position={[0, -1.49, -2]}
                castShadow
            >
                <Computer />
            </group>
        </Canvas>
    );
};

export default ContactExperience;