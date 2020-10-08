<?php

namespace Zaxbux\Gmailmailerdriver\Controllers;

use Input;
use Response;
use Redirect;
use Backend;
use Backend\Classes\Controller;
use Zaxbux\GmailMailerDriver\Classes\GoogleAPI;

class GoogleAuthRedirectURL extends Controller {

	public $requiredPermissions = ['zaxbux.gmailmailerdriver.access_settings'];

	public function index() {
		try {
			$authCode = Input::get('code');
			
			$googleAPI = new GoogleAPI();
			$googleAPI->authorize($authCode);
		} catch (\Exception $ex) {
		   
			return 'Error authorizing Gmail Driver plugin: ' . $ex->getMessage();
		}

		return Redirect::to(Backend::url('system/settings/update/zaxbux/gmailmailerdriver/gmail'));
	}
}