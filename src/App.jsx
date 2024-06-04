import { useState } from 'react';
import { data } from '../src/data/data';
import './App.css'
import TweetList from './components/TweetsList'

function App() {
  const [tweets, setTweets] = useState(data);
  return (
    <>
      <main>
        <h1>My App</h1>

        <section>
          {tweets.map((tweet) => {
            <div key={tweet.id}>
              {tweet.content}
            </div>
          })}
          
        </section>

        <TweetList />
      </main>
    </>
  )
}

export default App
