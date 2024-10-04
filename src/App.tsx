import { createSignal } from 'solid-js';
import {
    HopeProvider,
    Checkbox,
    CheckboxGroup,
    Tag,
    RadioGroup,
    HStack,
    Radio,
    Accordion,
    AccordionItem,
    AccordionButton,
    Text,
    AccordionIcon,
    AccordionPanel,
} from '@hope-ui/solid';
import './App.css';
import laoda from './assets/laoda.jpg';
import { useI18n } from '@i18n-pro/solid';

function App() {
    const { t, setI18n } = useI18n();
    const [classNamesCheckbox, setClassNamesCheckbox] = createSignal<string[]>([]);
    const [flexDirection, setFlexDirection] = createSignal<string>();
    //justify-content and align-items
    const [justifyContent, setJustifyContent] = createSignal<string>();
    const [alignItems, setAlignItems] = createSignal<string>();
    return (
        <>
            <main class="main">
                <HopeProvider>
                    <div class="code">
                        <RadioGroup defaultValue="zh" onChange={(e) => setI18n({ locale: e })}>
                            <HStack spacing="$4" padding={18}>
                                <Radio value="zh">名称</Radio>
                                <Radio value="en">属性名</Radio>
                            </HStack>
                        </RadioGroup>
                        <CheckboxGroup onChange={setClassNamesCheckbox}>
                            <Accordion defaultIndex={1} width="$full">
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Text flex={1} fontWeight="$medium" textAlign="start">
                                                基本
                                            </Text>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel>
                                        <Checkbox value="card-base" defaultChecked={true}>
                                            基础样式
                                        </Checkbox>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Text flex={1} fontWeight="$medium" textAlign="start">
                                                第一种方法
                                            </Text>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel>
                                        <HStack gap={20}>
                                            <Checkbox value="card-inline-block">{t('使用内联盒子')}</Checkbox>
                                            <Checkbox value="card-vertical-middle">{t('垂直居中')}</Checkbox>
                                            <Checkbox value="card-padding-left">{t('来点左边距')}</Checkbox>
                                        </HStack>
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Text flex={1} fontWeight="$medium" textAlign="start">
                                                第二种办法
                                            </Text>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel>
                                        <HStack gap={20} wrap="wrap">
                                            <Checkbox value="flex">
                                                使用<Tag>Flex</Tag>
                                            </Checkbox>
                                            <Checkbox value="gap-4">{t('来点间距')}</Checkbox>
                                            <Checkbox value="w-full h-72">{t('固定宽高')}</Checkbox>
                                            <Checkbox value="flex-fill-info">{t('填充信息背景色')}</Checkbox>
                                        </HStack>
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Text flex={1} fontWeight="$medium" textAlign="start">
                                                {t('主轴方向')}
                                            </Text>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel>
                                        <RadioGroup defaultValue="1" paddingLeft={20} onChange={setFlexDirection}>
                                            <HStack spacing="$4" wrap="wrap">
                                                <Radio value="">禁用</Radio>
                                                <Radio value="flex-row">{t('水平')}</Radio>
                                                <Radio value="flex-col">{t('垂直')}</Radio>
                                                <Radio value="flex-row-reverse">{t('水平反转')}</Radio>
                                                <Radio value="flex-col-reverse">{t('垂直反转')}</Radio>
                                            </HStack>
                                        </RadioGroup>
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Text flex={1} fontWeight="$medium" textAlign="start">
                                                {t('主轴空间分配')}
                                            </Text>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel>
                                        <RadioGroup defaultValue="1" paddingLeft={20} onChange={setJustifyContent}>
                                            <HStack spacing="$4" wrap="wrap">
                                                <Radio value="">禁用</Radio>
                                                <Radio value="justify-start">{t('主轴起始侧')}</Radio>
                                                <Radio value="justify-center">{t('居中')}</Radio>
                                                <Radio value="justify-end">{t('主轴结束侧')}</Radio>
                                                <Radio value="justify-between">{t('两端对齐')}</Radio>
                                                <Radio value="justify-around">{t('均分（内部空白部分相等）')}</Radio>
                                                <Radio value="justify-evenly">{t('均分（空白部分均相等）')}</Radio>
                                            </HStack>
                                        </RadioGroup>
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Text flex={1} fontWeight="$medium" textAlign="start">
                                                {t('交叉轴空间分配')}
                                            </Text>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel>
                                        <RadioGroup defaultValue="1" paddingLeft={20} onChange={setAlignItems}>
                                            <HStack spacing="$4" wrap="wrap">
                                                <Radio value="">禁用</Radio>
                                                <Radio value="items-start">{t('交叉轴起始侧')}</Radio>
                                                <Radio value="items-center">{t('居中')}</Radio>
                                                <Radio value="items-end">{t('交叉轴结束侧')}</Radio>
                                                <Radio value="items-stretch">{t('拉伸')}</Radio>
                                            </HStack>
                                        </RadioGroup>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </CheckboxGroup>

                        <code></code>
                    </div>
                    <div class="result">
                        <div
                            class={[
                                classNamesCheckbox().join(' '),
                                flexDirection(),
                                justifyContent(),
                                alignItems(),
                            ].join(' ')}>
                            <img src={laoda} class="img-base img-style" />
                            <div class="info-style">
                                <p class="title-base">牢大</p>
                                <p>职位：前端</p>
                            </div>
                        </div>
                    </div>
                </HopeProvider>
            </main>
        </>
    );
}

export default App;
