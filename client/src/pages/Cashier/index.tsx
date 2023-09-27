import React from 'react'
import { Box } from '@mui/system'
import { Toolbar } from '../../components/scensComponents/toolbar'
import { UserForm } from '../../components/scensComponents/user/userForm'
import { UserList } from '../../components/scensComponents/user/userTable'
import { USER_QUERY } from '../../graphql/Users'
import PageHeader from '../../components/PageHeader'
import { PeopleAltOutlined } from '@material-ui/icons'
export const Cashier = () => {
  return (
   <Box>
    <PageHeader 
    title={"Cashier"}
    subTitle={"cashier"}
    icon={<PeopleAltOutlined fontSize='large'/>}
    />
    <Toolbar name ="Cashier" addName="Create New Cashier" fechQuery = {USER_QUERY} formName ={<UserForm/>} />
    <UserList title={"Cashier"} roleId={4}/>
   </Box>
  )
}

