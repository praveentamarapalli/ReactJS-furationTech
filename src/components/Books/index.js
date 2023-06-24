import AllBooksSection from '../AllBooksSection'
import BestSellingBooks from '../BestSellingBooks'

import Header from '../Header'

import './index.css'

const Books = () => (
  <>
    <Header />
    <div className="book-sections">
      <BestSellingBooks />
      <AllBooksSection />
    </div>
  </>
)

export default Books
