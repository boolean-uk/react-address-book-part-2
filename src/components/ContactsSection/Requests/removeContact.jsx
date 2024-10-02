import { useContext, useEffect } from "react";
import { ContactContext } from "../../../App";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function RemoveContact(){
    const navigate = useNavigate()
    const context = useContext(ContactContext);
    const { id } = useParams()

    const deletePost = async () => {
        await axios.delete(`https://boolean-uk-api-server.fly.dev/LudwigJL/contact/${id}`);}
    
        deletePost();
        useEffect(()=> {
            axios.get('https://boolean-uk-api-server.fly.dev/LudwigJL/contact')
            .then(res => context.setContacts(res.data));
        }, [])
        navigate('/contacts')

        return null;
}

