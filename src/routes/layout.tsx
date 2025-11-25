import { component$, Slot } from '@builder.io/qwik';
import Header from '~/components/header';
import Footer from '~/components/footer';
import { ScrollToTop } from '~/components/scroll-to-top';
import { WhatsappFloat } from '~/components/whatsapp-float';

export default component$(() => {
	return (
		<>
			<Header />
			<Slot />
			<ScrollToTop />
			<WhatsappFloat />
			<Footer />
		</>
	);
});