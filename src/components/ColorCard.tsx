import { List } from 'antd';
import type { FC } from 'react';

const MOCK_COLORS = [
    { id: 111, hex_value: '#D2A896', colour_name: '413 Grège' },
    { id: 222, hex_value: '#617686', colour_name: '494 Junon' },
    { id: 333, hex_value: '#ED7C90', colour_name: '550 Tease' },
    { id: 444, hex_value: '#EA508D', colour_name: '684 Diabolo' },
    { id: 555, hex_value: '#481B2A', colour_name: '924 Sauvage' },
];

const ColorCard: FC = () => {
    return (
        <List
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
            }}
            dataSource={MOCK_COLORS}
            renderItem={(item) => (
                <List.Item>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 10,
                        }}
                    >
                        {item.colour_name}
                        <div
                            style={{
                                width: 30,
                                height: 30,
                                backgroundColor: item.hex_value,
                            }}
                        ></div>
                    </div>

                    <p
                        style={{ cursor: 'pointer' }}
                        onClick={() => console.log('to favs')}
                    >
                        добавить в избранное
                    </p>
                </List.Item>
            )}
        />
    );
};

export default ColorCard;
