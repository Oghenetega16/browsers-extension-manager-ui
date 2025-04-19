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

    function handleToggle(index) {
        setItems(prevItems => 
            prevItems.map((item, i) => 
                i === index ? {...item, isActive: !item.isActive} : item
            )
        )
    }

    return (
        <div className="extensions">
            <div className="extension-heading">
                <h1>Extensions List</h1>
                <div className='buttons'>
                    <button className={filter === 'All' ? 'active' : ''} onClick={() => setFilter('All')}>All</button>
                    <button className={filter === 'Active' ? 'active' : ''} onClick={() => setFilter('Active')}>Active</button>
                    <button className={filter === 'Inactive' ? 'active' : ''} onClick={() => setFilter('Inactive')}>Inactive</button>
                </div>
            </div>

            <div className='extension-container'>
                {filteredItems.map((item, index) => {
                    const actualIndex = items.findIndex(i => i.name === item.name)
                    return (
                        <div className="extension-card" key={index}>
                            <div className="card-details">
                                <img src={item.logo} alt={`${item.name} logo`} />
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                            <div className="card-features">
                                <button onClick={() => handleRemove(actualIndex)}>Remove</button>
                                <img 
                                    src={item.isActive ? './assets/images/toggle-on.png' : './assets/images/toggle-off.png'}
                                    alt='Toggle' 
                                    onClick={() => handleToggle(actualIndex)}
                                /> 
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}