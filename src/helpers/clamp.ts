export const clamp = (value: number, min: number, max: number): number => {
  const _min = Math.min(min, max)
  const _max = Math.max(min, max)

  if (value < _min) {
    return _min
  }

  if (value > _max) {
    return _max
  }

  return value
}
