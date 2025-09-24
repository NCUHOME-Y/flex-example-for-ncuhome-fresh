import laoda from "../assets/laoda.jpg";

interface CardPreviewProps {
  classNames: string[];
  flexDirection: string;
  justifyContent: string;
  alignItems: string;
}

export default function CardPreview({
  classNames,
  flexDirection,
  justifyContent,
  alignItems,
}: CardPreviewProps) {
  const combinedClassNames = [
    ...classNames,
    flexDirection,
    justifyContent,
    alignItems,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="result">
      <div className={combinedClassNames}>
        <img src={laoda} className="img-base img-style" />
        <div className="info-style">
          <p className="title-base">牢大</p>
          <p>职位：站长</p>
        </div>
      </div>
    </div>
  );
}
