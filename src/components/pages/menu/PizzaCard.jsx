import React from 'react'

const PizzaCard = ({imgUrl, username, link}) => {
    const styles = {
        card: {
            border: "1px solid #ccc",
            height:"200px",
            width:"300px",
            display: "flex",
            padding:"16px",
            margin:"16px",
            alignItems:"center",
            borderRadius:"10px",
        },
        image:{
            borderRadius:"10px",
            width:"100px",
            height:"120px",
            marginRight:"7px"
        },
    }
  return (
    <div style={styles.card}>
        <img style={styles.image}
        src={imgUrl || "https://avatars.githubusercontent.com/u/1?v=4"} 
        alt="user" />

        <div>
            <h3>{username || "Margharita"}
                <a href={link || ""}>link</a>
                <p>#99</p>
            </h3>
        </div>
       
    </div>

    
  )
}

export default PizzaCard