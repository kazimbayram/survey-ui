import {useRef} from "react";

export function NewTopicViewContainer() {


    const topic = useRef();
    const question = useRef();
    const handleSubmit = (c) => {

    }

    return (<form onSubmit={this.handleSubmit}>
        <label>
            Topic:
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
    </form>)
}
