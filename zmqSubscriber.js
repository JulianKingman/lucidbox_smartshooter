import { Subscriber } from 'zeromq';

async function main() {
  const sub = new Subscriber();

  sub.connect(SMARTSHOOTER_URL);
  sub.subscribe('');

  console.log(`Opened listener to: ${subAddress}`);

  for await (const [msg] of sub) {
    if (!msg) return;
    const jsonMsg = JSON.parse(msg.toString())
    if (jsonMsg.msg_id === 'PhotoUpdated') {
      const a = {
        "msg_type": "Event",
        "msg_id": "PhotoUpdated",
        "msg_seq_num": 25029,
        "msg_user_id": 0,
        "msg_result": true,
        "PhotoSelection": "Single",
        "PhotoKey": "67d6d4fc-1242-11ef-94fc-9282ede469ff",
        "CameraKey": "Nikon Corporation|D850|3119826",
        "PhotoLocation": "Camera",
        "PhotoOriginalName": "DSC_0000.JPG",
        "PhotoOriginalPath": "DSC_0000.JPG",
        "PhotoComputedName": "SSP_31.JPG",
        "PhotoDateCaptured": "20240514 17:36:25.000",
        "PhotoOrigin": "ui",
        "PhotoFormat": "JPEG",
        "PhotoOrientation": "Unknown",
        "PhotoAperture": "",
        "PhotoShutterSpeed": "",
        "PhotoISO": "",
        "PhotoFocalLength": "",
        "PhotoWidth": 4128,
        "PhotoHeight": 2752,
        "PhotoFilesize": 1412409,
        "PhotoIsImage": true,
        "PhotoIsHidden": false,
        "PhotoSequenceNum": 31,
        "PhotoBatchNum": 31,
        "PhotoSessionNum": 1,
        "PhotoSessionName": "",
        "PhotoStorageID": 0,
        "PhotoPersistentID": "",
        "NodeKey": ""
      }
      const b = {
        "msg_type": "Event",
        "msg_id": "CameraUpdated",
        "msg_seq_num": 25030,
        "msg_user_id": 0,
        "msg_result": true,
        "CameraSelection": "Single",
        "CameraKey": "Nikon Corporation|D850|3119826",
        "CameraMetadataTimestamp": 0,
        "CameraName": "D850",
        "CameraGroup": "",
        "CameraOrientation": "None",
        "CameraTriggerIndex": 0,
        "CameraStatus": "Ready",
        "PhotoBatchNum": 32,
        "CameraDownloadRate": 260.52478,
        "CameraNumPhotosTaken": 11,
        "CameraNumPhotosFailed": 1,
        "CameraNumDownloadsComplete": 11,
        "CameraNumDownloadsFailed": 0,
        "CameraPhotosPerCapture": 1,
        "NodeKey": ""
      }
      const c = {
        "msg_type": "Event",
        "msg_id": "OptionsUpdated",
        "msg_seq_num": 25031,
        "msg_user_id": 0,
        "msg_result": true,
        "NodeSelection": "Single",
        "NodeKey": "",
        "NodeEndpoint": "",
        "NodeNetworkMode": "P2P",
        "AutoConnect": true,
        "AutoSynchroniseTime": false,
        "AutoScanBarcode": true,
        "AutoBackup": false,
        "OverwriteBackup": false,
        "AddBarcodeToMetadata": true,
        "RestrictBarcodeFormat": false,
        "FilterBarcodeScanning": false,
        "ResetSequenceNumOnEdit": false,
        "ResetBatchNumOnEdit": false,
        "NodeTimeout": 20,
        "FilenameExpression": "SSP_[S]",
        "PhotoSessionName": "",
        "PhotoSessionNum": 1,
        "UniqueTag": "CustomTag",
        "Barcode": "Hallo!",
        "PhotoBarcodeFormat": "QRCode",
        "DefaultStorage": "Disk",
        "DefaultFocusMode": "Not set",
        "DefaultLiveviewFPS": 20,
        "DefaultVideoFPS": 20,
        "BarcodeCameraFilter": "",
        "DownloadPath": "/Users/Julian/Pictures/Smart Shooter 5",
        "FallbackPath": "/Users/Julian/Pictures/Smart Shooter 5/Backup",
        "BackupPath": "",
        "ApplicationName": "Julians-MBP.domain"
      }
      const d = {
        "msg_type": "Event",
        "msg_id": "PhotoUpdated",
        "msg_seq_num": 25032,
        "msg_user_id": 0,
        "msg_result": true,
        "PhotoSelection": "Single",
        "PhotoKey": "67d6d4fc-1242-11ef-94fc-9282ede469ff",
        "CameraKey": "Nikon Corporation|D850|3119826",
        "PhotoLocation": "Local Disk",
        "PhotoOriginalName": "DSC_0000.JPG",
        "PhotoOriginalPath": "DSC_0000.JPG",
        "PhotoComputedName": "SSP_31.JPG",
        "PhotoDateCaptured": "20240514 17:36:25.000",
        "PhotoOrigin": "ui",
        "PhotoFormat": "JPEG",
        "PhotoOrientation": "None",
        "PhotoAperture": "3.3",
        "PhotoShutterSpeed": "10/16000",
        "PhotoISO": "12800",
        "PhotoFocalLength": "30.0",
        "PhotoWidth": 4128,
        "PhotoHeight": 2752,
        "PhotoFilesize": 1412409,
        "PhotoIsImage": true,
        "PhotoIsHidden": false,
        "PhotoSequenceNum": 31,
        "PhotoBatchNum": 31,
        "PhotoSessionNum": 1,
        "PhotoSessionName": "",
        "PhotoStorageID": 0,
        "PhotoPersistentID": "",
        "PhotoIsScanned": true,
        "PhotoName": "SSP_31.JPG",
        "PhotoFilename": "/Users/Julian/Pictures/Smart Shooter 5/SSP_31.JPG",
        "PhotoHash": "5E22B1D0",
        "PhotoBarcode": "Hallo!",
        "PhotoBarcodeFormat": "QRCode",
        "PhotoBarcodeLocationLeft": 0.350291,
        "PhotoBarcodeLocationTop": 0.571584,
        "PhotoBarcodeLocationRight": 0.3922,
        "PhotoBarcodeLocationBottom": 0.62609,
        "NodeKey": ""
      }
      const e = {
        "msg_type": "Event",
        "msg_id": "NodeUpdated",
        "msg_seq_num": 25033,
        "msg_user_id": 0,
        "msg_result": true,
        "NodeSelection": "Single",
        "NodeKey": "",
        "NodeEndpoint": "",
        "NodeNetworkMode": "P2P",
        "NodeName": "Julians-MBP.domain",
        "NodeVersion": "v5.3",
        "NodeIsLiveviewConsumer": false,
        "NodeDateTime": 1715726189605,
        "NodeUpTime": 1168055,
        "NodePlatform": "macos",
        "NodeDiskSpace": 100401266688,
        "NodeMemoryUsage": 137461439
      }
    } else {
      console.log(`Received: ${JSON.stringify(jsonMsg)}`);
    }
  }
}

main().catch(err => console.error(err));