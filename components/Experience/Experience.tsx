import { motion } from 'framer-motion';

import { ExperienceProps } from '../../utils/types/types';

const Experience = ({ Card }: ExperienceProps) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='flex overflow-hidden flex-col text-left max-w-full px-10 mx-auto items-center'
		>
			<h3 className='uppercase tracking-[20px] text-gray-500 text-2xl pb-20'>
				Experience
			</h3>
			<div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</motion.div>
	);
};

export default Experience;
