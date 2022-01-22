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

// ------------------------

export const cities = [
  'Galle', 'Matara', 'Hambanthota', 'Colombo', 'Gampaha', 'Kaluthara', 'Kandy'
]


export const cardData = {
  totalIncome: {
    current: 100000, //this year
    last: 2100000
  },
  newServiceSupplierRegistration: {
    current: 10,
    last: 21
  },
  totalServiceSuppliersRequest: {
    pending: 12,
    rejected: 120
  },
  totalMessages: {
    unread: 4,
    read: 100
  }
}

export const chartData = {
  monthlyIncomeForYear: {
    current: [1200, 21000, 24000, 12000, 40000, 1200, 21000, 24000, 12000, 40000, 1200, 21000, 24000, 12000], //jan-dec
    last: [1200, 21000, 24000, 12000, 40000, 1200, 21000, 24000, 12000, 40000, 1200, 21000, 24000, 12000],
  },
  totalVisitorCountForMonth: {
    current: [120, 210, 200, 100, 400, 100, 20, 242, 120, 40, 110, 210, 40, 120], //jan-dec
    last: [200, 220, 240, 120, 40, 122, 200, 240, 120, 400, 10, 240, 240, 180],
  },
  totalVisitorCountForWeek: {
    current: [12, 33, 23, 34, 22, 11, 33, 42], //mon-sun
    last: [12, 23, 34, 22, 11, 33, 42, 10],
  },
  totalNewVisitorCountForWeek: {  //not used
    current: [2, 3, 2, 3, 2, 1, 3, 2],//mon-sun
    last: [1, 3, 34, 2, 1, 3, 4, 0],
  },
}

const tableData = {
  serviceSupplierDistributionByCategory: {
    mason: 23, painter: 12, driver: 12
  }, serviceSupplierDistributionByCities: {
    Galle: 123, matara: 12
  }
}

export const pieData = {
  visitorDistribution: [{name: 'ios', count: 23}, {name: 'mac', count: 2}, {name: 'android', count: 23}, {name: 'other',count: 2}]
}

