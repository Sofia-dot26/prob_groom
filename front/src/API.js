import axios from 'axios';

const URL ='http://localhost:8080'

export async function signIn (login,password) {
   const data =  await axios.post(URL+"/auth/signin",{login,password})
   .then(response=> {
      console.log(response)
      localStorage.setItem('token',response.data.values.token)
      return response
   } )
   .catch(err =>{
      console.log(err)
      return err
   })
   console.log(data)
   return data
}

export async function signUp (name,login,passw) {
    const data =  await axios.post(URL+"/auth/signup",{name,login,passw})
    .then(response=> {
       return response.data.values
      } )
    .catch(err =>{
       console.log(err)
      })
    return data
 }
 export async function admin () {
    const data = await axios.post(URL+"/admin")
    .then(response =>{
       return response
    })
    .catch(err =>{
       console.log(err)
      })
   return data
 }
 export async function addEx(name, phone,service_id){
   // console.log(login_email)
   const data = await axios.post(URL+"/auth/AddEx",{
   name, phone,service_id}
   )
   .then(function (response) {
   return response
   })
   .catch(function (error) {
   // console.log(error);
   });
   console.log(data)
   return data
   }
//await axios.post(URL+"/auth/signin",{login,password},{headers:{Authorization:token}}).then(response=> {return response} ).catch(err =>{console.log(err)})