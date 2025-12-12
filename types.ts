export interface GearProps {
  char: string;
  index: number;
  size: number;
  top: string;
  left: string;
  teeth: number;
  color: 'bronze' | 'brass' | 'copper';
  direction: 'normal' | 'reverse';
  zIndex: number;
}
