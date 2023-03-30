import './ImageLinkForm.css'

const ImageLinkForm=(props)=>{
return (
    <div >
    <p className="f3 ">
    {`This Magic Brain will detect faces in your pictures.Give it a Try`}    
    </p>
    <div className='center'>
<div className="position shadow-4">
<input type='text' className="input w-60" placeholder='Enter Url Here' onChange={props.onInputChange} />
<button className=" button w-30 f3 grow" onClick={props.onButtonSubmit}>Detect</button>
</div>
</div>
</div>
)
}

export default ImageLinkForm;