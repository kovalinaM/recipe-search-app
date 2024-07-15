import {FC} from 'react';

interface ITitleProps {
    subTitle: string;
    mainTitle: string;
}

const Title:FC<ITitleProps> = ({subTitle, mainTitle}) => {
    return (
        <div className='title'>
            <h3 className='sub-title'>{subTitle}</h3>
            <h2 className='main-title'>{mainTitle}</h2>
        </div>
    );
}

export default Title;
