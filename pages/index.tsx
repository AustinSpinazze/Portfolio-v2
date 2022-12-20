import type { NextPage } from 'next';
import {
	About,
	ContactMe,
	Experience,
	Hero,
	Projects,
	Skills,
} from '../components';

const Home: NextPage = () => {
	return (
		<main className='bg-[rgb(36,36,36)]'>
			{/* Hero */}
			<section id='hero'>
				<Hero />
			</section>
			{/* About */}
			<section id='about'>
				<About />
			</section>
			{/* Experience */}
			<section id='experience'>
				<Experience />
			</section>
			{/* Skills */}
			<section id='skills'>
				<Skills />
			</section>
			{/* Projects */}
			<section id='projects'>
				<Projects />
			</section>
			{/* Contact Form */}
			<section id='contact'>
				<ContactMe />
			</section>
		</main>
	);
};

export default Home;
