function EditForm(props){
    const EditFormData=({card,onSave,onCancel}) =>{

    const[formData,setFormData]=useState(card);{
          
        useEffect(() =>{
            setFormData(card);
          },[card]);
          const handleChange = (e) =>{
            const {name,value}=e.target;
            setFormData((prevData) => ({...prevData,[name]:value}));
          };

          const handleSubmit = (e) =>{
            e.preventDefault();
            onSave(formData);
          };

        }
    }

      
    
    return(<>
    <form onSubmit={handleSubmit} className="form" action="">
        <input type="text" name="name" value={formData.name} onChange={handleChange}/>
        <input type="text" name="about" value={formData.about} onChange={handleChange}/>
        <input type="text" name="price" value={formData.price} onChange={handleChange}/>
        <button type="submit">Mentés</button>
      <button type="button" onClick={onCancel}>Mégse</button>
    </form>
    </>);
}
export default EditForm;