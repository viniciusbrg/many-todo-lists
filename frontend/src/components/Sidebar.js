import React, { useEffect, useState } from 'react'
import api from '../services/api'

function Sidebar() {
  const [categories, setCategories] = useState([])
  const [categoryInput, setCategoryInput] = useState('')
  const [activeCategoryId, setActiveCategoryId] = useState(1)

  async function fetchCategories() {
    const categories = await api.get('/categories')

    setCategories(categories)
  }

  useEffect(function loadCategories() {
    fetchCategories()
  }, [])

  async function handleNewCategory() {
    const categoryData = {
      name: categoryInput,
      emoji: '👋',
    }

    const newCategory = await api.post('/categories', categoryData)

    setCategories([...categories, newCategory])
    setCategoryInput('')
  }

  function getClassName(categoryId) {
    if (categoryId == activeCategoryId) {
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
              className={getClassName(category.id)}
              key={category.id}
              onClick={e => setActiveCategoryId(category.id)}
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
