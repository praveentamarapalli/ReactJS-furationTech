import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">
          Uncover the Pages, Ignite Your Imagination
        </h1>
        <img
          src="https://res.cloudinary.com/dmeqhiqbm/image/upload/v1687547574/26102_hrh9e7.jpg"
          alt="Uncover the Pages, Ignite Your Imagination"
          className="home-mobile-img"
        />
        <p className="home-description">
          Discover the literary wonders at BookVerse! Our online bookstore is a
          treasure trove of stories waiting to be explored. From gripping
          thrillers that will keep you on the edge of your seat to heartwarming
          tales that touch your soul, we have a diverse collection to satisfy
          every reader's appetite. Immerse yourself in the captivating
          narratives, dive into thought-provoking non-fiction, or lose yourself
          in the enchanting words of poets. With BookVerse, the world of books
          is at your fingertips, ready to transport you to new realms of
          imagination and knowledge. Start your reading adventure today and
          unlock the magic of literature with BookVerse!
        </p>
        <Link to="/books">
          <button type="button" className="shop-now-button">
            Shop Now
          </button>
        </Link>
      </div>
      <img
        src="https://res.cloudinary.com/dmeqhiqbm/image/upload/v1687547994/xmtfuy5d_xui80h.png"
        alt="Uncover the Pages, Ignite Your Imagination"
        className="home-desktop-img"
      />
    </div>
  </>
)

export default Home
