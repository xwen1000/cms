<?php namespace GrofGraf\GoogleMaps\Models;

use Model;
use ValidationException;

/**
 * Settings Model
 */
class Settings extends Model
{
  use \October\Rain\Database\Traits\Validation;

  public $implement = [
    'System.Behaviors.SettingsModel',
    '@RainLab.Translate.Behaviors.TranslatableModel'
  ];

  public $translatable = [
    'directions_button_text',
  ];

  public $rules = [
    'api_key' => 'required',
    'latitude' => 'required',
    'longtitude' => 'required',
    'height' => 'required',
    'width' => 'required',
    'zoom' => 'required',
    'map_type' => 'required'
  ];

  // A unique code
  public $settingsCode = 'google_maps_settings';

  // Reference to field configuration
  public $settingsFields = 'fields.yaml';

  public $attachOne = [
      'marker_image' => 'System\Models\File'
  ];

  public function get_marker_image() {
    if ($this->marker_image) {
      return $this->marker_image;
    }
    return null;
  }

  public function beforeValidate(){
      $file = $this->marker_image()->withDeferred($this->sessionKey)->first();
      if($file){
        $filename = $file->getLocalPath();
        list($width, $height) = getimagesize($filename);
        if ($height > 100) {
            throw new ValidationException(['marker_image' => 'Marker image height must be smaller than 50px']);
        }
      }
  }
}
