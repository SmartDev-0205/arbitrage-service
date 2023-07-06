import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import IconMenu from '../../Icons';
import { NavBarTypeInterface } from '../../../type';
import Logo from '../../../assets/images/mark.svg';
import './menu.scss';

const Menu = (props: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [navItems, setNavItems] = useState<NavBarTypeInterface[]>([
    { label: 'Home', router: '/', active: false },
    { label: 'Account', router: '/myAccount', active: false },
    {
      label: 'Contract',
      router: '/contract',
      active: false
    },
    { label: 'Whitepaper', router: '/whitepaper', active: false }
  ]);

  const getWidth = () => {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  };

  const movePages = (link: string, index: number) => {
    let navList = [...navItems];
    navList.map((item, ind) => {
      return ind === index ? (item.active = true) : (item.active = false);
    });
    navigate(link);
    props.setOpen(false);
    setNavItems(navList);
  };

  useEffect(() => {
    let navList = [...navItems];
    const index = navList.map((e) => e.router).indexOf(location.pathname);
    if (index >= 0) navList[index].active = true;
    setNavItems(navList);
    // eslint-disable-next-line
  }, [location.pathname]);

  useEffect(() => {
    const setResponsiveness = () => {
      getWidth() > 1024 && props.setOpen(false);
    };
    setResponsiveness();
    window.addEventListener('resize', setResponsiveness);
  }, [props]);

  return (
    <>
      {props.open && (
        <>
          <div
            className="fixed inset-0 bg-primary bg-opacity-80 transition-opacity z-[999]"
            onClick={() => props.setOpen(false)}
          ></div>
          <menu>
            <div className="menu-header">
              <div className="flex space-x-[15px]">
                <img src={Logo} alt="logo" className="user" />
                <div className="flex flex-col justify-center text-white text-[20px]">
                  <p className="font-[400]">Hello,</p>
                  <p className="font-[700]">Welcome!</p>
                </div>
              </div>
              <span onClick={() => props.setOpen(false)}>&times;</span>
            </div>
            <div className="nav-group">
              <div className="nav-list">
                {navItems.map((item: NavBarTypeInterface, ind: number) => {
                  return (
                    <div
                      key={ind}
                      className={`nav-item ${item.active && 'item-active'}`}
                      onClick={() => movePages(item.router, ind)}
                    >
                      <Link to={item.router}>{item.label}</Link>
                    </div>
                  );
                })}
              </div>
              <div className="w-[160px] h-[46px] m-[30px]">
                <button className="btn-primary">
                  <span className="pt-[4px]">CONNECT</span>
                  <IconMenu icon="Arrow" />
                </button>
              </div>
            </div>
          </menu>
        </>
      )}
    </>
  );
};

export default Menu;
