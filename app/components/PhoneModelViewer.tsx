"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

function makeCameraLens(material: THREE.Material, x: number, y: number) {
  const lens = new THREE.Mesh(
    new THREE.CylinderGeometry(0.105, 0.105, 0.045, 36),
    material,
  );

  lens.rotation.x = Math.PI / 2;
  lens.position.set(x, y, -0.14);
  return lens;
}

export default function PhoneModelViewer() {
  const canvasHost = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = canvasHost.current;
    if (!host) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
    camera.position.set(0, 0.05, 7.45);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);

    const phone = new THREE.Group();
    phone.rotation.set(0.12, -0.3, -0.08);
    scene.add(phone);

    const body = new THREE.Mesh(
      new RoundedBoxGeometry(1.54, 3.28, 0.24, 7, 0.15),
      new THREE.MeshPhysicalMaterial({
        color: "#172033",
        metalness: 0.85,
        roughness: 0.22,
        clearcoat: 0.6,
        clearcoatRoughness: 0.2,
      }),
    );
    phone.add(body);

    const bezel = new THREE.Mesh(
      new RoundedBoxGeometry(1.42, 3.14, 0.045, 6, 0.12),
      new THREE.MeshPhysicalMaterial({
        color: "#02050d",
        metalness: 0.32,
        roughness: 0.18,
      }),
    );
    bezel.position.z = 0.135;
    phone.add(bezel);

    const screenTexture = new THREE.TextureLoader().load("/showcase/03.png");
    screenTexture.colorSpace = THREE.SRGBColorSpace;
    screenTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    const screen = new THREE.Mesh(
      new RoundedBoxGeometry(1.3, 3.0, 0.008, 5, 0.095),
      new THREE.MeshBasicMaterial({ map: screenTexture, toneMapped: false }),
    );
    screen.position.z = 0.163;
    phone.add(screen);

    const speaker = new THREE.Mesh(
      new RoundedBoxGeometry(0.34, 0.035, 0.015, 3, 0.018),
      new THREE.MeshBasicMaterial({ color: "#05070e" }),
    );
    speaker.position.set(0, 1.43, 0.172);
    phone.add(speaker);

    const cameraPlate = new THREE.Mesh(
      new RoundedBoxGeometry(0.48, 0.91, 0.045, 4, 0.12),
      new THREE.MeshPhysicalMaterial({
        color: "#111a2b",
        metalness: 0.85,
        roughness: 0.24,
      }),
    );
    cameraPlate.position.set(-0.42, 1.08, -0.135);
    phone.add(cameraPlate);

    const lensMaterial = new THREE.MeshPhysicalMaterial({
      color: "#050913",
      metalness: 0.82,
      roughness: 0.08,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
    });
    phone.add(makeCameraLens(lensMaterial, -0.42, 1.29));
    phone.add(makeCameraLens(lensMaterial, -0.42, 0.98));
    phone.add(makeCameraLens(lensMaterial, -0.42, 0.67));

    const flash = new THREE.Mesh(
      new THREE.SphereGeometry(0.055, 20, 20),
      new THREE.MeshBasicMaterial({ color: "#d8ecff" }),
    );
    flash.position.set(-0.25, 0.67, -0.16);
    phone.add(flash);

    const sideButtonMaterial = new THREE.MeshPhysicalMaterial({
      color: "#53637e",
      metalness: 1,
      roughness: 0.16,
    });
    const powerButton = new THREE.Mesh(
      new RoundedBoxGeometry(0.055, 0.46, 0.085, 3, 0.02),
      sideButtonMaterial,
    );
    powerButton.position.set(0.79, 0.38, 0);
    phone.add(powerButton);

    const volumeButton = new THREE.Mesh(
      new RoundedBoxGeometry(0.055, 0.68, 0.085, 3, 0.02),
      sideButtonMaterial,
    );
    volumeButton.position.set(-0.79, 0.45, 0);
    phone.add(volumeButton);

    scene.add(new THREE.HemisphereLight("#cbe4ff", "#060913", 1.6));

    const keyLight = new THREE.DirectionalLight("#d3e8ff", 3.1);
    keyLight.position.set(3.6, 4.5, 5);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight("#e95c95", 18, 8);
    rimLight.position.set(-3.4, -1.4, -2.8);
    scene.add(rimLight);

    const resize = () => {
      const { width, height } = host.getBoundingClientRect();
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();

    let frameId = 0;
    const clock = new THREE.Clock();
    const renderFrame = () => {
      const elapsed = clock.getElapsedTime();
      phone.rotation.y = elapsed * 0.62 - 0.3;
      phone.rotation.x = 0.12 + Math.sin(elapsed * 0.62) * 0.035;
      phone.rotation.z = -0.08;
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(renderFrame);
    };
    renderFrame();

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
      screenTexture.dispose();
      phone.traverse((child) => {
        if (!(child instanceof THREE.Mesh)) return;
        child.geometry.dispose();
        const materials = Array.isArray(child.material) ? child.material : [child.material];
        materials.forEach((material) => material.dispose());
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div className="phone-viewer-stage">
      <div
        ref={canvasHost}
        className="phone-three-canvas"
        role="img"
        aria-label="Celular tridimensional girando continuamente e exibindo a versão mobile do site Yes Play"
      />
      <p>Experiência mobile · Yes Play</p>
    </div>
  );
}
