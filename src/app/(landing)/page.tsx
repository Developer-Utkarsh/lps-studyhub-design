'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  EditOutlined,
  BookOutlined,
  CalendarOutlined,
  SearchOutlined,
  SmileOutlined,
  MobileOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: 'Centralized Study Materials',
      description:
        'Access all your study resources in one place, making learning more efficient and organized.',
      icon: <BookOutlined />,
    },
    {
      heading: 'Daily Updates',
      description:
        'Stay on top of your studies with daily updates and reminders.',
      icon: <CalendarOutlined />,
    },
    {
      heading: 'Smart Search',
      description:
        'Find exactly what you need with our intelligent search bar with autocomplete functionality.',
      icon: <SearchOutlined />,
    },
    {
      heading: 'Gamification',
      description:
        'Boost your motivation with our Study Streak feature and earn rewards for consistent study habits.',
      icon: <SmileOutlined />,
    },
    {
      heading: 'Mobile Responsive',
      description:
        'Access the platform from any device, ensuring you can study anytime, anywhere.',
      icon: <MobileOutlined />,
    },
    {
      heading: 'Floating Help Button',
      description:
        'Get assistance whenever you need it with our always-available help button.',
      icon: <EditOutlined />,
    },
  ]

  const testimonials = [
    {
      name: 'John Doe',
      designation: 'High School Student',
      content:
        'LPS Study Hub has transformed the way I study. The centralized resources and daily updates keep me on track and motivated.',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: 'Jane Smith',
      designation: 'Middle School Student',
      content:
        'The gamification element is so fun! It makes studying feel like a game, and I love earning rewards for my efforts.',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: 'Sam Wilson',
      designation: 'High School Student',
      content:
        'The smart search bar is a lifesaver. I can quickly find the resources I need without wasting time.',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: 'Emily Johnson',
      designation: 'Middle School Student',
      content:
        'I love that I can access LPS Study Hub from my phone. It’s so convenient to study on the go.',
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: 'Michael Brown',
      designation: 'High School Student',
      content:
        'The daily updates keep me informed and on track with my studies. It’s like having a personal study assistant.',
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
    {
      name: 'Sophia Davis',
      designation: 'Middle School Student',
      content:
        'The floating help button is great. I can get help whenever I need it without any hassle.',
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
  ]

  const navItems = [
    {
      title: 'Subjects',
      link: '/subjects',
    },
    {
      title: 'Resources',
      link: '/resources',
    },
    {
      title: 'Daily Diaries',
      link: '/daily-diaries',
    },
  ]

  const packages = [
    {
      title: 'Basic Plan',
      description: 'Ideal for middle school students',
      monthly: 9,
      yearly: 69,
      features: ['Centralized Study Materials', 'Daily Updates'],
    },
    {
      title: 'Premium Plan',
      description: 'Perfect for high school students',
      monthly: 12,
      yearly: 99,
      features: [
        'Centralized Study Materials',
        'Daily Updates',
        'Smart Search',
        'Gamification',
      ],
      highlight: true,
    },
    {
      title: 'Ultimate Plan',
      description: 'Best for students who want it all',
      monthly: 15,
      yearly: 129,
      features: [
        'Centralized Study Materials',
        'Daily Updates',
        'Smart Search',
        'Gamification',
        'Mobile Responsive',
        'Floating Help Button',
      ],
    },
  ]

  const questionAnswers = [
    {
      question: 'What is LPS Study Hub?',
      answer:
        'LPS Study Hub is an innovative educational platform designed for students of Lucknow Public School to access centralized study materials and enhance their learning experience.',
    },
    {
      question: 'How can I access the platform?',
      answer:
        'You can access LPS Study Hub from any device, including your mobile phone, tablet, or computer.',
    },
    {
      question: 'What features does LPS Study Hub offer?',
      answer:
        'The platform offers centralized study materials, daily updates, a smart search bar, gamification elements, mobile responsiveness, and a floating help button.',
    },
    {
      question: 'Is there a free trial available?',
      answer:
        'Yes, we offer a 7-day free trial for new users to explore the features of LPS Study Hub.',
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: 'Sign Up',
      description:
        'Create your account in just a few minutes and get started on your learning journey.',
    },
    {
      heading: 'Explore Resources',
      description:
        'Browse through a wide range of study materials categorized by subjects and grade levels.',
    },
    {
      heading: 'Stay Updated',
      description:
        'Receive daily updates and reminders to keep you on track with your studies.',
    },
    {
      heading: 'Earn Rewards',
      description:
        'Stay motivated with our gamification feature and earn rewards for consistent study habits.',
    },
  ]

  const painPoints = [
    {
      emoji: '😓',
      title: 'Fragmented Resources',
    },
    {
      emoji: '📉',
      title: 'Lack of Motivation',
    },
    {
      emoji: '⏳',
      title: 'Time Wasted Searching',
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title="Unlock Your Full Potential with LPS Study Hub"
        subtitle="Your ultimate educational platform tailored for Lucknow Public School students."
        buttonText="Get Started"
        buttonLink="/register"
        pictureUrl="https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/ud2OUh-lpsstudyhub-KlWe"
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText="from happy students"
          />
        }
      />
      <LandingSocialProof logos={logos} title="Featured on" />
      <LandingPainPoints
        title="The Challenges Students Face"
        painPoints={painPoints}
      />
      <LandingHowItWorks title="How LPS Study Hub Works" steps={steps} />
      <LandingFeatures
        id="features"
        title="Achieve Your Academic Dreams with These Features"
        subtitle="Designed to make studying more efficient and enjoyable."
        features={features}
      />
      <LandingTestimonials
        title="Success Stories from Our Students"
        subtitle="Hear how LPS Study Hub has made a difference."
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title="Choose the Right Plan for Your Needs"
        subtitle="Affordable plans designed to help you succeed."
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about LPS Study Hub."
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title="Ready to Transform Your Learning Experience?"
        subtitle="Join LPS Study Hub today and start your journey to academic success."
        buttonText="Get Started"
        buttonLink="/register"
      />
    </LandingContainer>
  )
}
