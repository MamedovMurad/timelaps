import { useEffect, useState } from "react";
import { Spin } from "antd";

type Props = {
  path: string;
};

export default function CameraSliderUi({ path }: Props) {
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    setImageLoading(true); // reset when image path changes
  }, [path]);

  return (
    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-black">
      {/* Loader while image is loading */}
      {imageLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
          <Spin size="large" />
        </div>
      )}

      {/* Image */}
      <img
        src={path}
        alt="camera image"
        onLoad={() => setImageLoading(false)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          imageLoading ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}
