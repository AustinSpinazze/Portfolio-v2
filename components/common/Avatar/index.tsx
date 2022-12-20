import Avatar from './Avatar';

type AvatarProps = {
	directionLeft?: boolean;
};

const index = ({ directionLeft }: AvatarProps) => {
	return <Avatar directionLeft={directionLeft} />;
};

export default index;
