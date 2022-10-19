import { useState } from 'react'

function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState('')

  const haandleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    cb(value)
  }

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          id="search-field"
          placeholder="search"
          onKeyDown={haandleKey}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </div>
      <button
        className="btn"
        style={{ position: 'absolute', top: '7rem', right: '16rem' }}
        onClick={handleSubmit}
      >
        Search
      </button>
    </div>
  )
}

export default Search
