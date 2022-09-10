import React ,{ Fragment }from 'react'
import FormNewPage from '../Forms/formNewPage';
const AddNewProject = ({classNewProject, dismissFunction})=>{
    return(
        <Fragment>
        <div id="add-new-project">
            <div className={classNewProject}>
                <div className='text-end add-new-project__dismiss'>
                <button onClick={dismissFunction} className='btn btn-danger'>Fermer</button>
                </div>
                <FormNewPage />
            </div>
        </div>
        <div id="add-new-project__overelay"></div>
        </Fragment>
    )
}
export default AddNewProject;