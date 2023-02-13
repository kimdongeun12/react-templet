import styled from 'styled-components';
import { Button , Typography , Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const { Title } = Typography;

export default function Header (){
    const [open, setOpen] = useState(false);
    const handleDrawer = () => {
        setOpen((props) => !props);
    };
    
    return (
        <>
        <HeaderWrap>
            <Title level={1}>KB마켓</Title>
            <Button type="text" onClick={handleDrawer}><MenuOutlined /></Button>
        </HeaderWrap>
        <Drawer
            title="KB마켓"
            placement="right"
            width={320}
            onClose={handleDrawer}
            open={open}
        >
            <MenuList><Link to={'/deal'} onClick={handleDrawer}>중고거래</Link></MenuList>
            <MenuList><Link to={'/shop'} onClick={handleDrawer}>동네가게</Link></MenuList>
        </Drawer>
        </>
    )
}

const HeaderWrap = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    padding: 0 16px;
    width: 100%;
    height: 56px;
    justify-content: space-between;
    align-items: center;
    background-color: #f5f5f5;
    box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
    border-bottom: 1px solid #bdbdbd;
    z-index: 10;
    h1 {
        font-size: 20px;
        line-height: 1.5;
        margin-bottom: 0;
    }
`
const MenuList = styled.div`
    display: block;
    a {
        display: block;
        padding: 8px 0;
    }
`