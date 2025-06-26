"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

const SuccessAnimation = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/success.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  if (!animationData) return null;

  return (
    <div>
      <Lottie animationData={animationData} className="w-[348px] h-[348px]" />
    </div>
  );
};

export default SuccessAnimation;
