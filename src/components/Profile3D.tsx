import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

function AnimatedProfileSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  
  // Load the profile image as a texture
  const texture = useLoader(THREE.TextureLoader, '/lovable-uploads/0f13ee40-077e-4d69-89e9-bd5ad2a19290.png');

  useFrame((state) => {
    if (meshRef.current && groupRef.current) {
      // Slow rotation on Y axis
      meshRef.current.rotation.y += 0.005;
      
      // Floating motion
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
      
      // Subtle rotation on X axis
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Sphere ref={meshRef} args={[1.2, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          map={texture} 
          metalness={0.1}
          roughness={0.2}
        />
      </Sphere>
      
      {/* Glow effect */}
      <Sphere args={[1.35, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial 
          color="#ffffff"
          transparent
          opacity={0.1}
        />
      </Sphere>
      
      {/* Outer glow ring */}
      <Sphere args={[1.5, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial 
          color="#4f46e5"
          transparent
          opacity={0.05}
        />
      </Sphere>
    </group>
  );
}

const Profile3D = () => {
  return (
    <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4f46e5" />
        
        <AnimatedProfileSphere />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Profile3D;