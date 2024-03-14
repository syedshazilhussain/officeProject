import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from './loader'

function Oceanrender() {
    const computer = useGLTF('./desktop_pc/scene.gltf')
    return (
        <mesh style={{ position: 'relative', height: '100vh', border: '2px solid red', marginTop: '7rem' }}>
            <hemisphereLight intensity={0.15} groundColor='black' />
            <pointLight intensity={1} />
            <primitive object={computer.scene} scale={0.75} />
        </mesh>
    )
}

const ComputersCanvas = () => {
    return (
        <div style={{ position: 'relative', height: '100vh', marginTop: '7rem' }}>
            <Canvas frameloop='demand' shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }} >
                <Suspense fallback={<CanvasLoader />}>
                    <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                    <Oceanrender />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    )
}
export default ComputersCanvas
