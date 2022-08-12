import { Typography,TextField,Button } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";


const Billing = () => {


    const [dish_names,setDish_names] = useState([])
    const [dish_name,setDish_name] = useState("");
    const [amount_paid,setAmount_paid] = useState(0)
    const [amount_returned,setAmount_returned] = useState(0)
    const [amount_total,setAmount_total] = useState(0)
    const [customer_ID,setCustomer_ID] = useState(0)


    const dishNameChangeHandler = (e) =>{
        setDish_name(e.target.value);
    }

    const dishaAddHandler = (e) =>{
        e.preventDefault()

        
        setDish_names( state => [...state,dish_name])
        console.log(dish_names)
        setDish_name([]);
        
    }

    const amount_paidChangeHandler = (e) =>{
        setAmount_paid(e.target.value);
    }
    const amount_returnedChangeHandler = (e) =>{
        setAmount_returned(e.target.value);
    }
    const amount_totalChangeHandler = (e) =>{
        setAmount_total(e.target.value);
    }
    const customer_IDChangeHandler = (e) =>{
        setCustomer_ID(e.target.value);
    }

    const sendReq = async () =>{

        const time = new Date().toLocaleTimeString();
        const date = new Date().toLocaleDateString();
        const billing_Id = Math.floor(Math.random()* 100000);
        
        const response = await fetch('http://localhost:3001/api/bill',{
            method: 'POST',
            body: JSON.stringify({
                item: dish_names,
                amount_paid,
                amount_returned,
                amount_total,
                customer_ID,
                billing_Id,
                time,
                date
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })

        const d = await response.json()

        console.log(d)
    }

    const DoneHandler = (e) =>{
        e.preventDefault()

        setDish_names([])
        setDish_name(" ")

        console.log(
            dish_names,
            amount_paid,
            amount_returned,
            amount_total,
            customer_ID)
        sendReq()

        setAmount_paid(0)
        setAmount_returned(0)
        setAmount_total(0)
        setCustomer_ID(0)
    }

     

    return ( 
        <Container>
            <Container>
                <form onSubmit={DoneHandler} noValidate  >

                    <Container>
                            <TextField onChange={dishNameChangeHandler} label = 'dish name' />
                            <button onClick={dishaAddHandler} type="submit">+</button>
                    </Container>

                    <TextField onChange={amount_paidChangeHandler} label= 'amount paid' required />
                    <TextField onChange={amount_returnedChangeHandler} label= 'amount returned' required />
                    <TextField onChange={amount_totalChangeHandler} label= 'total amount' required />
                    <TextField onChange={customer_IDChangeHandler} label= 'customer ID' required />
                    
                    <Button type="submit" color="primary" variant="contained" >
                        done
                    </Button>
                </form>
            </Container>
            <Container>
                {
                    dish_names.map((value,index) =>(
                        <Typography key={index}>
                            {value}
                        </Typography>
                    ))
                }
            </Container>
        </Container>
     );
}
 
export default Billing;