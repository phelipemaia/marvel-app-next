function MyApp({ Component, pageProps, router }) {
  const getLayout = Component.getLayout || (page => page)

  return getLayout(<Component {...pageProps} />);
}

export default MyApp
