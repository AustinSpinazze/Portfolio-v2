import { motion } from 'framer-motion';

import { Avatar } from '../index';

type Props = {};

const Skills = (props: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='flex flex-col text-center md:text-left max-w-[2000px]xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
		>
			<h3 className='uppercase tracking-[20px] text-gray-500 text-2xl pb-20'>
				Skills
			</h3>
			<div className='grid grid-cols-4 gap-5'>
				<Avatar directionLeft={true} />
				<Avatar directionLeft={true} />
				<Avatar />
				<Avatar />
				<Avatar directionLeft={true} />
				<Avatar directionLeft={true} />
				<Avatar />
				<Avatar />
				<Avatar directionLeft={true} />
				<Avatar directionLeft={true} />
				<Avatar />
				<Avatar />
				<Avatar directionLeft={true} />
			</div>
		</motion.div>
	);
};

export default Skills;
