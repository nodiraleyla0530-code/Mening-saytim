import { DirectionItem, UserProfile } from '../types';

export const INITIAL_DIRECTIONS: DirectionItem[] = [
  {
    id: 'grafik-dizayn',
    title: 'Grafik dizayn',
    icon: 'design_services',
    selected: true,
    level: 2,
  },
  {
    id: 'smm',
    title: 'SMM',
    icon: 'campaign',
    selected: true,
    level: 1,
  },
  {
    id: 'video-montaj',
    title: 'Video montaj',
    icon: 'movie_edit',
    selected: true,
    level: 2,
  },
  {
    id: 'brending',
    title: 'Brending',
    icon: 'diamond',
    selected: true,
    level: 3,
  },
  {
    id: 'ai-art',
    title: 'AI Art',
    icon: 'smart_toy',
    selected: false,
    level: 1,
  },
  {
    id: 'veb-dizayn',
    title: 'Veb dizayn',
    icon: 'web',
    selected: false,
    level: 2,
  },
  {
    id: 'ux-ui',
    title: 'UX/UI',
    icon: 'touch_app',
    selected: false,
    level: 2,
  },
  {
    id: 'seo',
    title: 'SEO',
    icon: 'manage_search',
    selected: false,
    level: 2,
  },
  {
    id: '3d-modellashtirish',
    title: '3D Modellashtirish',
    icon: 'view_in_ar',
    selected: false,
    level: 1,
  },
];

export const POPULAR_SKILLS = [
  'SEO & ASO',
  'Motion Graphics',
  '3D Modelling',
  'UI/UX Design',
  'Copywriting',
  'Art Direction',
  'Webflow',
  'Prompt Engineering',
  'Brand Strategy',
];

export const INITIAL_USER_PROFILE: UserProfile = {
  name: 'Aliqulova Nodira',
  role: 'Creative Director & Designer',
  avatarUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBbDZNP6FNOeWGETnn5leYn4efYRonBqZ9AQHntDYJEa2SjNqqpa9mxA0uAGFjVyTYRtN6Vr0mfJSEYfVKBqVU1YvimeQwfBVVCiJmgHhAHUc97LlyTo1_o7vx_hgwInz3TlLF4jDDTwZS0yhtkflVzSI38GYWLrpvayIqi1YXFFdbexB-i9T96LEF1swWCI4a1Qx5YGXfA44DiCg6W3whhTLhOgHkWLZ1mgay5VTvpwnbQHtdh_E-ibw',
};
