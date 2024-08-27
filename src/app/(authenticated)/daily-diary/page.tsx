'use client'

import { useState, useEffect } from 'react'
import {
  Typography,
  Form,
  Input,
  Button,
  List,
  Spin,
  Row,
  Col,
  Space,
} from 'antd'
import { PlusOutlined, EditOutlined, SaveOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function DailyDiaryPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: diaryEntries,
    isLoading,
    refetch,
  } = Api.dailyDiary.findMany.useQuery({
    where: { userId: user?.id },
    orderBy: { entryDate: 'desc' },
  })

  const { mutateAsync: createDiaryEntry } = Api.dailyDiary.create.useMutation()
  const { mutateAsync: updateDiaryEntry } = Api.dailyDiary.update.useMutation()

  const [form] = Form.useForm()
  const [editingEntry, setEditingEntry] = useState<string | null>(null)

  const handleAddEntry = async (values: { content: string }) => {
    try {
      await createDiaryEntry({
        data: {
          content: values.content,
          entryDate: new Date().toISOString(),
          userId: user?.id,
        },
      })
      enqueueSnackbar('Diary entry added successfully!', { variant: 'success' })
      form.resetFields()
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to add diary entry.', { variant: 'error' })
    }
  }

  const handleUpdateEntry = async (id: string, values: { content: string }) => {
    try {
      await updateDiaryEntry({
        where: { id },
        data: { content: values.content },
      })
      enqueueSnackbar('Diary entry updated successfully!', {
        variant: 'success',
      })
      setEditingEntry(null)
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to update diary entry.', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center" style={{ marginBottom: '20px' }}>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={2}>Daily Diary</Title>
          <Paragraph>
            Keep track of your study progress and activities by adding and
            updating your daily diary entries.
          </Paragraph>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          <Form form={form} onFinish={handleAddEntry}>
            <Form.Item
              name="content"
              rules={[
                { required: true, message: 'Please enter your diary entry' },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Write your diary entry here..."
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
                Add Entry
              </Button>
            </Form.Item>
          </Form>
          {isLoading ? (
            <Spin />
          ) : (
            <List
              itemLayout="vertical"
              dataSource={diaryEntries}
              renderItem={entry => (
                <List.Item key={entry.id}>
                  {editingEntry === entry.id ? (
                    <Form
                      initialValues={{ content: entry.content }}
                      onFinish={values => handleUpdateEntry(entry.id, values)}
                    >
                      <Form.Item
                        name="content"
                        rules={[
                          {
                            required: true,
                            message: 'Please enter your diary entry',
                          },
                        ]}
                      >
                        <Input.TextArea rows={4} />
                      </Form.Item>
                      <Form.Item>
                        <Space>
                          <Button
                            type="primary"
                            htmlType="submit"
                            icon={<SaveOutlined />}
                          >
                            Save
                          </Button>
                          <Button onClick={() => setEditingEntry(null)}>
                            Cancel
                          </Button>
                        </Space>
                      </Form.Item>
                    </Form>
                  ) : (
                    <div>
                      <Paragraph>{entry.content}</Paragraph>
                      <Text type="secondary">
                        {dayjs(entry.entryDate).format('MMMM D, YYYY')}
                      </Text>
                      <Button
                        type="link"
                        icon={<EditOutlined />}
                        onClick={() => setEditingEntry(entry.id)}
                      >
                        Edit
                      </Button>
                    </div>
                  )}
                </List.Item>
              )}
            />
          )}
        </Col>
      </Row>
    </PageLayout>
  )
}
