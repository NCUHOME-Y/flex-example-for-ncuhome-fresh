import { useState } from 'react';
import {
    Checkbox,
    CheckboxGroup,
    RadioGroup,
    Radio,
    Accordion,
    AccordionItem,
} from '@heroui/react';
import './App.css';
import laoda from './assets/laoda.jpg';
import { useTranslation } from 'react-i18next';

function App() {
    const { t, i18n } = useTranslation();
    const [classNamesCheckbox, setClassNamesCheckbox] = useState<string[]>([]);
    const [flexDirection, setFlexDirection] = useState<string>('');
    const [justifyContent, setJustifyContent] = useState<string>('');
    const [alignItems, setAlignItems] = useState<string>('');

    const handleLanguageChange = (value: string) => {
        i18n.changeLanguage(value);
    };

    // 将 类名转换为传统 CSS
    const getTraditionCSS = () => {
        const cssRules: string[] = [];
        classNamesCheckbox.forEach(className => {
            switch (className) {
                case 'card-base':
                    cssRules.push('/* 基础样式 */', 'background-color: #e878b4;', 'padding: 13px 32px;', 'border-radius: 13px;', 'color: white;');
                    break;
                case 'card-inline-block':
                    cssRules.push('/* 内联盒子 */', '.info-style, .img-style { display: inline-block; }');
                    break;
                case 'card-vertical-middle':
                    cssRules.push('/* 垂直居中 */', '.info-style, .img-style { vertical-align: middle; }');
                    break;
                case 'card-padding-left':
                    cssRules.push('/* 左边距 */', '.info-style { padding-left: 20px; }');
                    break;
                case 'flex':
                    cssRules.push('/* Flex 布局 */', 'display: flex;');
                    break;
                case 'gap-4':
                    cssRules.push('/* 间距 */', 'gap: 1rem;');
                    break;
                case 'w-full h-72':
                    cssRules.push('/* 固定宽高 */', 'width: 100%;', 'height: 18rem;');
                    break;
                case 'flex-fill-info':
                    cssRules.push('/* 填充背景色 */', '.info-style { background-color: rgba(100, 100, 100, 0.8); }');
                    break;
            }
        });

        // 处理 flex-direction
        if (flexDirection) {
            switch (flexDirection) {
                case 'flex-row':
                    cssRules.push('/* 主轴方向：水平 */', 'flex-direction: row;');
                    break;
                case 'flex-col':
                    cssRules.push('/* 主轴方向：垂直 */', 'flex-direction: column;');
                    break;
                case 'flex-row-reverse':
                    cssRules.push('/* 主轴方向：水平反转 */', 'flex-direction: row-reverse;');
                    break;
                case 'flex-col-reverse':
                    cssRules.push('/* 主轴方向：垂直反转 */', 'flex-direction: column-reverse;');
                    break;
            }
        }

        // 处理 justify-content
        if (justifyContent) {
            switch (justifyContent) {
                case 'justify-start':
                    cssRules.push('/* 主轴：起始侧 */', 'justify-content: flex-start;');
                    break;
                case 'justify-center':
                    cssRules.push('/* 主轴：居中 */', 'justify-content: center;');
                    break;
                case 'justify-end':
                    cssRules.push('/* 主轴：结束侧 */', 'justify-content: flex-end;');
                    break;
                case 'justify-between':
                    cssRules.push('/* 主轴：两端对齐 */', 'justify-content: space-between;');
                    break;
                case 'justify-around':
                    cssRules.push('/* 主轴：均分（内部空白相等） */', 'justify-content: space-around;');
                    break;
                case 'justify-evenly':
                    cssRules.push('/* 主轴：均分（空白均相等） */', 'justify-content: space-evenly;');
                    break;
            }
        }

        // 处理 align-items
        if (alignItems) {
            switch (alignItems) {
                case 'items-start':
                    cssRules.push('/* 交叉轴：起始侧 */', 'align-items: flex-start;');
                    break;
                case 'items-center':
                    cssRules.push('/* 交叉轴：居中 */', 'align-items: center;');
                    break;
                case 'items-end':
                    cssRules.push('/* 交叉轴：结束侧 */', 'align-items: flex-end;');
                    break;
                case 'items-stretch':
                    cssRules.push('/* 交叉轴：拉伸 */', 'align-items: stretch;');
                    break;
            }
        }

        return cssRules.filter(rule => rule.trim() !== '');
    };
    return (
      <>
        <main className="main">
          <div className="controls">
            <RadioGroup
              value={i18n.language}
              onValueChange={handleLanguageChange}
              orientation="horizontal"
              className="p-4"
            >
              <Radio value="zh">名称</Radio>
              <Radio value="en">属性名</Radio>
            </RadioGroup>
            <CheckboxGroup
              value={classNamesCheckbox}
              onValueChange={setClassNamesCheckbox}
            >
              <Accordion defaultChecked className="w-full">
                <AccordionItem key="1" title="基本">
                  <Checkbox value="card-base" defaultChecked>
                    基础样式
                  </Checkbox>
                </AccordionItem>
                <AccordionItem key="2" title="第一种方法">
                  <div className="flex gap-5 flex-wrap">
                    <Checkbox value="card-inline-block">
                      {t("使用内联盒子")}
                    </Checkbox>
                    <Checkbox value="card-vertical-middle">
                      {t("垂直居中")}
                    </Checkbox>
                    <Checkbox value="card-padding-left">
                      {t("来点左边距")}
                    </Checkbox>
                  </div>
                </AccordionItem>

                <AccordionItem key="3" title="第二种办法">
                  <div className="flex gap-5 flex-wrap">
                    <Checkbox value="flex">使用 Flex</Checkbox>
                    <Checkbox value="gap-4">{t("来点间距")}</Checkbox>
                    <Checkbox value="w-full h-72">{t("固定宽高")}</Checkbox>
                    <Checkbox value="flex-fill-info">
                      {t("填充信息背景色")}
                    </Checkbox>
                  </div>
                </AccordionItem>

                <AccordionItem key="4" title={t("主轴方向")}>
                  <RadioGroup
                    value={flexDirection}
                    onValueChange={setFlexDirection}
                    orientation="horizontal"
                    className="pl-5"
                  >
                    <Radio value="">禁用</Radio>
                    <Radio value="flex-row">{t("水平")}</Radio>
                    <Radio value="flex-col">{t("垂直")}</Radio>
                    <Radio value="flex-row-reverse">{t("水平反转")}</Radio>
                    <Radio value="flex-col-reverse">{t("垂直反转")}</Radio>
                  </RadioGroup>
                </AccordionItem>

                <AccordionItem key="5" title={t("主轴空间分配")}>
                  <RadioGroup
                    value={justifyContent}
                    onValueChange={setJustifyContent}
                    orientation="horizontal"
                    className="pl-5"
                  >
                    <Radio value="">禁用</Radio>
                    <Radio value="justify-start">{t("主轴起始侧")}</Radio>
                    <Radio value="justify-center">{t("居中")}</Radio>
                    <Radio value="justify-end">{t("主轴结束侧")}</Radio>
                    <Radio value="justify-between">{t("两端对齐")}</Radio>
                    <Radio value="justify-around">
                      {t("均分（内部空白部分相等）")}
                    </Radio>
                    <Radio value="justify-evenly">
                      {t("均分（空白部分均相等）")}
                    </Radio>
                  </RadioGroup>
                </AccordionItem>

                <AccordionItem key="6" title={t("交叉轴空间分配")}>
                  <RadioGroup
                    value={alignItems}
                    onValueChange={setAlignItems}
                    orientation="horizontal"
                    className="pl-5"
                  >
                    <Radio value="">禁用</Radio>
                    <Radio value="items-start">{t("交叉轴起始侧")}</Radio>
                    <Radio value="items-center">{t("居中")}</Radio>
                    <Radio value="items-end">{t("交叉轴结束侧")}</Radio>
                    <Radio value="items-stretch">{t("拉伸")}</Radio>
                  </RadioGroup>
                </AccordionItem>
              </Accordion>
            </CheckboxGroup>
          </div>

          <div className="content-area">
            <div className="code-display">
              <h3>CSS :</h3>
              <pre className="css-code">
                {getTraditionCSS().length > 0
                  ? `.card {
${getTraditionCSS()
  .map((rule) => (rule.startsWith("/*") ? rule : `  ${rule}`))
  .join("\n")}
}`
                  : "/* 请选择样式选项查看对应的CSS代码 */"}
              </pre>

              <h3>HTML :</h3>
              <pre className="html-code">
                {`<div class="card">
  <img src="laoda.jpg" class="img-base img-style" />
  <div class="info-style">
    <p class="title-base">牢大</p>
    <p>职位：站长</p>
  </div>
</div>`}
              </pre>
            </div>

            <div className="result">
              <div
                className={[
                  classNamesCheckbox.join(" "),
                  flexDirection,
                  justifyContent,
                  alignItems,
                ].join(" ")}
              >
                <img src={laoda} className="img-base img-style" />
                <div className="info-style">
                  <p className="title-base">牢大</p>
                  <p>职位：站长</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
}

export default App;
