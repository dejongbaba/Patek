import React from 'react';

const SectionGrid = ({children}) => {
    return (
        <div className="d-flex flex-wrap justify-content-between">
            {children}
        </div>
    );
}

export default SectionGrid;