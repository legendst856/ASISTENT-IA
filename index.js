// ========================
// index.js
// ========================

// Configuración Tailwind
function initTailwind() {
  tailwind.config = {
    content: [],
    theme: {
      extend: {}
    }
  }
}

// Mensajes de ejemplo para la demo del chat
const respuestasIA = {
  "hola": "¡Hola! Soy AIBiz, tu asistente IA para negocios. ¿En qué te ayudo hoy? ¿Ventas, clientes, finanzas?",
  "cuanto vendi": "¡Excelente pregunta! Esta semana llevas $14.8 millones en ventas (18% más que la semana pasada). ¿Quieres el reporte completo?",
  "clientes": "Tienes 47 leads nuevos esta semana. 12 están calientes y listos para cerrar. ¿Quieres que les envíe una propuesta automática?",
  "reporte": "Generando reporte en tiempo real... Listo ✅ Aquí tienes el resumen ejecutivo de abril.",
  "precio": "Nuestros planes empiezan desde $89.000/mes. ¿Quieres que te muestre el que mejor se adapta a tu empresa?",
  "default": "Entendido. Puedo ayudarte con eso. ¿Quieres que genere automáticamente una cotización, un email o un análisis de datos?"
}

// Agregar mensaje al chat
function agregarMensaje(texto, esUsuario) {
  const chat = document.getElementById('chat-messages')
  const div = document.createElement('div')
  div.className = `flex ${esUsuario ? 'justify-end' : 'justify-start'}`
  
  if (esUsuario) {
    div.innerHTML = `
      <div class="chat-bubble-user max-w-[75%] px-6 py-4 text-sm">
        ${texto}
      </div>
    `
  } else {
    div.innerHTML = `
      <div class="flex gap-3">
        <div class="w-8 h-8 bg-cyan-400 rounded-2xl flex-shrink-0 flex items-center justify-center text-black">🤖</div>
        <div class="chat-bubble-ai max-w-[75%] px-6 py-4 text-sm">${texto}</div>
      </div>
    `
  }
  chat.appendChild(div)
  chat.scrollTop = chat.scrollHeight
}

// Iniciar demo del chat
function iniciarChatDemo() {
  const form = document.getElementById('chat-form')
  const input = document.getElementById('chat-input')
  
  // Mensaje de bienvenida
  setTimeout(() => {
    agregarMensaje("¡Hola! Soy tu asistente IA para negocios. ¿Qué necesitas hoy?", false)
  }, 800)
  
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const texto = input.value.trim()
    if (!texto) return
    
    agregarMensaje(texto, true)
    input.value = ''
    
    // Respuesta simulada de la IA
    setTimeout(() => {
      let respuesta = respuestasIA["default"]
      
      const lower = texto.toLowerCase()
      for (let key in respuestasIA) {
        if (lower.includes(key)) {
          respuesta = respuestasIA[key]
          break
        }
      }
      agregarMensaje(respuesta, false)
    }, 1200)
  })
}

// Funciones de botones
function empezarGratis() {
  const mensaje = document.createElement('div')
  mensaje.style.cssText = 'position:fixed; bottom:30px; left:50%; transform:translateX(-50%); background:#00d4ff; color:#000; padding:20px 40px; border-radius:9999px; font-weight:600; box-shadow:0 10px 30px -10px #00d4ff; z-index:9999'
  mensaje.innerHTML = '🎉 ¡Genial! Redirigiendo a tu prueba gratis de 14 días...'
  document.body.appendChild(mensaje)
  
  setTimeout(() => {
    mensaje.style.transition = 'all 0.4s'
    mensaje.style.opacity = '0'
    setTimeout(() => mensaje.remove(), 400)
    alert('✅ ¡Bienvenido a AIBiz!\n\n(En una web real esto conectaría con Stripe y crearía tu cuenta)')
  }, 1800)
}

function verDemo() {
  document.getElementById('demo').scrollIntoView({ behavior: 'smooth' })
}

function mostrarLogin() {
  alert('🔑 Iniciar sesión con Google o correo\n(En producción esto abriría un modal real)')
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu')
  const icon = document.getElementById('menu-icon')
  menu.classList.toggle('hidden')
  
  if (icon.classList.contains('fa-bars')) {
    icon.classList.remove('fa-bars')
    icon.classList.add('fa-xmark')
  } else {
    icon.classList.remove('fa-xmark')
    icon.classList.add('fa-bars')
  }
}

// Inicializar todo cuando cargue la página
window.onload = function() {
  initTailwind()
  iniciarChatDemo()
  
  console.log('%c✅ index.js cargado correctamente para AIBiz Assist', 'color:#00d4ff; font-size:13px; font-weight:bold')
  console.log('Página promocional de asistente IA para negocios lista 🚀')
}
