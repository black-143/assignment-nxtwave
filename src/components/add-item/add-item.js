import React, { useState,useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../header/header";
import "./add-item.css"
import backgroundcover from './background.png'
const AddItem=()=>{
    const [items,setItems]=useState("");
    const [resource,setResource]=useState("");
    const[description,setDescription]=useState('');
    const [validateData,setValidateData] = useState(false);
    const [link,setLink] = useState("");
    useEffect(() => {
        const url = "https://media-content.ccbp.in/website/react-assignment/add_resource.json";
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();
          } catch (error) {
            console.log("error", error);
          }
          setValidateData(false);
        };
        if(validateData == true){
            fetchData();
        }
    }, [validateData]);
    const handleItemChange=(e)=>{
        setItems(e.target.value)
    }
    const handleResourceChange=(e)=>{
        setResource(e.target.value)
    }
    const handleLinkChange = (e) => {
        setLink(e.target.value);
    }
    const handleDescriptionChange=(e)=>{
        setDescription(e.target.value)
    }
    const validateUrl = (urlString)=> {
        let urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
      '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
    return !!urlPattern.test(urlString);
    }
    const validateDescription = (description) => {
        return description.length >=3;
    }
    const validateAlphaFields = (fieldData) => {
        let  regex = /^[a-zA-Z ]*$/;
        return regex.test(fieldData);
    }
    const handleCreateItem=()=>{
        if(items && validateAlphaFields(resource) && validateDescription(description) && validateUrl(link)){
            setValidateData(true);
            toast.success('Added successfully', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else{
            let errorMessage = 'Enter all the fields';
            if(validateUrl(link) == false){
                errorMessage = "Invalid URL";
            }else if(validateDescription(description) == false){
                errorMessage = "Too short description"
            }else if(validateAlphaFields(items) == false || validateAlphaFields(resource) == false){
                errorMessage = "No numerics in name fields"
            }
            toast.error(errorMessage, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }
    return(
        <div>
            <Header showButton={false}/>
            <h2 className="item-details">Item Details</h2>
            <form className="data">
               <label className="item-name">ITEM NAME</label>
               <input type="text" className="box1" 
               value={items} onChange={handleItemChange} required/>
               <label className="link">LINK</label>
               <input type="text" className="box2" value={link} onChange={handleLinkChange} required/>
               <label className="resource-name">RESOURCE NAME</label>
               <input type="text" className="box3"
               value={resource} onChange={handleResourceChange} required/>
               <p className="description">DESCRIPTION</p>
               <textarea type="text" className="box4" rows="50" cols="30" minlength="3" maxlength="50"
               value={description} onChange={handleDescriptionChange} required/>
            </form>
            <button className="create-btn" onClick={handleCreateItem}>CREATE</button>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

            <div className="rightPage">
                <img src={backgroundcover}/>
            </div>

        </div>
    )
}
export default AddItem