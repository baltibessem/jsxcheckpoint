import logo from './logo.svg';
import './App.css';
import M4BLACK from "./imageInSrc.jpg"
import MyVideo from  "./MyVideo.mp4"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container , Row , Col } from 'reactstrap'
import VideoPlayer from 'react-video-js-player';
import './style.css'
function App() {
  return (
    <Container>
      <div style={{border:'solid 1px',color:'black',maxWidth:'100vw' }}>
      <h1 className="titlered">Balti Bessem</h1>
  <Row  md={3}>
    <Col>
<img src={M4BLACK} alt="M4BLACK" style={{width:'300px',height:'300px'}} />
          </Col>
    <Col><img src={"/imageInPublic.jpg"}  alt="M4BlUE" style={{width:'300px',height:'300px'}}/></Col>
    <Col>
         <VideoPlayer  src=  {MyVideo} height="300px" width="300px"/> </Col>
  
  </Row>
  </div>
</Container>
 
  );
}

export default App;
