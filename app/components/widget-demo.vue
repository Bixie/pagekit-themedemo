<template>

    <div class="uk-form-horizontal">

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Demo style' | trans }}</label>
            <div class="uk-form-controls">
                <select class="uk-form-width-large" v-model="widget.theme.demo_style">
                    <option v-for="option in styles | themeStyles true" :value="option.id">{{ option.value }}</option>
                </select>
            </div>
        </div>

    </div>

</template>

<script>

    module.exports = {

        section: {
            label: 'Demo',
            priority: 190
        },

        data: function () {
            return window.$themedemo;
        },

        props: ['widget', 'config'],

        filters: {
            themeStyles: function (value, select) {
                var vm = this, options = select ? [{value: '', text: vm.$trans('- default style -')}] : [];
                _.each(value, function (style) {
                    options.push({value: style, text: vm.$trans(_.startCase(style))});
                });
                return options;
            }
        }
    };

    window.Widgets.components['bixie-themedemo:settings'] = module.exports;

</script>
