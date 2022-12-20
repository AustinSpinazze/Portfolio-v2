import { motion } from 'framer-motion';

type Props = {};

const About = (props: Props) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1.5,
			}}
			className='h-screen text-center max-w-7xl px-10 mx-auto flex flex-col justify-center'
		>
			<h3 className='uppercase tracking-[20px] text-gray-500 text-2xl pb-28'>
				About
			</h3>
			<div className='flex flex-col justify-center mx-auto items-center md:flex-row'>
				<motion.img
					initial={{
						x: -200,
						opacity: 0,
					}}
					whileInView={{
						x: 0,
						opacity: 1,
					}}
					transition={{
						duration: 1.2,
					}}
					src='https://media-exp1.licdn.com/dms/image/C5603AQGSa1XrMoYDlg/profile-displayphoto-shrink_800_800/0/1573101622057?e=1674691200&v=beta&t=uoAzJIPxrvymWGDzcZRKG2t-TBoQ38ANEx-YYw_0cXY'
					className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-[300px] md:h-[400px] xl:w-[400px] xl:h-[500px]'
				/>
				<div className='space-y-10 px-0 md:px-10'>
					<h4 className='text-4xl font-semibold'>
						Here is a{' '}
						<span className='underline decoration-[#f7a80A]/50'>
							little
						</span>{' '}
						background
					</h4>
					<p className='text-base'>
						I am a Lafayette-based software engineer who specializes
						in designing and building full-stack applications.
						Currently, I am a Frontend Developer at LuluLemon
						focused on building a better e-commerce experience.
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
