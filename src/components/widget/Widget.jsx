import React from 'react'
import './widget.scss'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';


const Widget = ({ type }) => {
    let data;

    const amount = 100;
    const diff = 20;

    switch(type){
        case 'user':
            data={
                title: "Total Work Orders",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlineOutlinedIcon className='icon' style={{ backgroundColor: 'rgba(9, 148, 254, 0.47)', color: '#7451f8', }} />,
            };
            break;
            case 'order':
            data={
                title: "Pending Work Orders",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartOutlinedIcon className='icon' style={{ backgroundColor: 'rgba(9, 148, 254, 0.47)', color: '#7451f8', }} />,
            };
            break;
            case 'earning':
            data={
                title: "Complete Work Orders",
                isMoney: true,
                link: "View net earnings",
                icon: <MonetizationOnOutlinedIcon className='icon' style={{ backgroundColor: 'rgba(9, 148, 254, 0.47)', color: '#7451f8', }} />,
            };
            break;
            case 'balance':
            data={
                title: "Closed Work Orders",
                isMoney: true,
                link: "See details",
                icon: <AccountBalanceWalletOutlinedIcon className='icon' style={{ backgroundColor: 'rgba(9, 148, 254, 0.47)', color: '#7451f8', }} />,
            };
            break;
        default:
            break;
    }

  return (
    <div className='widget'>
        <div className='left'>
            <span className='title'>{data.title}</span>
            <span className='counter'>
                {data.isMoney && '$'} {amount}
            </span>
            <span className='link'>{data.link}</span>
        </div>
        <div className='right'>
            <div className='percentage positive'>
            <KeyboardArrowUpOutlinedIcon />
                {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget