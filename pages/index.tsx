import type { NextPage } from 'next';
import { About, Hero } from '../components';

const Home: NextPage = () => {
	return (
		<main className='flex flex-col justify-center align-middle'>
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
