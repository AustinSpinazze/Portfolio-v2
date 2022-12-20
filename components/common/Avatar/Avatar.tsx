import { motion } from 'framer-motion';

type AvatarProps = {
	directionLeft?: boolean;
};

const Avatar = ({ directionLeft }: AvatarProps) => {
	return (
		<motion.div
			initial={{
				x: directionLeft ? -200 : 200,
				opacity: 0,
			}}
			transition={{ duration: 1 }}
			whileInView={{ opacity: 1, x: 0 }}
			className='group relative flex cursor-pointer'
		>
			<motion.img
				src='https://media-exp1.licdn.com/dms/image/C5603AQGSa1XrMoYDlg/profile-displayphoto-shrink_800_800/0/1573101622057?e=1674691200&v=beta&t=uoAzJIPxrvymWGDzcZRKG2t-TBoQ38ANEx-YYw_0cXY'
				className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
				alt=''
			/>
			<div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
				<div className='flex items-center justify-center h-full'>
					<p className='text-3xl font-bold text-black opacity-100'>
						x years
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default Avatar;
