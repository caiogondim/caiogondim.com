function isDarkMode () {
  try {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  } catch (_) {
    return false
  }
}

export default isDarkMode
