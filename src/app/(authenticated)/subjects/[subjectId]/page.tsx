'use client'

import { Typography, Spin, Row, Col, Card } from 'antd'
import { BookOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function SubjectResourcesPage() {
  const router = useRouter()
  const params = useParams<{ subjectId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const { data: subject, isLoading } = Api.subject.findUnique.useQuery({
    where: { id: params.subjectId },
    include: { resources: true },
  })

  if (isLoading) {
    return (
      <PageLayout layout="full-width">
        <Spin size="large" />
      </PageLayout>
    )
  }

  if (!subject) {
    enqueueSnackbar('Subject not found', { variant: 'error' })
    router.push('/subjects')
    return null
  }

  return (
    <PageLayout layout="full-width">
      <Row
        justify="center"
        style={{ textAlign: 'center', marginBottom: '20px' }}
      >
        <Col span={24}>
          <Title level={2}>{subject.name}</Title>
          <Paragraph>
            Explore the resources below to study {subject.name} in depth.
          </Paragraph>
        </Col>
      </Row>
      <Row gutter={[16, 16]} justify="center">
        {subject.resources?.map(resource => (
          <Col key={resource.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              title={resource.title}
              cover={
                <BookOutlined style={{ fontSize: '48px', padding: '20px' }} />
              }
              onClick={() => window.open(resource.url, '_blank')}
            >
              <Paragraph>{resource.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
