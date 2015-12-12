module.exports = [


    {
        entry: {
            "formmaker-textbox2": "./fieldtypes/textbox2/textbox2.vue",
            /*pagekit addons*/
            "widget-demo": "./app/components/widget-demo.vue",
            "settings": "./app/components/settings.vue"
        },
        output: {
            filename: "./app/bundle/[name].js"
        },
        externals: {
            "lodash": "_",
            "jquery": "jQuery",
            "uikit": "UIkit",
            "vue": "Vue"
        },
        module: {
            loaders: [
                {test: /\.vue$/, loader: "vue"}
            ]
        }
    }

];
