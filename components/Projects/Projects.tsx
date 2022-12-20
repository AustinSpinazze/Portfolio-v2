import { motion } from 'framer-motion';

type Props = {};

const Projects = (props: Props) => {
	const projects = [1, 2, 3, 4, 5];

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='relative h-screen flex overflow-hidden flex-col text-left max-w-full justify-center mx-auto items-center z-0'
		>
			<h3 className='uppercase tracking-[20px] text-gray-500 text-2xl pb-20'>
				Projects
			</h3>
			<div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
				{projects.map((project, index) => {
					return (
						<div
							key={index}
							className='w-screen flex-shrink-0 snap-center flex flex-col justify-center items-center space-y-5 px-20 md:px-44'
						>
							<motion.img
								initial={{ y: -300, opacity: 0 }}
								transition={{ duration: 1.2 }}
								whileInView={{ y: 0, opacity: 1 }}
								viewport={{ once: true }}
								src='https://media-exp1.licdn.com/dms/image/C5603AQGSa1XrMoYDlg/profile-displayphoto-shrink_800_800/0/1573101622057?e=1674691200&v=beta&t=uoAzJIPxrvymWGDzcZRKG2t-TBoQ38ANEx-YYw_0cXY'
								alt=''
							/>
							<div className='space-y-10 px-0 md:px-10 max-w-6xl'>
								<h4 className='text-4xl font-semibold text-center'>
									<span className='underline decoration-[#f7ab0a]/50'>
										Case Study {index + 1} of{' '}
										{projects.length}:
									</span>{' '}
									UPS Clone
								</h4>
								<p className='text-lg text-center md:text-left'>
									Lorem Ipsum LoremIpsum Lorem Ipsum Lorem
									Ipsum LoremIpsum Lorem Ipsum Lorem Ipsum
									LoremIpsum Lorem Ipsum Lorem Ipsum
									LoremIpsum Lorem Ipsum Lorem Ipsum
									LoremIpsum Lorem Ipsum Lorem Ipsum
									LoremIpsum Lorem Ipsum Lorem Ipsum
									LoremIpsum Lorem Ipsum Lorem Ipsum
									LoremIpsum Lorem Ipsum Lorem Ipsum
									LoremIpsum Lorem Ipsum
								</p>
							</div>
						</div>
					);
				})}
			</div>
			<div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12' />
		</motion.div>
	);
};

export default Projects;
