import React from "react";
import Webcam from "react-webcam";
import  './WebcamComponent.css';
import { Button } from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const WebcamComponent = () => {

    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
  
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot({width: 150, height: 100});
      setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);
  
    return (
      <>
        <Webcam
          width={500}
          height={450}
          mirrored
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
        <Button
          size="md"
          className="Button"
          startIcon={<CameraAltIcon/>} 
          variant="contained" color="secondary" 
          onClick={capture}>Capture photo</Button>
        {imgSrc && (
          <img
            src={imgSrc}
            alt="Imagem em  tempo real da webcam"
          />
        )}
      </>
    );
  };
  
//ReactDOM.render(<WebcamCapture />, document.getElementById("root"));
export default WebcamComponent;
