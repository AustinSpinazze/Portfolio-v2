import Header from './Header/index';

type LayoutProps = {
	children: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default Layout;
