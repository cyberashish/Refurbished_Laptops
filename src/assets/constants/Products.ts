import {v4 as uuidv4} from "uuid";

const refurbishedLaptops = [

    {
       id: uuidv4(),
       brand: "Dell",
       modelSeries:"Inspiron 15 3530",
       modelNumber:"OIN353034071RINS1M",
       dimensions: {
        height: 35.85,
        width: 23.55, 
        depth: 1.89, 
        weightUnit:1.62,
      },
      bodyMaterial:["Plastic","Aluminum"],
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
        processor: {
          brand: "Intel",
          type: "Core i5",
          generation: "13th Generation",
          variant: "1334U",
          cores: "10-cores",
          baseSpeed: 3.4,
          turboSpeed: 4.6
        },
        ram: {
          type: "DDR4",
          capacity: "16GB",
          frequency: 2666,
          configuration: "2 x 8GB"
        }, 
        storage: {
          type: "M.2 PCIe NVMe SSD",
          hddCapacity: "No HDD",
          ssdCapacity: "512GB"
        }, 
        gpu: {
          brand: "Intel",
          model: "Intel Iris Xe Graphics",
          processorType: "Integrated"
        }, 
        display: {
          sizeInInches: 15.6,
          sizeInCms: 39.62,
          type: "FHD",
          resolution: "1920 x 1080",
          aspectRatio: "16:10",
          touchScreen: false,
          refreshRate: 120,
          additionalSpecifications: "Narrow Border, Brightness: 250 nits"
        }, 
        batteryLife: {
          usageTime: 10,
          standbyTime: 48
        },
        charging: {
          fastCharging: true,
          wattage: 65,
          portType: "USB-C",
          chargingTime: 2.5
        },
        additionalFeatures: [
          "Overcharge Protection",
          "Battery Health Management",
          "Smart Power Saving Mode"
        ],
         camera : {
          type: "Webcam",
          resolution: "1080p",
          features: ["HD Webcam", "Face Detection", "Low Light Enhancement"]
        }, 
        os: {
          type: "Windows OS",
          name: "Windows 11 Home",
          architecture: "64-bit"
        },
        connectivity: {
          bluetoothSupported: true,
          bluetoothVersion: "5.2",
          bluetoothFeatures: ["LE Audio", "LC3 Codec", "EATT"],
          wifiSupported: true,
          wifiSpecifications: "IEEE 802.11a/b/g/n/ac/ax"
        }, 
        ports: {
          auxPortType: "3.5mm - Headphone Port",
          usbPorts: [
            "1 x USB 3.2 Gen 1 Type-A",
            "1 x USB 3.2 Gen 1 Type-C",
            "1 x USB 2.0"
          ],
          usbTypesSupported: ["USB 3.2 (Type-C)", "USB 2.0", "USB 3.2"],
          hdmi: {
            count: 1,
            type: "HDMI 1.4"
          },
          externalCardSupported: "SD 3.0 Card Slot"
        }, 
        warranty:{
            period: "2 years",
            coverage: "Parts and Labor"
        }
      },
      carouselImages: [
        'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858615/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_0_cdu0nd.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858619/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_1_yv5xct.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858619/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_2_jwmsb3.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858620/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_10_tj4el2.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858623/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_11_nv7oh0.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858624/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_12_jqewut.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858626/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_13_jw9n3r.png?tr=w-640'
      ]
    },
    {
        id: uuidv4(),
        brand: "Lenovo",
        modelSeries:"Lenevo 15 3530",
        modelNumber:"OIN353034071RINS1M",
        dimensions: {
         height: 35.85,
         width: 23.55, 
         depth: 1.89, 
         weightUnit:1.62,
       },
       bodyMaterial:["Plastic","Aluminum"],
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
          processor: {
            brand: "Intel",
            type: "Core i5",
            generation: "13th Generation",
            variant: "1334U",
            cores: "10-cores",
            baseSpeed: 3.4,
            turboSpeed: 4.6
          },
          ram: {
            type: "DDR4",
            capacity: "16GB",
            frequency: 2666,
            configuration: "2 x 8GB"
          }, 
          storage: {
            type: "M.2 PCIe NVMe SSD",
            hddCapacity: "No HDD",
            ssdCapacity: "512GB"
          }, 
          gpu: {
            brand: "Intel",
            model: "Intel Iris Xe Graphics",
            processorType: "Integrated"
          }, 
          display: {
            sizeInInches: 15.6,
            sizeInCms: 39.62,
            type: "FHD",
            resolution: "1920 x 1080",
            aspectRatio: "16:10",
            touchScreen: false,
            refreshRate: 120,
            additionalSpecifications: "Narrow Border, Brightness: 250 nits"
          }, 
          batteryLife: {
            usageTime: 10,
            standbyTime: 48
          },
          charging: {
            fastCharging: true,
            wattage: 65,
            portType: "USB-C",
            chargingTime: 2.5
          },
          additionalFeatures: [
            "Overcharge Protection",
            "Battery Health Management",
            "Smart Power Saving Mode"
          ],
           camera : {
            type: "Webcam",
            resolution: "1080p",
            features: ["HD Webcam", "Face Detection", "Low Light Enhancement"]
          }, 
          os: {
            type: "Windows OS",
            name: "Windows 11 Home",
            architecture: "64-bit"
          },
          connectivity: {
            bluetoothSupported: true,
            bluetoothVersion: "5.2",
            bluetoothFeatures: ["LE Audio", "LC3 Codec", "EATT"],
            wifiSupported: true,
            wifiSpecifications: "IEEE 802.11a/b/g/n/ac/ax"
          }, 
          ports: {
            auxPortType: "3.5mm - Headphone Port",
            usbPorts: [
              "1 x USB 3.2 Gen 1 Type-A",
              "1 x USB 3.2 Gen 1 Type-C",
              "1 x USB 2.0"
            ],
            usbTypesSupported: ["USB 3.2 (Type-C)", "USB 2.0", "USB 3.2"],
            hdmi: {
              count: 1,
              type: "HDMI 1.4"
            },
            externalCardSupported: "SD 3.0 Card Slot"
          }, 
          warranty:{
              period: "2 years",
              coverage: "Parts and Labor"
          }
        },
        carouselImages: [
          'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718028151/Croma%20Assets/Computers%20Peripherals/Laptop/Images/275679_0_cbxchx.png?tr=w-640', 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715933768/Croma%20Assets/Computers%20Peripherals/Laptop/Images/275679_1_ilcipl.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858619/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_2_jwmsb3.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858620/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_10_tj4el2.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858623/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_11_nv7oh0.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858624/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_12_jqewut.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858626/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_13_jw9n3r.png?tr=w-640'
        ]
    },
    {
        id: uuidv4(),
        brand: "HP",
        modelSeries:"HP 15 3530",
        modelNumber:"OIN353034071RINS1M",
        dimensions: {
         height: 35.85,
         width: 23.55, 
         depth: 1.89, 
         weightUnit:1.62,
       },
       bodyMaterial:["Plastic","Aluminum"],
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
          processor: {
            brand: "Intel",
            type: "Core i5",
            generation: "13th Generation",
            variant: "1334U",
            cores: "10-cores",
            baseSpeed: 3.4,
            turboSpeed: 4.6
          },
          ram: {
            type: "DDR4",
            capacity: "16GB",
            frequency: 2666,
            configuration: "2 x 8GB"
          }, 
          storage: {
            type: "M.2 PCIe NVMe SSD",
            hddCapacity: "No HDD",
            ssdCapacity: "512GB"
          }, 
          gpu: {
            brand: "Intel",
            model: "Intel Iris Xe Graphics",
            processorType: "Integrated"
          }, 
          display: {
            sizeInInches: 15.6,
            sizeInCms: 39.62,
            type: "FHD",
            resolution: "1920 x 1080",
            aspectRatio: "16:10",
            touchScreen: false,
            refreshRate: 120,
            additionalSpecifications: "Narrow Border, Brightness: 250 nits"
          }, 
          batteryLife: {
            usageTime: 10,
            standbyTime: 48
          },
          charging: {
            fastCharging: true,
            wattage: 65,
            portType: "USB-C",
            chargingTime: 2.5
          },
          additionalFeatures: [
            "Overcharge Protection",
            "Battery Health Management",
            "Smart Power Saving Mode"
          ],
           camera : {
            type: "Webcam",
            resolution: "1080p",
            features: ["HD Webcam", "Face Detection", "Low Light Enhancement"]
          }, 
          os: {
            type: "Windows OS",
            name: "Windows 11 Home",
            architecture: "64-bit"
          },
          connectivity: {
            bluetoothSupported: true,
            bluetoothVersion: "5.2",
            bluetoothFeatures: ["LE Audio", "LC3 Codec", "EATT"],
            wifiSupported: true,
            wifiSpecifications: "IEEE 802.11a/b/g/n/ac/ax"
          }, 
          ports: {
            auxPortType: "3.5mm - Headphone Port",
            usbPorts: [
              "1 x USB 3.2 Gen 1 Type-A",
              "1 x USB 3.2 Gen 1 Type-C",
              "1 x USB 2.0"
            ],
            usbTypesSupported: ["USB 3.2 (Type-C)", "USB 2.0", "USB 3.2"],
            hdmi: {
              count: 1,
              type: "HDMI 1.4"
            },
            externalCardSupported: "SD 3.0 Card Slot"
          }, 
          warranty:{
              period: "2 years",
              coverage: "Parts and Labor"
          }
        },
        carouselImages: [
          'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1738250233/Croma%20Assets/Computers%20Peripherals/Laptop/Images/304464_0_xtjdqz.png?tr=w-640', 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1738250235/Croma%20Assets/Computers%20Peripherals/Laptop/Images/304464_1_s2js1l.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858619/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_2_jwmsb3.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858620/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_10_tj4el2.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858623/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_11_nv7oh0.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858624/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_12_jqewut.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858626/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_13_jw9n3r.png?tr=w-640'
        ]
    },
    {
        id: uuidv4(),
        brand: "HP",
        modelSeries:"HP 15 3530",
        modelNumber:"OIN353034071RINS1M",
        dimensions: {
         height: 35.85,
         width: 23.55, 
         depth: 1.89, 
         weightUnit:1.62,
       },
       bodyMaterial:["Plastic","Aluminum"],
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
          processor: {
            brand: "Intel",
            type: "Core i5",
            generation: "13th Generation",
            variant: "1334U",
            cores: "10-cores",
            baseSpeed: 3.4,
            turboSpeed: 4.6
          },
          ram: {
            type: "DDR4",
            capacity: "16GB",
            frequency: 2666,
            configuration: "2 x 8GB"
          }, 
          storage: {
            type: "M.2 PCIe NVMe SSD",
            hddCapacity: "No HDD",
            ssdCapacity: "512GB"
          }, 
          gpu: {
            brand: "Intel",
            model: "Intel Iris Xe Graphics",
            processorType: "Integrated"
          }, 
          display: {
            sizeInInches: 15.6,
            sizeInCms: 39.62,
            type: "FHD",
            resolution: "1920 x 1080",
            aspectRatio: "16:10",
            touchScreen: false,
            refreshRate: 120,
            additionalSpecifications: "Narrow Border, Brightness: 250 nits"
          }, 
          batteryLife: {
            usageTime: 10,
            standbyTime: 48
          },
          charging: {
            fastCharging: true,
            wattage: 65,
            portType: "USB-C",
            chargingTime: 2.5
          },
          additionalFeatures: [
            "Overcharge Protection",
            "Battery Health Management",
            "Smart Power Saving Mode"
          ],
           camera : {
            type: "Webcam",
            resolution: "1080p",
            features: ["HD Webcam", "Face Detection", "Low Light Enhancement"]
          }, 
          os: {
            type: "Windows OS",
            name: "Windows 11 Home",
            architecture: "64-bit"
          },
          connectivity: {
            bluetoothSupported: true,
            bluetoothVersion: "5.2",
            bluetoothFeatures: ["LE Audio", "LC3 Codec", "EATT"],
            wifiSupported: true,
            wifiSpecifications: "IEEE 802.11a/b/g/n/ac/ax"
          }, 
          ports: {
            auxPortType: "3.5mm - Headphone Port",
            usbPorts: [
              "1 x USB 3.2 Gen 1 Type-A",
              "1 x USB 3.2 Gen 1 Type-C",
              "1 x USB 2.0"
            ],
            usbTypesSupported: ["USB 3.2 (Type-C)", "USB 2.0", "USB 3.2"],
            hdmi: {
              count: 1,
              type: "HDMI 1.4"
            },
            externalCardSupported: "SD 3.0 Card Slot"
          }, 
          warranty:{
              period: "2 years",
              coverage: "Parts and Labor"
          }
        },
        carouselImages: [
          'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858615/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_0_cdu0nd.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858619/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_1_yv5xct.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858619/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_2_jwmsb3.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858620/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_10_tj4el2.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858623/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_11_nv7oh0.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858624/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_12_jqewut.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858626/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_13_jw9n3r.png?tr=w-640'
        ]
    },
    {
        id: uuidv4(),
        brand: "Acer",
        modelSeries:"Acer 15 3530",
        modelNumber:"OIN353034071RINS1M",
        dimensions: {
         height: 35.85,
         width: 23.55, 
         depth: 1.89, 
         weightUnit:1.62,
       },
       bodyMaterial:["Plastic","Aluminum"],
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
          processor: {
            brand: "Intel",
            type: "Core i5",
            generation: "13th Generation",
            variant: "1334U",
            cores: "10-cores",
            baseSpeed: 3.4,
            turboSpeed: 4.6
          },
          ram: {
            type: "DDR4",
            capacity: "16GB",
            frequency: 2666,
            configuration: "2 x 8GB"
          }, 
          storage: {
            type: "M.2 PCIe NVMe SSD",
            hddCapacity: "No HDD",
            ssdCapacity: "512GB"
          }, 
          gpu: {
            brand: "Intel",
            model: "Intel Iris Xe Graphics",
            processorType: "Integrated"
          }, 
          display: {
            sizeInInches: 15.6,
            sizeInCms: 39.62,
            type: "FHD",
            resolution: "1920 x 1080",
            aspectRatio: "16:10",
            touchScreen: false,
            refreshRate: 120,
            additionalSpecifications: "Narrow Border, Brightness: 250 nits"
          }, 
          batteryLife: {
            usageTime: 10,
            standbyTime: 48
          },
          charging: {
            fastCharging: true,
            wattage: 65,
            portType: "USB-C",
            chargingTime: 2.5
          },
          additionalFeatures: [
            "Overcharge Protection",
            "Battery Health Management",
            "Smart Power Saving Mode"
          ],
           camera : {
            type: "Webcam",
            resolution: "1080p",
            features: ["HD Webcam", "Face Detection", "Low Light Enhancement"]
          }, 
          os: {
            type: "Windows OS",
            name: "Windows 11 Home",
            architecture: "64-bit"
          },
          connectivity: {
            bluetoothSupported: true,
            bluetoothVersion: "5.2",
            bluetoothFeatures: ["LE Audio", "LC3 Codec", "EATT"],
            wifiSupported: true,
            wifiSpecifications: "IEEE 802.11a/b/g/n/ac/ax"
          }, 
          ports: {
            auxPortType: "3.5mm - Headphone Port",
            usbPorts: [
              "1 x USB 3.2 Gen 1 Type-A",
              "1 x USB 3.2 Gen 1 Type-C",
              "1 x USB 2.0"
            ],
            usbTypesSupported: ["USB 3.2 (Type-C)", "USB 2.0", "USB 3.2"],
            hdmi: {
              count: 1,
              type: "HDMI 1.4"
            },
            externalCardSupported: "SD 3.0 Card Slot"
          }, 
          warranty:{
              period: "2 years",
              coverage: "Parts and Labor"
          }
        },
        carouselImages: [
          'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717068665/Croma%20Assets/Computers%20Peripherals/Laptop/Images/304898_0_gybfpq.png?tr=w-640', 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717068667/Croma%20Assets/Computers%20Peripherals/Laptop/Images/304898_1_pzvinc.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858619/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_2_jwmsb3.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858620/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_10_tj4el2.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858623/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_11_nv7oh0.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858624/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_12_jqewut.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858626/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_13_jw9n3r.png?tr=w-640'
        ]
    },
    {
        id: uuidv4(),
        brand: "Dell",
        modelSeries:"Dell 15 3530",
        modelNumber:"OIN353034071RINS1M",
        dimensions: {
         height: 35.85,
         width: 23.55, 
         depth: 1.89, 
         weightUnit:1.62,
       },
       bodyMaterial:["Plastic","Aluminum"],
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
          processor: {
            brand: "Intel",
            type: "Core i5",
            generation: "13th Generation",
            variant: "1334U",
            cores: "10-cores",
            baseSpeed: 3.4,
            turboSpeed: 4.6
          },
          ram: {
            type: "DDR4",
            capacity: "16GB",
            frequency: 2666,
            configuration: "2 x 8GB"
          }, 
          storage: {
            type: "M.2 PCIe NVMe SSD",
            hddCapacity: "No HDD",
            ssdCapacity: "512GB"
          }, 
          gpu: {
            brand: "Intel",
            model: "Intel Iris Xe Graphics",
            processorType: "Integrated"
          }, 
          display: {
            sizeInInches: 15.6,
            sizeInCms: 39.62,
            type: "FHD",
            resolution: "1920 x 1080",
            aspectRatio: "16:10",
            touchScreen: false,
            refreshRate: 120,
            additionalSpecifications: "Narrow Border, Brightness: 250 nits"
          }, 
          batteryLife: {
            usageTime: 10,
            standbyTime: 48
          },
          charging: {
            fastCharging: true,
            wattage: 65,
            portType: "USB-C",
            chargingTime: 2.5
          },
          additionalFeatures: [
            "Overcharge Protection",
            "Battery Health Management",
            "Smart Power Saving Mode"
          ],
           camera : {
            type: "Webcam",
            resolution: "1080p",
            features: ["HD Webcam", "Face Detection", "Low Light Enhancement"]
          }, 
          os: {
            type: "Windows OS",
            name: "Windows 11 Home",
            architecture: "64-bit"
          },
          connectivity: {
            bluetoothSupported: true,
            bluetoothVersion: "5.2",
            bluetoothFeatures: ["LE Audio", "LC3 Codec", "EATT"],
            wifiSupported: true,
            wifiSpecifications: "IEEE 802.11a/b/g/n/ac/ax"
          }, 
          ports: {
            auxPortType: "3.5mm - Headphone Port",
            usbPorts: [
              "1 x USB 3.2 Gen 1 Type-A",
              "1 x USB 3.2 Gen 1 Type-C",
              "1 x USB 2.0"
            ],
            usbTypesSupported: ["USB 3.2 (Type-C)", "USB 2.0", "USB 3.2"],
            hdmi: {
              count: 1,
              type: "HDMI 1.4"
            },
            externalCardSupported: "SD 3.0 Card Slot"
          }, 
          warranty:{
              period: "2 years",
              coverage: "Parts and Labor"
          }
        },
        carouselImages: [
          'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1732187805/Croma%20Assets/Computers%20Peripherals/Laptop/Images/311051_0_xkl2ks.png?tr=w-400', 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1731325759/Croma%20Assets/Computers%20Peripherals/Laptop/Images/311051_1_tliexj.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858619/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_2_jwmsb3.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858620/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_10_tj4el2.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858623/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_11_nv7oh0.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858624/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_12_jqewut.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858626/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_13_jw9n3r.png?tr=w-640'
        ]
    },
    {
        id: uuidv4(),
        brand: "HP",
        modelSeries:"HP 15 3530",
        modelNumber:"OIN353034071RINS1M",
        dimensions: {
         height: 35.85,
         width: 23.55, 
         depth: 1.89, 
         weightUnit:1.62,
       },
       bodyMaterial:["Plastic","Aluminum"],
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
          processor: {
            brand: "Intel",
            type: "Core i5",
            generation: "13th Generation",
            variant: "1334U",
            cores: "10-cores",
            baseSpeed: 3.4,
            turboSpeed: 4.6
          },
          ram: {
            type: "DDR4",
            capacity: "16GB",
            frequency: 2666,
            configuration: "2 x 8GB"
          }, 
          storage: {
            type: "M.2 PCIe NVMe SSD",
            hddCapacity: "No HDD",
            ssdCapacity: "512GB"
          }, 
          gpu: {
            brand: "Intel",
            model: "Intel Iris Xe Graphics",
            processorType: "Integrated"
          }, 
          display: {
            sizeInInches: 15.6,
            sizeInCms: 39.62,
            type: "FHD",
            resolution: "1920 x 1080",
            aspectRatio: "16:10",
            touchScreen: false,
            refreshRate: 120,
            additionalSpecifications: "Narrow Border, Brightness: 250 nits"
          }, 
          batteryLife: {
            usageTime: 10,
            standbyTime: 48
          },
          charging: {
            fastCharging: true,
            wattage: 65,
            portType: "USB-C",
            chargingTime: 2.5
          },
          additionalFeatures: [
            "Overcharge Protection",
            "Battery Health Management",
            "Smart Power Saving Mode"
          ],
           camera : {
            type: "Webcam",
            resolution: "1080p",
            features: ["HD Webcam", "Face Detection", "Low Light Enhancement"]
          }, 
          os: {
            type: "Windows OS",
            name: "Windows 11 Home",
            architecture: "64-bit"
          },
          connectivity: {
            bluetoothSupported: true,
            bluetoothVersion: "5.2",
            bluetoothFeatures: ["LE Audio", "LC3 Codec", "EATT"],
            wifiSupported: true,
            wifiSpecifications: "IEEE 802.11a/b/g/n/ac/ax"
          }, 
          ports: {
            auxPortType: "3.5mm - Headphone Port",
            usbPorts: [
              "1 x USB 3.2 Gen 1 Type-A",
              "1 x USB 3.2 Gen 1 Type-C",
              "1 x USB 2.0"
            ],
            usbTypesSupported: ["USB 3.2 (Type-C)", "USB 2.0", "USB 3.2"],
            hdmi: {
              count: 1,
              type: "HDMI 1.4"
            },
            externalCardSupported: "SD 3.0 Card Slot"
          }, 
          warranty:{
              period: "2 years",
              coverage: "Parts and Labor"
          }
        },
        carouselImages: [
          'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1736342915/Croma%20Assets/Computers%20Peripherals/Laptop/Images/310954_0_wx0jbi.png?tr=w-640', 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1729588071/Croma%20Assets/Computers%20Peripherals/Laptop/Images/310954_1_ticlzb.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858619/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_2_jwmsb3.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858620/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_10_tj4el2.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858623/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_11_nv7oh0.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858624/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_12_jqewut.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858626/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_13_jw9n3r.png?tr=w-640'
        ]
    },
    {
        id: uuidv4(),
        brand: "HP",
        modelSeries:"HP 15 3530",
        modelNumber:"OIN353034071RINS1M",
        dimensions: {
         height: 35.85,
         width: 23.55, 
         depth: 1.89, 
         weightUnit:1.62,
       },
       bodyMaterial:["Plastic","Aluminum"],
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
          processor: {
            brand: "Intel",
            type: "Core i5",
            generation: "13th Generation",
            variant: "1334U",
            cores: "10-cores",
            baseSpeed: 3.4,
            turboSpeed: 4.6
          },
          ram: {
            type: "DDR4",
            capacity: "16GB",
            frequency: 2666,
            configuration: "2 x 8GB"
          }, 
          storage: {
            type: "M.2 PCIe NVMe SSD",
            hddCapacity: "No HDD",
            ssdCapacity: "512GB"
          }, 
          gpu: {
            brand: "Intel",
            model: "Intel Iris Xe Graphics",
            processorType: "Integrated"
          }, 
          display: {
            sizeInInches: 15.6,
            sizeInCms: 39.62,
            type: "FHD",
            resolution: "1920 x 1080",
            aspectRatio: "16:10",
            touchScreen: false,
            refreshRate: 120,
            additionalSpecifications: "Narrow Border, Brightness: 250 nits"
          }, 
          batteryLife: {
            usageTime: 10,
            standbyTime: 48
          },
          charging: {
            fastCharging: true,
            wattage: 65,
            portType: "USB-C",
            chargingTime: 2.5
          },
          additionalFeatures: [
            "Overcharge Protection",
            "Battery Health Management",
            "Smart Power Saving Mode"
          ],
           camera : {
            type: "Webcam",
            resolution: "1080p",
            features: ["HD Webcam", "Face Detection", "Low Light Enhancement"]
          }, 
          os: {
            type: "Windows OS",
            name: "Windows 11 Home",
            architecture: "64-bit"
          },
          connectivity: {
            bluetoothSupported: true,
            bluetoothVersion: "5.2",
            bluetoothFeatures: ["LE Audio", "LC3 Codec", "EATT"],
            wifiSupported: true,
            wifiSpecifications: "IEEE 802.11a/b/g/n/ac/ax"
          }, 
          ports: {
            auxPortType: "3.5mm - Headphone Port",
            usbPorts: [
              "1 x USB 3.2 Gen 1 Type-A",
              "1 x USB 3.2 Gen 1 Type-C",
              "1 x USB 2.0"
            ],
            usbTypesSupported: ["USB 3.2 (Type-C)", "USB 2.0", "USB 3.2"],
            hdmi: {
              count: 1,
              type: "HDMI 1.4"
            },
            externalCardSupported: "SD 3.0 Card Slot"
          }, 
          warranty:{
              period: "2 years",
              coverage: "Parts and Labor"
          }
        },
        carouselImages: [
          'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1732187853/Croma%20Assets/Computers%20Peripherals/Laptop/Images/308457_0_byshs1.png?tr=w-640', 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1723633246/Croma%20Assets/Computers%20Peripherals/Laptop/Images/308457_9_daeyud.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858619/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_2_jwmsb3.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858620/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_10_tj4el2.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858623/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_11_nv7oh0.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858624/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_12_jqewut.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858626/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_13_jw9n3r.png?tr=w-640'
        ]
    },
    {
        id: uuidv4(),
        brand: "Lenevo",
        modelSeries:"Lenevo 15 3530",
        modelNumber:"OIN353034071RINS1M",
        dimensions: {
         height: 35.85,
         width: 23.55, 
         depth: 1.89, 
         weightUnit:1.62,
       },
       bodyMaterial:["Plastic","Aluminum"],
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
          processor: {
            brand: "Intel",
            type: "Core i5",
            generation: "13th Generation",
            variant: "1334U",
            cores: "10-cores",
            baseSpeed: 3.4,
            turboSpeed: 4.6
          },
          ram: {
            type: "DDR4",
            capacity: "16GB",
            frequency: 2666,
            configuration: "2 x 8GB"
          }, 
          storage: {
            type: "M.2 PCIe NVMe SSD",
            hddCapacity: "No HDD",
            ssdCapacity: "512GB"
          }, 
          gpu: {
            brand: "Intel",
            model: "Intel Iris Xe Graphics",
            processorType: "Integrated"
          }, 
          display: {
            sizeInInches: 15.6,
            sizeInCms: 39.62,
            type: "FHD",
            resolution: "1920 x 1080",
            aspectRatio: "16:10",
            touchScreen: false,
            refreshRate: 120,
            additionalSpecifications: "Narrow Border, Brightness: 250 nits"
          }, 
          batteryLife: {
            usageTime: 10,
            standbyTime: 48
          },
          charging: {
            fastCharging: true,
            wattage: 65,
            portType: "USB-C",
            chargingTime: 2.5
          },
          additionalFeatures: [
            "Overcharge Protection",
            "Battery Health Management",
            "Smart Power Saving Mode"
          ],
           camera : {
            type: "Webcam",
            resolution: "1080p",
            features: ["HD Webcam", "Face Detection", "Low Light Enhancement"]
          }, 
          os: {
            type: "Windows OS",
            name: "Windows 11 Home",
            architecture: "64-bit"
          },
          connectivity: {
            bluetoothSupported: true,
            bluetoothVersion: "5.2",
            bluetoothFeatures: ["LE Audio", "LC3 Codec", "EATT"],
            wifiSupported: true,
            wifiSpecifications: "IEEE 802.11a/b/g/n/ac/ax"
          }, 
          ports: {
            auxPortType: "3.5mm - Headphone Port",
            usbPorts: [
              "1 x USB 3.2 Gen 1 Type-A",
              "1 x USB 3.2 Gen 1 Type-C",
              "1 x USB 2.0"
            ],
            usbTypesSupported: ["USB 3.2 (Type-C)", "USB 2.0", "USB 3.2"],
            hdmi: {
              count: 1,
              type: "HDMI 1.4"
            },
            externalCardSupported: "SD 3.0 Card Slot"
          }, 
          warranty:{
              period: "2 years",
              coverage: "Parts and Labor"
          }
        },
        carouselImages: [
          'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718028177/Croma%20Assets/Computers%20Peripherals/Laptop/Images/303421_0_xa8tdy.png?tr=w-640', 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717064005/Croma%20Assets/Computers%20Peripherals/Laptop/Images/303421_1_gvgkpa.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858619/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_2_jwmsb3.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858620/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_10_tj4el2.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858623/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_11_nv7oh0.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858624/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_12_jqewut.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858626/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_13_jw9n3r.png?tr=w-640'
        ]
    },
    {
        id: uuidv4(),
        brand: "Asus",
        modelSeries:"Asus 15 3530",
        modelNumber:"OIN353034071RINS1M",
        dimensions: {
         height: 35.85,
         width: 23.55, 
         depth: 1.89, 
         weightUnit:1.62,
       },
       bodyMaterial:["Plastic","Aluminum"],
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
          processor: {
            brand: "Intel",
            type: "Core i5",
            generation: "13th Generation",
            variant: "1334U",
            cores: "10-cores",
            baseSpeed: 3.4,
            turboSpeed: 4.6
          },
          ram: {
            type: "DDR4",
            capacity: "16GB",
            frequency: 2666,
            configuration: "2 x 8GB"
          }, 
          storage: {
            type: "M.2 PCIe NVMe SSD",
            hddCapacity: "No HDD",
            ssdCapacity: "512GB"
          }, 
          gpu: {
            brand: "Intel",
            model: "Intel Iris Xe Graphics",
            processorType: "Integrated"
          }, 
          display: {
            sizeInInches: 15.6,
            sizeInCms: 39.62,
            type: "FHD",
            resolution: "1920 x 1080",
            aspectRatio: "16:10",
            touchScreen: false,
            refreshRate: 120,
            additionalSpecifications: "Narrow Border, Brightness: 250 nits"
          }, 
          batteryLife: {
            usageTime: 10,
            standbyTime: 48
          },
          charging: {
            fastCharging: true,
            wattage: 65,
            portType: "USB-C",
            chargingTime: 2.5
          },
          additionalFeatures: [
            "Overcharge Protection",
            "Battery Health Management",
            "Smart Power Saving Mode"
          ],
           camera : {
            type: "Webcam",
            resolution: "1080p",
            features: ["HD Webcam", "Face Detection", "Low Light Enhancement"]
          }, 
          os: {
            type: "Windows OS",
            name: "Windows 11 Home",
            architecture: "64-bit"
          },
          connectivity: {
            bluetoothSupported: true,
            bluetoothVersion: "5.2",
            bluetoothFeatures: ["LE Audio", "LC3 Codec", "EATT"],
            wifiSupported: true,
            wifiSpecifications: "IEEE 802.11a/b/g/n/ac/ax"
          }, 
          ports: {
            auxPortType: "3.5mm - Headphone Port",
            usbPorts: [
              "1 x USB 3.2 Gen 1 Type-A",
              "1 x USB 3.2 Gen 1 Type-C",
              "1 x USB 2.0"
            ],
            usbTypesSupported: ["USB 3.2 (Type-C)", "USB 2.0", "USB 3.2"],
            hdmi: {
              count: 1,
              type: "HDMI 1.4"
            },
            externalCardSupported: "SD 3.0 Card Slot"
          }, 
          warranty:{
              period: "2 years",
              coverage: "Parts and Labor"
          }
        },
        carouselImages: [
          'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1728567603/Croma%20Assets/Computers%20Peripherals/Laptop/Images/307995_0_uweeuy.png?tr=w-640', 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1720677264/Croma%20Assets/Computers%20Peripherals/Laptop/Images/307995_1_p8kzbk.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858619/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_2_jwmsb3.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858620/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_10_tj4el2.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858623/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_11_nv7oh0.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858624/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_12_jqewut.png?tr=w-640','https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858626/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_13_jw9n3r.png?tr=w-640'
        ]
    }

] 

export {refurbishedLaptops}