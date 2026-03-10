export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  year: string;
  href: string;
  color: string;
  imgBefore: string;
  imgAfter: string;
  imgFeature: string;
  videoFeature?: string;
}

export const projects: Project[] = [
  {
    id: 'antikvarijat-judita',
    title: 'Antikvarijat Judita',
    subtitle: 'E-commerce redesign',
    description: 'Kompletan redizajn zastarjelog weba i novo moderno rješenje za online prodaju rabljenih udžbenika.',
    tag: 'Web dizajn',
    year: '2024',
    href: '/work/antikvarijat-judita',
    color: '#1a1200',
    imgBefore: '/images/judita_work_before.png',
    imgAfter: '/images/judita_work_after.png',
    imgFeature: '/images/judita_work_feature.png',
  },
  {
    id: 'amg-stolarija',
    title: 'AMG PVC Stolarija',
    subtitle: 'Korporativna web stranica',
    description: 'Next.js web stranica za proizvođača PVC stolarije s fokusom na SEO i lokalni promet.',
    tag: 'Next.js · SEO',
    year: '2024',
    href: '/work/amg-stolarija',
    color: '#001a0d',
    imgBefore: '/images/amgpvc_work_before.png',
    imgAfter: '/images/amgpvc_work_after.png',
    imgFeature: '/images/amgpvc_work_feature.png',
    videoFeature: '/videos/amgpvc_feature.mp4',
  },
  {
    id: 'prizma-distribucija',
    title: 'Prizma Distribucije',
    subtitle: 'GPS tracking sustav',
    description: 'React Native aplikacija za praćenje terenske distribucije s real-time mapom i admin dashboardom.',
    tag: 'React Native',
    year: '2025',
    href: '/work/prizma-tracker',
    color: '#00101a',
    imgBefore: '/images/prizma_work_before.png',
    imgAfter: '/images/prizma_work_after.png',
    imgFeature: '/images/prizma_work_feature.png',
    videoFeature: '/videos/prizma_feature.mp4',
  },
  {
    id: 'kontrol',
    title: 'KONTROL',
    subtitle: 'Flyer distribucija',
    description: 'Landing page za servis kontrole distribucije letaka s bold geometrijskim dizajnom.',
    tag: 'HTML · CSS · JS',
    year: '2024',
    href: '/work/kontrol',
    color: '#0a001a',
    imgBefore: '/images/kontrol_work_before.png',
    imgAfter: '/images/kontrol_work_after.png',
    imgFeature: '/images/kontrol_work_feature.png',
  },
];