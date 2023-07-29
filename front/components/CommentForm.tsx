
import React, { useState } from 'react';
import {useFormik} from 'formik'
import { Props } from '../pages';

// import { Props } from '../pages';
export default  function CommentForm({id}:any){
    const [submitted , setSubmitted] = useState(false) 
    const formik = useFormik({
        initialValues : {
            name : '',
            email : '',
            comment : '',
            id : id,

        },
        onSubmit : async (data) => {
            await fetch('/api/commentHandler', {
                method: 'POST',
                body: JSON.stringify(data),
            }).then(() => {console.log(data); setSubmitted(true);} ).catch(Error => { setSubmitted(false)})
        }
    })

    return(
    <form onSubmit={formik.handleSubmit} className="flex flex-col p-5 my-10 max-w-2xl mx-auto mb-10">
      
        <h3 className="py-3">Enjot this article?</h3>
        <h4></h4>
        <hr />
        <input
        id='id'
        name='id'
        type='hidden' 
        onChange = {formik.handleChange}
        value={formik.values.id}
        />
        <label htmlFor='name' className="block mt-5">Name</label>
            
            <input 
            id ="name"
            name="name"
            className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring "
            placeholder="name" 
            type='text' 
            onChange = {formik.handleChange}
            value ={formik.values.name}
             
             />
        
        <label htmlFor='email' className="block mt-5">Emil</label>
            
            <input 
                id ="email"
                name="email"
                className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring" 
                placeholder="email" 
                onChange = {formik.handleChange}
                value ={formik.values.email}
                type='email' />
        
        <label htmlFor='comment' className="block mt-5">Comment</label>
            
            <textarea 
                id ="comment"
                name="comment"
                onChange={formik.handleChange}
                value={formik.values.comment}
                className="shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-yellow-500 outline-none focus:ring" 
                placeholder="comment" 
                rows={8} />
        
        <input type="submit" className='shadow bg-yellow-500 hover:bg-yellow-400 
        focus:shadow-outline p-3 mt-5'/>    
            
    </form>
    )
}