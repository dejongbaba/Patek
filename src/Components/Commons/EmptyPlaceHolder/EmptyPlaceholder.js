import React from 'react';
import PropTypes from 'prop-types';
import {Empty} from "antd";

EmptyPlaceholder.propTypes = {

};

function EmptyPlaceholder(props) {
    return (
        <div className="text-center my-lg-5 flex-grow-1">
            <Empty className={'text-white'} description={'No article Available'}/>
        </div>
    );
}

export default EmptyPlaceholder;