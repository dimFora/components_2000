(function () {
	'use strict';

	// import
	let Menu = window.Menu;


	let menuData = {
		title: 'Рабочие ссылки',
		items: [
			{
				anchor: 'mail.ru'
			},
			{
				anchor: 'yandex.ru'
			},
			{
				anchor: 'yahoo.com'
			},
			{
				anchor: 'google.com'
			}
		]
	};


	let menu = new Menu({
		el: document.querySelector('.js-menu'),
		data: menuData
	});

})();