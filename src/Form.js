import React from 'react';

function Forms() {

    const [formState, formSetState] = React.useState({
                                            firstName: "",
                                            lastName: "",
                                            email: "",
                                            comments: "",
                                            isFriendly: true
                                        });

    console.log(formState);

    function handleChange(e) {
        const {name, value, type, checked} = e.target

        formSetState((s)=>{
            const obj = {...s};
            obj[name] = (type === "checkbox") ? checked : value;
            return obj
        })
        
    }



    return (
        <form>
            <input 
                name="firstName" 
                type="text" 
                placeholder="First Name" 
                value={formState.firstName} 
                onChange={handleChange}
            />
            <input 
                name="lastName" 
                type="text" 
                placeholder="Last Name" 
                value={formState.lastName} 
                onChange={handleChange}
            />
            <input 
                name="email" 
                type="email" 
                placeholder="Email" 
                value={formState.email} 
                onChange={handleChange}
            />
            <textarea 
                name="comments" 
                placeholder="Send us your comments..." 
                value={formState.comments} 
                onChange={handleChange}
            />
            <input 
                name="isFriendly"
                type="checkbox"
                id="isFriendly"
                checked={formState.isFriendly}
                onChange={handleChange}
            />
            <label htmlFor="isFriendly">Are You Friendly?</label>
        </form>
    )
}

export default Forms