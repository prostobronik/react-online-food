import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getAllCategories } from '../Api'
import CategoryList from '../component/categoryList'
import Preloader from '../component/Preloader'
import Search from '../component/Search'

function Home() {
  const [catalog, setCatalog] = useState([])
  const [filterCatalog, setFilteredCatalog] = useState([])

  const { pathname, search } = useLocation()
  const navigate = useNavigate()

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    )
    navigate({
      pathname,
      search: `?search=${str}`,
    })
  }

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories)
      setFilteredCatalog(
        search
          ? data.categories.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(search.split('=')[1].toLowerCase())
            )
          : data.categories
      )
    })
    // eslint-disable-next-line
  }, [search])

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filterCatalog} />
      )}
    </>
  )
}

export default Home
