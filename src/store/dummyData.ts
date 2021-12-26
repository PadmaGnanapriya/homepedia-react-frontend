import userImage from "../assets/images/user1.png";

export const suppliers = [
  {
    id: 1,
    fullName: 'Padma Gnanapriya',
    location: 'Galle',
    contact: '+94766328189',
    image: userImage,
    isRecommended: true,
    rating: .5,
    serviceList: ['Masons', 'Electrical'],
    comments: null
  },
  {
    id: 2,
    fullName: 'Full Name',
    location: 'Galle',
    contact: '+94766328189',
    image: userImage,
    isRecommended: true,
    rating: 1,
    serviceList: ['Masons', 'Plumbers', 'Electrical'],
    comments: null
  },
  {
    id: 3,
    fullName: 'Full Name',
    location: 'Galle',
    contact: '+94766328189',
    image: userImage,
    isRecommended: false,
    rating: .4,
    serviceList: ['Masons', 'Tiles'],
    comments: null
  },
  {
    id: 4,
    fullName: 'Full Name',
    location: 'Kelaniya',
    contact: '+94766328189',
    image: userImage,
    isRecommended: true,
    rating: .2,
    serviceList: ['Painters', 'Electrical'],
    comments: null
  },
]


export const serviceTypes = [
  {label: 'Masons', icon: 'icon-con-helmet'},
  {label: 'Plumbers', icon: 'icon-con-u-bend'},
  {label: 'Painters', icon: 'icon-con-roller'},
  {label: 'Tiles', icon: 'icon-con-square'},
  {label: 'Carpenter', icon: 'icon-con-saw'},
  {label: 'Electrical', icon: 'icon-con-pliers'},
  {label: 'Welding', icon: 'icon-con-electricity'},
  {label: 'Other', icon: 'icon-con-hammer-screwdriver-2'},
]



export const cities = [
  'Galle', 'Matara', 'Hambanthota', 'Colombo', 'Gampaha', 'Kaluthara', 'Kandy'
]
