import { Provider } from 'react-redux'
import Layout from '../Components/Layout'
import '../styles/globals.css'
import store from '../store/index'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
<Layout>
    <Component {...pageProps} />
    </Layout>
    </Provider>
  )
}

export default MyApp
