import { type FC } from 'react';
import ColorCard from '../components/ColorCard';
import SearchColor from '../components/SearchColor';

const Main: FC = () => {
    return (
        <div>
            <div style={{ padding: 30 }}>
                <SearchColor />
            </div>
            <ColorCard />
        </div>
    );
};

export default Main;
