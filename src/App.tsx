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

function App() {
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
                                            <Checkbox value="card-inline-block">使用内联盒子</Checkbox>
                                            <Checkbox value="card-vertical-middle">垂直居中</Checkbox>
                                            <Checkbox value="card-padding-left">来点左边距</Checkbox>
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
                                            <Checkbox value="gap-4">来点间距</Checkbox>
                                            <Checkbox value="w-full h-72">固定宽高</Checkbox>
                                            <Checkbox value="flex-fill-info">填充信息背景色</Checkbox>
                                        </HStack>
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Text flex={1} fontWeight="$medium" textAlign="start">
                                                主轴方向
                                            </Text>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel>
                                        <RadioGroup defaultValue="1" paddingLeft={20} onChange={setFlexDirection}>
                                            <HStack spacing="$4">
                                                <Radio value="">禁用</Radio>
                                                <Radio value="flex-row">水平</Radio>
                                                <Radio value="flex-col">垂直</Radio>
                                            </HStack>
                                        </RadioGroup>
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Text flex={1} fontWeight="$medium" textAlign="start">
                                                justify-content
                                            </Text>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel>
                                        <RadioGroup defaultValue="1" paddingLeft={20} onChange={setJustifyContent}>
                                            <HStack spacing="$4" wrap="wrap">
                                                <Radio value="">禁用</Radio>
                                                <Radio value="justify-start">主轴起始侧</Radio>
                                                <Radio value="justify-center">居中</Radio>
                                                <Radio value="justify-end">主轴结束侧</Radio>
                                                <Radio value="justify-between">两端对齐</Radio>
                                                <Radio value="justify-around">均分</Radio>
                                                <Radio value="justify-evenly">均分（两端留白）</Radio>
                                            </HStack>
                                        </RadioGroup>
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Text flex={1} fontWeight="$medium" textAlign="start">
                                                align-items
                                            </Text>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel>
                                        <RadioGroup defaultValue="1" paddingLeft={20} onChange={setAlignItems}>
                                            <HStack spacing="$4" wrap="wrap">
                                                <Radio value="">禁用</Radio>
                                                <Radio value="items-start">交叉轴起始侧</Radio>
                                                <Radio value="items-center">居中</Radio>
                                                <Radio value="items-end">交叉轴结束侧</Radio>
                                                <Radio value="items-stretch">拉伸</Radio>
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
