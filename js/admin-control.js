// Admin panel access controller
// Double-click anywhere to open admin login/panel (hidden feature)
(function () {
	try {
		// Prevent attaching on admin page itself
		if (location.pathname.toLowerCase().includes('admin.html')) return;

		// Config
		const ADMIN_URL = 'admin.html';
		const ENABLE_PASSWORD = true; // set false to skip prompt
		const DEFAULT_PASS = 'ImRaN15092001';

		// Utility: Open admin panel in same tab
		function openAdmin() {
			window.location.href = ADMIN_URL;
		}

		// Attach a throttled double-click listener
		let lastTs = 0;
		document.addEventListener('dblclick', function (e) {
			const now = Date.now();
			if (now - lastTs < 800) return; // throttle
			lastTs = now;

			// Optional guard: only trigger if user presses Alt during dblclick
			// Comment next 3 lines if you want plain dblclick
			// if (!e.altKey) {
			//   return;
			// }

			// Password flow
			if (ENABLE_PASSWORD) {
				const stored = localStorage.getItem('adminPassword') || DEFAULT_PASS;
				const input = prompt('Enter admin password to continue:');
				if (!input) return;
				if (input === stored) {
					localStorage.setItem('adminLoggedIn', 'true');
					openAdmin();
				} else {
					alert('Wrong password. Access denied.');
				}
			} else {
				openAdmin();
			}
		});

		// Optional: keyboard shortcut Ctrl+Alt+A
		document.addEventListener('keydown', function (e) {
			if (e.ctrlKey && e.altKey && (e.key === 'a' || e.key === 'A')) {
				e.preventDefault();
				localStorage.setItem('adminLoggedIn', 'true');
				openAdmin();
			}
		});
	} catch (err) {
		console.warn('Admin control init failed:', err);
	}
})();

