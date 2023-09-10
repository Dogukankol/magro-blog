"use client"
import React, {useState, createContext, useContext} from "react";

const TabContext = createContext();

function Tabs({ children, className }) {
    const [activeTab, setActiveTab] = useState(0);

    const setTab = tab => {
        setActiveTab(tab);
    };

    return (
        <TabContext.Provider value={{ activeTab, setTab }}>
            <div className={`tabs ${className ? className : ""}`.trim()}>{children}</div>
        </TabContext.Provider>
    );
}

function TabSwitcher({
    children,
    tabId,
    activeClass = `tabs__head__item--active`,
}) {
    const { activeTab, setTab } = useContext(TabContext);
    const onClick = () => {
        setTab(tabId);
        
    };

    const className = ["tabs__head__item"];
    if (activeTab === tabId) className.push(activeClass);
    return (
        <button className={className.join(" ")} onClick={onClick}>
            {children}
        </button>
    );
}


function TabContent({ children, id }) {
    const { activeTab } = useContext(TabContext);
    return (
        <div className={`tabs__content__item ${id === activeTab ? "tabs__content__item--active" : ""}`}>{children}</div>
    );
}

export { Tabs, TabSwitcher, TabContent };
