import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";



const Catalogue = () => {

    const [data,setData] = useState([])

    const getCatalogue =  async () =>{

    const res = await fetch('http://localhost:3001/getall/catalogue');
    
    const catalogue = await res.json()
    setData(catalogue);

    }

    useEffect(() =>{
        getCatalogue();
    },[]);

    console.log(data)

    return ( 
        <Container>
            <Typography>Our Catalogue</Typography>
            {
                data.map((value,index) =>(
                    <Typography key={index}>
                        {value.dish_name},{value.genre},{value.quantity},{value.price}
                    </Typography>
                ))
            }
        </Container>
     );
}
 
export default Catalogue ;
