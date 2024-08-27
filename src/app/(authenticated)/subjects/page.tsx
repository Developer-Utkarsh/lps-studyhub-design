'use client'

import { Typography, List, Card, Spin } from 'antd'
import { BookOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function SubjectsPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: subjects,
    isLoading,
    refetch,
  } = Api.subject.findMany.useQuery({})

  const handleSubjectClick = (subjectId: string) => {
    router.push(`/subjects/${subjectId}`)
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <Title level={2}>Subjects</Title>
        <Text>Select a subject to view more details and resources.</Text>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {isLoading ? (
          <Spin size="large" />
        ) : (
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={subjects}
            renderItem={subject => (
              <List.Item>
                <Card
                  hoverable
                  onClick={() => handleSubjectClick(subject.id)}
                  cover={
                    <BookOutlined
                      style={{ fontSize: '48px', padding: '20px' }}
                    />
                  }
                >
                  <Card.Meta title={subject.name} />
                </Card>
              </List.Item>
            )}
          />
        )}
      </div>
    </PageLayout>
  )
}
