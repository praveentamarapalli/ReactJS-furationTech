import './index.css'

const SimilarBookItem = props => {
  const {bookDetails} = props
  const {title, brand, imageUrl, rating, price} = bookDetails

  return (
    <li className="similar-book-item">
      <img
        src={imageUrl}
        className="similar-book-img"
        alt={`similar book ${title}`}
      />
      <p className="similar-book-title">{title}</p>
      <p className="similar-books-brand">by {brand}</p>
      <div className="similar-book-price-rating-container">
        <p className="similar-book-price">Rs {price}/-</p>
        <div className="similar-book-rating-container">
          <p className="similar-book-rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="similar-book-star"
          />
        </div>
      </div>
    </li>
  )
}

export default SimilarBookItem
