import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import jsonData from '../../../public/housing.json'

function Allcards() {
  return (
    <div className="allcards">
      {jsonData.map((item) => (
        <Link key={item.id} to={`/logement/${item.id}`}>
          <Card key={item.id} title={item.title} cover={item.cover} />
        </Link>
      ))}
    </div>
  )
}

export default Allcards