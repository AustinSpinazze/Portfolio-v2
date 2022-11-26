import Header from './Header/index';

type LayoutProps = {
	children: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className='bg-[rgb(36,36,36)] text-white'>
			<Header />
			{children}
		</div>
	);
};

export default Layout;
