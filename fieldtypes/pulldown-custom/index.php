<?php
return [
	'id' => 'pulldown-custom',
	'label' => __('Pulldown custom'),
	'resource' => 'bixie/themedemo:app/bundle',
	'config' => [
		'hasOptions' => 1,
		'readonlyOptions' => 1,
		'required' => -1,
		'multiple' => -1,
		'size' => 1,
		'placeholder' => ''
	],
	'getOptions' => function ($field) {
	    if (empty($field->options)) {
			$field->options = [
				['value' => 'default-1', 'text' => 'Default option 1', 'attachValue' => true],
				['value' => 'default-2', 'text' => 'Default option 2', 'attachValue' => true],
				['value' => 'default-3', 'text' => 'Default option 3', 'attachValue' => true]
			];
		}
		return $field->options;
	}
];