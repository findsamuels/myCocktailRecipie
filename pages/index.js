import styles from '../styles/Home.module.css'
import Banner from '../Components/Banner'

import ServicePreview from '../Components/ServiceProvided/ServicePreview'

export default function Home(props) {




  return (
    <div className={styles.container}>
    
    <Banner/>
    <ServicePreview />
    </div>
  )
}


