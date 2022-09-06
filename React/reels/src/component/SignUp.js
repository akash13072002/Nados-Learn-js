import * as React from 'react';
import { useState,useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import {database , storage } from "../firbase";



import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {createUseStyles} from 'react-jss'
import TextField from '@mui/material/TextField';
import instagramlogo from '../Assets/Instagram.JPG'
import './SignUp.css'
import Alert from '@mui/material/Alert';
import { AuthContext } from '../Context/AuthContext';


import { Link } from 'react-router-dom';
export default function SignUp() {


    const useStyles=createUseStyles({
        text1:{
            color:'grey',
            textAlign:'center',
            marginTop:'3%'
        },
        buttonMargin:{
            marginTop:'4%'
        },

        card2:{
            marginTop:'5%'
        }
    })

    const classes=useStyles()
      
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[name,setName]=useState('')
    const[file,setFile]=useState(null)
    const[error,setError]=useState('')
    const[loading,setLoading]=useState(false)

const{signup}=useContext(AuthContext)


const handleClick=async()=>{

    if(file==null){
       setError('profile picture not uploaded') 
       setTimeout (()=>{
        setError('')
       },2000) 
       setLoading(false)
       return
    }
    try{
        let userObj=signup(email,password)
        let uid = userObj.user.uid
        console.log(userObj)

     const uploadImage=storage.ref(`/users/${uid}/profileImage`).put(file)
       uploadImage.on('state_changed',fn1,fn2,fn3)

       function fn1(snapshot){
      let progress =(snapshot.bytesTransferred/snapshot.totalbytes)*100
      console.log(`upload is ${progress} complete`)
       }
        
       function fn2(){
        setError('error') 
        setTimeout (()=>{
         setError('')
        },2000) 
        setLoading(false)
        return ;
       }
    
      function fn3(){
  uploadImage.snapshot.ref.getDownloadURL().then((url)=>{
  database.users.doc(uid).set({
   email:email,
   userId :uid,
   fullname :name,
   profileurl:url,
   createdAt:database.getTimestamp()



  })

  })



      }


    }
    catch(error){

    }
}


// console.log(email);
// console.log(password);
// console.log(name);

    return (


        <div className="SignupWrapper">
            <div className="SignupCard">
                <Card sx={{ maxWidth: 345 }}>
                   <div>
                    <img src={instagramlogo}>

                    </img>
                   </div>
                    <CardContent>
                        <Typography variants='subtitle1' className={classes.text1}>
                            Sign up to see photos and videos from friends
                        </Typography>
                        {error!='' && <Alert severity="error">  This is an error alert — <strong>check it out!</strong></Alert>}

                        <TextField id="outlined-basic" label="E-mail" variant="outlined" margin='dense' fullWidth={true} size='small' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <TextField id="outlined-basic" label="Password" variant="outlined" margin='dense' fullWidth={true} size='small' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <TextField id="outlined-basic" label="Full-Name" variant="outlined" margin='dense' fullWidth={true}  size='small'value={name}  onChange={(e)=>setName(e.target.value)}/>

                        <Button color="secondary" variant="outlined" fullWidth={true} component='label' className={classes.buttonMargin}>Upload Profile Picture
                     

                         <input type='file' accept="image/*" hidden  onChange={(e)=>setFile(e.target.files[0])}/>
                         </Button>
                         <Typography variant='subtitle1' className={classes.text1} margin="dense">
            By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .
            </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" fullWidth={true} disable={loading} onClick={handleClick}>Sign Up</Button>
                       
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }} className={classes.card2}>
                <Typography>
                    Hava an account? <Link to='/login' style={{textDecoration:'none'}}> Log in</Link>
                        </Typography>
                    </Card>
            </div>
        </div>

    );
}
