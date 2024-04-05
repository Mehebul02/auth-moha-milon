
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

const Root = () => {
    return (
        <div className='max-w-[1300px] mx-auto mt-4'>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Root;