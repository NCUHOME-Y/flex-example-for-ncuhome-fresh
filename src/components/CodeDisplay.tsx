import { Highlight, themes } from "prism-react-renderer";

interface CodeDisplayProps {
  cssCode: string;
  htmlCode: string;
}

export default function CodeDisplay({ cssCode, htmlCode }: CodeDisplayProps) {
  return (
    <div className="code-display">
      <div className="code-section">
        <h3>CSS :</h3>
        <Highlight
          theme={themes.vsDark}
          code={cssCode || "/* 请选择样式选项查看对应的CSS代码 */"}
          language="css"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>

      <div className="code-section">
        <h3>HTML :</h3>
        <Highlight
          theme={themes.vsDark}
          code={htmlCode}
          language="html"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
}
