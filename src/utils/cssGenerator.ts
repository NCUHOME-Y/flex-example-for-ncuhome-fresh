export const generateCSS = (
  classNamesCheckbox: string[],
  flexDirection: string,
  justifyContent: string,
  alignItems: string
): string => {
  const cssRules: string[] = [];

  // 处理 checkbox 选择的类名
  classNamesCheckbox.forEach((className) => {
    switch (className) {
      case "card-base":
        cssRules.push(
          "/* 基础样式 */",
          "background-color: #e878b4;",
          "padding: 13px 32px;",
          "border-radius: 13px;",
          "color: white;"
        );
        break;
      case "card-inline-block":
        cssRules.push(
          "/* 内联盒子 */",
          ".info-style, .img-style { display: inline-block; }"
        );
        break;
      case "card-vertical-middle":
        cssRules.push(
          "/* 垂直居中 */",
          ".info-style, .img-style { vertical-align: middle; }"
        );
        break;
      case "card-padding-left":
        cssRules.push("/* 左边距 */", ".info-style { padding-left: 20px; }");
        break;
      case "flex":
        cssRules.push("/* Flex 布局 */", "display: flex;");
        break;
      case "gap-4":
        cssRules.push("/* 间距 */", "gap: 1rem;");
        break;
      case "w-full h-72":
        cssRules.push("/* 固定宽高 */", "width: 100%;", "height: 18rem;");
        break;
      case "flex-fill-info":
        cssRules.push(
          "/* 填充背景色 */",
          ".info-style { background-color: rgba(100, 100, 100, 0.8); }"
        );
        break;
    }
  });

  // 处理 flex-direction
  if (flexDirection) {
    switch (flexDirection) {
      case "flex-row":
        cssRules.push("/* 主轴方向：水平 */", "flex-direction: row;");
        break;
      case "flex-col":
        cssRules.push("/* 主轴方向：垂直 */", "flex-direction: column;");
        break;
      case "flex-row-reverse":
        cssRules.push(
          "/* 主轴方向：水平反转 */",
          "flex-direction: row-reverse;"
        );
        break;
      case "flex-col-reverse":
        cssRules.push(
          "/* 主轴方向：垂直反转 */",
          "flex-direction: column-reverse;"
        );
        break;
    }
  }

  // 处理 justify-content
  if (justifyContent) {
    switch (justifyContent) {
      case "justify-start":
        cssRules.push("/* 主轴：起始侧 */", "justify-content: flex-start;");
        break;
      case "justify-center":
        cssRules.push("/* 主轴：居中 */", "justify-content: center;");
        break;
      case "justify-end":
        cssRules.push("/* 主轴：结束侧 */", "justify-content: flex-end;");
        break;
      case "justify-between":
        cssRules.push(
          "/* 主轴：两端对齐 */",
          "justify-content: space-between;"
        );
        break;
      case "justify-around":
        cssRules.push(
          "/* 主轴：均分（内部空白相等） */",
          "justify-content: space-around;"
        );
        break;
      case "justify-evenly":
        cssRules.push(
          "/* 主轴：均分（空白均相等） */",
          "justify-content: space-evenly;"
        );
        break;
    }
  }

  // 处理 align-items
  if (alignItems) {
    switch (alignItems) {
      case "items-start":
        cssRules.push("/* 交叉轴：起始侧 */", "align-items: flex-start;");
        break;
      case "items-center":
        cssRules.push("/* 交叉轴：居中 */", "align-items: center;");
        break;
      case "items-end":
        cssRules.push("/* 交叉轴：结束侧 */", "align-items: flex-end;");
        break;
      case "items-stretch":
        cssRules.push("/* 交叉轴：拉伸 */", "align-items: stretch;");
        break;
    }
  }

  const filteredRules = cssRules.filter((rule) => rule.trim() !== "");

  return filteredRules.length > 0
    ? `.card {
${filteredRules
  .map((rule) => (rule.startsWith("/*") ? rule : `  ${rule}`))
  .join("\n")}
}`
    : "";
};
