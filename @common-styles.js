import { makeStyles } from "@material-ui/core/styles";
import civySprite from "./assests/civy-sprite.svg";
import { green } from "@material-ui/core/colors";

const useGobalStyle = makeStyles(theme => ({
  commonSpacing: {
    padding: "80px 0"
  },
  spacingTop15: {
    marginTop: 15
  },
  spacingTop30: {
    marginTop: 30
  },
  spacingTop50: {
    marginTop: 50
  },
  paddingTop80: {
    paddingTop: 80
  },
  paddingBottom80: {
    paddingBottom: 80
  },
  imageStyle: {
    boxShadow: "0px 3px 4px rgba(0,0,0,0.16)",
    borderRadius: 5
  },
  legalPolicyContent: {
    "& p": {
      marginTop: 30
    },
    "& strong": {
      marginTop: 30,
      display: "block"
    },
    "& strong + p": {
      marginTop: 10
    },
    "& h3": {
      marginTop: 40,
      fontSize: "1.8rem",
      lineHeight: "36px"
    }
  },
  listItemCommon: {
    marginTop: 20,
    "&:first-child": {
      marginTop: 0
    },
    "&:before": {
      content: `''`,
      width: 16,
      height: 16,
      backgroundColor: "#eff0f3",
      opacity: 1,
      display: "block",
      position: "absolute",
      left: 0,
      top: 10
    },
    "&:after": {
      content: `''`,
      width: 9,
      height: 9,
      backgroundColor: "#252f6a",
      opacity: 1,
      display: "block",
      position: "absolute",
      left: 9,
      top: 20
    }
  },
  strongInline: {
    display: "inline !important",
    marginTop: "0 !important",
    fontWeight: "600 !important"
  },
  spriteIcons: {
    backgroundImage: `url(${civySprite})`,
    backgroundRepeat: "no-repeat"
  },
  commonImageSize: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },

  // file uploader css
  uploadFileBtn: {
    borderRadius: "0 5px 5px 0",
    whiteSpace: "nowrap",
    width: "auto",
    maxWidth: "inherit",
    minWidth: "auto",
    background: "#252f6a",
    color: "#ffffff",
    padding: "6px 15px",
    "& span": {
      color: "#ffffff"
    },
    "&:hover": {
      background: "#000000"
    }
  },
  uploadLbl: {
    cursor: "pointer"
  },
  customFile: {
    textIndent: "-99px",
    marginLeft: "-80px",
    outline: 0
  },
  fileUploadWarpper: {
    background: "#eff0f4",
    display: "block",
    padding: "0 15px",
    width: "100%",
    height: 42,
    borderRadius: "5px 0 0 5px",
    lineHeight: "40px"
  },

  // input label
  inputCustomize: {
    "& div": {
      background: "#eff0f4"
    },
    "& label": {
      color: "#000000",
      fontSize: "16px",
      fontWeight: 500,
      marginLeft: 10
    }
  },

  // Edit button
  editDeleteBtn: {
    position: "absolute",
    top: 75,
    right: 0
  },
  editProfileBtn: {
    background: "#252f6a",
    color: "#ffffff",
    padding: "7px 15px",
    fontWeight: 500,
    borderRadius: 5,
    "& svg": {
      color: "#ffffff",
      display: "inline-block",
      verticalAlign: "text-top",
      fontSize: "1.3rem",
      marginRight: 3,
      transition: "all 400ms"
    },
    "&:hover": {
      textDecoration: "none",
      color: "#ffffff",
      background: "#252f6a",
      "& svg": {
        transform: "rotate(-20deg)"
      }
    }
  },
  // deleteListBtn
  deleteListBtn: {
    background: "#f44336",
    fontSize: 0,
    padding: 0,
    width: "30px",
    height: "30px",
    minWidth: "auto",
    borderRadius: 0,
    border: 0,
    marginLeft: 10,
    "&:hover": {
      background: "#f44336",
      border: 0
    },
    "& svg": {
      color: "#ffffff",
      fontSize: "1.3rem"
    }
  },
  deleteEditBtn: {
    bottom: "auto",
    width: "42px",
    height: "42px",
    borderRadius: 6,
    "& svg": {
      fontSize: "1.5rem"
    }
  },
  deleteProListBtn: {
    position: "absolute",
    bottom: 0,
    right: 0
  },
  blogDeleteListBtn: {
    bottom: 0,
    right: 0,
    position: "absolute"
  },
  blogEditDelBtn: {
    top: -10
  },

  // borderBottom
  borderBottom: {
    position: "relative",
    "&:after": {
      content: `''`,
      position: "absolute",
      left: 0,
      right: 0,
      top: "100%",
      height: 1,
      background: "#ffffff",
      margin: "0 auto",
      maxWidth: 0,
      transition: "all 300ms"
    },
    "&:hover": {
      "&:after": {
        maxWidth: "100%"
      }
    }
  },
  borderBottomBlue: {
    "&:after": {
      background: "#252f6a"
    }
  },

  // For popoup
  popupOpen: {
    position: "fixed",
    width: "100%",
    overflow: "hidden"
  },

  // Video code

  introVideo: {
    width: "90%",
    height: "auto",
    backgroundColor: "#ffffff",
    marginLeft: "auto",
    position: "relative",
    display: "flex"
  },
  videoBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#252f6a",
    zIndex: -1,
    bottom: -38,
    left: -30
  },
  youtubeVideoOuter: {
    width: "100%",
    "& > div": {
      display: "flex"
    }
  },
  youtubeVideo: {
    width: "100%",
    borderRadius: 5
  },
  howToContent: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    marginBottom: 70,
    "& $introVideo": {
      width: "93%"
    },
    "& $youtubeVideoOuter": {
      "& $iframe": {
        height: "320px"
      }
    },
    "& h5": {
      margin: "-10px 0 30px",
      fontWeight: "700",
      textTransform: "capitalize",
      textAlign: "center"
    }
  },
  "@media (max-width:1279px)": {
    introVideo: {
      width: "97%"
    },
    howToContent: {
      "& $introVideo": {
        width: "97%"
      }
    }
  },
  "@media (max-width:1024px)": {
    blogEditDelBtn: {
      top: 3
    },
    uploadFileBtn: {
      padding: "6px 12px",
      fontSize: "1rem"
    }
  },
  "@media (max-width:991px)": {
    commonSpacing: {
      padding: "50px 0"
    },
    paddingBottom80: {
      paddingBottom: 50
    },
    editDeleteBtn: {
      top: 45,
      transform: "scale(0.8)",
      transformOrigin: "top right"
    },
    blogEditDelBtn: {
      top: -10
    }
  },
  "@media (max-width:767px)": {
    commonSpacing: {
      padding: "30px 0"
    },
    paddingTop80: {
      paddingTop: 50
    },
    paddingBottom80: {
      paddingBottom: 50
    },
    spacingTop50: {
      marginTop: 30
    },
    spacingTop30: {
      marginTop: 15
    },
    listItemCommon: {
      marginTop: 10
    },
    legalPolicyContent: {
      "& p": {
        marginTop: 15,
        wordBreak: "break-word"
      },
      "& h3": {
        fontSize: "1.5rem",
        lineHeight: "30px",
        marginTop: 30
      }
    },
    uploadFileBtn: {
      fontSize: "1rem",
      padding: 6
    },
    uploadLbl: {
      fontSize: '0.80rem',
    },
    editDeleteBtn: {
      top: 30
    },
    blogEditDelBtn: {
      position: "absolute",
      top: 0
    },
    videoBg: {
      display: "none"
    },
    youtubeVideo: {
      height: "250px"
    },
    introVideo: {
      width: "100%",
      marginLeft: "inherit"
    },
    howToContent: {
      marginBottom: 5,
      "& $introVideo": {
        width: "100%",
        marginLeft: "inherit"
      },
      "& $youtubeVideoOuter": {
        "& $iframe": {
          height: "250px"
        }
      },
      "& h5": {
        margin: "0 0 15px",
        lineHeight: "30px"
      }
    }
  },
  "@media (max-width:600px)": {
    fileUploadWarpper: {
      borderRadius: "5px",
      padding: '0 10px',      
    }
  },
  "@media (max-width: 479px)": {
    editDeleteBtn: {
      position: "static",
      float: "right"
    },
    blogEditDelBtn: {
      position: "absolute",
      top: 0
    },
    uploadFileBtn: {
      marginTop: 15,
      marginLeft: 0,
      borderRadius: "5px"
    },   
    fileUploadWarpper: {
      whiteSpace: 'nowrap',
    },
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative"
  }
}));

export default useGobalStyle;
