import React from 'react';

function Forms() {

    const [formState, formSetState] = React.useState({
                                            firstName: "",
                                            lastName: "",
                                            email: "",
                                            comments: "",
                                            isFriendly: true,
                                            employment: "",
                                            favColor: ""
                                        });

    

    function handleChange(e) {

        const {name, value, type, checked} = e.target

        formSetState((s)=>{
            const obj = {...s};
            obj[name] = (type === "checkbox") ? checked : value;
            return obj
        })
        
    }

    function handleSubmit(e) {
        e.preventDefault();
        //submitToAPI();
        console.log(formState)
    }

    return (
        <form onSubmit={handleSubmit}>
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
            <fieldset>
                <input 
                    name="isFriendly"
                    type="checkbox"
                    id="isFriendly"
                    checked={formState.isFriendly}
                    onChange={handleChange}
                />
                <label htmlFor="isFriendly">Are You Friendly?</label>                
            </fieldset>

            <fieldset>
                <legend>Current Employment Status</legend>
                <input 
                    type="radio" 
                    id="unemployed" 
                    name="employment" 
                    value="Unemployed" 
                    checked={formState.employment === "Unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed" >Unemployed</label>

                <br />

                <input 
                type="radio" 
                id="part-time" 
                name="employment" 
                value="Part Time" 
                checked={formState.employment === "Part Time"}
                onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>

                <br />

                <input 
                    type="radio" 
                    id="full-time" 
                    name="employment" 
                    value="Full Time" 
                    checked={formState.employment === "Full Time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
            </fieldset>

            <fieldset>

                <label htmlFor="favColor">What is your favourite colour?</label>
                <br/><br/>
                <select id="favColor" name="favColor" value={formState.favColor} onChange={handleChange}>
                    <option value="">-- Choose --</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                </select>                
            </fieldset>
            <button>Submit</button>
        </form>
    )
}

export default Forms