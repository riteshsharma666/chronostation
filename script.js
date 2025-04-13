document.addEventListener('keydown', (e) => {
    const keys = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    window.konami = window.konami || [];
    window.konami.push(e.key);
    window.konami.splice(-keys.length-1, window.konami.length - keys.length);
    if (window.konami.join('') === keys.join('')) {
      alert('✨ Temporal breach unlocked! Secret mode enabled.');
    }
  }); 