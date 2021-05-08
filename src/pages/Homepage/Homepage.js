import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fileActions } from '../../store/file'

// import Header from '../../components/Header/Header'
import bg from '../../assets/flower_2.jpg'
import classes from './Homepage.module.css'

const Homepage = () => {
    const uploadFileRef = useRef(null)
    const dispatch = useDispatch()
    const fileUploading = useSelector(state => state.file.fileUploading)

    const uploadFileHandler = (event) => {
        // disabling form
        dispatch(fileActions.uploading())
        event.preventDefault()

        // checking file extension
        const fileName = uploadFileRef.current.files[0].name.split('.')

        if (fileName[fileName.length-1] !== 'pdf') {
            alert('only pdf files are allowed!')

            // enabling form
            dispatch(fileActions.uploaded())
            return
        }

        alert('okay')
        // enabling form
        dispatch(fileActions.uploaded())
    }

    return (
        <div className={classes.wrapper} style={{ backgroundImage: `url(${bg})`}}>
            <div className={classes.center}>
                <div className={classes.info}>
                    <p className={classes.heading}>StoryTime</p>
                    <p className={classes.subHeading} id={classes.lineOne}>simple. minimalistic. convenience included.</p>
                    <br />
                    <p className={classes.subHeading} id={classes.lineTwo}>A PDF reader specially crafted for readers</p>
                    <br />
                    <p className={classes.subHeading} id={classes.lineThree}><i className="fas fa-star"></i> encountered a new word?<br/> know it's meaning then & there</p>
                    <br />
                    <p className={classes.subHeading} id={classes.lineFour}>Night light & Dark mode included 🤘</p>
                </div>
                <div className={classes.fileUpload}>
                    <p className={classes.subHeading}>{ !fileUploading ? 'upload file' : 'uploading...' }</p>
                    <br />
                    { !fileUploading &&
                        <form onSubmit={uploadFileHandler}>
                            <input type='file' ref={uploadFileRef} accept='.pdf' required/>
                            <button type='submit'>Upload</button>
                        </form>
                    }
                </div>
            </div>
            <p id={classes.attribution}><a href='https://www.github.com/daxter-army/storytime_mern_pdf_app' target='_blank'>Created by: <b>Mehul Singh Teya</b></a> | <a href='https://www.freepik.com' target='_blank'>Assets Courtesy: <b>Freepik</b></a></p>
        </div>
    )
}

export default Homepage
