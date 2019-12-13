import React from 'react';
import {Tabs} from 'antd';
import './TabsLayout.css';

const {TabPane} = Tabs;

function callback(key) {
    console.log(key);
}

const TabsLayout = ({items, itemStructure}) => {
    return (
        <div>
            <Tabs defaultActiveKey="1" className={'green-tab'} onChange={callback}>
                {
                    items && items.length > 0 && itemStructure ?
                        items.map((item, i) => <TabPane tab={item.title} key={i}> {itemStructure(item)}</TabPane>)
                        : ''
                }
            </Tabs>

        </div>
    );
}

export default TabsLayout;