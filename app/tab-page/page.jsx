import { Accordion, TabContent, TabSwitcher, Tabs } from '@/components'
import React from 'react'

function page() {
    const accordionList = [{
        title: "1.1 BÖLÜM LOREM IPSUM?",
        description: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus lectus. Maecenas turpis magna, fringilla non nisi ut, posuere laoreet quam. Donec purus neque, imperdiet vitae varius quis, consequat eu nisl. Sed ultricies sollicitudin nibh, id posuere dui laoreet vitae. Donec congue massa vel justo mattis, eget sagittis erat maximus. Sed vehicula semper suscipit. Mauris lacinia scelerisque ligula sit amet feugiat. Cras pulvinar sit amet nisl non faucibus. Curabitur dui nisi, consequat sed mi a, lacinia vestibulum arcu.",
        isOpenProp: true
    }, {
        title: "1.2 BÖLÜM LOREM IPSUM?",
        description: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus lectus. Maecenas turpis magna, fringilla non nisi ut, posuere laoreet quam. Donec purus neque, imperdiet vitae varius quis, consequat eu nisl. Sed ultricies sollicitudin nibh, id posuere dui laoreet vitae. Donec congue massa vel justo mattis, eget sagittis erat maximus. Sed vehicula semper suscipit. Mauris lacinia scelerisque ligula sit amet feugiat. Cras pulvinar sit amet nisl non faucibus. Curabitur dui nisi, consequat sed mi a, lacinia vestibulum arcu.",
        isOpenProp: false
    }, {
        title: "1.3 BÖLÜM LOREM IPSUM?",
        description: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus lectus. Maecenas turpis magna, fringilla non nisi ut, posuere laoreet quam. Donec purus neque, imperdiet vitae varius quis, consequat eu nisl. Sed ultricies sollicitudin nibh, id posuere dui laoreet vitae. Donec congue massa vel justo mattis, eget sagittis erat maximus. Sed vehicula semper suscipit. Mauris lacinia scelerisque ligula sit amet feugiat. Cras pulvinar sit amet nisl non faucibus. Curabitur dui nisi, consequat sed mi a, lacinia vestibulum arcu.",
        isOpenProp: false
    }, {
        title: "1.4 BÖLÜM LOREM IPSUM?",
        description: "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus lectus. Maecenas turpis magna, fringilla non nisi ut, posuere laoreet quam. Donec purus neque, imperdiet vitae varius quis, consequat eu nisl. Sed ultricies sollicitudin nibh, id posuere dui laoreet vitae. Donec congue massa vel justo mattis, eget sagittis erat maximus. Sed vehicula semper suscipit. Mauris lacinia scelerisque ligula sit amet feugiat. Cras pulvinar sit amet nisl non faucibus. Curabitur dui nisi, consequat sed mi a, lacinia vestibulum arcu.",
        isOpenProp: false
    },]
    return (
        <div className="page__tab page__tab--row-reverse">
            <div className="container">
                <Tabs>
                    <div className="tabs__head tabs__head__arrow">
                        <TabSwitcher tabId={0}>
                            <span>1. BÖLÜM</span> <sub>Lorem Ipsum</sub>
                        </TabSwitcher>
                        <TabSwitcher tabId={1}>
                            <span>2. BÖLÜM</span> <sub>Lorem Ipsum</sub>
                        </TabSwitcher>
                        <TabSwitcher tabId={2}>
                            <span>3. BÖLÜM</span> <sub>Lorem Ipsum</sub>
                        </TabSwitcher>
                        <TabSwitcher tabId={3}>
                            <span>4. BÖLÜM</span> <sub>Lorem Ipsum</sub>
                        </TabSwitcher>
                        <TabSwitcher tabId={4}>
                            <span>5. BÖLÜM</span> <sub>Lorem Ipsum</sub>
                        </TabSwitcher>
                    </div>
                    <div className="tabs__content">
                        <TabContent id={0}>
                            {accordionList && accordionList.map((item, key) => (
                                   <Accordion key={key} {...item} />
                            ))}
                        </TabContent>
                        <TabContent id={1}>
                            {accordionList && accordionList.map((item, key) => (
                                   <Accordion key={key} {...item} />
                            ))}
                        </TabContent>
                        <TabContent id={2}>
                            {accordionList && accordionList.map((item, key) => (
                                   <Accordion key={key} {...item} />
                            ))}
                        </TabContent>
                        <TabContent id={3}>
                            {accordionList && accordionList.map((item, key) => (
                                   <Accordion key={key} {...item} />
                            ))}
                        </TabContent>
                        <TabContent id={4}>
                            {accordionList && accordionList.map((item, key) => (
                                   <Accordion key={key} {...item} />
                            ))}
                        </TabContent>
                    </div>
                </Tabs>
            </div>
        </div>
    )
}

export default page