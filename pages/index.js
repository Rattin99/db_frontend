import { dividerClasses } from '@mui/material'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'


export default function Home() {

  return (
    <div>
      <Drawer variant='permanent'
        anchor='left'>
          <Button>
            catalogue
          </Button>
          <Button>
            Employees
          </Button>
          <Button>
            Inventory
          </Button>
          <Button>
            Orders 
          </Button>
          <Button>
            Billing
          </Button>
      </Drawer>
    </div>
  )
}
