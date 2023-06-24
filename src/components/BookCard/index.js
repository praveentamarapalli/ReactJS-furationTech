import {Link} from 'react-router-dom'

import './index.css'

const BookCard = props => {
  const {bookData} = props
  const {title, author, imageUrl, rating, price, id} = bookData

  return (
    <li className="book-item">
      <Link to={`/products/${id}`} className="link-item">
        <img src={imageUrl} alt="book" className="thumbnail" />
        <h1 className="title">{title}</h1>
        <p className="author">by {author}</p>
        <div className="book-details">
          <p className="price">Rs {price}/-</p>
          <div className="rating-container">
            <p className="rating">{rating}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
          </div>
        </div>
      </Link>
    </li>
  )
}
export default BookCard
