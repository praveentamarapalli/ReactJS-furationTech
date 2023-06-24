import BookCard from '../BookCard'

import './index.css'

const bestSellingBooks = [
  {
    title: 'They Should not Have Killed His Dog',
    author: 'Edward Gross, Mark A. Altman',
    price: 1915,
    id: 1,
    imageUrl:
      'https://res.cloudinary.com/dmeqhiqbm/image/upload/v1687577869/58724981_uvwqye.jpg',
    rating: 3.45,
  },
  {
    title: 'Fifty Shades of Grey - Fifty Shades #1',
    author: 'E.L. James',
    price: 341,
    id: 2,
    imageUrl:
      'https://res.cloudinary.com/dmeqhiqbm/image/upload/v1687578120/10818853_oaozke.jpg',
    rating: 3.66,
  },
  {
    title: 'The Subtle Art of Not Giving a F*ck',
    author: 'Mark Manson',
    price: 325,
    id: 3,
    imageUrl:
      'https://res.cloudinary.com/dmeqhiqbm/image/upload/v1687578120/28257707_wnb5lj.jpg',
    rating: 3.91,
  },
]

const BestSellingBooks = () => (
  <div>
    <h1 className="bestselling-list-heading">Best Selling Books</h1>
    <ul className="books-list">
      {bestSellingBooks.map(eachBook => (
        <BookCard bookData={eachBook} key={eachBook.id} />
      ))}
    </ul>
  </div>
)

export default BestSellingBooks
