import { useState } from "react";
import "./App.css";
import { ControlPanel, CodeDisplay, CardPreview } from "./components";
import { generateCSS } from "./utils/cssGenerator";

function App() {
  const [classNamesCheckbox, setClassNamesCheckbox] = useState<string[]>([]);
  const [flexDirection, setFlexDirection] = useState<string>("");
  const [justifyContent, setJustifyContent] = useState<string>("");
  const [alignItems, setAlignItems] = useState<string>("");

  const cssCode = generateCSS(
    classNamesCheckbox,
    flexDirection,
    justifyContent,
    alignItems
  );
  const htmlCode = `<div class="card">
  <img src="laoda.jpg" class="img-base img-style" />
  <div class="info-style">
    <p class="title-base">牢大</p>
    <p>职位：站长</p>
  </div>
</div>`;
  return (
    <main className="main">
      <ControlPanel
        classNamesCheckbox={classNamesCheckbox}
        setClassNamesCheckbox={setClassNamesCheckbox}
        flexDirection={flexDirection}
        setFlexDirection={setFlexDirection}
        justifyContent={justifyContent}
        setJustifyContent={setJustifyContent}
        alignItems={alignItems}
        setAlignItems={setAlignItems}
      />

      <div className="content-area">
        <CodeDisplay cssCode={cssCode} htmlCode={htmlCode} />

        <CardPreview
          classNames={classNamesCheckbox}
          flexDirection={flexDirection}
          justifyContent={justifyContent}
          alignItems={alignItems}
        />
      </div>
    </main>
  );
}

export default App;
