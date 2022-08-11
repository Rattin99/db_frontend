import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import Container from '@mui/material/Container'
import { useState } from 'react'
import Catalogue from '../components/Catalogue'
import Employees from '../components/Employees'
import Inventory from '../components/Inventory'
import Orders from '../components/Orders'
import Billing from '../components/Billing'



export default function Home() {

  const [catalogue,setCatalogue] = useState(true)
  const [employees,setEmployees] = useState(false)
  const [inventory,setInventory] = useState(false)
  const [orders,setOrders] = useState(false)
  const [billing,setBilling] = useState(false);

  const CatalogueClickHandler = () =>{
    setCatalogue(true)
    setEmployees(false)
    setInventory(false)
    setOrders(false)
    setBilling(false)
  }

  const employeesClickHandler = () =>{
    setCatalogue(false)
    setEmployees(true)
    setInventory(false)
    setOrders(false)
    setBilling(false)
  }

  const inventoryClickHandler = () =>{
    setCatalogue(false)
    setEmployees(false)
    setInventory(true)
    setOrders(false)
    setBilling(false)
  }

  const ordersClickHandler = () =>{
    setCatalogue(false)
    setEmployees(false)
    setInventory(false)
    setOrders(true)
    setBilling(false)
  }

  const billingClickHandler = () =>{
    setCatalogue(false)
    setEmployees(false)
    setInventory(false)
    setOrders(false)
    setBilling(true)
  }


  return (
    <Container>
      <Drawer variant='permanent'
        color = 'primary'
        anchor='left'>
            <Button
              onClick={CatalogueClickHandler}
            >
              catalogue
            </Button>
            <Button
              onClick={ employeesClickHandler }
            >
              Employees
            </Button>
            <Button
              onClick={ inventoryClickHandler }
            >
              Inventory
            </Button>
            <Button
              onClick={ordersClickHandler}
            >
              Orders 
            </Button>
            <Button
              onClick={billingClickHandler}
            >
              Billing
            </Button>
      </Drawer>

      <Container>
        {catalogue && (<Catalogue/>)}
        {employees && (<Employees/>)}
        {inventory && (<Inventory/>)}
        {orders && (<Orders/>)}
        {billing && (<Billing/>)}
      </Container>

    </Container>
  )
}
