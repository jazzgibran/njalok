// Simple Modal Component
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
            <div onClick={(e) => e.stopPropagation()} className="text-black bg-white p-5 rounded-lg shadow-lg w-11/12 max-w-md scale-90 transition-transform duration-300 ease-out z-50">
                <button onClick={onClose} className="absolute top-2.5 right-2.5 text-3xl bg-transparent border-none cursor-pointer">
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal