import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import nailspng from '../assets/nailspng.png';

const menuItems = [
    { key: '/', label: 'Главная' },
    { key: '/history', label: 'История' },
    { key: '/favorites', label: 'Избранное' },
];

const Header: FC = () => {
    type onLogoClickType = () => void;
    const history = useNavigate();
    const onMenu: MenuProps['onClick'] = (e) => {
        history(e.key);
    };
    const onLogoClick: onLogoClickType = () => {
        history('/');
    };

    return (
        <Layout>
            <Layout.Header style={{ display: 'flex', alignItems: 'center' }}>
                {/* BUG: при переходе на главную через лого не меняются активные пункты меню */}
                {/* <div style={{ lineHeight: '20px' }}>
                    <img
                        style={{ width: 30, lineHeight: '20px' }}
                        src={nailspng}
                        alt='Logo'
                    />
                    <div
                        className='demo-logo'
                        style={{
                            color: 'white',
                            cursor: 'pointer',
                            lineHeight: '20px',
                        }}
                        onClick={onLogoClick}
                    >
                        MY NAILS
                    </div>
                </div> */}
                <Menu
                    theme='dark'
                    mode='horizontal'
                    items={menuItems}
                    style={{ flex: 1, minWidth: 0 }}
                    onClick={onMenu}
                />
                <div>
                    <div
                        style={{
                            color: 'white',
                            cursor: 'pointer',
                            lineHeight: '20px',
                        }}
                    >
                        Маша
                    </div>
                    <div
                        style={{
                            color: 'white',
                            cursor: 'pointer',
                            lineHeight: '20px',
                        }}
                    >
                        Выйти
                    </div>
                </div>
            </Layout.Header>
        </Layout>
    );
};

export default Header;
