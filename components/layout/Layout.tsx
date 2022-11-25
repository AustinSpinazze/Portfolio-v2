import Header from './Header/index';

type LayoutProps = {
	children: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
			<Header />
			{children}
		</div>
	);
};

export default Layout;
