import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { INITIAL_DIRECTIONS, INITIAL_USER_PROFILE } from './data/initialData';
import { DirectionItem, Screen, TransitionType } from './types';

import { TanishuvScreen } from './components/TanishuvScreen';
import { OnboardingXulosasiScreen } from './components/OnboardingXulosasiScreen';
import { BoshSahifaScreen } from './components/BoshSahifaScreen';
import { YonalishlarniTahrirlashScreen } from './components/YonalishlarniTahrirlashScreen';
import { YangiYonalishQoshishScreen } from './components/YangiYonalishQoshishScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('tanishuv');
  const [transitionType, setTransitionType] = useState<TransitionType>('push');
  const [directions, setDirections] = useState<DirectionItem[]>(INITIAL_DIRECTIONS);
  const [userProfile] = useState(INITIAL_USER_PROFILE);

  const navigateTo = (targetScreen: Screen, transition: TransitionType) => {
    setTransitionType(transition);
    setCurrentScreen(targetScreen);
  };

  // State handlers
  const handleToggleDirection = (id: string) => {
    setDirections((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const handleLevelChange = (id: string, newLevel: number) => {
    setDirections((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, level: newLevel } : item
      )
    );
  };

  const handleAddNewDirection = (title: string) => {
    const existing = directions.find(
      (d) => d.title.toLowerCase() === title.toLowerCase()
    );

    if (existing) {
      setDirections((prev) =>
        prev.map((item) =>
          item.id === existing.id ? { ...item, selected: true } : item
        )
      );
    } else {
      const newId = title.toLowerCase().replace(/\s+/g, '-');
      const newDir: DirectionItem = {
        id: newId,
        title: title,
        icon: 'stars',
        selected: true,
        level: 2,
      };
      setDirections((prev) => [newDir, ...prev]);
    }

    // Transition back to Bosh sahifa via push_back as per spec
    navigateTo('bosh_sahifa', 'push_back');
  };

  // Motion variants based on transition type
  const getVariants = () => {
    switch (transitionType) {
      case 'push':
        return {
          initial: { x: '100%', opacity: 0 },
          animate: { x: '0%', opacity: 1 },
          exit: { x: '-20%', opacity: 0 },
        };
      case 'push_back':
        return {
          initial: { x: '-100%', opacity: 0 },
          animate: { x: '0%', opacity: 1 },
          exit: { x: '100%', opacity: 0 },
        };
      case 'slide_up':
        return {
          initial: { y: '100%', opacity: 0 },
          animate: { y: '0%', opacity: 1 },
          exit: { y: '100%', opacity: 0 },
        };
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        };
    }
  };

  const variants = getVariants();

  return (
    <div className="w-full min-h-screen bg-[#131313] overflow-x-hidden relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={variants.initial}
          animate={variants.animate}
          exit={variants.exit}
          transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
          className="w-full min-h-screen"
        >
          {currentScreen === 'tanishuv' && (
            <TanishuvScreen
              directions={directions}
              onToggleDirection={handleToggleDirection}
              onNavigateNext={() => navigateTo('onboarding_xulosasi', 'push')}
            />
          )}

          {currentScreen === 'onboarding_xulosasi' && (
            <OnboardingXulosasiScreen
              userProfile={userProfile}
              directions={directions}
              onLevelChange={handleLevelChange}
              onNavigateStart={() => navigateTo('bosh_sahifa', 'push')}
            />
          )}

          {currentScreen === 'bosh_sahifa' && (
            <BoshSahifaScreen
              userProfile={userProfile}
              directions={directions}
              onNavigateEditDirections={() =>
                navigateTo('yonalishlarni_tahrirlash', 'slide_up')
              }
              onNavigateAddDirection={() =>
                navigateTo('yangi_yonalish_qoshish', 'push')
              }
              onNavigateStartOver={() => navigateTo('tanishuv', 'push_back')}
            />
          )}

          {currentScreen === 'yonalishlarni_tahrirlash' && (
            <YonalishlarniTahrirlashScreen
              userProfile={userProfile}
              directions={directions}
              onToggleDirection={handleToggleDirection}
              onSave={() => navigateTo('bosh_sahifa', 'push_back')}
              onClose={() => navigateTo('bosh_sahifa', 'push_back')}
            />
          )}

          {currentScreen === 'yangi_yonalish_qoshish' && (
            <YangiYonalishQoshishScreen
              userProfile={userProfile}
              onAddNewDirection={handleAddNewDirection}
              onNavigateBack={() => navigateTo('bosh_sahifa', 'push_back')}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
