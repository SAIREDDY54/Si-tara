import React from "react";
import PropTypes from "prop-types";
import {
  Stepper,
  Step,
  StepLabel,
  Stack,
  Typography,
  Button,
  Chip,
  CircularProgress,
  Box,
  StepButton
} from "@mui/material";
import { styled } from "@mui/material/styles";
import StepConnector, {
  stepConnectorClasses
} from "@mui/material/StepConnector";
import Axios from "axios";
import random from 'random-key-generator';
import step1 from './img/step1.svg';
import step2 from './img/step2.svg';
import step3 from './img/step3.svg';
import step4 from './img/step4.svg';
import { useEffect } from "react";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 18
  },
  // [`&.${stepConnectorClasses.active}`]: {
  //   [`& .${stepConnectorClasses.line}`]: {
  //     backgroundColor: "#2364cc"
  //   }
  // },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#2364cc"
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 2,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1
  }
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 40,
  height: 40,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: "#2364cc",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
  }),
  ...(ownerState.completed && {
    backgroundColor: "#2364cc"
  })
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <img src={step1} style={{ width: '1.5rem' }} />,
    2: <img src={step2} style={{ width: '1.5rem' }} />,
    3: <img src={step3} style={{ width: '1.5rem' }} />,
    4: <img src={step4} style={{ width: '1.5rem' }} />
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
  icon: PropTypes.node
};

const steps = ["Interfaces and Protocols", "Cloud", "Database", "Device"];

// React.useEffect(() => {
//   const fetchData = () => {
//     CONST RES = fetch("http://localhost:8080/getAssets")
//   }
// })

const MainStepper = () => {
  const interfaceLabels = [{ name: "USB" }, { name: "BLE" }, { name: "JTag" }, { name: "WIFI" }, { name: "NFC" }];
  const cloudLabels = [{ name: "S3" }, { name: "EC2" }, { name: "API Gateway" }, { name: "Beanstalk" }, { name: "App Mesh" }, { name: "Athena" }, { name: "Aurora" }, { name: "Cloud Map" }, { name: "Cloud Search" }, { name: "CloudFront" }, { name: "Cloudtrail" }, { name: "Cognito" }, { name: "Deepcomposer" }, { name: "Deeplens" }, { name: "Deepracer" }, { name: "Direct Connect" }, { name: "Directory Service" }, { name: "ECS" }, { name: "Elastic Block Storage" }, { name: "Elasticbeanstalk" }, { name: "Elastic Container Registry" }, { name: "Elastic Container Service" }, { name: "Elastic Kubernetes Service" }, { name: "EMR" }, { name: "Fsx for Lustre" }, { name: "Fsx for Windows" }, { name: "Global Accelerator" }, { name: "GuardDuty" }, { name: "IAM" }, { name: "Inspector" }, { name: "Lambda" }, { name: "Lightsail" }, { name: "Neptune" }, { name: "Outposts" }, { name: "Polly" }, { name: "RDS" }, { name: "Rds on VMWare" }, { name: "Rekognition" }, , { name: "Route53" }, { name: "S3 Glacier" }, { name: "Sagemaker" } ];
  const databaseLabels = [{ name: "MySQL" }, { name: "MongoDB" }, { name: "DynamoDB" }, { name: "PostgreSQL" }];
  const deviceLabels = [{ name: "Android" }, { name: "iOS" }];
  const [interfaces, setInterfaces] = React.useState(new Set());
  const [cloud, setCloud] = React.useState(new Set());
  const [database, setDatabase] = React.useState(new Set());
  const [device, setDevice] = React.useState(new Set());
  const [activeStep, setActiveStep] = React.useState(0);
  const [isGenerated, setIsGenerated] = React.useState("no");
  const [data, setData] = React.useState(null);
  const [completed, setCompleted] = React.useState({});
  const [searchQuery, setSearchQuery] = React.useState('');
  const [cloudasset, setCloudAsset] = React.useState([]);
  const [awsasset, setAwsAsset] = React.useState([]);
  const [azureasset, setAzureAsset] = React.useState([]);
  const [interfacesasset, setInterfaceAsset] = React.useState([]);
  const [databaseasset, setDatabaseAsset] = React.useState([]);

  // const combinedData = [...interfaceLabels, ...cloudLabels, ...databaseLabels, ...deviceLabels];

  const [selectedOption, setSelectedOption] = React.useState('')

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  }

  const handleFinish = (event) => {
    setActiveStep(4)
  }

  const handleClickChip = (step, chipToAppend) => () => {
    step === "interfaces"
      ? setInterfaces((ifr) => new Set([...ifr, chipToAppend]))
      : step === "cloud"
        ? setCloud((cld) => new Set([...cld, chipToAppend]))
        : step === "database"
          ? setDatabase((dbs) => new Set([...dbs, chipToAppend]))
          : setDevice((dev) => new Set([...dev, chipToAppend]));
  };

  const handleDeleteChip = (step, chipToDelete) => () => {
    step === "interfaces"
      ? setInterfaces((chips) => Array.from(chips).filter((chip) => chip !== chipToDelete))
      : step === "cloud"
        ? setCloud((chips) => Array.from(chips).filter((chip) => chip !== chipToDelete))
        : step === "database"
          ? setDatabase((chips) => Array.from(chips).filter((chip) => chip !== chipToDelete))
          : setDevice((chips) => Array.from(chips).filter((chip) => chip !== chipToDelete));
  };

  function sendDataDB() {
    Axios.post("http://localhost:8080/addData", {
      "interfaces": (Array.from(interfaces).length > 0) ? Array.from(interfaces) : "",
      "cloud": (Array.from(cloud).length > 0) ? Array.from(cloud) : "",
      "DBAssets": (Array.from(database).length > 0) ? Array.from(database) : "",
      "device": (Array.from(device).length > 0) ? Array.from(device) : "",
      "sessionId": random.getRandom(20, 'TARA', '@', 'front'),
      "email": "sai@in.bosch.com",
      "methodologies": selectedOption
    }, { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })

    // Axios.post("http://localhost:8080/awsCloud", {
    //   "awsAssets": awsCloud,
    //   "sessionId": random.getRandom(20, 'TARA', '@', 'front')
    // }, { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })

    var timer = setInterval(function () {
      getStatus(timer)
    }, 1000);
  }



  function getStatus(timer) {
    Axios.get('http://localhost:8080/checkStatus')
      .then(
        res => {
          if (res.data === "Completed") {
            clearInterval(timer)
            setData(res.data)
          }
        })
  }

  useEffect(() => {
    function GetAssets(){
      Axios.get("http://localhost:8080/getAssets")
        .then( res => {
          console.log(res.data.cloud.AWS)
          setAwsAsset(res.data.cloud.AWS);
          setInterfaceAsset(res.data.interfaces)
          setDatabaseAsset(res.data.database)
        })
    }
    GetAssets();
  }, [])

  const interfaceFilteredLabels = interfacesasset.filter(label => label.toLowerCase().includes(searchQuery.toLowerCase()));

  const cloudFilteredLabels = awsasset.filter(label => label.toLowerCase().includes(searchQuery.toLowerCase()));

  const databaseFilteredLabels = databaseasset.filter(label => label.toLowerCase().includes(searchQuery.toLowerCase()));

  // const deviceFilteredLabels = .filter(label => label.name.toLowerCase().startsWith(searchQuery.toLowerCase()) && deviceLabels.includes(label));

  return isGenerated === "yes" ? (
    <Stack sx={{ width: "100%" }} spacing={4}>
      <React.Fragment>
        <Stack direction="column" alignItems="center" justifyContent="center">
          {data === "Completed" ? (
            <>
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                TARA Sheet Generated
              </Typography>
              <Box style={{ display: 'flex', margin: "24px 0px" }}>
                <Typography style={{ fontSize: 14, marginTop: 10 }}>
                  kindly check your email
                </Typography>
              </Box>
              <Button variant="contained" style={{ borderRadius: 0, margin: "20px 0px" }} onClick={() => window.location.reload()}>
                Home
              </Button>
            </>
          ) : (
            <>
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                TARA Sheet Generating
              </Typography>
              <Box style={{ display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "24px 0px" }}>
                <Typography style={{ fontSize: 14, marginTop: 10, marginBottom: 20 }}>
                  please wait until the process
                </Typography>
                <CircularProgress />
              </Box>
            </>
          )
          }

        </Stack>
      </React.Fragment>
    </Stack>
  ) : (
    <Stack sx={{ width: "100%" }} spacing={4}>
      <Stepper
        activeStep={activeStep}
        nonLinear
        alternativeLabel
        connector={<ColorlibConnector />}
      >
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton onClick={handleStep(index)}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <>{activeStep === 0 ? (
        <React.Fragment>
          <Stack direction="column" alignItems="center" justifyContent="center">
            <Stack direction="row" marginLeft="20px">
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                Interfaces and Protocols
              </Typography>
              <input type="text" placeholder="Search for a chip..." value={searchQuery} onChange={handleSearch} style={{ marginLeft: "20px" }} />
            </Stack>
            <>

              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                style={{ margin: "30px 0px" }}>
                {Array.from(searchQuery.length > 0 ? interfaceFilteredLabels : interfacesasset).map((chip) => (
                  <Chip
                    key={chip}
                    label={chip}
                    color={Array.from(interfaces).includes(chip) ? "primary" : "default"}
                    onClick={handleClickChip("interfaces", chip)}
                    onDelete={
                      Array.from(interfaces).includes(chip)
                        ? handleDeleteChip("interfaces", chip)
                        : ""
                    }
                    style={{ marginTop: 10 }}
                  />

                ))}
              </Stack>
            </>

            {/* <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              style={{ margin: "30px 0px" }}
            >
              {interfaceLabels.map((label) => (
                <Chip
                  label={label}
                  color={interfaces.includes(label) ? "primary" : "default"}
                  onClick={handleClickChip("interfaces", label)}
                  onDelete={
                    interfaces.includes(label)
                      ? handleDeleteChip("interfaces", label)
                      : ""
                  }
                  style={{ marginTop: 10 }}
                />
              ))}
            </Stack> */}
            <Stack direction="row" alignItems="center">
              {/* <Button
                onClick={handleNext}
                variant="contained"
                style={{ borderRadius: 0 }}
              // disabled={interfaces.length <= 0}
              >
                Next
              </Button> */}
              <Button
                onClick={handleFinish}
                variant="contained"
                style={{ borderRadius: 0, margin: '5px' }}
              // disabled={device.length <= 0}
              >
                Finish
              </Button>
            </Stack>
          </Stack>
        </React.Fragment>
      ) : activeStep === 1 ? (
        <React.Fragment>
          <Stack direction="column" alignItems="center" justifyContent="center">
            <Stack direction="row" marginLeft="20px">
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                Cloud Selection
              </Typography>
              <input type="text" placeholder="Search for a chip..."value={searchQuery}  onChange={handleSearch} style={{ marginLeft: "20px" }} />
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              style={{ margin: "30px 0px" }}>
              {Array.from(searchQuery.length > 0 ? cloudFilteredLabels : awsasset).map((chip) => (
                <Chip
                  key={chip}
                  label={chip}
                  color={Array.from(cloud).includes(chip) ? "primary" : "default"}
                  onClick={handleClickChip("cloud", chip)}
                  onDelete={
                    Array.from(cloud).includes(chip)
                      ? handleDeleteChip("cloud", chip)
                      : ""
                  }
                  style={{ marginTop: 10 }}
                />

              ))}
            </Stack>
            {/* <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              style={{ margin: "30px 0px" }}
            >
              {cloudLabels.map((label) => (
                <Chip
                  label={label}
                  color={cloud.includes(label) ? "primary" : "default"}
                  onClick={handleClickChip("cloud", label)}
                  onDelete={
                    cloud.includes(label)
                      ? handleDeleteChip("cloud", label)
                      : ""
                  }
                  style={{ marginTop: 10 }}
                />
              ))}
            </Stack> */}
            <Stack direction="row" alignItems="center">
              {/* <Button onClick={handleBack}>Back</Button> */}
              <Button
                onClick={handleFinish}
                variant="contained"
                style={{ borderRadius: 0, margin: '5px' }}
              // disabled={device.length <= 0}
              >
                Finish
              </Button>
              {/* <Button
                onClick={handleNext}
                variant="contained"
                style={{ borderRadius: 0 }}
              // disabled={cloud.length <= 0}
              >
                Next
              </Button> */}
            </Stack>
          </Stack>
        </React.Fragment>
      ) : activeStep === 2 ? (
        <React.Fragment>
          <Stack direction="column" alignItems="center" justifyContent="center">
            <Stack direction="row" marginLeft="20px">
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                Select Database
              </Typography>
              <input type="text" placeholder="Search for a chip..." value={searchQuery} onChange={handleSearch} style={{ marginLeft: "20px" }} />
            </Stack>
            {/* <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              style={{ margin: "30px 0px" }}
            >
              {databaseLabels.map((label) => (
                <Chip
                  label={label}
                  color={database.includes(label) ? "primary" : "default"}
                  onClick={handleClickChip("database", label)}
                  onDelete={
                    database.includes(label)
                      ? handleDeleteChip("database", label)
                      : ""
                  }
                  style={{ marginTop: 10 }}
                />
              ))}
            </Stack> */}
            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              style={{ margin: "30px 0px" }}>
              {Array.from(searchQuery.length > 0 ? databaseFilteredLabels : databaseasset).map((chip) => (
                <Chip
                  key={chip}
                  label={chip}
                  color={Array.from(database).includes(chip) ? "primary" : "default"}
                  onClick={handleClickChip("database", chip)}
                  onDelete={
                    Array.from(database).includes(chip)
                      ? handleDeleteChip("database", chip)
                      : ""
                  }
                  style={{ marginTop: 10 }}
                />

              ))}
            </Stack>
            <Stack direction="row" alignItems="center">
              {/* <Button onClick={handleBack}>Back</Button> */}
              <Button
                onClick={handleFinish}
                variant="contained"
                style={{ borderRadius: 0, margin: '5px' }}
              // disabled={device.length <= 0}
              >
                Finish
              </Button>
              {/* <Button
                onClick={handleNext}
                variant="contained"
                style={{ borderRadius: 0, margin: '5px' }}
              // disabled={database.length <= 0}
              >
                Next
              </Button> */}
            </Stack>
          </Stack>
        </React.Fragment>
      ) : activeStep === 3 ? (
        <React.Fragment>
          <Stack direction="column" alignItems="center" justifyContent="center">
            <Stack direction="row" marginLeft="20px">
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                Select Device
              </Typography>
              <input type="text" placeholder="Search for a chip..." onChange={handleSearch} style={{ marginLeft: "20px" }} />
            </Stack>
            {/* <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              style={{ margin: "30px 0px" }}
            >
              {deviceLabels.map((label) => (
                <Chip
                  label={label}
                  color={device.includes(label) ? "primary" : "default"}
                  onClick={handleClickChip("device", label)}
                  onDelete={
                    device.includes(label)
                      ? handleDeleteChip("device", label)
                      : ""
                  }
                  style={{ marginTop: 10 }}
                />
              ))}
            </Stack> */}

            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              style={{ margin: "30px 0px" }}>
              {Array.from(deviceLabels).map((chip) => (
                <Chip
                  key={chip.name}
                  label={chip.name}
                  color={Array.from(device).includes(chip.name) ? "primary" : "default"}
                  onClick={handleClickChip("device", chip.name)}
                  onDelete={
                    Array.from(device).includes(chip.name)
                      ? handleDeleteChip("device", chip.name)
                      : ""
                  }
                  style={{ marginTop: 10 }}
                />

              ))}
            </Stack>
            <Stack direction="row" alignItems="center">
              {/* <Button onClick={handleBack}>Back</Button> */}
              <Button
                onClick={handleFinish}
                variant="contained"
                style={{ borderRadius: 0 }}
              // disabled={device.length <= 0}
              >
                Finish
              </Button>
            </Stack>
          </Stack>
        </React.Fragment>
      ) : activeStep === 4 ? (
        <React.Fragment>
          <Stack direction="column" alignItems="center" justifyContent="center">
            <Stack direction="column" style={{ width: '100%', height: '100%', overflowY: 'auto'}}> 
              <Typography
                variant="h5"
                style={{ fontWeight: "bold", marginBottom: 12 }}
              >
                TARA sheet will be generated for
              </Typography>

              <Stack>
                <label>
                  <input
                    style={{ margin: "10px" }}
                    type="radio"
                    name="options"
                    value="Attack Potential"
                    checked={selectedOption === "Attack Potential"}
                    onChange={handleOptionChange}
                  />
                  Attack Potential
                </label>

                <label>
                  <input
                    style={{ margin: "10px" }}
                    type="radio"
                    name="options"
                    value="Likelihood Estimation"
                    checked={selectedOption === "Likelihood Estimation"}
                    onChange={handleOptionChange}
                  />
                  Likelihood Estimation
                </label>
              </Stack>

              {Array.from(interfaces).length === 0 ? "" : <><Typography
                style={{ fontWeight: "bold", marginBottom: 6, fontSize: 14 }}
              >
                Interfaces and Protocols
              </Typography>
                <Stack direction="row" spacing={1} flexWrap='wrap' style={{ marginBottom: 16 }}>

                  {Array.from(interfaces).map((chip) => (
                    <Chip
                      label={chip}
                      color={"primary"}
                      size="small"
                      // onClick={handleClickChip("interfaces", chip)}
                      onDelete={handleDeleteChip("interfaces", chip)}
                      style={{marginTop: 5}}
                    />
                  ))}
                </Stack></>}

              {Array.from(cloud).length === 0 ? "" : <><Typography
                style={{ fontWeight: "bold", marginBottom: 6, fontSize: 14 }}
              >
                Cloud
              </Typography>
                <Stack direction="row" spacing={1} flexWrap='wrap' style={{ marginBottom: 16 }}>
                  {Array.from(cloud).map((chip) => (
                    <Chip
                      label={chip}
                      color={"primary"}
                      size="small"
                      // onClick={handleClickChip("cloud", chip)}
                      onDelete={handleDeleteChip("cloud", chip)}
                      style={{marginTop: 5}}
                    />
                  ))}
                </Stack></>}

              {Array.from(database).length === 0 ? "" : <><Typography
                style={{ fontWeight: "bold", marginBottom: 6, fontSize: 14 }}
              >
                Database
              </Typography>
                <Stack direction="row" spacing={1} flexWrap='wrap' style={{ marginBottom: 16 }}>
                  {Array.from(database).map((chip) => (
                    <Chip
                      label={chip}
                      color={"primary"}
                      size="small"
                      // onClick={handleClickChip("database", chip)}
                      onDelete={handleDeleteChip("database", chip)}
                      style={{marginTop: 5}}
                    />
                  ))}
                </Stack></>}

              {Array.from(device).length === 0 ? "" : <><Typography
                style={{ fontWeight: "bold", marginBottom: 6, fontSize: 14 }}
              >
                Device
              </Typography>
                <Stack direction="row" spacing={1} flexWrap='wrap' style={{ marginBottom: 16 }}>
                  {Array.from(device).map((chip) => (
                    <Chip
                      label={chip}
                      color={"primary"}
                      size="small"
                      // onClick={handleClickChip("device", chip)}
                      onDelete={handleDeleteChip("device", chip)}
                      style={{marginTop: 5}}
                    />
                  ))}
                </Stack></>}

            </Stack>

            <Stack direction="row" alignItems="center" margin={"20px 0px"}>
              {/* <Button onClick={handleBack}>Back</Button> */}
              <Button
                variant="contained"
                style={{ borderRadius: 0 }}
                onClick={() => { setIsGenerated("yes"); sendDataDB(); }}
                disabled={(Array.from(interfaces).length === 0) && (Array.from(database).length === 0) && (Array.from(device).length === 0) && (Array.from(cloud).length === 0)}
              >
                Generate
              </Button>
            </Stack>
          </Stack>
        </React.Fragment>
      ) : (
        ""
      )}</>
    </Stack>
  );
};

export default MainStepper;
