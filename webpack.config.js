module.exports = [


    {
        entry: {
            "formmaker-pulldown-custom": "./fieldtypes/pulldown-custom/pulldown-custom.vue",
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
