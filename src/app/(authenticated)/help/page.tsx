'use client'

import { Typography, Row, Col, Card, Spin } from 'antd'
import {
  CustomerServiceOutlined,
  QuestionCircleOutlined,
  MailOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function HelpPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: helpOptions, isLoading } = Api.helpOptions.findMany.useQuery({})

  if (isLoading) {
    return (
      <PageLayout layout="full-width">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <Row
        justify="center"
        style={{ textAlign: 'center', marginBottom: '20px' }}
      >
        <Col span={24}>
          <Title level={2}>Help & Support</Title>
          <Paragraph>
            If you need assistance with using the platform or resolving any
            issues, please explore the options below.
          </Paragraph>
        </Col>
      </Row>
      <Row justify="center" gutter={[16, 16]}>
        {helpOptions?.map(option => (
          <Col xs={24} sm={12} md={8} lg={6} key={option.id}>
            <Card
              hoverable
              onClick={() => router.push(option.url)}
              cover={
                <option.icon
                  style={{
                    fontSize: '48px',
                    color: '#1890ff',
                    padding: '20px',
                  }}
                />
              }
            >
              <Card.Meta
                title={option.title}
                description={option.description}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
