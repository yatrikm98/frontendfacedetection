const Rank=(props)=>{
return (
    <div className="f3 white">
    {`${props.name} Your Current entry count is ....`}
    <p>{`#${props.entries}`}</p>
    </div>
)
}

export default Rank;