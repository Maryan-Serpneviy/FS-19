const Const = {
    MAX_DIGITS: 14,
    RegExp: {
        name: /^([A-zА-я]{4,}) ([A-zА-я]{4,}) ?([A-zА-я]{4,})?$/,
        phone: /\+?(\d{2}) ?(\(|-| )?[0-9](-| )?(\d{2})(\)|-| )?(-| )?(\d{3})(-| )?(\d{2})(-| )?(\d{2})$/
    },
    valid: 'border: 5px solid #28a745; background: #fff'
};

export default Const;