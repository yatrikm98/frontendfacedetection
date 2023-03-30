import './Navigation.css'
const Navigation=(props)=>{
        if(props.isSignedIn){
        return (
            <div className="pointer center1 f3 underline">
            <p className='dim ml2' onClick={()=>props.onRouteChange('signout')}>SignOut</p>
            </div>
        )
    } else {
        return <div className="pointer center1 f3 underline ">
        <p className='dim' onClick={()=>props.onRouteChange('signin')}>SignIn</p>
        <p className='dim ml2' onClick={()=>props.onRouteChange('register')}>Register</p>
        </div>
    }
    

}

export default Navigation;

