(function () {
 	'use strict';

	//import
	let Menu = window.Menu;
	let Form = window.Form;

	let menu = new Menu({
		el: document.querySelector('.js-menu'),
		onPick (item) {
			console.log(item);
		},
		data: {
			title: 'Расчет стоимости поездки на автомобиле',
			items: []
		}
	});

	new Form({
		el: document.querySelector('.js-form'),

		onSubmit (form) {
			menu.addItem({
                title: form.getField('title').value,
				comment: form.getField('comment').value
			});
		},

		onClose (form) {
			menu.removeLastItem();
		}

	});

})();