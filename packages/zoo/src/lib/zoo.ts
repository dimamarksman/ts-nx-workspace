import { getRandomAnimal } from '@ts-nx-workspace/animal';

export function zoo(): string {
  const result = getRandomAnimal();
  return `${result.name} says ${result.sound}!`;
}