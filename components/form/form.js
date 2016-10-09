(function () {
	'use strict';

	/**
	 * @class Form
	 * Компонента "Форма"
	 */
	class Form {

		/**
		 * @constructor
		 * @param  {Object} opts
		 */
		constructor({el, data, onSubmit, onClose}) {
			this.el = el;
			this.data = data;
			this.onSubmit = onSubmit;
			this.onClose = onClose;

			this.render();
			this._initEvents();
		}


		/**
		 * Создаем HTML
		 */
		render () {
			this.el.innerHTML = `
			<form class="form pure-form">
				<fieldset>						
				
					<input class="form__input"
						type="text" name="title"
						required="required"
						placeholder="title"/>
					
					<input class="form__input"
						type="text" name="comment"
						required="required"
						placeholder="comment"/>
						
					<button class="form__btn pure-button" type="submit">
						Добавить
					</button>
											
					<button class="form__btn pure-button" type="close">
						Очистить
					</button>
					
				</fieldset>
			</form>`;
		}


		/**
		 * Получение элемента формы по имени
		 * @param  {string} name
		 * @return {HTMLElement}
		 */
		getField (name) {
			return this.el.querySelector(`[name="${name}"]`);
		}


		/**
		* Развешиваем события
		*/
		_initEvents () {
			this.el.addEventListener('submit', this._onSubmit.bind(this));/**/

			this.el.addEventListener('close', this._onClose.bind(this));
		}


		/**
		* Отправка данных формы
		* @param {Event} event
		* @private
		*/
		_onSubmit (event) {
			event.preventDefault();

			this.onSubmit(this);
			event.target.reset();
		}

		_onClose (event) {
			event.preventDefault();
            this.onClose(this);
            event.target.reset();

		    console.log('Close');
		}

	}


	//export
	window.Form = Form;
})();