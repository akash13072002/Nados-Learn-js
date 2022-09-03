import * as React from 'react';
import { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createUseStyles } from 'react-jss'
import TextField from '@mui/material/TextField';
import instagramlogo from '../Assets/Instagram.JPG'
import insta from '../Assets/insta.png'
import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'
import img4 from '../Assets/img4.jpg'
import img5 from '../Assets/img5.jpg'
import { AuthContext } from '../Context/AuthContext';



import { CarouselProvider, Slider, Slide,Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import './Login.css'


import Alert from '@mui/material/Alert';
import {formLabelClasses } from '@mui/material';
import { Link } from 'react-router-dom';
export default function Login() {

    const test=useContext(AuthContext)
    console.log(test)

    const useStyles = createUseStyles({
        text1: {
            color: 'grey',
            textAlign: 'center',
            marginTop: '3%'
        },

        text2: {
            color: 'blue'
        },

        buttonMargin: {
            marginTop: '4%'
        },

        card2: {
            marginTop: '5%'
        }
    })

    const classes = useStyles()
    return (


        <div className="LoginWrapper">

            <div className="img-car" style={{ backgroundImage: 'url(' + insta + ')',backgroundSize:'cover' }}>
                <div className='car'>
                    <CarouselProvider
                    visibleSlides={1}
                        naturalSlideWidth={238}
                        naturalSlideHeight={423}
                        totalSlides={5}
                        hasMasterSpinner
                        isPlaying={true}
                        infinite={true}
                        dragEnabled={false}
                        touchEnabled={formLabelClasses}


                    >
                        <Slider>
                            <Slide index={0}><Image src={img1}/></Slide>
                            <Slide index={1}><Image src={img2}/></Slide>
                            <Slide index={2}><Image src={img3}/></Slide>
                            <Slide index={3}><Image src={img4}/></Slide>
                            <Slide index={4}><Image src={img5}/></Slide>
                           
                        </Slider>
                    </CarouselProvider>

                </div>
            </div>



            <div className="LoginCard">
                <Card sx={{ maxWidth: 345 }}>
                    <div className='insta-logo'>
                       
                        <img src={instagramlogo} />
                      
                    </div>
                    <CardContent>
                        <Typography variants='subtitle1' className={classes.text1}>
                            Sign up to see photos and videos from friends
                        </Typography>
                        {true  && <Alert severity="error">  This is an error alert — <strong>check it out!</strong></Alert>}
                        <TextField id="outlined-basic" label="E-mail" variant="outlined" margin='dense' fullWidth={true} size='small' />
                        <TextField id="outlined-basic" label="Password" variant="outlined" margin='dense' fullWidth={true} size='small' />

                        <Typography variant='subtitle1' className={classes.text2} margin="dense">
                            Forgot Password ?
                        </Typography>





                    </CardContent>
                    <CardActions>
                        <Button variant="contained" fullWidth={true}>Log in</Button>

                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }} className={classes.card2}>
                    <Typography>
                        New User   ? <Link to='/' style={{textDecoration:'none'}}> Sign Up</Link>
                    </Typography>
                </Card>
            </div>
        </div>

    );
}
