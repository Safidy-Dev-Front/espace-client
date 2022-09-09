import React ,{ Fragment }from 'react'
import FormNewPage from '../Forms/formNewPage';
const AddNewProject = ({classNewProject})=>{
    return(
        <Fragment>
        <div id="add-new-project">
            <div className={classNewProject}>
                <FormNewPage />
            </div>
        </div>
        <div id="add-new-project__overelay"></div>
        </Fragment>
    )
}
export default AddNewProject;