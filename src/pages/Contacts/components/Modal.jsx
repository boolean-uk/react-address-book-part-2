function Modal({onYes, onNo}){
    const modalStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#ffffff',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        zIndex: '999',
    };

    const overlayStyle = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: '998',
    };

    return (
        <div>
            <div style={overlayStyle}></div>
            <div style={modalStyle}>
                <p>Are you sure you want to delete?</p>
                <button onClick={onYes}>Yes</button>
                <button onClick={onNo}>No</button>
            </div>
        </div>
    )
}
export default Modal