import Card from '../components/Card'
import { useEffect , useState } from 'react'
import axios from 'axios';


function Alldeals() {

    const [category , setCategory] = useState([]);
    console.log(category);

    useEffect(() => {
        axios.get('/dealcategory')
        .then((res)=> setCategory(res.data.getAllCategory))
        .catch(err => {
            console.log(err)
        });
}, []);



    return (
        <div>
            {category.map(item => <Card key={item.id} name={item.name} id={item.id}/>)}
        </div>
    )
}

export default Alldeals
