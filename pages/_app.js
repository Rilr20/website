import '../src/styles/css/app.min.css'

export default function MyApp({ Component, pageProps: { session, ...pageProps }, }) {

    return (
        <div>
            <Component {...pageProps} />
        </div>

    )
}