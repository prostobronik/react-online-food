import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getMealById } from '../Api'
import Preloader from '../component/Preloader'

function Recepie() {
  const { id } = useParams()
  const [recepi, setRecepi] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    getMealById(id).then((data) => setRecepi(data.meals[0]))
  }, [id])

  return (
    <>
      <button
        className="btn"
        style={{ margin: '1rem' }}
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
      {!recepi.idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <img src={recepi.strMealThumb} alt={recepi.strMeal} />
          <h1>{recepi.strMeal}</h1>
          <h6>Category: {recepi.strCategory}</h6>
          {recepi.strArea ? <h6>Area: {recepi.strArea}</h6> : null}
          <p>{recepi.strInstructions}</p>

          <table className="centered">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recepi).map((key) => {
                if (key.includes('Ingredient') && recepi[key]) {
                  return (
                    <tr key={key}>
                      <td>{recepi[key]}</td>
                      <td>{recepi[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  )
                }
                return null
              })}
            </tbody>
          </table>

          {recepi.strYoutube ? (
            <div className="row">
              <h5 style={{ margin: '2rem 0 1.5rem' }}>Video Recipe</h5>
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${recepi.strYoutube.slice(
                  -11
                )}`}
                allowFullScreen
              />
            </div>
          ) : null}
        </div>
      )}
    </>
  )
}
export default Recepie
