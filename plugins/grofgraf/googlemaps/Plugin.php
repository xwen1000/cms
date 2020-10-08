<?php namespace GrofGraf\GoogleMaps;

use Backend;
use System\Classes\PluginBase;

/**
 * GoogleMaps Plugin Information File
 */
class Plugin extends PluginBase
{
    /**
     * Returns information about this plugin.
     *
     * @return array
     */
    public function pluginDetails()
    {
        return [
            'name'        => 'GoogleMaps',
            'description' => 'Google Maps plugin for OctoberCMS',
            'author'      => 'GrofGraf',
            'icon'        => 'icon-map'
        ];
    }

    /**
     * Register method, called when the plugin is first registered.
     *
     * @return void
     */
    public function register()
    {

    }

    /**
     * Boot method, called right before the request route.
     *
     * @return array
     */
    public function boot()
    {

    }

    /**
     * Registers any front-end components implemented in this plugin.
     *
     * @return array
     */
    public function registerComponents()
    {
        return [
            'GrofGraf\GoogleMaps\Components\GoogleMap' => 'googleMap',
        ];
    }

    /**
     * Registers any back-end permissions used by this plugin.
     *
     * @return array
     */
    public function registerPermissions()
    {
        return [
            'grofgraf.googlemaps.settings' => [
                'tab' => 'GoogleMaps',
                'label' => 'Manage google maps settings'
            ],
        ];
    }

    /**
     * Registers back-end navigation items for this plugin.
     *
     * @return array
     */
    public function registerNavigation()
    {
        return []; // Remove this line to activate

        return [
            'googlemaps' => [
                'label'       => 'GoogleMaps',
                'url'         => Backend::url('grofgraf/googlemaps/mycontroller'),
                'icon'        => 'icon-map',
                'permissions' => ['grofgraf.googlemaps.*'],
                'order'       => 500,
            ],
        ];
    }

    public function registerSettings(){
      return [
          'settings' => [
              'label'       => 'Google Maps Settings',
              'description' => 'Settings for google maps',
              'category'    => 'Google Maps',
              'icon'        => 'icon-map',
              'class'       => 'GrofGraf\GoogleMaps\Models\Settings',
              'order'       => 100,
              'permissions' => ['grofgraf.googlemaps.settings']
          ]
      ];
    }
}
