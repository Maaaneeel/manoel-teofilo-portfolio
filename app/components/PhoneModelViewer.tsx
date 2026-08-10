"use client";

import { createElement, useEffect, useState } from "react";

type ModelViewerElement = HTMLElement & {
  model?: {
    materials?: Array<{
      pbrMetallicRoughness?: {
        setBaseColorFactor?: (color: [number, number, number, number]) => void;
        setMetallicFactor?: (value: number) => void;
        setRoughnessFactor?: (value: number) => void;
      };
    }>;
  };
};

export default function PhoneModelViewer() {
  const [viewer, setViewer] = useState<ModelViewerElement | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    if (!viewer) return;

    let cancelled = false;

    const handleLoad = () => {
      const material = viewer.model?.materials?.[0]?.pbrMetallicRoughness;
      material?.setBaseColorFactor?.([0.055, 0.047, 0.065, 1]);
      material?.setMetallicFactor?.(0.88);
      material?.setRoughnessFactor?.(0.2);
      if (!cancelled) setStatus("ready");
    };

    const handleError = () => {
      if (!cancelled) setStatus("error");
    };

    viewer.addEventListener("load", handleLoad);
    viewer.addEventListener("error", handleError);

    import("@google/model-viewer").catch(handleError);

    return () => {
      cancelled = true;
      viewer.removeEventListener("load", handleLoad);
      viewer.removeEventListener("error", handleError);
    };
  }, [viewer]);

  const modelViewer = createElement("model-viewer", {
    ref: setViewer,
    src: "/models/phone.glb",
    alt: "Modelo tridimensional de um celular girando em um eixo diagonal",
    loading: "lazy",
    reveal: "auto",
    "auto-rotate": "",
    "auto-rotate-delay": "0",
    "rotation-per-second": "16deg",
    "camera-orbit": "28deg 72deg 132%",
    "field-of-view": "27deg",
    orientation: "0deg 0deg 12deg",
    exposure: "1.12",
    "environment-image": "neutral",
    "shadow-intensity": "1.15",
    "shadow-softness": "0.9",
    "interaction-prompt": "none",
    "disable-zoom": "",
    "touch-action": "pan-y",
    className: "phone-model-viewer",
  });

  return (
    <div className="phone-viewer-stage">
      <div className="phone-viewer-tilt">{modelViewer}</div>
      <div className={`phone-viewer-status phone-viewer-status-${status}`}>
        <span>{status === "error" ? "MT" : "3D"}</span>
        <strong>
          {status === "error" ? "Prévia mobile 9:16" : "Carregando aparelho"}
        </strong>
      </div>
      <p>Modelo GLB otimizado · carregamento sob demanda</p>
    </div>
  );
}
