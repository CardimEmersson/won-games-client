import { Meta, Story } from '@storybook/react/types-6-0';
import { GameInfo, GameInfoProps } from '.';
import mockGame from './mock';

export default {
  title: 'GameInfo',
  component: GameInfo,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: mockGame
} as Meta;

export const Basic: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', padding: '1.5rem' }}>
    <GameInfo {...args} />
  </div>
);
