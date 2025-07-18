import { component$ } from '@builder.io/qwik';

export default component$(() => {
    return (
        <footer class="bg-gray-100 text-center py-4">
            <p class="text-gray-600 text-sm">
                &copy; {new Date().getFullYear()} Coach Fabian Avendaño. Todos los derechos reservados.
            </p>
        </footer>
    );
});