class utils{
    editTextValid(str){
        var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        // var format=/^[a-z0-9A-z]/
        return !format.test(str)
    }
    passwordValid(str){
        var err = ''
        var uppercase = /[A-Z]/;
        var lowercase = /[a-z]/;
        var numbercase = /[0-9]/;
        if (!uppercase.test(str)) {
            err += 'Password must contains upper case, '
        } if (!lowercase.test(str)) {
            err += 'Password must contains lower case, '
        } if (!numbercase.test(str)) {
            err += 'Password must contains number, '
        }
        return err
    }
}

module.exports= utils