import DetailContent from './DetailContent';
import { Tabs  } from 'antd';
import 'antd/dist/antd.css';
import './detailStyle.scss';

const { TabPane } = Tabs;

const ProductDetail = () => {
    return (
            <Tabs className="custom-tab" defaultActiveKey="1">
                <TabPane tab="Detail" key="1">
                    <DetailContent />
                </TabPane>
                <TabPane tab="Warranty" key="2">
                Warranty
                </TabPane>
                <TabPane tab="Custom Engrave" key="3">
                Custom Engrave
                </TabPane>
                <TabPane tab="How to Adjust" key="4">
                How to Adjust
                </TabPane>
                <TabPane tab="How to Care" key="5">
                How to Care
                </TabPane>
                <TabPane tab="Gallery" key="6">
                Gallery
                </TabPane>
            </Tabs>
    )
}

export default ProductDetail