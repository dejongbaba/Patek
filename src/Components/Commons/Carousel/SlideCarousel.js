import React, {useState} from 'react';
import {Carousel} from 'react-bootstrap';

const SlideCarousel = ({children, items, itemStructure}) => {

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <div>
            <Carousel activeIndex={index}
                      direction={direction}
                      onSelect={handleSelect}
                      indicators={false}
            >
                {items && items.length > 0 ?
                    items.map((item, i) =>
                        <Carousel.Item key={i}>
                            {itemStructure(item)}
                        </Carousel.Item>)
                    : ''}
            </Carousel>
        </div>
    );
};

export default SlideCarousel;