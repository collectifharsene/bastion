<?php
namespace Bastion\Tests\Integration;

define( 'BASTION_PLUGIN_ROOT', dirname( dirname( __DIR__ ) ) . DIRECTORY_SEPARATOR );
define( 'BASTION_TESTS_FIXTURES_DIR', dirname( __DIR__ ) . '/Fixtures' );
define( 'BASTION_TESTS_DIR', __DIR__ );
define( 'BASTION_IS_TESTING', true );

// Manually load the plugin being tested.
tests_add_filter(
    'muplugins_loaded',
    function() {
        // Load the plugin.
        require BASTION_PLUGIN_ROOT . '/bastion.php';
    }
);
