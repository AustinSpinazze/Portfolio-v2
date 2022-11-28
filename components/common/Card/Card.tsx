import { motion } from 'framer-motion';

type Props = {};

const Card = (props: Props) => {
	return (
		<article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200'>
			<motion.img
				initial={{
					y: -100,
					opacity: 0,
				}}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
				src='https://media-exp1.licdn.com/dms/image/C5603AQGSa1XrMoYDlg/profile-displayphoto-shrink_800_800/0/1573101622057?e=1674691200&v=beta&t=uoAzJIPxrvymWGDzcZRKG2t-TBoQ38ANEx-YYw_0cXY'
				alt=''
			/>
			<div className='px-0 md:px-10'>
				<h4 className='text-4xl font-light'>CEO of Uncharted Labs</h4>
				<p className='font-bold text-2xl mt-1'>Uncharted Labs</p>
				<div className='flex space-x-2 my-2'>
					<img
						className='h-10 w-10 rounded-full'
						src='https://media-exp1.licdn.com/dms/image/C5603AQGSa1XrMoYDlg/profile-displayphoto-shrink_800_800/0/1573101622057?e=1674691200&v=beta&t=uoAzJIPxrvymWGDzcZRKG2t-TBoQ38ANEx-YYw_0cXY'
						alt=''
					/>
					<img
						className='h-10 w-10 rounded-full'
						src='https://media-exp1.licdn.com/dms/image/C5603AQGSa1XrMoYDlg/profile-displayphoto-shrink_800_800/0/1573101622057?e=1674691200&v=beta&t=uoAzJIPxrvymWGDzcZRKG2t-TBoQ38ANEx-YYw_0cXY'
						alt=''
					/>
					<img
						className='h-10 w-10 rounded-full'
						src='https://media-exp1.licdn.com/dms/image/C5603AQGSa1XrMoYDlg/profile-displayphoto-shrink_800_800/0/1573101622057?e=1674691200&v=beta&t=uoAzJIPxrvymWGDzcZRKG2t-TBoQ38ANEx-YYw_0cXY'
						alt=''
					/>
				</div>
				<p className='uppercase py-5 text-gray-300'>
					Started work... - Ended...
				</p>
				<ul className='list-disc space-y-4 ml-5 text-lg max-h-96 overflow-y-scroll'>
					<li>
						Summary points Summary points Summary points Summary
						pointsSummary pointsSummary pointsSummary pointsSummary
						pointsSummary pointsSummary pointsSummary pointsSummary
						points
					</li>
					<li>
						Summary points Summary points Summary points Summary
						pointsSummary pointsSummary pointsSummary pointsSummary
						pointsSummary pointsSummary pointsSummary pointsSummary
						points
					</li>
					<li>
						Summary points Summary points Summary points Summary
						pointsSummary pointsSummary pointsSummary pointsSummary
						pointsSummary pointsSummary pointsSummary pointsSummary
						points
					</li>
					<li>
						Summary points Summary points Summary points Summary
						pointsSummary pointsSummary pointsSummary pointsSummary
						pointsSummary pointsSummary pointsSummary pointsSummary
						points
					</li>
					<li>
						Summary points Summary points Summary points Summary
						pointsSummary pointsSummary pointsSummary pointsSummary
						pointsSummary pointsSummary pointsSummary pointsSummary
						points
					</li>
				</ul>
			</div>
		</article>
	);
};

export default Card;
