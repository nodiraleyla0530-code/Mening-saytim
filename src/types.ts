export type Screen =
  | 'tanishuv'
  | 'onboarding_xulosasi'
  | 'bosh_sahifa'
  | 'yonalishlarni_tahrirlash'
  | 'yangi_yonalish_qoshish';

export type TransitionType = 'push' | 'push_back' | 'slide_up';

export interface DirectionItem {
  id: string;
  title: string;
  icon: string;
  selected: boolean;
  level: number; // 1: Boshlang'ich, 2: O'rta, 3: Ekspert
}

export interface UserProfile {
  name: string;
  role: string;
  avatarUrl: string;
}
