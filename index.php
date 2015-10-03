<?php

return [

	'name' => 'bixie/themedemo',

	'type' => 'extension',

	'main' => function ($app) {
		$app->on('request', function ($event, $request) use ($app) {
			if ($app->isAdmin()) {
				return;
			}
			$style = $request->get('style');
			if ($style !== null) {
				$app['session']->set('_bixieThemedemo.style', $style);
			}
			$sessionStyle = $app['session']->get('_bixieThemedemo.style');
			if ($sessionStyle) {
				$app['theme']->config['default_style'] = $sessionStyle;
			}
		});
	},

	'settings' => 'settings-themedemo',

	'config' => [
		'mainpage_title' => '',
		'tags' => []
	]

];
