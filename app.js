import { skills } from './config/data-store.js';
import { initCursorEngine } from './modules/cursor-engine.js';
import { initNavigation } from './modules/navigation.js';
import { initModalRouter } from './modules/modal-router.js';
import { initChatbot } from './modules/assistant.js';
import { initTextFlipper } from './modules/text-flipper.js';

document.addEventListener('DOMContentLoaded', () => {
    initCursorEngine();
    initNavigation();
    initModalRouter();
    initChatbot();
    initTextFlipper();

    const cloud = document.getElementById('skillsCloud');

    skills.forEach((s, i) => {
        const span = document.createElement('span');
        span.className = 'skill-tag';
        span.textContent = s;
        span.style.animationDelay = `${i * 0.05}s`;
        cloud.appendChild(span);
    });
});
