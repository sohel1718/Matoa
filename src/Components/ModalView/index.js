import { Modal } from 'antd';
import './Style.scss';

const ModalView = ({isModalVisible,handleOk,handleCancel, children}) => {
    return (
        <Modal className="product-modal" width="fit-content" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} closable={false} footer={null}>
            {children}
        </Modal>
    )
}

export default ModalView