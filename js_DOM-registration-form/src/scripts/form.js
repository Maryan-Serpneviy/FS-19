import Const from './constants.js';
import Region from './region.js';

export default class Form {
    constructor(form, name, phone, region, city, anonymous, submit) {
        this.form = form;
        this.name = name;
        this.phone = phone;
        this.region = region;
        this.city = city;
        this.anonymous = anonymous;
        this.submit = submit;
    }
    // validation flags
    validName = false;
    validPhone = false;
    regionSelected = false;
    citySelected = false;

    validateName = () => {
        // using arrays
        if (false) {
            const nameParts = this.name.value.trim().split(' ')
                .filter(part => part !== '')
                .map(part => part.trim());
            this.validName = nameParts.every(el => el.length >= 4);
            if (this.validName && (nameParts.length === 2 || nameParts.length === 3)) {
                this.validName = true;
                this.name.className = 'valid';
            } else {
                this.validName = false;
                this.name.className = 'invalid';
            }
        }
        // using RegExp
        if (this.name.value.match(Const.RegExp.name)) {
            this.validName = true;
            this.name.className = 'valid';
        } else {
            this.validName = false;
            this.name.className = 'invalid';
        }
    }

    focusName = () => {
        this.validName ? this.name.className = 'valid' : this.name.className = 'invalid';
    }

    validatePhone = () => {
        if (this.phone.value.match(Const.RegExp.phone) &&
            this.phone.value.length < Const.MAX_DIGITS) {
            this.validPhone = true;
            this.phone.className = 'valid';
        } else {
            this.validPhone = false;
            this.phone.className = 'invalid';
        }
    }

    focusPhone = () => {
        if (!this.phone.value) {
            this.phone.value = '+380';
        }
        this.validPhone ? this.phone.className = 'valid' : this.phone.className = 'invalid';
    }

    validateRegion = () => {
        if (this.region.value !== this.region.children[0].textContent &&
            this.region.value !== this.region.children[1].textContent) {

            this.regionSelected = true;
            this.region.className = 'valid';
            this.city.classList.remove('hidden');
            this.city.innerHTML = Region[this.region.value];
        } else if (this.region.value === this.region.children[1].textContent) {
            this.regionSelected = true;
            this.region.className = 'valid';
            this.city.classList.add('hidden');
        } else {
            this.regionSelected = false;
            this.region.className = 'invalid';
            this.city.classList.add('hidden');
        }
    }

    validateCity = () => {
        if (this.city.value !== this.city.children[0].textContent) {
            this.citySelected = true;
            this.city.className = 'valid';
        } else {
            this.citySelected = false;
            this.city.className = 'invalid';
        }
    }

    setAnonymous = () => {
        if (!this.phone.disabled) {
            this.validPhone = true;
            this.phone.disabled = true;
            this.phone.className = 'disabled';
            this.phone.value = 'Not specified';
        } else {
            this.validPhone = false;
            this.phone.disabled = false;
            this.phone.className = 'nostate';
            this.phone.value = '';
        }
    }

    enableSubmit = () => {
        if (this.validName && this.validPhone && this.regionSelected && this.citySelected) {
            this.submit.disabled = false;
            this.submit.style = Const.valid;
        }
    }
}