import type { NextPage } from 'next';
import { About, Hero } from '../components';

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

			{/* Skills */}

			{/* Projects */}

			{/* Contact Form */}
		</main>
	);
};

export default Home;
