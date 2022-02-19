

import React, { useState, createRef } from 'react';
import Calendar from './Calendar';



// class Order extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             date: new Date(),
//             name:'',
//             email: '',
//             description: ''
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//       }
function Order(){

  const [name,setName] = useState('');
  const [description, setDescription] = useState('');
  const [email,setEmail] = useState('');
  const [date,setDate] = useState(new Date());
  

  
      const handleSubmit = (e) =>{
        const result = {name:name, description:description, email:email, date:date}
        console.log(name)
        console.log(description)
        console.log(email)
        console.log(date)
        alert('A your order was submitted for approval: '  + result.name + result.description + result.email);
        e.preventDefault();
      }
    
    
        return (
            <div className=''>
          <form onSubmit={handleSubmit}>
            <label>
              Your name:
              <input type="text" value={name}  onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              Cake description, please include specific requests here:
            <textarea value={description}  onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>
              Select your special day:
              <Calendar value={date}  onChange={(e) => setDate(e.target.value)}/>
            </label>
            <label>
              The email address to receive confirmation of your order:
              <input type="text" value={email}  onChange={(e) => setEmail(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          </div>
        );
      }

export default Order;