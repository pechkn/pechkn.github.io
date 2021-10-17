document.documentElement.lang = navigator.language
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark')
}
function toggleLang() {
    if (document.documentElement.lang === 'ru-RU') {
        document.documentElement.lang = 'en'
    } else document.documentElement.lang = 'ru-RU'
}
function toggleTheme() {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light')
    } else document.documentElement.setAttribute('data-theme', 'dark')
}