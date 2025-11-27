import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import Header from '~/components/header';
import Footer from '~/components/footer';
import { ScrollToTop } from '~/components/scroll-to-top';
import WhatsappButton from '~/components/whatsappButton';
import { MaintenancePage } from '~/components/maintenance-page';

export const useUser = routeLoader$(({ sharedMap }) => {
	return sharedMap.get('user') || null;
});

export default component$(() => {
	const user = useUser();
	const isMaintenanceMode = import.meta.env.VITE_PUBLIC_MAINTENANCE_MODE === 'true';

	if (isMaintenanceMode) {
		return <MaintenancePage />;
	}

	return (
		<>
			<Header user={user.value} />
			<Slot />
			<ScrollToTop />
			<WhatsappButton />
			<Footer />
		</>
	);
});