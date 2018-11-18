import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import classNames from 'classnames';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    appBar: {
      position: 'relative',
    },
    icon: {
      marginRight: theme.spacing.unit * 2,
    },
    heroUnit: {
      backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
      maxWidth: 600,
      margin: '0 auto',
      padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
      marginTop: theme.spacing.unit * 4,
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
        width: 1100,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    cardGrid: {
      padding: `${theme.spacing.unit * 8}px 0`,
    },
    card: {
      height: '100%',
      width: '100%'
      // display: 'flex',
      // flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '50%', // 16:9
    },
    cardContent: {
      // flexGrow: 1,
      height: '100%'
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing.unit * 6,
    },
  });

class VetForm extends Component {
     state = {
         name:"",
         address:"",
         phoneNumber:"",
         email:"",
         
        
    };
    handleInputChange = event => {
            const { name, value } = event.target;

            this.setState({
              [name]: value
            });
          };
    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     Api.saveCat({
            
    //     })
    // }
  render () {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                <CameraIcon className={classes.icon} />
                <Typography variant="h6" color="inherit" noWrap>
                    Toronto Cat Rescue
                </Typography>
                </Toolbar>
            </AppBar>
        <main>
        <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
          

                <Grid container spacing={24}>

                <Grid item xs={6} sm={6}>
                    <TextField
                    required
                                    // value={this.state.age}
                                    // onChange={this.handleInputChange}
                    id='name'
                    name='name'
                    label='name'
                    fullWidth
                    autoComplete='name'
                                />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    required
                                    // value={this.state.sex}
                                    // onChange={this.handleInputChange}
                    id='address'
                    name='address'
                    label='address'
                    fullWidth
                    autoComplete='address'
                                />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                    <TextField
                    required
                                    // value={this.state.serialNumber}
                                    // onChange={this.handleInputChange}
                    id='phoneNumber'
                    name='phoneNumber'
                    label='phoneNumber'
                    fullWidth
                    autoComplete='phoneNumber'
                                />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                                    // value={this.state.shelterTableID}
                                    // onChange={this.handleInputChange}
                    id='email'
                    name='email'
                    label='email'
                    fullWidth
                                />
                </Grid>
                

                <Button 
                        variant='contained' 
                        color='primary' 
                        onClick={this.handleFormSubmit}>Submit{' '}
                </Button>
                </Grid>
            </div>
        </div>
        
        </main>
        
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
            Toronto Cat Rescue
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Copyright 2018 by DreamTeam
            </Typography>
       </footer>

      </React.Fragment>
    )
  }
}
VetForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles) (VetForm);
