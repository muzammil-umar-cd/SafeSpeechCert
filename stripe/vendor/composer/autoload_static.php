<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit5e600b2a7b2e2b90086c4e8e71bbd32d
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Stripe\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Stripe\\' => 
        array (
            0 => __DIR__ . '/..' . '/stripe/stripe-php/lib',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit5e600b2a7b2e2b90086c4e8e71bbd32d::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit5e600b2a7b2e2b90086c4e8e71bbd32d::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit5e600b2a7b2e2b90086c4e8e71bbd32d::$classMap;

        }, null, ClassLoader::class);
    }
}
