const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.background = window.scrollY > 50
    ? 'rgba(10,10,15,0.97)' : 'rgba(10,10,15,0.85)';
});

const menuBtn = document.getElementById('menuBtn');
const navLinks = document.querySelector('.nav-links');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

const LANG_COLORS = {
  JavaScript: '#f1e05a', Python: '#3572A5', HTML: '#e34c26',
  CSS: '#563d7c', TypeScript: '#2b7489', 'C++': '#f34b7d',
  Java: '#b07219', Go: '#00ADD8', Rust: '#dea584', default: '#6c63ff'
};
const ICONS = ['📦','🔧','⚙️','🚀','💡','🔬','🛠️','✨'];

async function loadProjects() {
  const grid = document.getElementById('projects-grid');
  try {
    const res = await fetch('https://api.github.com/users/Eerincona/repos?sort=updated&per_page=9');
    const repos = await res.json();
    if (!Array.isArray(repos) || repos.length === 0) throw new Error('no repos');
    grid.innerHTML = repos.map((repo, i) => {
      const langColor = LANG_COLORS[repo.language] || LANG_COLORS.default;
      const icon = ICONS[i % ICONS.length];
      const desc = repo.description || 'Sin descripción disponible.';
      return `<a class="project-card" href="${repo.html_url}" target="_blank" rel="noopener">
        <div class="project-icon">${icon}</div>
        <div class="project-name">${repo.name}</div>
        <div class="project-desc">${desc}</div>
        <div class="project-meta">
          ${repo.language ? `<span><i style="background:${langColor};width:10px;height:10px;border-radius:50%;display:inline-block;margin-right:4px"></i>${repo.language}</span>` : ''}
          <span>⭐ ${repo.stargazers_count}</span>
          <span>🍴 ${repo.forks_count}</span>
        </div>
      </a>`;
    }).join('');
  } catch {
    grid.innerHTML = `<div class="project-card" style="grid-column:1/-1;text-align:center;opacity:0.6">
      <div class="project-icon">🐙</div>
      <div class="project-name">Ver proyectos en GitHub</div>
      <div class="project-desc">Visita el perfil directamente.</div>
    </div>`;
  }
}
loadProjects();

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const subject = encodeURIComponent(`Contacto desde portfolio — ${name}`);
  const body = encodeURIComponent(`Hola Edwin,\n\nMi nombre es ${name} (${email}).\n\n${message}`);
  window.location.href = `mailto:edwinesdiverrincon@gmail.com?subject=${subject}&body=${body}`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-category, .stat-card, .contact-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
