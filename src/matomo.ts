declare global {
  interface Window {
    _paq: any
  }
}

export const trackGoal = (goalId: number) => {
  window._paq.push(["trackGoal", goalId])
}
