import React, { useState } from "react";
import { Grid, Link } from "@material-ui/core";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import Excel from "../../assests/sheet2.xlsx";
import { exportUser } from "../../pages/User/redux/Organization/exportUserAction";
import useGobalStyle from "@common-styles";
import { makeStyles } from "@material-ui/core/styles";
import GetAppIcon from "@material-ui/icons/GetApp";
import { useForm } from "react-hook-form";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles(() => ({
  errorMsg: {
    color: "red",
    fontSize: 15
  },
  importDataForm: {
    marginTop: 30
  },
  residentLble: {
    minWidth: "220px"
  },
  templateBtn: {
    marginTop: 20,
    "& svg": {
      marginLeft: 5,
      fontSize: "1.5rem"
    },
    "&:hover": {
      "& svg": {
        color: "#ffffff"
      }
    }
  },
  "@media (max-width:767px)": {
    importDataForm: {
      marginTop: 10,
      display: "flex",
      alignItems: "flex-end"
    },
    residentLble: {
      minWidth: "190px"
    }
  },
  "@media (max-width:568px)": {
    residentLble: {
      marginBottom: 10
    },
    leftupload: {
      alignItems: "flex-start",
      flexDirection: "column"
    },
    templateBtn: {
      justifyContent: "flex-start",
      "& button": {
        fontSize: "1rem",
        padding: "6px 15px"
      }
    }
  }
}));
export default function Index({ csvData, fileName }) {
  const classes = { ...useGobalStyle(), ...useStyles() };
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState();
  const { handleSubmit, register, errors } = useForm();

  const handleChange = event => {
    setSelectedFile(event.target.files[0]);
  };

  const onSubmit = () => {
    let data = new FormData();
    data.append("file", selectedFile);
    dispatch(exportUser(data));
    setSelectedFile("");
  };

  return (
    <Grid container spacing={5} className={classes.importDataForm}>
      <Grid item lg={12} sm={12} xs={12}>
        <Box
          container
          display="flex"
          flexDirection="column"
          className={classes.uploadResident}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              display="flex"
              alignItems="center"
              className={classes.leftupload}
            >
              <Typography className={classes.residentLble} varient="subtitle1">
                <FormattedMessage
                  id="register_profile_upload_resident"
                  defaultMessage="Upload Resident Data"
                />
              </Typography>
              <div className={classes.fileUploadWarpper}>
                <label for="outlined-basic" className={classes.uploadLbl}>
                  <FormattedMessage
                    id="register_browse_label"
                    defaultMessage="Browse..."
                  />
                </label>
                <input
                  type="file"
                  name="file"
                  id="outlined-basic"
                  onChange={handleChange}
                  // required
                  color="primary"
                  className={classes.customFile}
                  ref={register({
                    required: true,
                    pattern: {
                      value: /(\.xlsx)$/i
                    }
                  })}
                />
              </div>

              <Button
                type="submit"
                variant="outlined"
                className={classes.uploadFileBtn}
                // onClick={onClickHandler}
              >
                <FormattedMessage
                  id="register_profile_batch_upload"
                  defaultMessage="Batch Upload"
                />
              </Button>
            </Box>
            {(errors.file && errors.file.type === "required" && (
              <Typography component="span" className={classes.errorMsg}>
                *Please select the File.
              </Typography>
            )) ||
              (errors.file && errors.file.type === "pattern" && (
                <Typography
                  variant="body1"
                  component="span"
                  className={classes.errorMsg}
                >
                  File must be in .xlsx extension
                </Typography>
              ))}
          </form>
          <Box
            className={classes.templateBtn}
            display="flex"
            justifyContent="flex-end"
          >
            <Link href={Excel} target="_blank" download>
              <Button variant="outlined" color="primary">
                <FormattedMessage
                  id="register_profile_resident_details"
                  defaultMessage="Resident Details Template"
                />

                <GetAppIcon color="primary" />
              </Button>
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
