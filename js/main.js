(function(){
  /* ===== DOM REFS ===== */
  const grid = document.getElementById('projects');
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  const filterBtns = document.querySelectorAll('.filter__btn');
  const header = document.querySelector('.header');
  const loader = document.querySelector('.page-loader');
  const cursor = document.querySelector('.cursor');
  const cursorFollower = document.querySelector('.cursor-follower');

  /* ===== PAGE LOADER ===== */
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('page-loader--hidden');
      document.body.style.overflow = '';
    }, 800);
  });
  document.body.style.overflow = 'hidden';

  /* ===== CUSTOM CURSOR ===== */
  if (cursor && cursorFollower && window.matchMedia('(hover: hover)').matches) {
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorX = mouseX;
      cursorY = mouseY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    });

    function animateFollower() {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      cursorFollower.style.left = followerX + 'px';
      cursorFollower.style.top = followerY + 'px';
      requestAnimationFrame(animateFollower);
    }
    animateFollower();

    const hoverTargets = document.querySelectorAll('a, button, .project, .filter__btn, .modal__close, .contact__email');
    hoverTargets.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor--hover');
        cursorFollower.classList.add('cursor-follower--hover');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor--hover');
        cursorFollower.classList.remove('cursor-follower--hover');
      });
    });
  }

  /* ===== HEADER SCROLL ===== */
  let lastScroll = 0;
  let headerTimeout;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100 && currentScroll > lastScroll) {
      header.classList.add('header--hidden');
    } else {
      header.classList.remove('header--hidden');
    }
    lastScroll = currentScroll;
    clearTimeout(headerTimeout);
    headerTimeout = setTimeout(() => {
      if (currentScroll <= 100) header.classList.remove('header--hidden');
    }, 300);
  }, { passive: true });

  /* ===== RENDER PROJECTS ===== */
  function renderProjects(filter = 'all') {
    grid.innerHTML = '';
    const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

    // Layout pattern: lg, md, sm, lg, md, sm...
    filtered.forEach((p, i) => {
      const card = document.createElement('div');
      const pattern = i % 3;
      if (pattern === 0) card.className = 'project project--lg reveal';
      else if (pattern === 1) card.className = 'project project--md reveal';
      else card.className = 'project project--sm reveal';

      card.setAttribute('data-category', p.category);
      card.addEventListener('click', () => openModal(p));
      card.style.transitionDelay = (i * 0.08) + 's';

      const media = document.createElement('div');
      media.className = 'project__media';

      const hasImg = p.cover && !p.cover.includes('placeholder');
      if (hasImg) {
        const img = document.createElement('img');
        img.className = 'project__img';
        img.src = p.cover;
        img.alt = p.title;
        img.loading = 'lazy';
        media.appendChild(img);
      } else {
        const ph = document.createElement('div');
        ph.className = 'project__placeholder';
        ph.innerHTML = '<span class="project__placeholder-icon">✦</span><span class="project__placeholder-client">' + p.client + '</span>';
        media.appendChild(ph);
      }
      card.appendChild(media);

      const overlay = document.createElement('div');
      overlay.className = 'project__overlay';
      overlay.innerHTML =
        '<div class="project__num">' + String(i + 1).padStart(2, '0') + '</div>' +
        '<div class="project__client">' + p.client + '</div>' +
        '<div class="project__title">' + p.title + '</div>' +
        '<div class="project__year">' + p.year + '</div>';
      card.appendChild(overlay);
      grid.appendChild(card);
    });

    // Reveal animation
    requestAnimationFrame(() => {
      const revealEls = grid.querySelectorAll('.reveal');
      revealEls.forEach(el => {
        el.classList.add('reveal--visible');
        if (el.classList.contains('project--md')) el.classList.add('reveal--delay-1');
        if (el.classList.contains('project--sm')) el.classList.add('reveal--delay-2');
      });
    });
  }

  /* ===== MODAL ===== */
  function openModal(p) {
    const catLabel = {
      'brand-event': 'Brand Event',
      'pop-up': 'Pop-up Store',
      'commercial': 'Commercial Interior',
      'exhibition': 'Exhibition'
    };

    const hasCover = p.cover && !p.cover.includes('placeholder');
    const heroImgHtml = hasCover ? '<img class="modal__hero-img" src="' + p.cover + '" alt="' + p.title + '">' : '';

    const galleryImgs = (p.images && p.images.length > 1)
      ? '<div class="modal__gallery">' + p.images.map(src => '<img src="' + src + '" alt="' + p.title + '" loading="lazy">').join('') + '</div>'
      : '';

    modalBody.innerHTML =
      heroImgHtml +
      '<div class="modal__client">' + p.client + '</div>' +
      '<div class="modal__title">' + p.title + '</div>' +
      '<div class="modal__meta">' + p.year + '  ·  ' + (catLabel[p.category] || '') + '</div>' +
      '<div class="modal__desc">' + p.desc + '</div>' +
      '<div class="modal__role">Role: ' + p.role + '</div>' +
      galleryImgs;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    modal.scrollTop = 0;
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  modal.querySelector('.modal__overlay').addEventListener('click', closeModal);
  modal.querySelector('.modal__close').addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  /* ===== FILTER ===== */
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });

  /* ===== INIT ===== */
  renderProjects();

})();
