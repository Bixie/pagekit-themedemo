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
				if ($app['locator']->get('storage/logo_' . $sessionStyle . '.png')) {
					$app['theme']->config['logo'] = '/storage/logo_' . $sessionStyle . '.png';
				}
				if ($app['locator']->get('storage/favicon_' . $sessionStyle . '.ico')) {
					$app->module('system/site')->config['icons']['favicon'] = '/storage/favicon_' . $sessionStyle . '.ico';
				}
			}
		});
	},

	'settings' => 'settings-themedemo',

	'config' => [
		'mainpage_title' => '',
		'tags' => []
	],

	'events' => [

		'view.system/widget/edit' => function ($event, $view) use ($app) {
			$view->script('widget-demo', 'bixie/themedemo:app/bundle/widget-demo.js', 'widget-edit');
			if (strpos($app->theme()->name, 'bix') === false) return;
			$view->data('$themedemo' , [
				'config' => $app->module('bixie/themedemo')->config(),
				'styles' => $app->theme()->getStyles()
			]);
		}


	]

];
