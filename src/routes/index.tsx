import type {RequestHandler} from '@builder.io/qwik-city'
import {guessLocale} from 'compiled-i18n'

export const onGet: RequestHandler = async ({request, redirect, url}) => {
	const acceptLang = request.headers.get('accept-language')
    console.log('acceptLang', acceptLang)
	const guessedLocale = guessLocale(acceptLang)
    console.log('guessedLocale', guessedLocale)
	throw redirect(301, `/${guessedLocale}/${url.search}`)
}