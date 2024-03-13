import { Input } from 'antd';
import type { SearchProps } from 'antd/es/input';
import type { FC } from 'react';

const SearchColor: FC = () => {
    const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
        console.log(info?.source, value);

    return (
        <Input.Search
            placeholder='Поиск по названию'
            onSearch={onSearch}
            enterButton
        />
    );
};

export default SearchColor;
