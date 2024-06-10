import {APP_IMAGES} from 'src/assets/images';
import {Routes} from 'src/navigation/route';

export default {
  press_again: 'Press again to Exit App.',
  splash: {
    welcome: 'Welcome to the Application.',
  },
  home: {
    dashboard: 'Dashboard',
    upcoming: 'Upcoming Consultations',
    medical: 'Medical Files',
    doc1: 'Dr. Marta Juarez',
    doc2: 'Dr. Hans Gerhoff',
    pdf1: 'Blood tests.pdf',
    pdf2: 'Cardiology results.pdf',
    pdf3: 'Blood tests 20-02-2020.pdf',
    pdf4: 'MRI results.pdf',
    num_2: 2,
    num_7: 7,
    schedule: 'Schedule',
    call: 'Call',
  },
  device: {
    device_detail: 'Device Details',
    app_version: 'App Version :',
    build_version: 'Build Version :',
    bundle: 'Bundle Identifier :',
    battery: 'Battery Level :',
    disk_space: 'Total Disk Space :',
  },
  account: {
    account: 'Acconut Info',
    camera: 'Camera',
    gallery: 'Gallery',
    cancel: 'Cancle',
    remove_photo: 'Remove Photo',
    yes: 'Yes',
    no: 'No',
    are_you_sure: 'Are you sure you want to remove photo.',
    ph_name: 'Enter your name',
    show_date: 'Show date picker',
    show_time: 'Show time picker',
    agree: 'I agree with your apps conditions.',
    settings: 'Settings',
    logout: 'Logout',
  },
  bottom_tab: [
    {
      id: 1,
      icon: APP_IMAGES.ic_home,
      route: Routes.Home,
      title: 'Home',
    },
    {
      id: 2,
      icon: APP_IMAGES.ic_document,
      route: Routes.DeviceDetails,
      title: 'Device',
    },
    {
      id: 3,
      icon: APP_IMAGES.ic_profile,
      route: Routes.Account,
      title: 'Account',
    },
  ],
};
