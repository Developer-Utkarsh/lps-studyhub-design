'use client'

import { useState } from 'react'
import { Prisma } from '@prisma/client'
import { Typography, Input, Select, Card, Row, Col, Spin } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ResourcesPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSubject, setSelectedSubject] = useState<string | undefined>(
    undefined,
  )

  const { data: subjects, isLoading: subjectsLoading } =
    Api.subject.findMany.useQuery({})
  const {
    data: resources,
    isLoading: resourcesLoading,
    refetch,
  } = Api.resource.findMany.useQuery({
    where: {
      AND: [
        { title: { contains: searchTerm } },
        selectedSubject ? { subjectId: selectedSubject } : {},
      ],
    },
    include: { subject: true },
  })

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    refetch()
  }

  const handleSubjectChange = (value: string) => {
    setSelectedSubject(value)
    refetch()
  }

  return (
    <PageLayout layout="full-width">
      <Title level={2} style={{ textAlign: 'center' }}>
        Study Resources
      </Title>
      <Text
        style={{ display: 'block', textAlign: 'center', marginBottom: '20px' }}
      >
        Browse through a collection of study resources to aid your learning. Use
        the filters and search options to quickly locate specific resources.
      </Text>
      <Row justify="center" gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Input
            placeholder="Search resources"
            prefix={<SearchOutlined />}
            value={searchTerm}
            onChange={e => handleSearch(e.target.value)}
          />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Select
            placeholder="Select subject"
            style={{ width: '100%' }}
            onChange={handleSubjectChange}
            allowClear
          >
            {subjects?.map(subject => (
              <Option key={subject.id} value={subject.id}>
                {subject.name}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>
      <Row justify="center" gutter={[16, 16]} style={{ marginTop: '20px' }}>
        {resourcesLoading || subjectsLoading ? (
          <Spin size="large" />
        ) : (
          resources?.map(resource => (
            <Col key={resource.id} xs={24} sm={12} md={8}>
              <Card
                title={resource.title}
                extra={
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                }
              >
                <Text>{resource.description}</Text>
                <br />
                <Text type="secondary">Subject: {resource.subject?.name}</Text>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </PageLayout>
  )
}
