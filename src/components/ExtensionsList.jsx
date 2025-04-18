import { useState } from 'react'
import data from '/public/data.json'

export default function ExtensionsList() {

    const [filter, setFilter] = useState('All')
    const [items, setItems] = useState(data)

    const filteredItems = items.filter(item => {
        if (filter === 'Active') return item.isActive
        if (filter === 'Inactive') return !item.isActive
        return true
    })

    function handleRemove(index) {
        setItems(prevItems => prevItems.filter((_, i) => i !== index))
    }

    return (
        <div className="extensions">
            <div className="extension-heading">
                <h1>Extensions List</h1>
                <ul>
                    <li className={filter === 'All' ? 'active' : ''} onClick={() => setFilter('All')}>All</li>
                    <li className={filter === 'Active' ? 'active' : ''} onClick={() => setFilter('Active')}>Active</li>
                    <li className={filter === 'Inactive' ? 'active' : ''} onClick={() => setFilter('Inactive')}>Inactive</li>
                </ul>
            </div>

            {filteredItems.map((item, index) => (
            <div className="extension-card" key={index}>
                <div className="card-details">
                    <img src={item.logo} alt={`${item.name} logo`} />
                    <div>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </div>
                </div>
                <div className="card-features">
                    <button onClick={() => handleRemove(index)}>Remove</button>
                    <i class="fa-solid fa-toggle-on"></i>
                </div>
            </div>
            ))}
        </div>
    )
}