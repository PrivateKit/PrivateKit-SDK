# react-native-private-kit-sdk

## Docs
Dedicated website for documentation coming up soon. Fow now please follow the Usage section.

## Getting started

`$ npm install react-native-private-kit-sdk --save`

### Mostly automatic installation

`$ react-native link react-native-private-kit-sdk`

## Usage
```javascript
import { BluetoothService, MagnetometerService, LocationService} from 'react-native-private-kit-sdk';

// For Bluetooth usage
BluetoothService.init();
BluetoothService.requestBluetoothStatus();
BluetoothService.enableBT();
BluetoothService.start();

// For Magnetometer usage
MagnetometerService.start();

// For LocationService usage
// Check and obtain the permissions first -
let locationPermission = LocationService.checkLocationPermission()
if (locationPermission == false) {
  LocationService.requestLocation();
}
LocationService.start();
```
