import React from 'react';
import {Collapse, Icon} from "antd";
import './accordion.css';

const {Panel} = Collapse;
const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
};


const Accordion = ({items, itemStructure}) => {
    return (
        <Collapse
            className={'bg-white'}
            bordered={false}
            defaultActiveKey={['1']}
            expandIconPosition={"right"}
            expandIcon={({isActive}) => <Icon type="down" rotate={isActive ? -90 : 0}/>}
        >
            {items && items.length > 0 ?
                items.map((item, i) =>
                    <Panel header={item.title} key={i} style={customPanelStyle}>
                        {itemStructure(item)}
                    </Panel>
                )
                : ''}
        </Collapse>
    );
};

export default Accordion;