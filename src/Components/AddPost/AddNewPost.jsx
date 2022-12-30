import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function AddNewPost() {
    const [show, setShow] = useState(false);
    const [loader, setLoader] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const storePost = e => {
        e.preventDefault();

        const form = e.target;

        const title = form.title.value;
        const image = form.img.files[0];
        // const formData = new FormData();
        // formData.append('image', image);
        // setLoader(true);
        // const url = `https://api.imgbb.com/1/upload?key=5b4cb812272b913cedcca44e7d7240bd`;

        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // }).then(res => res.json()).then(data => {
        //     if (data.success) {
        //         const img = data.data.url
        //         const post = {
        //             title: title,
        //             image: img
        //         }

        //         fetch('http://localhost:5000/store/post', {
        //             method: 'POST',
        //             headers: {
        //                 'content-type': 'application/json'
        //             },
        //             body: JSON.stringify(post)
        //         })
        //             .then(res => res.json())
        //             .then(posts => {
        //                 if (posts.acknowledged) {
        //                     setLoader(false);
        //                     handleClose();
        //                 }
        //             })

        //     } else {
        //         console.log(data);
        //     }

        // })
    }
    return (
        <React.Fragment>
            <textarea
                class="form-control pe-4 border-0"
                rows="2"
                data-autoresize="" onClick={handleShow}
                placeholder="What,s your mind?"></textarea>
            <Modal show={show} onHide={handleClose} animation={false}>
                <form onSubmit={storePost}>
                    <Modal.Header>
                        <h5 className="modal-title" id="feedActionPhotoLabel">Add post photo</h5>
                        <button type="button" onClick={handleClose} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </Modal.Header>
                    <Modal.Body>
                        <div class="d-flex mb-3">
                            <div class="avatar avatar-xs me-2">
                                <img class="avatar-img rounded-circle" src="https://social.webestica.com/assets/images/avatar/03.jpg" alt="" />
                            </div>
                            <div class="w-100">
                                <textarea class="form-control pe-4 fs-3 lh-1 border-0" name='title' rows="2" placeholder="Share your thoughts..."></textarea>
                            </div>
                        </div>
                        {!loader && <div>
                            <label class="form-label">Upload Photo</label>
                            <input type="file" className='form-control' name='img' />
                        </div>}
                        {loader && <div className="d-flex justify-content-center mt-3">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>}

                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="btn btn-danger-soft me-2" onClick={handleClose} data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" className="btn btn-success-soft">Post</button>
                    </Modal.Footer>
                </form>
            </Modal>
        </React.Fragment>
    );
}


export default AddNewPost;