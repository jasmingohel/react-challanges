import React, { useState, useEffect, useRef } from 'react';
import classes from './rubberTabs.module.css'

export const Tabs = ({ tabs }) => {
    const [transitionTimer, setTransitionTimer] = useState(true);
    const [activeTab, setActiveTab] = useState(0);
    let [leftPercentage, setLeftPercentage] = useState(0)
    const tabsRef = useRef(null);

    useEffect(() => {
        // setTimeout(() => {
        moveSlider(activeTab, true);
        // }, 2000000)
    }, [activeTab]);

    useEffect(() => {
        console.log('left::', leftPercentage)
        return () => {
            if (transitionTimer) {
                clearTimeout(transitionTimer);
            }
        };
    }, [transitionTimer, leftPercentage]);

    const onTabChange = (e) => {
        console.log('e:', e.target.getAttribute('data-index'))
        const index = parseInt(e.target.getAttribute('data-index'));
        if (activeTab !== index) {
            setActiveTab(index);
        }
    }

    const moveSlider = (index, init) => {
        const tabs = tabsRef.current;
        const currentTab = tabs.children[index];
        const tabsWidth = tabs.getBoundingClientRect().width;
        const currentTabWidth = currentTab.getBoundingClientRect().width;

        const rightPercentage =
            ((currentTab.offsetLeft - 0 + currentTabWidth) * 100) / tabsWidth + '%';

        setLeftPercentage((prev) => ((0 + 0) * 100) / tabsWidth + '%')

        setTimeout(() => {
            tabs.style.setProperty(sideProperty(true), sidePercentage(true));
            setLeftPercentage(() => ((currentTab.offsetLeft + 0) * 100) / tabsWidth + '%')
            setTransitionTimer(false);
            console.log('___', leftPercentage)
        }, 350)

        const sideProperty = (withTimer) => {
            if (!withTimer) return index > activeTab ? '--right-side' : '--left-side';
            return index > activeTab ? '--left-side' : '--right-side';
        };

        const sidePercentage = (withTimer) => {
            if (!withTimer) return index > activeTab ? rightPercentage : leftPercentage;
            return index > activeTab ? leftPercentage : rightPercentage;
        };

        tabs.style.setProperty(sideProperty(), sidePercentage());

        if (init) {
            tabs.style.setProperty(sideProperty(true), sidePercentage(true));
            return;
        }

        if (transitionTimer) {
            clearTimeout(transitionTimer);
        }


    };

    const renderTabs = () => {
        return tabs.map((t, i) => {

            return (
                <div className={`${classes.tab} ${i === activeTab && classes.tabactive}`} key={i} data-index={i} onClick={(e) => onTabChange(e)} >
                    {t}
                </div>
            );
        });
    };

    return (
        <div className={classes.tabs} ref={tabsRef}>
            {renderTabs()}
            <div className={classes.line} />
        </div>
    );
};
export default Tabs