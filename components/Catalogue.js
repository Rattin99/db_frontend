import { Container } from "@mui/system";
import { Button, FormGroup, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


const Catalogue = () => {

    const [data,setData] = useState([])
    const [dish_name,setDish_name] = useState("")
    const [category,setCategory] = useState("")
    const [genre,setGenre] = useState("")
    const [quantity,setQuantity] = useState("")
    const [price,setPrice] = useState("")
    const [availablity,setAvailiblity] = useState("")
    const [ingredients,setIngredients] = useState([])

    const router = useRouter()



    const getCatalogue =  async () =>{

    const res = await fetch('http://localhost:3001/getall/catalogue');
    
    const catalogue = await res.json()
    setData(catalogue);

    }

    const dish_nameChangeHandler = (e) =>{
        setDish_name(e.target.value)
    }

    const categoryChangeChangeHandler = (e) =>{
        setCategory(e.target.value)
    }
    const genreChangeHandler = (e) =>{
        setGenre(e.target.value)
    }
    const quantityChangeHandler = (e) =>{
        setQuantity(e.target.value)
    }
    const priceChangeHandler = (e) =>{
        setPrice(e.target.value)
    }
    const availibilityChangeHandler = (e) =>{
        setAvailiblity(e.target.value)
    }
    const ingredientsChangeHandler = (e) => {
        const ingr = e.target.value.split(",")
        setIngredients(ingr)
    }

    const sendReq = async () =>{
        const response = await fetch('http://localhost:3001/api/catalogue',{
            method: 'POST',
            body: JSON.stringify({
                dish_name,
                price,
                quantity,
                genre,
                category,
                cook_item: '3',
                ingredients,
                availablity
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })

        const d = await response.json()

        console.log(d)
    }
    
    const submitHandler = (e) =>{

        e.preventDefault()

        sendReq()

       router.reload(window.location.pathname)
    }

   const  sendDelete = async (id) =>{
        const response = await fetch('http://localhost:3001/delete/catalogue',{
            method:'DELETE',
            body:JSON.stringify({
                dishName:id
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })

        const res = await response.json()

        console.log(res)
    }

    const catalogueDeleteHandler = (e) =>{
        e.preventDefault()

        const id =  e.target.getAttribute('dishName');

        sendDelete(id)
    }


    useEffect(() =>{
        getCatalogue();
    },[]);

    return ( 
        <Container>
            <Typography>Our Catalogue</Typography>
            {
                data.map((value,index) =>(
                   
                    <Container key={index}>
                         <Typography key={index}>
                            {value.dish_name},{value.category},{value.genre},{value.quantity},{value.price}
                        </Typography>
                        <button onClick={catalogueDeleteHandler} dishName = {value.dish_name} >delete</button>
                    </Container>
                ))
            }

            <Typography>Current Menu</Typography>
            {
                data.map((value,index) =>{

                    const available = parseInt(value.available);
                
                    if (available >= 1) {return (
                        <Typography key={index}>
                        {value.dish_name},{value.category},{value.genre},{value.quantity},{value.price}
                    </Typography>
                    )}

                    return (<Typography key={index}>
                        {value.dish_name} is not available
                    </Typography>)
                })
            }

            <Container>
                <form noValidate onSubmit={submitHandler} >
                    <TextField onChange={dish_nameChangeHandler} label='Dish name' required />
                    <TextField onChange={categoryChangeChangeHandler} label= 'Category' required />
                    <TextField onChange={genreChangeHandler} label= 'Genre' required />
                    <TextField onChange={quantityChangeHandler} label= 'Quantity' required />
                    <TextField onChange={priceChangeHandler} label= 'price' required />
                    <TextField onChange={availibilityChangeHandler} label= 'Availablity' required />
                    <TextField onChange={ingredientsChangeHandler} label= 'Ingredients' required />
                    
                    <Button type="submit" color="primary" variant="contained" >
                        done
                    </Button>
                </form>
            </Container>

        </Container>
     );
}
 
export default Catalogue ;
