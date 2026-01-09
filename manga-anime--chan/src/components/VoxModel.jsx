import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const VoxModel = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(
      45,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );

    camera.position.set(0, 1.5, 4);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio);

    mountRef.current.appendChild(renderer.domElement);

    // Свет
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 5);
    scene.add(directionalLight);

    // Загрузка модели
    const loader = new GLTFLoader();
    loader.load("/models/emblema.glb", (gltf) => {
      const model = gltf.scene;
      model.scale.set(1.5, 1.5, 1.5);
      model.position.set(0, -1, 0);
      scene.add(model);

      const animate = () => {
        requestAnimationFrame(animate);
        model.rotation.y += 0.003;
        renderer.render(scene, camera);
      };

      animate();
    });

    const handleResize = () => {
      camera.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="vox-container" />;
};

export default VoxModel;
