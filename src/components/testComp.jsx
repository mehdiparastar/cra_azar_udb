import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider, DatePicker, Menu, Dropdown, Icon, Select, Row, Col, Slider } from 'antd';
import fa_IR from 'antd/lib/locale-provider/fa_IR';
import 'moment/locale/fa';
import moment from 'moment';
import '../css/testComp.css'
moment.locale('fa');
const { SubMenu } = Menu;
const { Option } = Select;
const children = [];
for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const menu = (
    <Menu>
        <Menu.Item>اطلاعات عمومی</Menu.Item>
        <Menu.Item>بخش بازرسی</Menu.Item>
        <SubMenu title="بخش ها" >
            <Menu.Item>بخش نظارت</Menu.Item>
            <Menu.Item>بخش توضیحات</Menu.Item>
        </SubMenu>
    </Menu>
);

class TestComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    render() {

        return (
            <div className="m-2 p-2" >
                <ConfigProvider locale={fa_IR}>
                    <Row><DatePicker /></Row>
                    <Row>
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link m-2" href="#">
                                منوی آبشاری <Icon type="down" />
                            </a>
                        </Dropdown>
                    </Row>
                    <Row>
                        <Select
                            showArrow
                            showSearch
                            className="rtl"
                            mode="multiple"
                            style={{ width: '200px', margin: "2rem" }}
                            placeholder="Please select"
                            defaultValue={['a10', 'c12']}
                            onChange={this.handleChange}
                        >
                            {children}
                        </Select>
                    </Row>
                </ConfigProvider>
            </div>
        );
    }
}

export { TestComp }
