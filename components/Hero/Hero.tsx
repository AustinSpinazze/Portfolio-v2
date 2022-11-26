import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

import { BackgroundShape } from '../index';
import Link from 'next/link';

type Props = {};

const Hero = (props: Props) => {
	const [text, count] = useTypewriter({
		words: [
			'Hi there, my name is Austin.',
			'I am a Frontend Developer',
			'a Backend Developer',
			'and a Consultant',
			'who runs on coffee ☕',
		],
		loop: true,
		delaySpeed: 2000,
	});

	return (
		<motion.div className='h-screen flex flex-col space-y-8 items-center justify-center text-center'>
			<BackgroundShape />
			<img
				className='relative rounded-full h-32 w-32 mx-auto object-cover'
				src='https://media-exp1.licdn.com/dms/image/C5603AQGSa1XrMoYDlg/profile-displayphoto-shrink_800_800/0/1573101622057?e=1674691200&v=beta&t=uoAzJIPxrvymWGDzcZRKG2t-TBoQ38ANEx-YYw_0cXY'
				alt='A headshot of Austin Spinazze'
			/>
			<div className='z-20'>
				<h2 className='text-lg uppercase text-gray-500 pb-4 tracking-[10px]'>
					Web Developer
				</h2>
				<h1 className='text-4xl lg:text-5xl font-semibold tracking-widest px-10'>
					<span>{text}</span>
					<Cursor cursorColor='#f7ab0a' />
				</h1>
				<div className='pt-5'>
					<Link href='#about'>
						<button className='heroButton'>About</button>
					</Link>
					<Link href='#experience'>
						<button className='heroButton'>Experience</button>
					</Link>
					<Link href='#skills'>
						<button className='heroButton'>Skills</button>
					</Link>
					<Link href='#projects'>
						<button className='heroButton'>Projects</button>
					</Link>
				</div>
			</div>
		</motion.div>
	);
};

export default Hero;
