import { useState, useEffect } from 'react';
import ItemList from "../components/ItemList";

const ToiletsPage = () => {

    const [items, setItems] = useState(null)

    useEffect(() =>{
        fetch('http://localhost:8000/item')
            .then(res => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setItems(data)
            })
    }, [])

    return (
        <div className="toilets-wrapper">
            {/*<h2>Toilets</h2>*/}
            {items && <ItemList items={items} />}
        </div>
    );
}

export default ToiletsPage;