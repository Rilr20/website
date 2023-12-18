import '../src/styles/css/app.min.css'
import { NextIntlClientProvider } from 'next-intl';
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
    const router = useRouter();
    console.log(router.locale);
    return (
        <NextIntlClientProvider
            locale={router.locale}
            timeZone="Europe/Stockholm"
            messages={pageProps.messages}
        >
            <div>
                <Header locale={router.locale} />
                <Component {...pageProps} />
                <Footer />
            </div>
        </NextIntlClientProvider>
    )
}