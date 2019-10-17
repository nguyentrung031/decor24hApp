import axios from 'axios';
// import { connect } from 'react-redux';
// import * as actions from '../store/actions/actions';
export const getAllDataTintuc = () => (
    axios.get('/api/TinTuc')
    .then((Response) =>Response.data)
    .catch((error) => console.log(error))
) 
// export const getDataTintuc = () => (
//     axios.get('/api/TinTuc/:id')
//     .then((Response) => Response.data)
//     .catch((error) => console.log(error))
// ) 

export const AddData = (Email) => (
    axios.post("/api/addEmail", Email)
    .then((Response) => Response.data)
    .catch((error) => console.log(error))
)
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         GetAllDataTT: (data) => {
//             dispatch(actions.getAllTintuc({data}))
//         }
//     }
// }
// export default connect(mapDispatchToProps)(getAllDataTintuc);