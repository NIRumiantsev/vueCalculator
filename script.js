const config = {
    el: '#calc',
    data: {
        inputMessage: '',
        result: ''
    },
    methods: {

        saveInput: function (value) {
            this.inputMessage += value;
        },

        printResult: function () {
            this.result = eval(this.inputMessage);
            this.inputMessage = this.result;
        },

        calcClear: function () {
            location.reload();
        }

    }
};
let calc = new Vue(config);
