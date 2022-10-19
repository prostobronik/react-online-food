import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getFilteredCategory } from '../Api'
import MealsList from '../component/MealsList'

import Preloader from '../component/Preloader'

function Category() {
  const { name } = useParams()
  const [meals, setMeals] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getFilteredCategory(name)
      .then((data) => setMeals(data.meals))
      .then((data) => console.log(data))
  }, [name])

  return (
    <>
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
    </>
  )
}

export default Category
