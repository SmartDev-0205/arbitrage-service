
import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import Menu from './Menu';
import WalletModal from '../WalletModal'
import IconMenu from '../Icons';
import "./header.scss";

const Header = () => {
	const { activate, connector, chainId, account, library, ...props } = useWeb3React();
	const [walletAddress, setWalletaddress] = useState('');
	const [scrollEvent, setScrollEvent] = useState(false);
	const [isWalletConnect, setIsWalletConnect] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);
	const [walletOpen, setWalletOpen] = useState(false);
	const [mobileView, setMobileView] = useState(false);
	const [navItems, setNavItems] = useState([
		{ label: 'Home', router: '/', active: false },
		{ label: 'Account', router: '/dashboard', active: false },
		{
			label: 'Contract',
			router: 'https://bscscan.com/address/0xd68dfef833e8c1db70c29b6bd4790845e8c23e70#tokentxns',
			active: false
		},
		{ label: 'Whitepaper', router: '/assets/whitepaper.pdf', active: false }
	]);

	const movePages = (link:string, index:number) => {
		let navList = [...navItems];
		navList.map((item, ind) => {
		return ind === index ? (item.active = true) : (item.active = false);
		});
		window.location.href = link;
		// navigate(link);
		setNavItems(navList);
	};

	useEffect(() => {
		let navList = [...navItems];
		const index = navList.map((e) => e.router).indexOf(location.pathname);
		if (index >= 0) navList[index].active = true;
		setNavItems(navList);
		// eslint-disable-next-line
	}, [location.pathname]);

	const handleMenu = () => {
		open ? setOpen(false) : setOpen(true);
	};

	const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

	const getScrollPosition = () => window.scrollY;

	useEffect(() => {
		const setResponsiveness = () => {
		  getWidth() < 1024 ? setMobileView(true) : setMobileView(false);
		};
		setResponsiveness();
		const setScrollEventY = () => {
		  getScrollPosition() > 300 ? setScrollEvent(true) : setScrollEvent(false);
		};
		setScrollEventY();
		window.addEventListener('scroll', setScrollEventY);
		window.addEventListener('resize', setResponsiveness);
		return () => {
		  window.removeEventListener('resize', setResponsiveness);
		  window.removeEventListener('scroll', setScrollEventY);
		};
	  }, []);

	const onConnect = () => {
		setWalletOpen(true);
	};

	const onDisconnect = () => {
		setIsWalletConnect(false); 
		localStorage.clear(); 
		navigate('/')
	}

	const setWallet = async (add:string) => {
		const address = add.slice(0, 6) + '...' + add.slice(-3)
		setWalletaddress(address);
		setWalletOpen(false)
	}

	useEffect(() => {
		if (account) {
			setWallet(account)
			setIsWalletConnect(true)
		} else {
			setIsWalletConnect(false)
		}
	}, [account]);

	return (
		<>
			<header className={scrollEvent ? 'header-container' : ''}>
				<div className="logo-container">
					<img src={Logo} alt="logo" />
				</div>
				<div className="navbar-container">
				{mobileView ? (
					<div onClick={handleMenu}>
					<IconMenu icon="Hamburger" size={24} className="text-white cursor-pointer hover:text-blue" />
					</div>
				) : (
					<>
					<div className="navbar-list">
						{navItems.map((item, ind) => {
						return (
							<p
								key={ind}
								className={item.active ? 'item-active' : ''}
								onClick={() => movePages(item.router, ind)}
							>
								{item.label}
							</p>
						);
						})}
					</div>
					<div className="auth-navbar">
						<div className="md:w-[160px] md:h-[46px]">
							{(walletAddress && walletAddress.length <= 0 || isWalletConnect === false) ? 
								<button className="btn-primary !p-[8px]" onClick={onConnect}>
									<span className="pt-[4px]">CONNECT</span>
									<IconMenu icon="Arrow" />
								</button> 
								: 
								<button className="btn-primary !p-[8px]" onClick={onDisconnect}>
									<span className="pt-[4px]">{walletAddress}</span>
									<IconMenu icon="Arrow" />
								</button> 
							}
						</div>
					</div>
					</>
				)}
				</div>
			</header>
			<WalletModal open={walletOpen} setOpen={setWalletOpen} setIsWalletConnect={setIsWalletConnect} />
			<Menu setOpen={setOpen} open={open} />
		</>
	);
};

export default Header;