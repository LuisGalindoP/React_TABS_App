import React, {useState} from "react";

const AddContentForm = (props) => {
    const {tabArray, setTabArray} = props;

    //STATES
    const [tabObject, setTabObject] = useState({})
    // const [tabArray, setTabArray] = useState([])


    let localContent = [];
    const handleFormSubmit = (e) => {
        e.preventDefault();
         const objectTab = {
            name: tabObject,
            content: e.target[1].value,
             selected: false
        }
        setTabArray([...tabArray, objectTab]);
        setTabObject({name: '', content: ''})
    }

    return (
        <div>
            <h3>Add content here bitch:</h3>
            <div>
                <form className={"form"} onSubmit={(event)=>handleFormSubmit(event)}>
                    <div>
                        <label className={"col-form-label mr-2"}>Tab Name: </label>
                        <br/>
                        <input
                            value={tabObject.name}
                            type="text"
                            onChange={(event)=>setTabObject(event.target.value)}
                        />
                    </div>
                    <div>
                        <label className={"col-form-label mr-2"}>Tab Content: </label>
                        <br/>
                        <textarea
                            value={tabObject.content}
                            cols={40}
                            rows={5}/>
                    </div>
                    <button className={"btn btn-primary"}>Add</button>
                </form>
            </div>
        </div>
    )
}
 export default AddContentForm;
