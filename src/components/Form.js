import React from 'react'

export default function Form(props) {

    const { values, change, submit } = props

    return (
        <div>
            <form onSubmit={submit}>
                <label>Name
                <input 
                    type="text"
                    name="name"
                    values={values.name}
                    onChange={change}
                />
                </label> <br/> <br/>
                <label>Email
                    <input 
                        type="email"
                        name="email"
                        values={values.email}
                        onChange={change}
                    />
                </label> <br/> <br/>
                <label>Role
                    <select name="role" onChange={change}>
                        <option value="">---Select Role---</option>
                        <option value="Engineer">Engineer</option>
                        <option value="Developer">Developer</option>
                        <option value="Operations">Operations</option>
                        <option value="Management">Management</option>
                    </select>
                </label> <br/> <br/>
                <button>Submit</button>
            </form>
        </div>
    )
}
