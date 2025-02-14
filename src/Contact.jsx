import react, { useState } from 'react';

const Contact=()=>{
    const [data,setData]=useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",
    });
    const InputEvent=(e)=>{
        const {name,value}=e.target;
        setData((preval)=>{
            return{
                ...preval,
                [name]:value,
            }
        })
            
    }
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(
           `My name is ${data.fullname}.
            My mobile number is ${data.phone}.
            here is what i want  to say ${data.msg} `
        )
    }
    return(
        <>
        <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
              FullName</label>
               <input 
               type="text" 
               class="form-control"
               id="exampleFormControlInput1"
               name="fullname"
               value={data.fullname}
               onChange={InputEvent}
               placeholder="Enter your Name"

               />
             </div>
             <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
              Phone Number</label>
               <input 
               type="number" 
               class="form-control"
               id="exampleFormControlInput1"
               name="phone"
               value={data.phone}
               onChange={InputEvent}
               placeholder="Mobile Number"

               />
             </div>
             <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
              Email</label>
               <input 
               type="email" 
               class="form-control"
               id="exampleFormControlInput1"
               name="email"
               value={data.email}
               onChange={InputEvent}
               placeholder="Enter your mail id"

               />
             </div>
               <div class="mb-3">
               <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea
                 class="form-control" 
                 id="exampleFormControlTextarea1" 
                 rows="3"
                 name="msg"
                 value={data.msg}
                 onChange={InputEvent}>

                 </textarea>
            </div>
            <div class="col-12">
             <button 
             class="btn btn-outline-primary" 
             type="submit">Submit form

             </button>
               </div>
            </form>
            </div>
        </div>

        </div>
       

        </>
    )
}
export default Contact;