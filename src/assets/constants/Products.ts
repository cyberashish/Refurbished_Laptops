import {v4 as uuidv4} from "uuid";

const refurbishedLaptops = [

    {
       id: uuidv4(),
       brand: "Dell",
       category: "Laptop",
       image:['https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858615/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_0_cdu0nd.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858619/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_1_yv5xct.png?tr=w-640'],
       title: 'Dell Latitude 5420 | Intel i7-11th Gen | 14" FHD Touchscreen | Win 11',
       rating: 5,
       pricing: {
        actualPrice: "65,089",
        discountedPrice: "55,990",
        },
       discountPercentage: 14,
       stock: {quantity:10,isAvailable:true},
       brandColor: "Platinum Silver",
       specifications: {
        processor: ' Intel Core i7 13th Generation',
        ram: "16GB DDR5", 
        storage: '512GB SSD', 
        graphicsCard: 'NVIDIA RTX 3060', 
        display: {
          size: "15.6-inch", 
          resolution: "1920x1080", 
          refreshRate: '144Hz', 
        },
        battery: "6-cell Li-ion", 
        weight: "1.8kg", 
        operatingSystem: "Windows 11, macOS", 
        connectivity:  ["Wi-Fi 6", "Bluetooth 5.2", ], 
        ports: ["USB-C", "Thunderbolt", "HDMI"], 
        warranty:{
            period: "2 years",
            coverage: "Parts and Labor"
        }
      },

    },
    {
        id: uuidv4(),
        brand: "Lenovo",
        category: "Laptop",
        image: ['https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718028151/Croma%20Assets/Computers%20Peripherals/Laptop/Images/275679_0_cbxchx.png?tr=w-640', 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715933768/Croma%20Assets/Computers%20Peripherals/Laptop/Images/275679_1_ilcipl.png?tr=w-640'],
        title: 'Lenovo ThinkPad E480 | i3-7th gen | 14" HD | Windows 11',
        rating: 4.8,
        pricing: {
          actualPrice: "1,19,999",
          discountedPrice: "1,09,999",
        },
        discountPercentage: 8,
        stock: {quantity: 5, isAvailable: true},
        brandColor: "Black",
        specifications: {
          processor: 'Intel Core i7 11th Gen',
          ram: "16GB DDR4",
          storage: '512GB SSD',
          graphicsCard: 'Intel Iris Xe Graphics',
          display: {
            size: "14-inch",
            resolution: "1920x1080",
            refreshRate: '60Hz',
          },
          battery: "57Wh",
          weight: "1.13kg",
          operatingSystem: "Windows 10 Pro",
          connectivity: ["Wi-Fi 6", "Bluetooth 5.0", "LTE 4G"],
          ports: ["USB-A", "USB-C", "Thunderbolt 4", "HDMI 2.0"],
          warranty: {
            period: "3 years",
            coverage: "Parts and Labor"
          }
        },
    },
    {
        id: uuidv4(),
        brand: "HP",
        category: "Laptop",
        image: ['https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1738250233/Croma%20Assets/Computers%20Peripherals/Laptop/Images/304464_0_xtjdqz.png?tr=w-640', 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1738250235/Croma%20Assets/Computers%20Peripherals/Laptop/Images/304464_1_s2js1l.png?tr=w-640'],
        title: 'HP C640 | i5-10th Gen | 14" HD | 8GB DDR4 RAM | Touchscreen Laptop | Win 11',
        rating: 4.7,
        pricing: {
          actualPrice: "74,999",
          discountedPrice: "67,999",
        },
        discountPercentage: 10,
        stock: {quantity: 8, isAvailable: true},
        brandColor: "Silver",
        specifications: {
          processor: 'Intel Core i5 12th Gen',
          ram: "8GB DDR4",
          storage: '512GB SSD',
          graphicsCard: 'Intel Iris Xe Graphics',
          display: {
            size: "14-inch",
            resolution: "1920x1080",
            refreshRate: '60Hz',
          },
          battery: "51Wh",
          weight: "1.6kg",
          operatingSystem: "Windows 11",
          connectivity: ["Wi-Fi 5", "Bluetooth 5.1"],
          ports: ["USB-A", "USB-C", "HDMI", "MicroSD"],
          warranty: {
            period: "1 year",
            coverage: "Parts and Labor"
          }
        },
    },
    {
        id: uuidv4(),
        brand: "HP",
        category: "Laptop",
        image: ['https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724064217/259473_0_pv1xzl.png?tr=w-640', 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683563142/Croma%20Assets/Computers%20Peripherals/Laptop/Images/259473_1_drmmu4.png?tr=w-640'],
        title: 'HP Chromebook | i5-10th Gen | 14" HD | 8GB DDR4 RAM | Touchscreen Laptop',
        rating: 5,
        pricing: {
          actualPrice: "1,99,999",
          discountedPrice: "1,89,999",
        },
        discountPercentage: 5,
        stock: {quantity: 12, isAvailable: true},
        brandColor: "Space Gray",
        specifications: {
          processor: 'Apple M1 Pro',
          ram: "16GB Unified Memory",
          storage: '512GB SSD',
          graphicsCard: 'Apple M1 Pro GPU',
          display: {
            size: "14-inch",
            resolution: "3024x1964",
            refreshRate: '120Hz',
          },
          battery: "70Wh",
          weight: "1.6kg",
          operatingSystem: "macOS Monterey",
          connectivity: ["Wi-Fi 6", "Bluetooth 5.0"],
          ports: ["USB-C", "Thunderbolt 4", "HDMI", "SDXC Card Slot"],
          warranty: {
            period: "1 year",
            coverage: "Parts and Labor"
          }
        },
    },
    {
        id: uuidv4(),
        brand: "Acer",
        category: "Laptop",
        image: ['https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717068665/Croma%20Assets/Computers%20Peripherals/Laptop/Images/304898_0_gybfpq.png?tr=w-640', 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717068667/Croma%20Assets/Computers%20Peripherals/Laptop/Images/304898_1_pzvinc.png?tr=w-640'],
        title: 'Acer Travelmate P249 | i3-7th gen | 14" HD| Win 11',
        rating: 4.9,
        pricing: {
          actualPrice: "1,29,999",
          discountedPrice: "1,19,999",
        },
        discountPercentage: 8,
        stock: {quantity: 6, isAvailable: true},
        brandColor: "Moonlight White",
        specifications: {
          processor: 'AMD Ryzen 9 5900HS',
          ram: "16GB DDR4",
          storage: '1TB SSD',
          graphicsCard: 'NVIDIA GeForce RTX 3060',
          display: {
            size: "14-inch",
            resolution: "1920x1080",
            refreshRate: '120Hz',
          },
          battery: "76Wh",
          weight: "1.7kg",
          operatingSystem: "Windows 11 Home",
          connectivity: ["Wi-Fi 6", "Bluetooth 5.1"],
          ports: ["USB-C", "USB-A", "HDMI 2.0", "Ethernet"],
          warranty: {
            period: "2 years",
            coverage: "Parts and Labor"
          }
        },
    },
    {
        id: uuidv4(),
        brand: "Dell",
        category: "Laptop",
        image: ['https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1732187805/Croma%20Assets/Computers%20Peripherals/Laptop/Images/311051_0_xkl2ks.png?tr=w-400', 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1731325759/Croma%20Assets/Computers%20Peripherals/Laptop/Images/311051_1_tliexj.png?tr=w-640'],
        title: 'Dell Latitude 5410 | i7-10th Gen | 14" FHD Touchscreen | Win 11',
        rating: 4.6,
        pricing: {
          actualPrice: "89,999",
          discountedPrice: "27,999",
        },
        discountPercentage: 68,
        stock: {quantity: 20, isAvailable: true},
        brandColor: "Charcoal Black",
        specifications: {
          processor: 'AMD Ryzen 5 5500U',
          ram: "8GB DDR4",
          storage: '512GB SSD',
          graphicsCard: 'AMD Radeon Vega 7',
          display: {
            size: "15.6-inch",
            resolution: "1920x1080",
            refreshRate: '60Hz',
          },
          battery: "48Wh",
          weight: "1.8kg",
          operatingSystem: "Windows 11 Home",
          connectivity: ["Wi-Fi 5", "Bluetooth 4.2"],
          ports: ["USB-A", "USB-C", "HDMI", "Ethernet"],
          warranty: {
            period: "1 year",
            coverage: "Parts and Labor"
          }
        },
    },
    {
        id: uuidv4(),
        brand: "HP",
        category: "Laptop",
        image: ['https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1736342915/Croma%20Assets/Computers%20Peripherals/Laptop/Images/310954_0_wx0jbi.png?tr=w-640', 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1729588071/Croma%20Assets/Computers%20Peripherals/Laptop/Images/310954_1_ticlzb.png?tr=w-640'],
        title: 'HP C640 | i5-10th Gen | 14" HD | 8GB DDR4 RAM | Win 11',
        rating: 4.8,
        pricing: {
          actualPrice: "49,999",
          discountedPrice: "16,499",
        },
        discountPercentage: 67,
        stock: {quantity: 15, isAvailable: true},
        brandColor: "Platinum",
        specifications: {
          processor: 'Intel Core i7 11th Gen',
          ram: "16GB LPDDR4x",
          storage: '512GB SSD',
          graphicsCard: 'Intel Iris Xe Graphics',
          display: {
            size: "13.5-inch",
            resolution: "2256x1504",
            refreshRate: '60Hz',
          },
          battery: "32.4Wh",
          weight: "1.27kg",
          operatingSystem: "Windows 10 Pro",
          connectivity: ["Wi-Fi 6", "Bluetooth 5.0"],
          ports: ["USB-A", "USB-C", "Surface Connect"],
          warranty: {
            period: "1 year",
            coverage: "Parts and Labor"
          }
        },
    },
    {
        id: uuidv4(),
        brand: "HP",
        category: "Laptop",
        image: ['https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1732187853/Croma%20Assets/Computers%20Peripherals/Laptop/Images/308457_0_byshs1.png?tr=w-640', 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1723633246/Croma%20Assets/Computers%20Peripherals/Laptop/Images/308457_9_daeyud.png?tr=w-640'],
        title: 'HP Latitude E7470 | i5-6th Gen | 14" HD Touchscreen | Win 11',
        rating: 4.9,
        pricing: {
          actualPrice: "1,49,999",
          discountedPrice: "1,39,999",
        },
        discountPercentage: 7,
        stock: {quantity: 10, isAvailable: true},
        brandColor: "Platinum Silver",
        specifications: {
          processor: 'Intel Core i7 11th Gen',
          ram: "16GB LPDDR4x",
          storage: '512GB SSD',
          graphicsCard: 'Intel Iris Xe Graphics',
          display: {
            size: "13.4-inch",
            resolution: "3840x2400",
            refreshRate: '60Hz',
          },
          battery: "52Wh",
          weight: "1.2kg",
          operatingSystem: "Windows 11",
          connectivity: ["Wi-Fi 6", "Bluetooth 5.1"],
          ports: ["USB-C", "Thunderbolt 4", "MicroSD"],
          warranty: {
            period: "2 years",
            coverage: "Parts and Labor"
          }
        },
    },
    {
        id: uuidv4(),
        brand: "Lenevo",
        category: "Laptop",
        image: ['https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718028177/Croma%20Assets/Computers%20Peripherals/Laptop/Images/303421_0_xa8tdy.png?tr=w-640', 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717064005/Croma%20Assets/Computers%20Peripherals/Laptop/Images/303421_1_gvgkpa.png?tr=w-640'],
        title: 'Lenovo ThinkPad X280 | i5-8th Gen | 12.5" HD | Win 11',
        rating: 5,
        pricing: {
          actualPrice: "2,99,999",
          discountedPrice: "2,79,999",
        },
        discountPercentage: 7,
        stock: {quantity: 4, isAvailable: true},
        brandColor: "Black",
        specifications: {
          processor: 'Intel Core i9 11th Gen',
          ram: "32GB DDR4",
          storage: '1TB SSD',
          graphicsCard: 'NVIDIA GeForce RTX 3080',
          display: {
            size: "17.3-inch",
            resolution: "1920x1080",
            refreshRate: '240Hz',
          },
          battery: "99Wh",
          weight: "2.4kg",
          operatingSystem: "Windows 11",
          connectivity: ["Wi-Fi 6", "Bluetooth 5.2"],
          ports: ["USB-C", "USB-A", "HDMI 2.1", "Ethernet"],
          warranty: {
            period: "3 years",
            coverage: "Parts and Labor"
          }
        },
    },
    {
        id: uuidv4(),
        brand: "Asus",
        category: "Laptop",
        image: ['https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1728567603/Croma%20Assets/Computers%20Peripherals/Laptop/Images/307995_0_uweeuy.png?tr=w-640', 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1720677264/Croma%20Assets/Computers%20Peripherals/Laptop/Images/307995_1_p8kzbk.png?tr=w-640'],
        title: 'Asus Latitude 5290 | i5-8th Gen | 12.5" HD | Win 11',
        rating: 4.9,
        pricing: {
          actualPrice: "89,999",
          discountedPrice: "15,999",
        },
        discountPercentage: 6,
        stock: {quantity: 7, isAvailable: true},
        brandColor: "Black",
        specifications: {
          processor: 'Intel Core i7 11th Gen',
          ram: "16GB DDR4",
          storage: '512GB SSD',
          graphicsCard: 'NVIDIA RTX 3070',
          display: {
            size: "15.6-inch",
            resolution: "2560x1440",
            refreshRate: '165Hz',
          },
          battery: "80Wh",
          weight: "2.0kg",
          operatingSystem: "Windows 11 Home",
          connectivity: ["Wi-Fi 6", "Bluetooth 5.2"],
          ports: ["USB-C", "USB-A", "HDMI", "Ethernet"],
          warranty: {
            period: "1 year",
            coverage: "Parts and Labor"
          }
        },
    }

] 

export {refurbishedLaptops}