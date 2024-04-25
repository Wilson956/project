import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Avatar } from 'antd';
import articles from './test.json'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import image1 from './images/1.jpeg';
const { Meta } = Card;
const Article = () => {
  return (
    <Row justify="space-around">
      {
        articles &&
        articles.map(({ id, title, fullText }: { id: number; title: string; fullText: string }) => (
          <Col span={6} key={id} >
            <Card title={title} style={{ width: 300 }} >
              <Card
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src={image1}
                  />
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                  title="Card title"
                  description="This is the description"
                />
              </Card>
              <Link to={`/a/${id}`}>Details</Link>
            </Card>
          </Col>
        ))
      }
    </Row>);
}
export default Article;