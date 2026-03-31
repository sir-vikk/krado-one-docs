import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import './custom.css'

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()

    onMounted(() => {
      createBackToTop()
      observeContentReveal()
    })

    watch(() => route.path, () => {
      nextTick(() => observeContentReveal())
    })
  }
}

function createBackToTop() {
  const btn = document.createElement('button')
  btn.className = 'back-to-top'
  btn.innerHTML = '↑'
  btn.setAttribute('aria-label', 'Back to top')
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))
  document.body.appendChild(btn)

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400)
  }, { passive: true })
}

function observeContentReveal() {
  const elements = document.querySelectorAll('.vp-doc h2, .vp-doc h3, .vp-doc table, .vp-doc .custom-block')
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1'
        e.target.style.transform = 'none'
        obs.unobserve(e.target)
      }
    })
  }, { threshold: 0.1 })

  elements.forEach((el, i) => {
    const htmlEl = el as HTMLElement
    htmlEl.style.opacity = '0'
    htmlEl.style.transform = 'translateY(12px)'
    htmlEl.style.transition = `opacity 0.5s ${i * 0.04}s ease, transform 0.5s ${i * 0.04}s ease`
    obs.observe(el)
  })
}
