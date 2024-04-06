import React from 'react';
interface PathCardProps {
    image: string;
    date: string;
    description: string;
}

const PathCard: React.FC<PathCardProps> = (props) => {
    return (
        <div>
            <div>{props.image}</div>
            <div><p>{props.date}</p></div>
            <div><p>{props.description}</p></div>

            
        </div>
    );
};

export default PathCard;