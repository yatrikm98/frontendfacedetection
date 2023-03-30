import './FaceRecognition.css' 
const FaceRecognition=(props)=>{
return (
    <div className='center'>
    <div className='mt2 absolute'> 
    <img src={props.imageUrl} id='inputimage' 
    style={{width:"400px", height:"auto"}}/>
    <div className="bounding-box" style={{top:props.box.topRow,left:props.box.leftCol,right:props.box.rightCol,bottom:props.box.bottomRow}}></div> 
    </div>    
    </div>
)
}
export default FaceRecognition;
