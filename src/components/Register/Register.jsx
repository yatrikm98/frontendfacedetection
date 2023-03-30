import React from 'react'
class Register extends React.Component{
  constructor(props){
    super(props)
    this.state={
        signInName:'',
        signInEmail:"",
        signInPassword:""
    }
  }
  onNameChange=(event)=>{
    this.setState({signInName:event.target.value})
 }

 onEmailChange=(event)=>{
    this.setState({signInEmail:event.target.value})
 }

 onPasswordChange=(event)=>{
  this.setState({signInPassword:event.target.value})
}


onSubmitSignIn = () =>{  
    fetch('http://localhost:3000/register/',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
            name:this.state.signInName,
            email:this.state.signInEmail,
            password:this.state.signInPassword
      })
    }).then(response=>response.json())
      .then(user=>{
        if(user.id){
          this.props.loadUser(user)
          this.props.onRouteChange('home')
        }
      })  
      
}

render(){
  return (
    
    <article className="br2 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-4">
    <main className="pa4 black-80 center">
  <div className="measure ">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f2 fw6 ph0 mh0 ">Register</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
        <input 
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="text" 
        name="name"
          id="name"
          onChange={this.onNameChange}/>
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input 
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="email"
         name="email-address" 
          id="email-address"
          onChange={this.onEmailChange}/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input 
        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
         type="password" 
         name="password" 
          id="password"
          onChange={this.onPasswordChange}/>
      </div>
          </fieldset>
    <div className="lh-copy mt3">
      <p 
      className="f6 link dim black db pointer" 
      onClick={this.onSubmitSignIn}>Register</p>
    </div>
  </div>
</main>
</article>
)
}
      
 }
    
    export default Register;