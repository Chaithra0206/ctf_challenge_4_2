export interface GearProps {
  value: number;
  index: number;
  size: number;
  top: string;
  left: string;
  teeth: number;
  color: 'bronze' | 'brass' | 'copper';
  direction: 'normal' | 'reverse';
  zIndex: number;
}