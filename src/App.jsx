import { useState } from 'react'
import './App.css'
import Navbar from './assets/Navbar.jsx'
import Card from './assets/Card.jsx'
// import Editform from './assets/editForm.jsx'

const App = (props) => {
 

  const [cards,setCards] = useState([
    {id:1, name:"Gépház",price:22000,description:"Gépház leírás",image:"https://www.acer.com/ac/en/US/content/series/acer-gaming-desktop"},
    {id:2,name:"Processzor",price:22000,description:"Processzor leírás",image:"https://www.acer.com/ac/en/US/content/series/acer-gaming-desktop"},
    {id:3, name:"Alaplap",price:32000,description:"Alaplap leírás",image:"/msi-pro_b760m-p-pd.png"},
    ,
  ]);
  const[editingCard, setEditingCard] = useState(null);
     
  const handleEditClick = (card) => {
    setEditingCard(card);
  };

  const handleDelete = (id) =>{
    setCards(cards.filter((card) => card.id !== id));
  }
 
  const handleSaveEdit = (updatedCard) => {
    setCards((prevCards) =>
      prevCards.map((card) => (card.id === updatedCard.id ? updatedCard : card))
    );
    setEditingCard(null);
  }

  return (
    <>
    
     <Navbar/>  
    

  <h1 className='title'>PC Configurator</h1>

<section className=' d-flex flex-wrap felx-direction-row gap-1'> 
  
 <span className='blur'></span>

{editingCard && (<EditForm card={editingCard} onSave={handleSaveEdit} onCancel={()=>setEditingCard(null)} />)}

{cards.map((card) => (
<Card key={cards.id} card={card} onEdit={()=>handleEditClick(card)} onDelete={()=> handleDelete(card.id)} />
))};
  </section>
    </>
  )
}

export default App
