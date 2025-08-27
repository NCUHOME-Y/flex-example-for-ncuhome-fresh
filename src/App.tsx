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
    return (
        <>
            <main className="main">
                <div className="code">
                    <RadioGroup
                        value={i18n.language}
                        onValueChange={handleLanguageChange}
                        orientation="horizontal"
                        className="p-4"
                    >
                        <Radio value="zh">名称</Radio>
                        <Radio value="en">属性名</Radio>
                    </RadioGroup>
                    <CheckboxGroup value={classNamesCheckbox} onValueChange={setClassNamesCheckbox}>
                        <Accordion defaultChecked className="w-full">
                            <AccordionItem key="1" title="基本">
                                <Checkbox value="card-base" defaultChecked>
                                    基础样式
                                </Checkbox>
                            </AccordionItem>
                            <AccordionItem key="2" title="第一种方法">
                                <div className="flex gap-5 flex-wrap">
                                    <Checkbox value="card-inline-block">{t('使用内联盒子')}</Checkbox>
                                    <Checkbox value="card-vertical-middle">{t('垂直居中')}</Checkbox>
                                    <Checkbox value="card-padding-left">{t('来点左边距')}</Checkbox>
                                </div>
                            </AccordionItem>

                            <AccordionItem key="3" title="第二种办法">
                                <div className="flex gap-5 flex-wrap">
                                    <Checkbox value="flex">
                                        使用 Flex
                                    </Checkbox>
                                    <Checkbox value="gap-4">{t('来点间距')}</Checkbox>
                                    <Checkbox value="w-full h-72">{t('固定宽高')}</Checkbox>
                                    <Checkbox value="flex-fill-info">{t('填充信息背景色')}</Checkbox>
                                </div>
                            </AccordionItem>

                            <AccordionItem key="4" title={t('主轴方向')}>
                                <RadioGroup
                                    value={flexDirection}
                                    onValueChange={setFlexDirection}
                                    orientation="horizontal"
                                    className="pl-5"
                                >
                                    <Radio value="">禁用</Radio>
                                    <Radio value="flex-row">{t('水平')}</Radio>
                                    <Radio value="flex-col">{t('垂直')}</Radio>
                                    <Radio value="flex-row-reverse">{t('水平反转')}</Radio>
                                    <Radio value="flex-col-reverse">{t('垂直反转')}</Radio>
                                </RadioGroup>
                            </AccordionItem>

                            <AccordionItem key="5" title={t('主轴空间分配')}>
                                <RadioGroup
                                    value={justifyContent}
                                    onValueChange={setJustifyContent}
                                    orientation="horizontal"
                                    className="pl-5"
                                >
                                    <Radio value="">禁用</Radio>
                                    <Radio value="justify-start">{t('主轴起始侧')}</Radio>
                                    <Radio value="justify-center">{t('居中')}</Radio>
                                    <Radio value="justify-end">{t('主轴结束侧')}</Radio>
                                    <Radio value="justify-between">{t('两端对齐')}</Radio>
                                    <Radio value="justify-around">{t('均分（内部空白部分相等）')}</Radio>
                                    <Radio value="justify-evenly">{t('均分（空白部分均相等）')}</Radio>
                                </RadioGroup>
                            </AccordionItem>

                            <AccordionItem key="6" title={t('交叉轴空间分配')}>
                                <RadioGroup
                                    value={alignItems}
                                    onValueChange={setAlignItems}
                                    orientation="horizontal"
                                    className="pl-5"
                                >
                                    <Radio value="">禁用</Radio>
                                    <Radio value="items-start">{t('交叉轴起始侧')}</Radio>
                                    <Radio value="items-center">{t('居中')}</Radio>
                                    <Radio value="items-end">{t('交叉轴结束侧')}</Radio>
                                    <Radio value="items-stretch">{t('拉伸')}</Radio>
                                </RadioGroup>
                            </AccordionItem>
                        </Accordion>
                    </CheckboxGroup>

                    <code></code>
                </div>
                <div className="result">
                    <div
                        className={[
                            classNamesCheckbox.join(' '),
                            flexDirection,
                            justifyContent,
                            alignItems,
                        ].join(' ')}>
                        <img src={laoda} className="img-base img-style" />
                        <div className="info-style">
                            <p className="title-base">牢大</p>
                            <p>职位：站长</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
