
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function ParticleSphere({ color, ...props }) {
    const ref = useRef();
    const sphere = useMemo(() => random.inSphere(new Float32Array(8000), { radius: 1.8 }), []);

    useFrame((state, delta) => {
        // Rotation
        ref.current.rotation.x -= delta / 15;
        ref.current.rotation.y -= delta / 20;

        // Mouse interaction (subtle sway)
        const { mouse } = state;
        ref.current.rotation.x += mouse.y * 0.005;
        ref.current.rotation.y += mouse.x * 0.005;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color={color || "#ff3e3e"}
                    size={0.004}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>
        </group>
    );
}

function GridBackground({ isDark }) {
    const gridColor1 = isDark ? 0x222222 : 0xdddddd; // Major lines
    const gridColor2 = isDark ? 0x050505 : 0xf0f0f0; // Minor lines

    return (
        <group rotation={[Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
            <gridHelper args={[60, 60, gridColor1, gridColor2]} />
        </group>
    );
}

export default function Scene({ isDark = true }) {
    // Define colors based on theme
    const fogColor = isDark ? '#050505' : '#ffffff';
    const particleColor = isDark ? '#ff3e3e' : '#ff3e3e'; // Keep red, but ensure valid contrast
    // In light mode, red on white is fine. The issue was likely the black fog.

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, background: 'var(--color-bg)', transition: 'background 0.3s' }}>
            <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
                <fog attach="fog" args={[fogColor, 2, 12]} />
                <ParticleSphere color={particleColor} />
                <GridBackground isDark={isDark} />
            </Canvas>
        </div>
    );
}
