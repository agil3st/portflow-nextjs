import LandingHero from './components/LandingHero'
import MyTools from './components/MyTools'
import RecentWorks from './components/RecentWorks'
import LatestArticles from './components/LatestArticles'
import MediumArticles from './components/MediumArticles'
import NewsletterForm from './components/NewsletterForm'

import { myConfig, mediumProfile } from './layout';

export default async function Home() {
  const config = await myConfig
  const medium = await mediumProfile
  // console.log(config.id);
  
  return (
    <section className="bg-base-200">
      <LandingHero config={config} />
      <div className="max-w-screen-lg mx-auto">
        <MyTools />
        <RecentWorks />
        <LatestArticles />
        <MediumArticles mediumProfile={medium} />
        <NewsletterForm />
      </div>
    </section>
  )
}
