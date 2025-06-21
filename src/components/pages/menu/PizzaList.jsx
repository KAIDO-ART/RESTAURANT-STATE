import React from 'react'
import PizzaCard from './PizzaCard'
import { useEffect } from 'react';

const PizzaList = () => {
    const[users, setUsers] = React.useState([]);

    // fetch data from API, then set the data to the state
    const fetchData = async () => {
        const apiUrl =   "https://api.github.com/users";

        try{
            const response = await fetch(apiUrl);
            const data = await response.json();
            setUsers(data);
            }
            catch(error){
                console.log("Error fetching data:", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const styles = {
        container:{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent:'center',
            gap: '10px',
        },
    }



  return (
    <div style={styles.container}>
        {users.map((user,) => (
            <PizzaCard imgUrl={user.avatar_url}
            username={user.login}
            link={user.html_url}  />
        ))}
        
    </div>
  );
};

export default PizzaList