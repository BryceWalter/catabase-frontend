
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Api from "../utils/Api";
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  });

const age = [
    {
      value: "Unweaned",
      label: "Unweaned",
    },
    {
      value: "Juvenile",
      label: "Juvenile",
    },
    {
      value: "Young Adult",
      label: "Young Adult",
    },
    {
      value: "Adult",
      label: "Adult",
    },
    {
        value: "Senior",
        label: "Senior",
    },
  ];
const sex = [
    {
        value: "Male",
        label: "Male",
    },
    {
        value: "Female",
        label: "Female"
    },
];
const size = [
    {
        value:"Small",
        label:"Small",
    },
    {
        value:"Medium",
        label:"Medium",
    }
];

const primaryBreed = [
    {
        value:"DSH",
        label:"DSH",
    },
    {
        value:"DMH",
        label:"DMH",
    },
    {
        value:"DLH",
        label:"DLH",
    },
    {
        value:"other",
        label:"other",
    },
];
const secondaryBreed = [
    {
        value:"DSH",
        label:"DSH",
    },
    {
        value:"DMH",
        label:"DMH",
    },
    {
        value:"DLH",
        label:"DLH",
    },
    {
        value:"other",
        label:"other",
    },
];

const FIVTested = [
    {
        value:"Positive",
        label:"Positive",
    },
    {
        value:"Negative",
        label:"Negative",
    },
    {
        value:"Not Tested",
        label:"Not Tested",
    },
    
];

const FLVTested = [
    {
        value:"Positive",
        label:"Positive",
    },
    {
        value:"Negative",
        label:"Negative",
    },
    {
        value:"Not Tested",
        label:"Not Tested",
    },
    
];

class CatForm extends Component {
       state = {
           name:"",
           age:"",
           sex:"",
           status:"",  
           primaryBreed:"DSH",
           secondaryBreed:"DSH",
           size:"Small",
           description:"",
           serialNumber:"",
           shelterTableID:"",
           petPointID:"",
           image:"",
           FIVTested:"",
           FLVTested:"",
           FVRCPVaccination:"",
           rabiesVaccinationDate:"",
           vetTableID:"",
           medicalNote:"",
           behaviourNote:"",
           outCome:"",
           intakeDate:"",
           fosterPlacementDate:""
       }
componentDidMount(){
    this.loadCats();
}
loadCats = () => {
    Api.getCats()
     .then(res =>
        this.setState({
            name:"",
            age:"",
            sex:"",
            status:"Fostered",
            description:"",
            serialNumber:"",
            shelterTableID:"",
            petPointID:"",
            image:"",
            FIVTested:"",
            FLVTested:"",
            FVRCPVaccination:"",
            rabiesVaccinationDate:"",
            vetTableID:"",
            medicalNote:"",
            behaviourNote:"",
            outCome:"",
            intakeDate:"",
            fosterPlacementDate:""
        })  
    )
};
// handleInputChange = event => {
//         const { name, value } = event.target;
      
//         this.setState({
//           [name]: value
//         });
//       };
handleInputChange = name => event => {
    this.setState({
      name: event.target.value,
    });
  };
handleUpdate = event => {

}
handleFormSubmit = event => {
    event.preventDefault();
    Api.saveCat({
        name:this.state.name,
        age:this.state.age,
        sex:this.state.sex,
        status: this.state.status,
        description:this.state.description,
        serialNumber:this.state.serialNumber,
        shelterTableID:this.state.shelterTableID,
        petPointID:this.state.petPointID,
        image:this.state.image,
        FIVTested:this.state.FIVTested,
        FLVTested:this.state.FFLVTested,
        FVRCPVaccination:this.state.FVRCPVaccination,
        rabiesVaccinationDate:this.state.abiesVaccinationDate,
        vetTableID:this.state.vetTableID,
        medicalNote:this.state.medicalNote,
        behaviourNote:this.state.behaviourNote,
        outCome:this.state.outCome,
        intakeDate:this.state.intakeDate,
        fosterPlacementDate:this.state.fosterPlacementDate

    })



}
 render() {
    const { classes } = this.props;
    return (
     <React.Fragment>
     
        <Grid container spacing={24}>

          <Grid item xs={6} sm={6}>
            <TextField
              required
            //   value={this.state.name}
              onChange={this.handleInputChange}
              id="Name"
              name="name"
              label="Name"
              
              fullWidth
              autoComplete="Name"
            />
          </Grid>

          <Grid item xs={6} sm={6}>
                <TextField
                id="age"
                name="age"
                select
                label="Select"
                classNames={classes.textField}
                value={this.state.sex}
                onChange={this.handleInputChange('age')}
                SelectProps={{
                    MenuProps: {
                        classNames: classes.menu,
                    },
                }}
                helperText="Please select age"
                margin="normal"
                >
                {age.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
          </Grid>

          <Grid item xs={6} sm={6}>
                <TextField
                id="sex"
                name="sex"
                select
                label="Select"
                classNames={classes.textField}
                value={this.state.sex}
                onChange={this.handleInputChange('sex')}
                SelectProps={{
                    MenuProps: {
                        classNames: classes.menu,
                    },
                }}
                helperText="Please select sex"
                margin="normal"
                >
                {sex.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
          </Grid>

           <Grid item xs={6} sm={6}>
                    <TextField
                    required
                    value={this.state.status}
                    onChange={this.handleInputChange}
                    id="status"
                    name="status"
                    label="status"
                    
                    fullWidth
                    autoComplete="Name"
                    />
                </Grid>

                <Grid item xs={6} sm={6}>
                    <TextField
                        id="size"
                        name="size"
                        select
                        label="Select"
                        classNames={classes.textField}
                        value={this.state.size}
                        onChange={this.handleInputChange('size')}
                        SelectProps={{
                            MenuProps: {
                                classNames: classes.menu,
                            },
                        }}
                        helperText="Please select size"
                        margin="normal"
                >
                        {size.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
            
                    </TextField>        
          </Grid>
        
          
    
            <Grid item xs={6} sm={6}>
                <TextField
                    id="primaryBreed"
                    name="primaryBreed"
                    select
                    label="Select"
                    classNames={classes.textField}
                    value={this.state.primaryBreed}
                    onChange={this.handleInputChange(primaryBreed)}
                    SelectProps={{
                        MenuProps: {
                            classNames: classes.menu,
                        },
                    }}
                    helperText="Please select primary breed"
                    margin="normal">
                        {primaryBreed.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                </TextField>
            </Grid>

            <Grid item xs={6} sm={6}>
                <TextField
                    id="secondaryBreed"
                    name="secondaryBreed"
                    select
                    label="Select"
                    classNames={classes.textField}
                    value={this.state.secondaryBreed}
                    onChange={this.handleInputChange("secondaryBreed")}
                    SelectProps={{
                        MenuProps: {
                            classNames: classes.menu,
                        },
                    }}
                    helperText="Please select secondary breed"
                    margin="normal">
                        {secondaryBreed.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                </TextField>
            </Grid>

          <Grid item xs={6}>
            <TextField
              value={this.state.description}
              onChange={this.handleInputChange}
              id="Description "
              name="description "
              label="Write Description  "
              fullWidth
              autoComplete="Write Description"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              value={this.state.serialNumber}
              onChange={this.handleInputChange}
              id="SerialNumber"
              name="serialNumber"
              label="SerialNumber"
              fullWidth
              autoComplete="SerialNumber"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
             value={this.state.shelterTableID}
             onChange={this.handleInputChange}
             id="ShelterTableID" 
             name="shelterTableID" 
             label="ShelterTableID" 
             fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              value={this.state.petPointID}
              onChange={this.handleInputChange}
              id="PetPointID"
              name="petPointID"
              label="PetPointID"
              fullWidth
              autoComplete="PetPointID"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              value={this.state.image}
              onChange={this.handleInputChange}
              id="Image"
              name="image"
              label="Image"
              fullWidth
              autoComplete="Image"
            />
        </Grid>
        <Grid item xs={6} sm={6}>
                <TextField
                    id="secondaryBreed"
                    name="secondaryBreed"
                    select
                    label="Select"
                    classNames={classes.textField}
                    value={this.state.FIVTested}
                    onChange={this.handleInputChange("FIVTested")}
                    SelectProps={{
                        MenuProps: {
                            classNames: classes.menu,
                        },
                    }}
                    helperText="FIVTested"
                    margin="normal">
                        {FIVTested.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                </TextField>
            </Grid>

             <Grid item xs={6} sm={6}>
                <TextField
                    id="FLVTested"
                    name="FLVTested"
                    select
                    label="Select"
                    classNames={classes.textField}
                    value={this.state.FLVTested}
                    onChange={this.handleInputChange("FLVTested")}
                    SelectProps={{
                        MenuProps: {
                            classNames: classes.menu,
                        },
                    }}
                    helperText="FLVTested"
                    margin="normal">
                        {FLVTested.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                </TextField>
            </Grid>
      
        <Grid item xs={12} sm={6}>
            <TextField
              required
              value={this.state.FVRCPVaccination}
              onChange={this.handleInputChange}
              id="FVRCPVaccination Date"
              name="FVRCPVaccination Date"
              label="FVRCPVaccination Date"
              fullWidth
             
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
              required
              value={this.state.rabiesVaccinationDate}
              onChange={this.handleInputChange}
              id="RabiesVaccinationDate"
              name="rabiesVaccinationDate"
              label="RabiesVaccinationDate"
              fullWidth
              autoComplete="RabiesVaccination Date"
            />
        </Grid>
    
        <Grid item xs={12} sm={6}>
            <TextField
              required
              value={this.state.vetTableID}
              onChange={this.handleInputChange}
              id=" VetTableID"
              name="vetTableID"
              label="Vet Table ID"
              fullWidth
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
              required
              value={this.state.medicalNote}
              onChange={this.handleInputChange}
              id="MedicalNote"
              name="medicalNote"
              label="Medical Note"
              fullWidth
              autoComplete="Medical Note"
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
              required
              value={this.state.behaviourNote}
              onChange={this.handleInputChange}
              id="Behaviour Note"
              name="behaviourNote"
              label="Behaviour Note"
              fullWidth
              autoComplete="Behaviour Note"
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
              required
              value={this.state.outCome}
              onChange={this.handleInputChange}
              id="Out Come"
              name="outCome"
              label="Out Come"
              fullWidth
              autoComplete="Out Come"
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
              required
              value={this.state.intakeDate}
              onChange={this.handleInputChange}
              id="Intake Date"
              name="intakeDate"
              label="Intake Date"
              fullWidth
              autoComplete="Intake Date"
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
              required
              value={this.state.fosterPlacementDate}
              onChange={this.handleInputChange}
              id="Foster Placement Date"
              name="fosterPlacementDate"
              label="Foster Placement Date"
              fullWidth
              autoComplete="Out Come"
            />
        </Grid>
            <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>
                Submit 
            </Button>
        </Grid>
        </React.Fragment>
      
      );
    }
}
// TextFields.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

// export default CatForm;
export default withStyles(styles)(CatForm);
