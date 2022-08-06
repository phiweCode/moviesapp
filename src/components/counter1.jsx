import React, { Component } from 'react' 

class Counter1 extends Component {   


    getBadge()
    { 
         let classes = "btn m-2 btn-"  
         classes += this.props.counters.value === 0 ? "warning" : "primary"; 
         return classes 
    }   

    formatCount() 
    { 
        const { value } = this.props.counters 
        return value === 0 ? 'zero' : value
    } 

    disabled()
    {
        const { value } = this.props.counters 
        return value === 0 ? true : false 
    }
    
    render() { 

       

        return ( 
             
            <React.Fragment >  
               <div> 
               <span className={this.getBadge()}>{this.formatCount()}</span> 
               <button type="button" onClick={()=>this.props.onIncrement(this.props.counters)} className='btn btn-secondary m-2'>+</button>
               <button type="button" onClick={()=>this.props.onDecrement(this.props.counters)} disabled={this.disabled()} className='btn btn-secondary m-2'>-</button>
               <button type="button" onClick={()=> this.props.onDelete(this.props.counters.id)} className='btn btn-danger btn-sm m-2'>X</button> 
               </div>
            </React.Fragment>
        );
    }
}
 
export default Counter1;