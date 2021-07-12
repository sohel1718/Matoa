import { Modal } from 'antd';

const ModalView = ({isModalVisible,handleOk,handleCancel, children}) => {
    return (
        <Modal width="fit-content" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} closable={false} footer={null}>
            {children}
        </Modal>
    )
}

export default ModalView