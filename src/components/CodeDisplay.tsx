interface CodeDisplayProps {
  cssCode: string;
  htmlCode: string;
}

export default function CodeDisplay({ cssCode, htmlCode }: CodeDisplayProps) {
  return (
    <div className="code-display">
      <h3>CSS :</h3>
      <pre className="css-code">
        {cssCode || "/* 请选择样式选项查看对应的CSS代码 */"}
      </pre>

      <h3>HTML :</h3>
      <pre className="html-code">{htmlCode}</pre>
    </div>
  );
}
