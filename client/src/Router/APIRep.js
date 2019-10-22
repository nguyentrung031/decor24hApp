import axios from 'axios';
export const getAllDataTintuc = () => (
    axios.get('/api/TinTuc')
    .then((Response) =>Response.data)
    .catch((error) => console.log(error))
) 
export const AddData = (Email) => (
    axios.post("/api/addEmail", Email)
    .then((Response) => Response.data)
    .catch((error) => console.log(error))
)
