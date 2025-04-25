
import UsersList from "../components/UsersList"

const Users = () => {

  const USERS = [
    {
    id: 'u1',
    name: 'Max Schwarz',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    places: 3
  }
]
  
  
   

  return <UsersList items={USERS}/>
  
  
  
};

export default Users;
