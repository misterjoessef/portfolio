"use client";

type LogoProps = {
  textSize: number;
};

export default function LogoText({ textSize = 3 }: LogoProps) {
  const textSizeStyle =
    textSize <= 1
      ? "text-xl"
      : textSize == 2
      ? "text-2xl"
      : textSize == 3
      ? "text-2xl"
      : textSize == 4
      ? "text-2xl"
      : textSize == 5
      ? "text-2xl"
      : "text-6xl";

  return (
    <div className={`${textSizeStyle}  flex flex-row `}>
      <div className="flex flex-row text-secondary">
        <p className="">@MisterJoessef</p>
      </div>
    </div>
  );
}
