import Image from "next/image";

export default function PhoneModelViewer() {
  return (
    <div className="phone-viewer-stage">
      <div className="phone-device">
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
      <p>Experiência mobile · Yes Play</p>
    </div>
  );
}
