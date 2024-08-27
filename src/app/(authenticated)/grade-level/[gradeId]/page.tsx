'use client'

import { Typography, Row, Col, Card, Spin } from 'antd'
import { BookOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function GradeLevelResourcesPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const gradeId = params.gradeId

  const { data: gradeLevel, isLoading: isGradeLoading } =
    Api.gradeLevel.findUnique.useQuery({
      where: { id: gradeId },
      include: { userGradeLevels: { include: { user: true } } },
    })

  const { data: resources, isLoading: isResourcesLoading } =
    Api.resource.findMany.useQuery({
      where: { subject: { gradeLevelId: gradeId } },
      include: { subject: true },
    })

  if (isGradeLoading || isResourcesLoading) {
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
          <Title level={2}>Grade Level Resources</Title>
          <Paragraph>
            Here you can find materials tailored to your curriculum.
          </Paragraph>
        </Col>
      </Row>
      <Row gutter={[16, 16]} justify="center">
        {resources?.map(resource => (
          <Col xs={24} sm={12} md={8} lg={6} key={resource.id}>
            <Card
              title={resource.title}
              bordered={false}
              cover={
                <BookOutlined style={{ fontSize: '48px', color: '#1890ff' }} />
              }
              onClick={() => window.open(resource.url, '_blank')}
            >
              <Text>{resource.description}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
