var APP_DATA = {
  "scenes": [
    {
      "id": "0-overview",
      "name": "Overview",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.02504168057209455,
        "pitch": -0.028855027221826646,
        "fov": 1.3123694188512842
      },
      "linkHotspots": [
        {
          "yaw": 0.21818461606956951,
          "pitch": 0.02336823678124844,
          "rotation": 0,
          "target": "1-heat-recovery-system"
        },
        {
          "yaw": -0.3716604397812411,
          "pitch": -0.3614169266234004,
          "rotation": 0,
          "target": "2-daf-tank"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.10906593660497776,
          "pitch": -0.01615643446105608,
          "title": "Welcome",
          "text": "<div><div>Welcome to a virtual tour of the experimental heat recovery system at the ABP Cahir Wastewater Treatment Plant. This system serves as a showcase of the potential to recover heat that would otherwise be wasted from industrial wastewater. Recovering this heat will save money by reducing fuel use and reduce the greenhouse gas emissions associated with heating water for industrial use.&nbsp;</div><div><br></div><div>The tour consists of four scenes around the treatment plant. To start with the tour, please make your way into the second scene, the Heat Recovery System, by clicking on the ^ sign in the middle of the screen. Explore each scene to find information points marked with ‘i’ which will give you more information on this project. Click on the new ^ sign whenever you finish with the current scene.&nbsp;&nbsp;</div><div><br></div><div>This project is a collaboration between Bangor University, Trinity College Dublin, and ABP Foods. It was made possible due to the support the ERDF Interreg Ireland-Wales Programme 2014-2020, through the Dŵr Uisce Project.</div></div>"
        }
      ]
    },
    {
      "id": "1-heat-recovery-system",
      "name": "Heat Recovery System",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.01646249549321155,
        "pitch": 0.1999794279894651,
        "fov": 1.3123694188512842
      },
      "linkHotspots": [
        {
          "yaw": -0.610533187352889,
          "pitch": -0.28302479702747974,
          "rotation": 0,
          "target": "2-daf-tank"
        },
        {
          "yaw": -2.657174092575527,
          "pitch": 0.00991117313614609,
          "rotation": 0,
          "target": "0-overview"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8554988446570917,
          "pitch": 0.5226583588739988,
          "title": "Wastewater Sump",
          "text": "Wastewater from the various meat processing steps at ABP Cahir flows into this sump before being pumped to the Dissolved Air Flotation (DAF) Tank for initial treatment. A significant amount of heat remains in this wastewater and it serves as the heat source for our heat recovery system.&nbsp;"
        },
        {
          "yaw": 0.14136032270042165,
          "pitch": -0.3800121632991136,
          "title": "Inlet Tower",
          "text": "Hot wastewater is pumped into this tower from the sump and the flow is split evenly to the ten heat exchangers."
        },
        {
          "yaw": 0.1205534867376663,
          "pitch": -0.05173048837604277,
          "title": "Heat Exchangers",
          "text": "The heat from the wastewater is extracted using these heat exchangers. While the hot wastewater flow down a central pipe, cold feed water flows up in a smaller concentric pipe around the central pipe extracting the heat through the copper walls of the heat exchanger.&nbsp;"
        },
        {
          "yaw": 0.544416830134157,
          "pitch": 0.11437481332425747,
          "title": "Monitoring Systems",
          "text": "The performance of the heat recovery system is monitored by several sensors that measure temperatures and flow volumes of both wastewater and feed water. We can use this data to not only estimate the efficiency of the heat recovery, but also the feasibility of the system and long-term changes in performance."
        },
        {
          "yaw": -0.43415758709369,
          "pitch": 0.7235473052637307,
          "title": "Outflow Pipe",
          "text": "Once the wastewater flows through the heat exchangers and loses some of its heat, it then flows back to the sump through the outflow pipe."
        }
      ]
    },
    {
      "id": "2-daf-tank",
      "name": "DAF Tank",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.811181075177241,
        "pitch": 0.40453265276381245,
        "fov": 1.3123694188512842
      },
      "linkHotspots": [
        {
          "yaw": 0.48099978340186134,
          "pitch": -0.03205983167413251,
          "rotation": 0,
          "target": "3-plant-outlet"
        },
        {
          "yaw": 2.9778193797630417,
          "pitch": 0.10651981496670615,
          "rotation": 0,
          "target": "1-heat-recovery-system"
        },
        {
          "yaw": -2.914144157570135,
          "pitch": 0.011683192651860352,
          "rotation": 0,
          "target": "0-overview"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.6917138371444436,
          "pitch": 0.19177329896231932,
          "title": "Dissolved Air Flotation Tank",
          "text": "The DAF Tank is the first major treatment step in the ABP Cahir wastewater treatment plant. It removes suspended material in the wastewater by floating them upwards in the tank and skimming the top of the water column to remove them. A significant amount of heat is still retained by the wastewater when it leaves the tank, although it is not as high as in the sump where heat recovery is occurring now.&nbsp;Continue the tour by clicking on the ^ sign well to the left of this information sign that will take you to the Outlet."
        }
      ]
    },
    {
      "id": "3-plant-outlet",
      "name": "Plant Outlet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.5056804131956518,
        "pitch": 0.21185788626308444,
        "fov": 1.3123694188512842
      },
      "linkHotspots": [
        {
          "yaw": -1.6958644653685973,
          "pitch": -0.06675183980023291,
          "rotation": 0,
          "target": "2-daf-tank"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.3987696416147699,
          "pitch": 0.13462506119675766,
          "title": "Treatment Plant Outlet",
          "text": "Treated water is discharged from this outlet once it goes through the DAF tank and several other treatment processes. Heat recovery is still possible from the treated water at this location, even though it is a significantly smaller resource than at the inlet and the DAF tank. The advantage of recovering heat here is that there is a minimal chance of disrupting any of the plant’s treatment processes.&nbsp;&nbsp;"
        },
        {
          "yaw": -2.939119653158036,
          "pitch": 0.01998223241986885,
          "title": "Aeration Tank",
          "text": "This is one of the treatment steps in the plant after the DAF tank. It is a biological treatment processes where the wastewater is aerated significantly to use microbial activity to break down organic matter and other pollutants.&nbsp;"
        },
        {
          "yaw": 2.309827187562762,
          "pitch": 0.051533765930242836,
          "title": "Thank You!",
          "text": "Once you finish looking around this scene, it concludes our tour. Thank you for your interest in our project!"
        }
      ]
    }
  ],
  "name": "ABP Cahir Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
