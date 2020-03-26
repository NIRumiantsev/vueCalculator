const config = {
    el: '#calc',
    data: {
        inputMessage: '',
        result: ''
    },
    methods: {

        saveInput: function (value) {
            this.result = '';
            this.inputMessage += value;
        },

        printResult: function () {
            this.result = eval(this.inputMessage);
            this.inputMessage = '';
        },

        calcClear: function () {
            this.result = '';
            this.inputMessage = '';
        }

    }
};
let calc = new Vue(config);
