'use strict';

const submit = document.querySelector('.account-create');
const pwd = document.querySelector('#pwd');
const pwdConfirm = document.querySelector('#pwd-confirm');
const pwdLabel = document.querySelector('.pwd-label');
const pwdLabelConfirm = document.querySelector('.pwd-label-confirm');
const inputs = document.querySelectorAll('input');

submit.addEventListener('click', (e) => {
	// e.preventDefault();
	if (pwd.value !== pwdConfirm.value) {
		pwd.classList.toggle('error');
		pwdConfirm.classList.toggle('error');
		pwdLabelConfirm.textContent =
			pwdLabel.textContent = `❌ Passwords don't match! ❌`;
		setTimeout((e) => {
			pwd.classList.toggle('error');
			pwdConfirm.classList.toggle('error');
			pwdLabelConfirm.textContent = 'CONFIRM PASSWORD';
			pwdLabel.textContent = 'PASSWORD';
			pwdConfirm.value = pwd.value = '';
		}, 3000);
	}
});
