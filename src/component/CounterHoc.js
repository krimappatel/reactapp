import React from "react";
// Do not right same logic in every component  for that use hoc
const UpdatedComponent =(OriginalComponent,incrementby)=>{
    class NewComponent extends React.Component{
        constructor(props){
            super(props)
            this.state={
                count:0
            }
        }
        incrementHandler=()=>{
            this.setState(prevState=>{
                return {count:prevState.count + incrementby }
            })
        }
        render(){
            return <OriginalComponent  count={this.state.count} incrementHandler={this.incrementHandler} {...this.props}/>
        }
    }
    return NewComponent
}
export default UpdatedComponent
