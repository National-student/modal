import React from 'react'

const Modal = ({modal, setModal}) => {

    const handleModal = () => {
        setModal(false)
    }

  return (
    <div className={`position-fixed top-0 start-0 w-100 h-100 bg-light opacity-75 d-flex justify-content-center align-items-center ${!modal && 'd-none'}`}>
        <div className='bg-white border p-4 w-25 rounded'>
            <header className='d-flex justify-content-between align-items-center mb-3'>
                <h2>Create user</h2>
                <button className='btn btn-danger' onClick={handleModal}>&times;</button>
            </header>
            <main className='mb-3'>
                <input className='form form-control' type="text" placeholder='Add Text' />
                <input className='form form-control' type="text" placeholder='Add Text' />
                <input className='form form-control' type="text" placeholder='Add Text' />
                <input className='form form-control' type="file" placeholder='Add Text' />
            </main>
            <footer className='d-flex justify-content-between align-items-center '>
                <button className='btn btn-success'>Add</button>
                <button className='btn btn-primary' onClick={handleModal}>Cancel</button>
            </footer>
        </div>
    </div>
  )
}

export default Modal