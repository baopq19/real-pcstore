import Head from 'next/head';
import DefaultLayout from '../layouts/DefaultLayout';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Next-PCStar</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<DefaultLayout></DefaultLayout>
		</div>
	);
}
