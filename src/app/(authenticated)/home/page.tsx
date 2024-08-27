'use client'

import { Prisma } from '@prisma/client'
import {
  Typography,
  Button,
  Menu,
  Grid,
  Card,
  Input,
  AutoComplete,
  FloatButton,
  Row,
  Col,
} from 'antd'
import {
  UserOutlined,
  BookOutlined,
  FileTextOutlined,
  InfoCircleOutlined,
  SearchOutlined,
  TrophyOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
const { useBreakpoint } = Grid
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const screens = useBreakpoint()

  // Fetching data
  const { data: subjects, isLoading: isLoadingSubjects } =
    Api.subject.findMany.useQuery({})
  const { data: dailyUpdates, isLoading: isLoadingDailyUpdates } =
    Api.dailyUpdate.findMany.useQuery({})
  const { data: featuredResources, isLoading: isLoadingFeaturedResources } =
    Api.resource.findMany.useQuery({ where: { featured: true } })
  const { data: gradeLevels, isLoading: isLoadingGradeLevels } =
    Api.gradeLevel.findMany.useQuery({})
  const { data: studyStreaks, isLoading: isLoadingStudyStreaks } =
    Api.studyStreak.findMany.useQuery({ where: { userId: user?.id } })

  const handleSearch = (value: string) => {
    // Implement search functionality
  }

  return (
    <PageLayout layout="full-width">
      <Title level={1}>Welcome to LPS</Title>
      <Paragraph>Quickly access your account or create a new one.</Paragraph>

      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        {/* Removed invalid paths for Login and Sign Up */}
      </div>

      <Menu
        mode="horizontal"
        defaultSelectedKeys={['home']}
        style={{ justifyContent: 'center' }}
      >
        <Menu.Item
          key="subjects"
          icon={<BookOutlined />}
          onClick={() => router.push('/subjects')}
        >
          Subjects
        </Menu.Item>
        <Menu.Item
          key="resources"
          icon={<FileTextOutlined />}
          onClick={() => router.push('/resources')}
        >
          Resources
        </Menu.Item>
        <Menu.Item
          key="daily-diary"
          icon={<FileTextOutlined />}
          onClick={() => router.push('/daily-diary')}
        >
          Daily Diary
        </Menu.Item>
        {/* Removed invalid path for About LPS */}
      </Menu>

      <div style={{ margin: '20px 0' }}>
        <Title level={2}>Subject Categories</Title>
        <Row gutter={[16, 16]}>
          {subjects?.map(subject => (
            <Col xs={24} sm={12} md={8} lg={6} key={subject.id}>
              <Card
                hoverable
                cover={<img alt={subject.name} src={subject.iconUrl} />}
                onClick={() => router.push(`/subjects/${subject.id}`)}
              >
                <Card.Meta title={subject.name} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <div style={{ margin: '20px 0' }}>
        <Title level={2}>Daily Updates</Title>
        <Row gutter={[16, 16]}>
          {dailyUpdates?.map(update => (
            <Col xs={24} sm={12} md={8} lg={6} key={update.id}>
              <Card hoverable>
                <Card.Meta title={update.title} description={update.content} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <div style={{ margin: '20px 0' }}>
        <Title level={2}>Smart Search</Title>
        <AutoComplete
          style={{ width: '100%' }}
          onSearch={handleSearch}
          placeholder="Search for study materials"
        >
          <Input prefix={<SearchOutlined />} />
        </AutoComplete>
      </div>

      <div style={{ margin: '20px 0' }}>
        <Title level={2}>Featured Resources</Title>
        <Row gutter={[16, 16]}>
          {featuredResources?.map(resource => (
            <Col xs={24} sm={12} md={8} lg={6} key={resource.id}>
              <Card
                hoverable
                cover={<img alt={resource.title} src={resource.url} />}
                onClick={() => router.push(`/resources/${resource.id}`)}
              >
                <Card.Meta
                  title={resource.title}
                  description={resource.description}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <div style={{ margin: '20px 0' }}>
        <Title level={2}>Quick Links by Grade Level</Title>
        <Row gutter={[16, 16]}>
          {gradeLevels?.map(grade => (
            <Col xs={24} sm={12} md={8} lg={6} key={grade.id}>
              <Card
                hoverable
                onClick={() => router.push(`/grade-level/${grade.id}`)}
              >
                <Card.Meta title={grade.name} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <FloatButton
        icon={<InfoCircleOutlined />}
        type="primary"
        style={{ right: 24 }}
        onClick={() => router.push('/help')}
      />

      <div style={{ margin: '20px 0' }}>
        <Title level={2}>Study Streak</Title>
        <Row gutter={[16, 16]}>
          {studyStreaks?.map(streak => (
            <Col xs={24} sm={12} md={8} lg={6} key={streak.id}>
              <Card hoverable>
                <Card.Meta
                  title={`Streak from ${streak.startDate} to ${streak.endDate}`}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </PageLayout>
  )
}
