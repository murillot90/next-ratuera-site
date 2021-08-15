import Layout from '../../components/Layout';
import Head from 'next/head';
import styles from './Apresentations.module.css';
import { SocialIcon } from 'react-social-icons';
import Iframe from 'react-iframe';

import CustomCarousel from '../../components/CustomCarousel';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReactPlayer from 'react-player';
import { useState } from 'react';

const YoutubeSlide = ({
	url,
	isSelected,
}: {
	url: string;
	isSelected?: boolean;
}) => (
	<div className={styles.videoContainer}>
		<ReactPlayer
			width="100%"
			url={url}
			playing={isSelected}
			height="100%"
			style={{ position: 'absolute' }}
		/>
	</div>
);

export default function Apresentations(this: any) {
	const [currentSlide, setCurrentSlide] = useState(3);

	const updateCurrentSlide = (index: number) => {
		console.log('mudou');

		if (currentSlide !== index) {
			setCurrentSlide(index);
		}
	};

	return (
		<>
			<Head>
				<title>Rateria Poli-USP</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/logo-fundo-azul.svg" />
			</Head>

			<Layout currentPage="Apresentations">
				<div className={styles.contentWrapper}>
					<div className={styles.sectionTitle}>
						<div className={styles.titleLine}></div>
					</div>

					<div className={styles.wrapper}>
						<div className={styles.container}>
							<div className={styles.image}></div>
							<div className={styles.text}>
								<h1 className={styles.title}>Apresentações</h1>
								<p>
									&emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Pellentesque luctus tincidunt tincidunt. Duis rhoncus nulla
									dapibus, scelerisque metus eget, fermentum sem. In hac
									habitasse platea dictumst. Lorem ipsum dolor sit amet,
									consectetur adipiscing elit. Sed porttitor semper velit quis
									euismod. Vivamus placerat, nibh sit amet volutpat pulvinar,
									nunc arcu tempor sem, ut imperdiet urna ipsum ultricies
									mauris. Nulla pretium mattis lorem quis dapibus. Morbi tortor
									lacus, eleifend sed condimentum quis, commodo in nibh. Nulla
									imperdiet fringilla mollis.
									<br />
								</p>

								<div className={styles.buttonsArea}>
									<a href="#carousel">
										<button style={{}} onClick={() => setCurrentSlide(0)}>
											Inters
										</button>
									</a>
									<a href="#carousel">
										<button style={{}} onClick={() => setCurrentSlide(1)}>
											Eventos Beneficentes
										</button>
									</a>
									<a href="#carousel">
										<button style={{}} onClick={() => setCurrentSlide(2)}>
											Casamentos
										</button>
									</a>
									<a href="#carousel">
										<button style={{}} onClick={() => setCurrentSlide(3)}>
											Competições
										</button>
									</a>
									<a href="#carousel">
										<button style={{}} onClick={() => setCurrentSlide(4)}>
											Festas de Empresa
										</button>
									</a>
									<a href="#carousel">
										<button style={{}} onClick={() => setCurrentSlide(5)}>
											Festas de Escola
										</button>
									</a>

									<div className={styles.line}></div>
									<a href="#carousel">
										<button style={{}} onClick={() => setCurrentSlide(6)}>
											Outros
										</button>
									</a>

									<div className={styles.line}></div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.inviteToWatch}>
						<p>&emsp;Conheça nosso samba:</p>
						<SocialIcon
							url="https://www.youtube.com/user/Rateria"
							label="Youtube"
							fgColor="#FFF5DA"
							className={styles.socialIcon}
							target="_blank"
							style={{
								height: 36,
								width: 36,
								marginLeft: '1rem',
							}}
						/>
					</div>
					<div id="carousel"></div>
					<section>
						<div className={styles.videoWrapper}>
							<CustomCarousel
								curSlide={currentSlide}
								curSlideChange={setCurrentSlide}
								currentSlide={currentSlide}
							>
								<YoutubeSlide
									key="youtube-1"
									url="https://www.youtube.com/embed/KoWoewVNdQU"
								/>
								<YoutubeSlide
									key="youtube-2"
									url="https://www.youtube.com/embed/DSheOc2FYBQ"
								/>
								<YoutubeSlide
									key="youtube-3"
									url="https://www.youtube.com/embed/-nUr0XaLVAM"
								/>
								<YoutubeSlide
									key="youtube-4"
									url="https://www.youtube.com/embed/-nUr0XaLVAM"
								/>
								<YoutubeSlide
									key="youtube-5"
									url="https://www.youtube.com/embed/-nUr0XaLVAM"
								/>
								<YoutubeSlide
									key="youtube-6"
									url="https://www.youtube.com/embed/-nUr0XaLVAM"
								/>
								<YoutubeSlide
									key="youtube-7"
									url="https://www.youtube.com/embed/-nUr0XaLVAM"
								/>
							</CustomCarousel>
						</div>
						<Carousel
							showThumbs={false}
							showArrows={false}
							className={styles.videoDescription}
							selectedItem={currentSlide}
						>
							<p>
								1111111111 Lorem ipsum dolor sit amet, consectetur adipiscing
								elit, sed do eiusmod tempor incididunt ut labore et dolore magna
								aliqua. Ut enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
								aute irure dolor in reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur. Excepteur sint occaecat
								cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum.
							</p>
							<p>
								22222222222222222 Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate
								velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
								sint occaecat cupidatat non proident, sunt in culpa qui officia
								deserunt mollit anim id est laborum.
							</p>
							<p>
								333333333333 Lorem ipsum dolor sit amet, consectetur adipiscing
								elit, sed do eiusmod tempor incididunt ut labore et dolore magna
								aliqua. Ut enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
								aute irure dolor in reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur. Excepteur sint occaecat
								cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum.
							</p>
							<p>
								4444444444444444444 Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate
								velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
								sint occaecat cupidatat non proident, sunt in culpa qui officia
								deserunt mollit anim id est laborum.
							</p>
							<p>
								55555555555555555555 Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate
								velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
								sint occaecat cupidatat non proident, sunt in culpa qui officia
								deserunt mollit anim id est laborum.
							</p>
							<p>
								66666666666666666 Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate
								velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
								sint occaecat cupidatat non proident, sunt in culpa qui officia
								deserunt mollit anim id est laborum.
							</p>
							<p>
								7777777777777777777777 Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate
								velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
								sint occaecat cupidatat non proident, sunt in culpa qui officia
								deserunt mollit anim id est laborum.
							</p>
						</Carousel>
					</section>
				</div>
			</Layout>
		</>
	);
}
