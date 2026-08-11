import Image from "next/image";

export default function PhoneModelViewer() {
  return (
    <div className="phone-viewer-stage">
      <div className="phone-spin">
        <div className="phone-device">
          <div className="phone-face phone-front">
            <div className="phone-screen">
              <Image
                src="/showcase/03.png"
                alt="Versão para celular do site Yes Play"
                fill
                sizes="(max-width: 760px) 48vw, 26vw"
                unoptimized
              />
            </div>
          </div>
          <div className="phone-face phone-back" aria-hidden="true">
            <span className="phone-camera phone-camera-one" />
            <span className="phone-camera phone-camera-two" />
            <span className="phone-camera phone-camera-three" />
          </div>
          <span className="phone-edge phone-edge-left" aria-hidden="true" />
          <span className="phone-edge phone-edge-right" aria-hidden="true" />
          <span className="phone-edge phone-edge-top" aria-hidden="true" />
          <span className="phone-edge phone-edge-bottom" aria-hidden="true" />
        </div>
      </div>
      <p>Experiência mobile · Yes Play</p>
    </div>
  );
}
