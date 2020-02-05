import React, { useEffect, useState } from 'react'
import api from '../../services/api'

function Sidebar(props) {
  const [categories, setCategories] = useState([])
  const [categoryInput, setCategoryInput] = useState('')
  const { activeCategory, setActiveCategory } = props

  useEffect(function loadCategories() {
    async function fetchCategories() {
      // array containing the categories from the api
      const categories = await api.get('/categories')

      setActiveCategory(categories[0])
      setCategories(categories)
    }

    fetchCategories()
  }, [setActiveCategory])

  async function handleNewCategory() {
    const categoryData = {
      name: categoryInput,
      emoji: '👋',
    }

    const newCategory = await api.post('/categories', categoryData)

    setCategories([...categories, newCategory])
    setCategoryInput('')
  }

  function getClassName(category) {
    if (category.id === activeCategory.id) {
      return 'active'
    }
    return ''
  }

  return (
    <div className="sidebar">
      <h1><span role="img" aria-label="categories">📘</span></h1>

      {
        categories.map(category => {
          return (
            <h2
              className={getClassName(category)}
              key={category.id}
              onClick={e => setActiveCategory(category)}
            >
              <span role="img" aria-label="category icon">{category.emoji}</span>
              {category.name}
            </h2>
          )
        })
      }

      <div className="category-input">
        <input
          value={categoryInput}
          placeholder="+ Add new category"
          onChange={e => setCategoryInput(e.target.value)} />
        <button onClick={handleNewCategory}>+</button>
      </div>
    </div>
  )
}

export default Sidebar
