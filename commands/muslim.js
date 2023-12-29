const { sck, sck1,cmd } = require('../lib')

//=====================================================================

const videos = [
    "http://bot.altaqwaa.org/media_islam/files/video/001.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/002.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/003.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/004.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/005.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/006.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/007.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/008.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/009.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/010.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/011.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/012.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/013.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/014.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/015.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/016.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/017.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/018.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/019.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/020.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/021.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/022.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/023.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/024.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/025.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/026.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/027.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/028.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/029.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/030.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/031.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/032.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/033.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/034.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/035.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/036.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/037.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/038.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/039.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/040.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/041.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/042.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/043.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/044.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/045.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/046.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/047.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/048.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/049.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/050.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/051.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/052.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/053.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/054.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/055.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/056.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/057.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/058.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/059.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/060.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/061.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/062.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/063.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/064.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/065.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/066.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/067.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/068.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/069.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/070.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/071.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/072.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/073.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/074.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/075.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/076.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/077.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/078.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/079.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/080.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/081.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/082.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/083.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/084.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/085.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/086.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/087.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/088.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/089.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/090.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/091.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/092.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/093.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/094.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/095.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/096.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/097.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/098.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/099.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/100.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/101.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/102.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/103.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/104.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/105.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/106.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/107.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/108.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/109.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/110.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/111.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/112.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/113.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/114.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/115.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/116.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/117.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/118.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/119.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/120.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/121.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/122.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/123.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/124.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/125.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/126.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/127.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/128.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/129.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/130.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/131.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/132.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/133.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/134.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/135.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/136.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/137.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/138.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/139.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/140.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/141.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/142.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/143.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/144.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/145.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/146.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/147.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/148.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/149.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/150.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/151.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/152.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/153.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/154.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/155.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/156.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/157.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/158.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/159.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/160.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/161.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/162.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/163.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/164.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/165.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/166.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/167.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/168.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/169.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/170.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/171.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/172.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/173.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/174.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/175.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/176.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/177.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/178.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/179.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/180.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/181.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/182.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/183.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/184.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/185.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/186.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/187.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/188.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/189.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/190.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/191.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/192.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/193.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/194.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/195.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/196.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/197.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/198.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/199.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/200.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/201.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/202.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/203.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/204.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/205.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/206.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/207.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/208.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/209.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/210.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/211.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/212.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/213.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/214.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/215.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/216.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/217.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/218.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/219.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/220.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/221.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/222.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/223.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/224.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/225.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/226.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/227.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/228.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/229.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/230.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/231.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/232.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/233.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/234.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/235.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/236.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/237.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/238.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/239.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/240.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/241.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/242.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/243.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/244.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/245.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/246.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/247.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/248.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/249.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/250.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/251.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/252.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/253.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/254.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/255.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/256.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/257.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/258.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/259.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/260.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/261.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/262.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/263.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/264.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/265.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/266.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/267.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/268.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/269.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/270.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/271.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/272.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/273.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/274.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/275.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/276.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/277.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/278.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/279.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/280.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/281.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/282.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/283.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/284.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/285.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/286.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/287.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/288.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/289.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/290.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/291.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/292.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/293.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/294.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/295.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/296.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/297.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/298.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/299.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/300.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/301.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/302.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/303.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/304.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/305.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/306.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/307.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/308.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/309.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/310.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/311.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/312.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/313.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/314.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/315.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/316.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/317.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/318.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/319.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/320.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/321.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/322.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/323.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/324.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/325.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/326.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/327.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/328.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/329.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/330.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/331.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/332.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/333.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/334.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/335.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/336.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/337.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/338.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/339.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/340.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/341.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/342.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/343.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/344.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/345.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/346.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/347.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/348.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/349.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/350.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/351.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/352.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/353.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/354.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/355.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/356.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/357.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/358.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/359.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/360.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/361.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/362.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/363.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/364.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/365.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/366.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/367.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/368.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/369.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/370.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/371.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/372.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/373.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/374.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/375.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/376.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/377.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/378.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/379.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/380.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/381.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/382.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/383.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/384.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/385.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/386.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/387.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/388.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/389.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/390.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/391.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/392.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/393.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/394.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/395.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/396.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/397.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/398.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/399.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/400.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/401.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/402.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/403.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/404.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/405.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/406.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/407.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/408.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/409.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/410.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/411.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/412.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/413.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/414.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/415.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/416.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/417.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/418.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/419.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/420.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/421.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/422.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/423.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/424.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/425.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/426.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/427.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/428.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/429.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/430.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/431.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/432.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/433.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/434.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/435.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/436.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/437.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/438.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/439.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/440.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/441.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/442.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/443.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/444.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/445.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/446.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/447.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/448.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/449.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/450.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/451.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/452.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/453.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/454.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/455.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/456.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/457.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/458.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/459.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/460.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/461.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/462.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/463.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/464.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/465.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/466.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/467.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/468.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/469.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/470.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/471.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/472.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/473.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/474.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/475.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/476.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/477.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/478.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/479.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/480.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/481.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/482.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/483.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/484.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/485.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/486.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/487.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/488.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/489.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/490.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/491.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/492.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/493.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/494.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/495.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/496.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/497.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/498.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/499.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/500.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/501.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/502.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/503.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/504.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/505.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/506.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/507.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/508.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/509.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/510.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/511.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/512.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/513.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/514.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/515.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/516.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/517.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/518.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/519.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/520.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/521.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/522.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/523.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/524.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/525.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/526.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/527.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/528.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/529.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/530.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/531.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/532.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/533.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/534.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/535.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/536.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/537.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/538.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/539.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/540.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/541.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/542.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/543.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/544.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/545.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/546.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/547.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/548.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/549.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/550.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/551.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/552.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/553.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/554.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/555.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/556.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/557.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/558.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/559.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/560.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/561.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/562.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/563.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/564.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/565.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/566.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/567.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/568.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/569.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/570.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/571.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/572.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/573.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/574.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/575.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/576.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/577.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/578.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/579.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/580.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/581.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/582.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/583.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/584.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/585.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/586.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/587.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/588.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/589.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/590.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/591.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/592.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/593.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/594.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/595.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/596.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/597.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/598.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/599.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/600.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/601.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/602.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/603.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/604.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/605.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/606.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/607.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/608.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/609.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/610.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/611.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/612.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/613.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/614.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/615.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/616.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/617.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/618.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/619.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/620.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/621.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/622.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/623.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/624.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/625.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/626.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/627.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/628.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/629.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/630.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/631.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/632.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/633.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/634.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/635.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/636.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/637.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/638.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/639.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/640.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/641.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/642.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/643.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/644.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/645.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/646.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/647.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/648.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/649.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/650.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/651.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/652.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/653.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/654.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/655.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/656.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/657.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/658.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/659.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/660.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/661.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/662.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/663.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/664.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/665.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/666.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/667.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/668.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/669.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/670.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/671.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/672.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/673.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/674.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/675.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/676.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/677.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/678.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/679.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/680.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/681.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/682.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/683.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/684.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/685.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/686.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/687.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/688.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/689.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/690.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/691.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/692.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/693.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/694.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/695.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/696.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/697.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/698.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/699.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/700.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/701.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/702.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/703.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/704.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/705.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/706.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/707.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/708.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/709.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/710.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/711.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/712.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/713.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/714.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/715.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/716.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/717.mp4",
    "http://bot.altaqwaa.org/media_islam/files/video/718.mp4"
];

cmd({
pattern: 'مقاطع',
desc: "ارسال مقاطع قرآن",
use: '',
category: "islam",
filename: __filename,
  }, async (Void, citel, text) => {
  const randomIndex = Math.floor(Math.random() * videos.length);
  const randomVideo = videos[randomIndex];

  await Void.sendMessage(citel.chat, {
    video: { url: randomVideo },
  }, { quoted: citel });
});

//=====================================================================--------

const data = [
    {
        "surah": "الفاتحة",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/001.jpg"
    },
    {
        "surah": "البقرة",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/002.jpg"
    },
    {
        "surah": "آل عمران",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/003.jpg"
    },
    {
        "surah": "النساء",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/004.jpg"
    },
    {
        "surah": "المائدة",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/005.jpg"
    },
    {
        "surah": "الأنعام",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/006.jpg"
    },
    {
        "surah": "الأعراف",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/007.jpg"
    },
    {
        "surah": "الأنفال",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/008.jpg"
    },
    {
        "surah": "التوبة",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/009.jpg"
    },
    {
        "surah": "يونس",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/010.jpg"
    },
    {
        "surah": "هود",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/011.jpg"
    },
    {
        "surah": "يوسف",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/012.jpg"
    },
    {
        "surah": "الرعد",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/013.jpg"
    },
    {
        "surah": "ابراهيم",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/014.jpg"
    },
    {
        "surah": "الحجر",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/015.jpg"
    },
    {
        "surah": "النحل",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/016.jpg"
    },
    {
        "surah": "الإسراء",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/017.jpg"
    },
    {
        "surah": "الكهف",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/018.jpg"
    },
    {
        "surah": "مريم",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/019.jpg"
    },
    {
        "surah": "طه",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/020.jpg"
    },
    {
        "surah": "الأنبياء",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/021.jpg"
    },
    {
        "surah": "الحج",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/022.jpg"
    },
    {
        "surah": "المؤمنون",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/023.jpg"
    },
    {
        "surah": "النور",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/024.jpg"
    },
    {
        "surah": "الفرقان",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/025.jpg"
    },
    {
        "surah": "الشعراء",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/026.jpg"
    },
    {
        "surah": "النمل",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/027.jpg"
    },
    {
        "surah": "القصص",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/028.jpg"
    },
    {
        "surah": "العنكبوت",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/029.jpg"
    },
    {
        "surah": "الروم",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/030.jpg"
    },
    {
        "surah": "لقمان",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/031.jpg"
    },
    {
        "surah": "السجدة",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/032.jpg"
    },
    {
        "surah": "الأحزاب",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/033.jpg"
    },
    {
        "surah": "سبأ",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/034.jpg"
    },
    {
        "surah": "فاطر",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/035.jpg"
    },
    {
        "surah": "يس",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/036.jpg"
    },
    {
        "surah": "الصافات",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/037.jpg"
    },
    {
        "surah": "ص",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/038.jpg"
    },
    {
        "surah": "الزمر",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/039.jpg"
    },
    {
        "surah": "غافر",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/040.jpg"
    },
    {
        "surah": "فصلت",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/041.jpg"
    },
    {
        "surah": "الشورى",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/042.jpg"
    },
    {
        "surah": "الزخرف",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/043.jpg"
    },
    {
        "surah": "الدخان",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/044.jpg"
    },
    {
        "surah": "الجاثية",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/045.jpg"
    },
    {
        "surah": "الأحقاف",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/046.jpg"
    },
    {
        "surah": "محمد",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/047.jpg"
    },
    {
        "surah": "الفتح",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/048.jpg"
    },
    {
        "surah": "الحجرات",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/049.jpg"
    },
    {
        "surah": "ق",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/050.jpg"
    },
    {
        "surah": "الذاريات",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/051.jpg"
    },
    {
        "surah": "الطور",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/052.jpg"
    },
    {
        "surah": "النجم",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/053.jpg"
    },
    {
        "surah": "القمر",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/054.jpg"
    },
    {
        "surah": "الرحمن",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/055.jpg"
    },
    {
        "surah": "الواقعة",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/056.jpg"
    },
    {
        "surah": "الحديد",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/057.jpg"
    },
    {
        "surah": "المجادلة",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/058.jpg"
    },
    {
        "surah": "الحشر",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/059.jpg"
    },
    {
        "surah": "الممتحنة",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/060.jpg"
    },
    {
        "surah": "الصف",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/061.jpg"
    },
    {
        "surah": "الجمعة",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/062.jpg"
    },
    {
        "surah": "المنافقون",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/063.jpg"
    },
    {
        "surah": "التغابن",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/064.jpg"
    },
    {
        "surah": "الطلاق",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/065.jpg"
    },
    {
        "surah": "التحريم",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/066.jpg"
    },
    {
        "surah": "الملك",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/067.jpg"
    },
    {
        "surah": "القلم",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/068.jpg"
    },
    {
        "surah": "الحاقة",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/069.jpg"
    },
    {
        "surah": "المعارج",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/070.jpg"
    },
    {
        "surah": "نوح",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/071.jpg"
    },
    {
        "surah": "الجن",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/072.jpg"
    },
    {
        "surah": "المزمل",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/073.jpg"
    },
    {
        "surah": "المدثر",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/074.jpg"
    },
    {
        "surah": "القيامة",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/075.jpg"
    },
    {
        "surah": "الإنسان",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/076.jpg"
    },
    {
        "surah": "المرسلات",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/077.jpg"
    },
    {
        "surah": "النبأ",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/078.jpg"
    },
    {
        "surah": "النازعات",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/079.jpg"
    },
    {
        "surah": "عبس",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/080.jpg"
    },
    {
        "surah": "التكوير",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/081.jpg"
    },
    {
        "surah": "الإنفطار",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/082.jpg"
    },
    {
        "surah": "المطففين",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/083.jpg"
    },
    {
        "surah": "الانشقاق",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/084.jpg"
    },
    {
        "surah": "البروج",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/085.jpg"
    },
    {
        "surah": "الطارق",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/086.jpg"
    },
    {
        "surah": "الأعلى",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/087.jpg"
    },
    {
        "surah": "الغاشية",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/088.jpg"
    },
    {
        "surah": "الفجر",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/089.jpg"
    },
    {
        "surah": "البلد",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/090.jpg"
    },
    {
        "surah": "الشمس",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/091.jpg"
    },
    {
        "surah": "الليل",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/092.jpg"
    },
    {
        "surah": "الضحى",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/093.jpg"
    },
    {
        "surah": "الشرح",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/094.jpg"
    },
    {
        "surah": "التين",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/095.jpg"
    },
    {
        "surah": "العلق",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/096.jpg"
    },
    {
        "surah": "القدر",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/097.jpg"
    },
    {
        "surah": "البينة",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/098.jpg"
    },
    {
        "surah": "الزلزلة",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/099.jpg"
    },
    {
        "surah": "العاديات",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/100.jpg"
    },
    {
        "surah": "القارعة",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/101.jpg"
    },
    {
        "surah": "التكاثر",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/102.jpg"
    },
    {
        "surah": "العصر",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/103.jpg"
    },
    {
        "surah": "الهمزة",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/104.jpg"
    },
    {
        "surah": "الفيل",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/105.jpg"
    },
    {
        "surah": "قريش",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/106.jpg"
    },
    {
        "surah": "الماعون",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/107.jpg"
    },
    {
        "surah": "الكوثر",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/108.jpg"
    },
    {
        "surah": "الكافرون",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/109.jpg"
    },
    {
        "surah": "النصر",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/110.jpg"
    },
    {
        "surah": "المسد",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/111.jpg"
    },
    {
        "surah": "الإخلاص",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/112.jpg"
    },
    {
        "surah": "الفلق",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/113.jpg"
    },
    {
        "surah": "الناس",
        "image": "http://bot.altaqwaa.org/media/albitaqat/images/114.jpg"
    }
];

cmd(
 {
pattern: "سورة",
desc: "تفسير كل سور القرآن الكريم",
use: '',
category: "islam",
filename: __filename,
 },
 async (Void, citel, text, { isCreator }) => {
   // This command handles sending images based on the text received
   const surahName = text.toLowerCase();
   const surahData = data.find((item) => item.surah === surahName);
   if (surahData) {
     await Void.sendMessage(citel.chat, {
       image: { url: surahData.image },
       caption: `معلومات عن سورة ${surahData.surah}`
     }, { quoted: citel });
   }
 }
);

//=====================================================================--------------------

 const hadith = [
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/001.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/002.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/003.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/004.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/005.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/006.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/007.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/008.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/009.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/010.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/011.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/012.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/013.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/014.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/015.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/016.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/017.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/018.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/019.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/020.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/021.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/022.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/023.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/024.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/025.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/026.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/027.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/028.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/029.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/030.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/031.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/032.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/033.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/034.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/035.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/036.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/037.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/038.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/039.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/040.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/041.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/042.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/043.jpg",
    "http://bot.altaqwaa.org/media_islam/files/image/Sahih_al-Bukhari/044.jpg"
];
    
cmd({
pattern: 'حديث',
desc: "ارسال حديث عشوائي",
use: '',
category: "islam",
filename: __filename,
  }, async(Void, citel, text) => {
      const randomIndex = Math.floor(Math.random() * hadith.length);
      const randomImage = hadith[randomIndex];
    
      await Void.sendMessage(citel.chat, {
        image: { url: randomImage },
      }, { quoted: citel });
    });

    //=====================================================================--------------------

const din = [
    "http://bot.altaqwaa.org/media/photo/001.png",
    "http://bot.altaqwaa.org/media/photo/003.png",
    "http://bot.altaqwaa.org/media/photo/004.png",
    "http://bot.altaqwaa.org/media/photo/005.jpg",
    "http://bot.altaqwaa.org/media/photo/006.jpg",
    "http://bot.altaqwaa.org/media/photo/007.jpg",
    "http://bot.altaqwaa.org/media/photo/008.jpg",
    "http://bot.altaqwaa.org/media/photo/009.jpg",
    "http://bot.altaqwaa.org/media/photo/010.jpg",
    "http://bot.altaqwaa.org/media/photo/011.jpg",
    "http://bot.altaqwaa.org/media/photo/013.jpg",
    "http://bot.altaqwaa.org/media/photo/014.jpg",
    "http://bot.altaqwaa.org/media/photo/015.jpg",
    "http://bot.altaqwaa.org/media/photo/016.jpg",
    "http://bot.altaqwaa.org/media/photo/017.jpg",
    "http://bot.altaqwaa.org/media/photo/018.jpg",
    "http://bot.altaqwaa.org/media/photo/019.png",
    "http://bot.altaqwaa.org/media/photo/020.jpg",
    "http://bot.altaqwaa.org/media/photo/021.jpg",
    "http://bot.altaqwaa.org/media/photo/020.jpg",
    "http://bot.altaqwaa.org/media/photo/022.png",
    "http://bot.altaqwaa.org/media/photo/023.png",
    "http://bot.altaqwaa.org/media/photo/024.jpg",
    "http://bot.altaqwaa.org/media/photo/025.jpg",
    "http://bot.altaqwaa.org/media/photo/026.jpg",
    "http://bot.altaqwaa.org/media/photo/027.jpg",
    "http://bot.altaqwaa.org/media/photo/028.jpg",
    "http://bot.altaqwaa.org/media/photo/029.jpg",
    "http://bot.altaqwaa.org/media/photo/030.jpg",
    "http://bot.altaqwaa.org/media/photo/031.png",
    "http://bot.altaqwaa.org/media/photo/032.jpg",
    "http://bot.altaqwaa.org/media/photo/033.jpg",
    "http://bot.altaqwaa.org/media/photo/034.png",
    "http://bot.altaqwaa.org/media/photo/035.png",
    "http://bot.altaqwaa.org/media/photo/036.png",
    "http://bot.altaqwaa.org/media/photo/037.png",
    "http://bot.altaqwaa.org/media/photo/038.jpg",
    "http://bot.altaqwaa.org/media/photo/039.jpg",
    "http://bot.altaqwaa.org/media/photo/040.png",
    "http://bot.altaqwaa.org/media/photo/041.png",
    "http://bot.altaqwaa.org/media/photo/042.jpg",
    "http://bot.altaqwaa.org/media/photo/043.jpg",
    "http://bot.altaqwaa.org/media/photo/044.png",
    "http://bot.altaqwaa.org/media/photo/045.jpg",
    "http://bot.altaqwaa.org/media/photo/046.png",
    "http://bot.altaqwaa.org/media/photo/047.png",
    "http://bot.altaqwaa.org/media/photo/048.png",
    "http://bot.altaqwaa.org/media/photo/049.png",
    "http://bot.altaqwaa.org/media/photo/050.png",
    "http://bot.altaqwaa.org/media/photo/051.png",
    "http://bot.altaqwaa.org/media/photo/052.jpg",
    "http://bot.altaqwaa.org/media/photo/053.jpg",
    "http://bot.altaqwaa.org/media/photo/054.jpg",
    "http://bot.altaqwaa.org/media/photo/055.png",
    "http://bot.altaqwaa.org/media/photo/056.jpg",
    "http://bot.altaqwaa.org/media/photo/057.jpg",
    "http://bot.altaqwaa.org/media/photo/058.png",
    "http://bot.altaqwaa.org/media/photo/059.png",
    "http://bot.altaqwaa.org/media/photo/060.png",
    "http://bot.altaqwaa.org/media/photo/061.jpg",
    "http://bot.altaqwaa.org/media/photo/062.jpg",
    "http://bot.altaqwaa.org/media/photo/063.jpg",
    "http://bot.altaqwaa.org/media/photo/064.jpg",
    "http://bot.altaqwaa.org/media/photo/065.jpg",
    "http://bot.altaqwaa.org/media/photo/066.jpg",
    "http://bot.altaqwaa.org/media/photo/067.jpg",
    "http://bot.altaqwaa.org/media/photo/068.jpg",
    "http://bot.altaqwaa.org/media/photo/069.jpg",
    "http://bot.altaqwaa.org/media/photo/070.jpg",
    "http://bot.altaqwaa.org/media/photo/071.jpg",
    "http://bot.altaqwaa.org/media/photo/072.jpg",
    "http://bot.altaqwaa.org/media/photo/073.png",
    "http://bot.altaqwaa.org/media/photo/074.jpg",
    "http://bot.altaqwaa.org/media/photo/075.jpg",
    "http://bot.altaqwaa.org/media/photo/076.jpg",
    "http://bot.altaqwaa.org/media/photo/077.jpg",
    "http://bot.altaqwaa.org/media/photo/078.jpg",
    "http://bot.altaqwaa.org/media/photo/079.jpg",
    "http://bot.altaqwaa.org/media/photo/080.jpg",
    "http://bot.altaqwaa.org/media/photo/081.jpg",
    "http://bot.altaqwaa.org/media/photo/082.jpg",
    "http://bot.altaqwaa.org/media/photo/083.jpg",
    "http://bot.altaqwaa.org/media/photo/084.jpg",
    "http://bot.altaqwaa.org/media/photo/085.jpg",
    "http://bot.altaqwaa.org/media/photo/086.jpg",
    "http://bot.altaqwaa.org/media/photo/087.jpg",
    "http://bot.altaqwaa.org/media/photo/088.jpg",
    "http://bot.altaqwaa.org/media/photo/089.jpg",
    "http://bot.altaqwaa.org/media/photo/090.jpg",
    "http://bot.altaqwaa.org/media/photo/091.jpg",
    "http://bot.altaqwaa.org/media/photo/092.png",
    "http://bot.altaqwaa.org/media/photo/093.png",
    "http://bot.altaqwaa.org/media/photo/094.png",
    "http://bot.altaqwaa.org/media/photo/095.jpg",
    "http://bot.altaqwaa.org/media/photo/(1).jpg",
    "http://bot.altaqwaa.org/media/photo/(2).jpg",
    "http://bot.altaqwaa.org/media/photo/(3).jpg",
    "http://bot.altaqwaa.org/media/photo/(4).jpg",
    "http://bot.altaqwaa.org/media/photo/(5).jpg",
    "http://bot.altaqwaa.org/media/photo/(6).jpg",
    "http://bot.altaqwaa.org/media/photo/(7).jpg",
    "http://bot.altaqwaa.org/media/photo/(8).jpg",
    "http://bot.altaqwaa.org/media/photo/(9).jpg",
    "http://bot.altaqwaa.org/media/photo/(10).jpg",
    "http://bot.altaqwaa.org/media/photo/(11).jpg",
    "http://bot.altaqwaa.org/media/photo/(12).jpg",
    "http://bot.altaqwaa.org/media/photo/(13).jpg",
    "http://bot.altaqwaa.org/media/photo/(14).jpg",
    "http://bot.altaqwaa.org/media/photo/(15).jpg",
    "http://bot.altaqwaa.org/media/photo/(16).jpg",
    "http://bot.altaqwaa.org/media/photo/(17).jpg",
    "http://bot.altaqwaa.org/media/photo/(18).jpg",
    "http://bot.altaqwaa.org/media/photo/(19).jpg",
    "http://bot.altaqwaa.org/media/photo/(20).jpg",
    "http://bot.altaqwaa.org/media/photo/(21).jpg",
    "http://bot.altaqwaa.org/media/photo/(22).jpg",
    "http://bot.altaqwaa.org/media/photo/(23).jpg",
    "http://bot.altaqwaa.org/media/photo/(24).jpg",
    "http://bot.altaqwaa.org/media/photo/(25).jpg",
    "http://bot.altaqwaa.org/media/photo/(26).jpg",
    "http://bot.altaqwaa.org/media/photo/(27).jpg",
    "http://bot.altaqwaa.org/media/photo/(28).jpg",
    "http://bot.altaqwaa.org/media/photo/(29).jpg",
    "http://bot.altaqwaa.org/media/photo/(30).jpg",
    "http://bot.altaqwaa.org/media/photo/(31).jpg",
    "http://bot.altaqwaa.org/media/photo/(32).jpg",
    "http://bot.altaqwaa.org/media/photo/(33).jpg",
    "http://bot.altaqwaa.org/media/photo/(34).jpg",
    "http://bot.altaqwaa.org/media/photo/(35).jpg",
    "http://bot.altaqwaa.org/media/photo/(36).jpg",
    "http://bot.altaqwaa.org/media/photo/(37).jpg",
    "http://bot.altaqwaa.org/media/photo/(38).jpg",
    "http://bot.altaqwaa.org/media/photo/(39).jpg",
    "http://bot.altaqwaa.org/media/photo/(40).jpg",
    "http://bot.altaqwaa.org/media/photo/(41).jpg",
    "http://bot.altaqwaa.org/media/photo/(42).jpg",
    "http://bot.altaqwaa.org/media/photo/(43).jpg",
    "http://bot.altaqwaa.org/media/photo/(44).jpg",
    "http://bot.altaqwaa.org/media/photo/(45).jpg",
    "http://bot.altaqwaa.org/media/photo/(46).jpg",
    "http://bot.altaqwaa.org/media/photo/(47).jpg",
    "http://bot.altaqwaa.org/media/photo/(48).jpg",
    "http://bot.altaqwaa.org/media/photo/(49).jpg",
    "http://bot.altaqwaa.org/media/photo/(50).jpg",
    "http://bot.altaqwaa.org/media/photo/(51).jpg",
    "http://bot.altaqwaa.org/media/photo/(52).jpg",
    "http://bot.altaqwaa.org/media/photo/(53).jpg",
    "http://bot.altaqwaa.org/media/photo/(54).jpg",
    "http://bot.altaqwaa.org/media/photo/(55).jpg",
    "http://bot.altaqwaa.org/media/photo/(56).jpg",
    "http://bot.altaqwaa.org/media/photo/(57).jpg",
    "http://bot.altaqwaa.org/media/photo/(58).jpg",
    "http://bot.altaqwaa.org/media/photo/(59).jpg",
    "http://bot.altaqwaa.org/media/photo/(60).jpg",
    "http://bot.altaqwaa.org/media/photo/(61).jpg",
    "http://bot.altaqwaa.org/media/photo/(62).jpg",
    "http://bot.altaqwaa.org/media/photo/(63).jpg",
    "http://bot.altaqwaa.org/media/photo/(64).jpg",
    "http://bot.altaqwaa.org/media/photo/(65).jpg",
    "http://bot.altaqwaa.org/media/photo/(66).jpg",
    "http://bot.altaqwaa.org/media/photo/(67).jpg",
    "http://bot.altaqwaa.org/media/photo/(68).jpg",
    "http://bot.altaqwaa.org/media/photo/(69).jpg",
    "http://bot.altaqwaa.org/media/photo/(70).jpg",
    "http://bot.altaqwaa.org/media/photo/(71).jpg",
    "http://bot.altaqwaa.org/media/photo/(72).jpg",
    "http://bot.altaqwaa.org/media/photo/(73).jpg",
    "http://bot.altaqwaa.org/media/photo/(74).jpg",
    "http://bot.altaqwaa.org/media/photo/(75).jpg",
    "http://bot.altaqwaa.org/media/photo/(76).jpg",
    "http://bot.altaqwaa.org/media/photo/(77).jpg",
    "http://bot.altaqwaa.org/media/photo/(78).jpg",
    "http://bot.altaqwaa.org/media/photo/(79).jpg",
    "http://bot.altaqwaa.org/media/photo/(80).jpg",
    "http://bot.altaqwaa.org/media/photo/(81).jpg",
    "http://bot.altaqwaa.org/media/photo/(82).jpg",
    "http://bot.altaqwaa.org/media/photo/(83).jpg",
    "http://bot.altaqwaa.org/media/photo/(84).jpg",
    "http://bot.altaqwaa.org/media/photo/(85).jpg",
    "http://bot.altaqwaa.org/media/photo/(86).jpg",
    "http://bot.altaqwaa.org/media/photo/(87).jpg",
    "http://bot.altaqwaa.org/media/photo/(89).jpg",
    "http://bot.altaqwaa.org/media/photo/(90).jpg",
    "http://bot.altaqwaa.org/media/photo/(91).jpg",
    "http://bot.altaqwaa.org/media/photo/(92).jpg",
    "http://bot.altaqwaa.org/media/photo/(93).jpg",
    "http://bot.altaqwaa.org/media/photo/(94).jpg",
    "http://bot.altaqwaa.org/media/photo/(95).jpg",
    "http://bot.altaqwaa.org/media/photo/(96).jpg",
    "http://bot.altaqwaa.org/media/photo/(97).jpg",
    "http://bot.altaqwaa.org/media/photo/(98).jpg",
    "http://bot.altaqwaa.org/media/photo/(99).jpg",
    "http://bot.altaqwaa.org/media/photo/(100).jpg",
    "http://bot.altaqwaa.org/media/photo/(101).jpg",
    "http://bot.altaqwaa.org/media/photo/(102).jpg",
    "http://bot.altaqwaa.org/media/photo/(103).jpg",
    "http://bot.altaqwaa.org/media/photo/(104).jpg",
    "http://bot.altaqwaa.org/media/photo/(105).jpg",
    "http://bot.altaqwaa.org/media/photo/(106).jpg",
    "http://bot.altaqwaa.org/media/photo/(107).jpg",
    "http://bot.altaqwaa.org/media/photo/(108).jpg",
    "http://bot.altaqwaa.org/media/photo/(109).jpg",
    "http://bot.altaqwaa.org/media/photo/(110).jpg",
    "http://bot.altaqwaa.org/media/photo/(111).jpg",
    "http://bot.altaqwaa.org/media/photo/(112).jpg",
    "http://bot.altaqwaa.org/media/photo/(113).jpg",
    "http://bot.altaqwaa.org/media/photo/(114).jpg",
    "http://bot.altaqwaa.org/media/photo/(115).jpg",
    "http://bot.altaqwaa.org/media/photo/(116).jpg",
    "http://bot.altaqwaa.org/media/photo/(117).jpg",
    "http://bot.altaqwaa.org/media/photo/(118).jpg",
    "http://bot.altaqwaa.org/media/photo/(119).jpg",
    "http://bot.altaqwaa.org/media/photo/(120).jpg",
    "http://bot.altaqwaa.org/media/photo/(121).jpg",
    "http://bot.altaqwaa.org/media/photo/(122).jpg",
    "http://bot.altaqwaa.org/media/photo/(123).jpg",
    "http://bot.altaqwaa.org/media/photo/(124).jpg",
    "http://bot.altaqwaa.org/media/photo/(125).jpg",
    "http://bot.altaqwaa.org/media/photo/(126).jpg",
    "http://bot.altaqwaa.org/media/photo/(127).jpg",
    "http://bot.altaqwaa.org/media/photo/(128).jpg",
    "http://bot.altaqwaa.org/media/photo/(129).jpg",
    "http://bot.altaqwaa.org/media/photo/(130).jpg",
    "http://bot.altaqwaa.org/media/photo/1.jpg",
    "http://bot.altaqwaa.org/media/photo/2.jpg",
    "http://bot.altaqwaa.org/media/photo/3.jpg",
    "http://bot.altaqwaa.org/media/photo/4.jpg",
    "http://bot.altaqwaa.org/media/photo/5.jpg",
    "http://bot.altaqwaa.org/media/photo/6.jpg",
    "http://bot.altaqwaa.org/media/photo/7.jpg",
    "http://bot.altaqwaa.org/media/photo/8.jpg",
    "http://bot.altaqwaa.org/media/photo/9.jpg",
    "http://bot.altaqwaa.org/media/photo/10.jpg",
    "http://bot.altaqwaa.org/media/photo/11.jpg",
    "http://bot.altaqwaa.org/media/photo/12.jpg",
    "http://bot.altaqwaa.org/media/photo/13.jpg",
    "http://bot.altaqwaa.org/media/photo/14.jpg",
    "http://bot.altaqwaa.org/media/photo/15.jpg",
    "http://bot.altaqwaa.org/media/photo/16.jpg",
    "http://bot.altaqwaa.org/media/photo/17.jpg",
    "http://bot.altaqwaa.org/media/photo/18.jpg",
    "http://bot.altaqwaa.org/media/photo/19.jpg",
    "http://bot.altaqwaa.org/media/photo/20.jpg",
    "http://bot.altaqwaa.org/media/photo/21.jpg",
    "http://bot.altaqwaa.org/media/photo/22.jpg",
    "http://bot.altaqwaa.org/media/photo/23.jpg",
    "http://bot.altaqwaa.org/media/photo/24.jpg",
    "http://bot.altaqwaa.org/media/photo/25.jpg",
    "http://bot.altaqwaa.org/media/photo/26.jpg",
    "http://bot.altaqwaa.org/media/photo/27.jpg",
    "http://bot.altaqwaa.org/media/photo/28.jpg",
    "http://bot.altaqwaa.org/media/photo/29.jpg",
    "http://bot.altaqwaa.org/media/photo/30.jpg",
    "http://bot.altaqwaa.org/media/photo/31.jpg",
    "http://bot.altaqwaa.org/media/photo/32.jpg",
    "http://bot.altaqwaa.org/media/photo/33.jpg",
    "http://bot.altaqwaa.org/media/photo/34.jpg",
    "http://bot.altaqwaa.org/media/photo/35.jpg",
    "http://bot.altaqwaa.org/media/photo/36.jpg",
    "http://bot.altaqwaa.org/media/photo/37.jpg",
    "http://bot.altaqwaa.org/media/photo/38.jpg",
    "http://bot.altaqwaa.org/media/photo/39.jpg",
    "http://bot.altaqwaa.org/media/photo/40.jpg",
    "http://bot.altaqwaa.org/media/photo/41.jpg",
    "http://bot.altaqwaa.org/media/photo/42.jpg",
    "http://bot.altaqwaa.org/media/photo/43.jpg",
    "http://bot.altaqwaa.org/media/photo/44.jpg",
    "http://bot.altaqwaa.org/media/photo/45.jpg",
    "http://bot.altaqwaa.org/media/photo/46.jpg",
    "http://bot.altaqwaa.org/media/photo/47.jpg",
    "http://bot.altaqwaa.org/media/photo/48.jpg",
    "http://bot.altaqwaa.org/media/photo/49.jpg",
    "http://bot.altaqwaa.org/media/photo/50.jpg",
    "http://bot.altaqwaa.org/media/photo/51.jpg",
    "http://bot.altaqwaa.org/media/photo/52.jpg",
    "http://bot.altaqwaa.org/media/photo/53.jpg",
    "http://bot.altaqwaa.org/media/photo/54.jpg",
    "http://bot.altaqwaa.org/media/photo/55.jpg",
    "http://bot.altaqwaa.org/media/photo/56.jpg",
    "http://bot.altaqwaa.org/media/photo/57.jpg",
    "http://bot.altaqwaa.org/media/photo/58.jpg",
    "http://bot.altaqwaa.org/media/photo/59.jpg",
    "http://bot.altaqwaa.org/media/photo/60.jpg",
    "http://bot.altaqwaa.org/media/photo/61.jpg",
    "http://bot.altaqwaa.org/media/photo/62.jpg",
    "http://bot.altaqwaa.org/media/photo/63.jpg",
    "http://bot.altaqwaa.org/media/photo/64.jpg",
    "http://bot.altaqwaa.org/media/photo/65.jpg",
    "http://bot.altaqwaa.org/media/photo/66.jpg",
    "http://bot.altaqwaa.org/media/photo/67.jpg",
    "http://bot.altaqwaa.org/media/photo/68.jpg",
    "http://bot.altaqwaa.org/media/photo/69.jpg",
    "http://bot.altaqwaa.org/media/photo/70.jpg",
    "http://bot.altaqwaa.org/media/photo/71.jpg",
    "http://bot.altaqwaa.org/media/photo/72.jpg",
    "http://bot.altaqwaa.org/media/photo/73.jpg",
    "http://bot.altaqwaa.org/media/photo/74.jpg",
    "http://bot.altaqwaa.org/media/photo/75.jpg",
    "http://bot.altaqwaa.org/media/photo/76.jpg",
    "http://bot.altaqwaa.org/media/photo/77.jpg",
    "http://bot.altaqwaa.org/media/photo/78.jpg",
    "http://bot.altaqwaa.org/media/photo/78.jpg",
    "http://bot.altaqwaa.org/media/photo/80.jpg",
    "http://bot.altaqwaa.org/media/photo/81.jpg",
    "http://bot.altaqwaa.org/media/photo/82.jpg",
    "http://bot.altaqwaa.org/media/photo/83.jpg",
    "http://bot.altaqwaa.org/media/photo/84.jpg",
    "http://bot.altaqwaa.org/media/photo/85.jpg",
    "http://bot.altaqwaa.org/media/photo/t1.jpg",
    "http://bot.altaqwaa.org/media/photo/t2.jpg",
    "http://bot.altaqwaa.org/media/photo/t3.jpg",
    "http://bot.altaqwaa.org/media/photo/t4.jpg",
    "http://bot.altaqwaa.org/media/photo/t5.jpg",
    "http://bot.altaqwaa.org/media/photo/t6.jpg",
    "http://bot.altaqwaa.org/media/photo/t7.jpg",
    "http://bot.altaqwaa.org/media/photo/t8.jpg",
    "http://bot.altaqwaa.org/media/photo/t9.jpg",
    "http://bot.altaqwaa.org/media/photo/t10.jpg",
    "http://bot.altaqwaa.org/media/photo/t11.jpg",
    "http://bot.altaqwaa.org/media/photo/t12.jpg",
    "http://bot.altaqwaa.org/media/photo/t13.jpg",
    "http://bot.altaqwaa.org/media/photo/t14.jpg",
    "http://bot.altaqwaa.org/media/photo/t15.jpg",
    "http://bot.altaqwaa.org/media/photo/t16.jpg",
    "http://bot.altaqwaa.org/media/photo/t17.jpg",
    "http://bot.altaqwaa.org/media/photo/t18.jpg",
    "http://bot.altaqwaa.org/media/photo/t19.jpg",
    "http://bot.altaqwaa.org/media/photo/t20.jpg",
    "http://bot.altaqwaa.org/media/photo/t21.jpg",
    "http://bot.altaqwaa.org/media/photo/t22.jpg",
    "http://bot.altaqwaa.org/media/photo/t23.jpg",
    "http://bot.altaqwaa.org/media/photo/t24.jpg",
    "http://bot.altaqwaa.org/media/photo/t25.jpg",
    "http://bot.altaqwaa.org/media/photo/t26.jpg",
    "http://bot.altaqwaa.org/media/photo/t27.jpg",
    "http://bot.altaqwaa.org/media/photo/t28.jpg",
    "http://bot.altaqwaa.org/media/photo/t29.jpg",
    "http://bot.altaqwaa.org/media/photo/t30.jpg",
    "http://bot.altaqwaa.org/media/photo/t31.jpg",
    "http://bot.altaqwaa.org/media/photo/t32.jpg",
    "http://bot.altaqwaa.org/media/photo/t33.jpg",
    "http://bot.altaqwaa.org/media/photo/t34.jpg",
    "http://bot.altaqwaa.org/media/photo/t35.jpg",
    "http://bot.altaqwaa.org/media/photo/t36.jpg",
    "http://bot.altaqwaa.org/media/photo/t37.jpg",
    "http://bot.altaqwaa.org/media/photo/t38.jpg",
    "http://bot.altaqwaa.org/media/photo/t39.jpg",
    "http://bot.altaqwaa.org/media/photo/t40.jpg",
    "http://bot.altaqwaa.org/media/photo/t41.jpg",
    "http://bot.altaqwaa.org/media/photo/t42.jpg",
    "http://bot.altaqwaa.org/media/photo/t43.jpg",
    "http://bot.altaqwaa.org/media/photo/t44.jpg",
    "http://bot.altaqwaa.org/media/photo/t45.jpg",
    "http://bot.altaqwaa.org/media/photo/t46.jpg",
    "http://bot.altaqwaa.org/media/photo/t47.jpg",
    "http://bot.altaqwaa.org/media/photo/t48.jpg",
    "http://bot.altaqwaa.org/media/photo/t49.jpg",
    "http://bot.altaqwaa.org/media/photo/t50.jpg"
];

cmd({
pattern: 'دين',
desc: "ارسال صور دين عشوائي",
use: '',
category: "islam",
filename: __filename,
  }, async(Void, citel, text) => {
  const randomIndex = Math.floor(Math.random() * din.length);
  const randomImage = din[randomIndex];

  await Void.sendMessage(citel.chat, {
    image: { url: randomImage },
  }, { quoted: citel });
});

//=====================================================================-----

const asma2 = [
    {
        "id": 1,
        "name":"اللَّهُ",
        "text":"وهو الاسم الأعظم الذي تفرد به الحق سبحانه وخص به نفسه وجعله أول أسمائه، وأضافها كلها إليه فهو علم على ذاته سبحانه"
    },
    {
        "id": 2,
        "name":"الرَّحْمَنُ",
        "text":"كثير الرحمة وهو اسم مقصور على الله عز وجل ولا يجوز أن يقال رحمن لغير الله، وذلك لأن رحمته وسعت كل شيء وهو أرحم الراحمين"
    },
    {
        "id": 3,
        "name":"الرَّحِيم",
        "text":"هو المنعم أبدا، المتفضل دوما، فرحمته لا تنتهي"
    },
    {
        "id": 4,
        "name":"المَلِك",
        "text":"هو الله، ملك الملوك، له الملك، وهو مالك يوم الدين، ومليك الخلق فهو المالك المطلق"
    },
    {
        "id": 5,
        "name":"الْقُدُّوس",
        "text":"هو الطاهر المنزه عن العيوب والنقائص وعن كل ما تحيط به العقول"
    },
    {
        "id": 6,
        "name":"السَّلَام",
        "text":"هو ناشر السلام بين الأنام وهو الذي سلمت ذاته من النقص والعيب والفناء"
    },
    {
        "id": 7,
        "name":"المُؤْمِن",
        "text":"هو الذي سلم أوليائه من عذابه، والذي يصدق عباده ما وعدهم"
    },
    {
        "id": 8,
        "name":"الْمُهَيْمِن",
        "text":"هو الرقيب الحافظ لكل شيء، القائم على خلقه بأعمالهم، وأرزاقهم وآجالهم، والمطلع على خفايا الأمور وخبايا الصدور"
    },
    {
        "id": 9,
        "name":"الْعَزِيز",
        "text":"هو المنفرد بالعزة، الظاهر الذي لا يقهر، القوي الممتنع فلا يغلبه شيء وهو غالب كل شيء"
    },
    {
        "id": 10,
        "name":"الْجَبَّار",
        "text":"هو الذي تنفذ مشيئته، ولا يخرج أحد عن تقديره، وهو القاهر لخلقه على ما أراد"
    },
    {
        "id": 11,
        "name":"الْمُتَكَبِّر",
        "text":"هو المتعالى عن صفات الخلق المنفرد بالعظمة والكبرياء"
    },
    {
        "id": 12,
        "name":"الْخَالِق",
        "text":"هو الفاطر المبدع لكل شيء، والمقدر له والموجد للأشياء من العدم، فهو خالق كل صانع وصنعته"
    },
    {
        "id": 13,
        "name":"الْبَارِئ",
        "text":"هو الذي خلق الخلق بقدرته لا عن مثال سابق، القادر على إبراز ما قدره إلى الوجود"
    },
    {
        "id": 14,
        "name":"الْمُصَوِّر",
        "text":"هو الذي صور جميع الموجودات، ورتبها فأعطى كل شيء منها صورة خاصة، وهيئة منفردة، يتميز بها على اختلافها وكثرتها"
    },
    {
        "id": 15,
        "name":"اَلْغَفَّار",
        "text":"هو وحده الذي يغفر الذنوب ويستر العيوب في الدنيا والآخرة"
    },
    {
        "id": 16,
        "name":"الْقَهَّار",
        "text":"هو الغالب الذي قهر خلقه بسلطانه وقدرته، وخضعت له الرقاب وذلت له الجبابرة، وصرف خلقه على ما أراد طوعا وكرها، وعنت الوجوه له"
    },
    {
        "id": 17,
        "name":"الْوَهَّاب",
        "text":"هو المنعم على العباد، الذي يهب بغير عوض ويعطي الحاجة بغير سؤال، كثير النعم، دائم العطاء"
    },
    {
        "id": 18,
        "name":"الرَّزَّاق",
        "text":"هو الذي خلق الأرزاق وأعطى كل الخلائق أرزاقها، ويمد كل كائن لما يحتاجه، ويحفظ عليه حياته ويصلحه"
    },
    {
        "id": 19,
        "name":"الْفَتَّاح",

        "text":"هو الذي يفتح مغلق الأمور، ويسهل العسير، وبيده مفاتيح السماوات والأرض"
    },
    {
        "id": 20,
        "name":"الْعَلِيم",

        "text":"هو الذي يعلم تفاصيل الأمور، ودقائق الأشياء وخفايا الضمائر، والنفوس، لا يعزب عنه مثقال ذرة، فعلمه يحيط بجميع الأشياء"
    },
    {
        "id": 21,
        "name":"الْقَابِضُ",
        "text":"هو الذي يقبض الرزق عمن يشاء من الخلق بعدله وحكمته، والذي يوسع الرزق لمن يشاء من عباده بجوده ورحمته فهو سبحانه القابض الباسط"
    },
    {
        "id": 22,
        "name":"الْبَاسِطُ",
        "text":"هو الذي يقبض الرزق عمن يشاء من الخلق بعدله وحكمته، والذي يوسع الرزق لمن يشاء من عباده بجوده ورحمته فهو سبحانه القابض الباسط"
    },
    {
        "id": 23,
        "name":"الخافض",
        "text":"هو الذي يخفض الأذلال لكل من طغى وتجبر وخرج على شريعته وتمرد، وهو الذي يرفع عباده المؤمنين بالطاعات ويرفعهم على عدوهم فينصرهم وهو رافع السماوات السبع"
    },
    {
        "id": 24,
        "name":"الرَّافِعُ",
        "text":"هو الذي يخفض الأذلال لكل من طغى وتجبر وخرج على شريعته وتمرد، وهو الذي يرفع عباده المؤمنين بالطاعات ويرفعهم على عدوهم فينصرهم وهو رافع السماوات السبع"
    },
    {
        "id": 25,
        "name":"المعز",
        "text":"هو الذي يهب القوة والغلبة والشدة لمن شاء فيعزه، وينزعها عمن يشاء فيذله"
    },
    {
        "id": 26,
        "name":"المذل",
        "text":"هو الذي يهب القوة والغلبة والشدة لمن شاء فيعزه، وينزعها عمن يشاء فيذله"
    },
    {
        "id": 27,
        "name":"السَّمِيعُ",
        "text":"ومعناه سمعه لجميع الأصوات الظاهرة والباطنة الخفية والجلية، وإحاطته التامة بها، ومعناه أيضًا: سمع الإجابة منه للسائلين والداعين والعابدين فيجيبهم ويثيبهم"
    },
    {
        "id": 28,
        "name":"الْبَصِير",
        "text":"هو الذي يرى الأشياء كلها ظاهرها وباطنها وهو المحيط بكل شيء علماً"
    },
    {
        "id": 29,
        "name":"الْحَكَم",
        "text":"هو الذي يفصل بين مخلوقاته بما شاء ويفصل بين الحق والباطل لا راد لقضائه ولا معقب لحكمه"
    },
    {
        "id": 30,
        "name":"العدل",
        "text":"هو الذي حرم الظلم على نفسه، وجعله على عباده محرما، فهو المنزه عن الظلم والجور في أحكامه وأفعاله الذي يعطي كل ذي حق حقه"
    },
    {
        "id": 31,
        "name":"اللَّطِيفُ",
        "text":"هو البر الرفيق بعباده، يرزق وييسر ويحسن إليهم، ويرفق بهم ويتفضل عليهم"
    },
    {
        "id": 32,
        "name":"الْخَبِيرُ",
        "text":"هو العليم بدقائق الأمور، لا تخفى عليه خافية، ولا يغيب عن علمه شيء فهو العالم بما كان ويكون"
    },
    {
        "id": 33,
        "name":"الْحَلِيمُ",
        "text":"هو الصبور الذي يمهل ولا يهمل، ويستر الذنوب، ويؤخر العقوبة، فيرزق العاصي كما يرزق المطيع"
    },
    {
        "id": 34,
        "name":"الْعَظِيمُ",
        "text":"هو العظيم في كل شئ، عظيم في ذاته وأسمائه وصفاته، عظيم في رحمته، عظيم في قدرته، عظيم في حكمته، عظيم في جبروته وكبريائه، عظيم في هبته وعطائه، عظيم في خبرته ولطفه، عظيم في بره وإحسانه، عظيم في عزته وعدله وحمده، فهو العظيم المطلق، فلا أحد يساويه"
    },
    {
        "id": 35,
        "name":"الْغَفُورُ",
        "text":"هو الساتر لذنوب عباده المتجاوز عن خطاياهم وذنوبهم. الفرق بين هذا الاسم واسم الغفار أن اسم الغفور يكون للدلالة على مغفرة الذنب مهما عظم وأيس صاحبه من المغفرة أما الغفار فتدل على مغفرة الله المستمرة للذنوب المختلفة لأن الإنسان خطاء فالله غفار"
    },
    {
        "id": 36,
        "name":"الشَّكُورُ",
        "text":"هو الذي يزكو عنده القليل من أعمال العباد، فيتقبلها ويضاعف أجرها"
    },
    {
        "id": 37,
        "name":"الْعَلِيُّ",
        "text":"هو الرفيع القدر فلا يحيط به وصف الواصفين المتعالي عن الأنداد والأضداد، فكل معاني العلو ثابتة له ذاتا وقهرا وشأنا"
    },
    {
        "id": 38,
        "name":"الْكَبِيرُ",
        "text":"هو العظيم الجليل ذو الكبرياء في صفاته وأفعاله فلا يحتاج إلى شيء ولا يعجزه شيء (ليس كمثله شيء)"
    },
    {
        "id": 39,
        "name":"الْحَفِيظُ",
        "text":"هو الذي لا يغرب عن حفظه شيء ولو كمثقال الذر فحفظه لا يتبدل ولا يزول ولا يعتريه التبديل"
    },
    {
        "id": 40,
        "name":"المُقِيت",
        "text":"هو المتكفل بإيصال أقوات الخلق إليهم وهو الحفيظ والمقتدر والقدير والمقدر والممدد"
    },
    {
        "id": 41,
        "name":"الْحَسِيبُ",
        "text":"هو الكافي الذي منه كفاية العباد وهو الذي عليه الاعتماد يكفي العباد بفضله"
    },
    {
        "id": 42,
        "name":"الجليل",
        "text":"هو العظيم المطلق المتصف بجميع صفات الكمال والمنعوت بكمالها المنزه عن كل نقص"
    },
    {
        "id": 43,
        "name":"الْكَرِيمُ",
        "text":"هو الكثير الخير الجواد المعطي الذي لا ينفذ عطاؤه وهو الكريم المطلق الجامع لأنواع الخير والشرف والفضائل المحمود بفعاله"
    },
    {
        "id": 44,
        "name":"الرَّقِيبُ",
        "text":"هو الرقيب الذي يراقب أحوال العباد ويعلم أقوالهم ويحصي أعمالهم وهو الحافظ الذي لا يغيب عنه شيء"
    },
    {
        "id": 45,
        "name":"الْمُجِيبُ",
        "text":"هو الذي يجيب دعاء من دعاه، وسؤال من سأله، ويقابله بالعطاء والقبول، ولا يسأل أحد سواه"
    },
    {
        "id": 46,
        "name":"الْوَاسِعُ",
        "text":"هو الذي وسع رزقه جميع خلقه، وسعت رحمته كل شيء المحيط بكل شيء"
    },
    {
        "id": 47,
        "name":"اَلْحَكِيمُ",
        "text":"هو المحق في تدبيره اللطيف في تقديره الخبير بحقائق الأمور العليم بحكمه المقدور فجميع خلقه وقضاه خير وحكمة وعدل"
    },
    {
        "id": 48,
        "name":"الْوَدُودُ",
        "text":"هو المحب لعباده، والمحبوب في قلوب أوليائه"
    },
    {
        "id": 49,
        "name":"الْمَجِيدُ",
        "text":"هو الله تمجَّد بفعاله، ومجَّده خلقه لعظمته، والمجيد هو واسع الكرم، ووصف نفسه بالمجيد وهو متضمن كثرة صفات كماله وسعتها، وعدم إحصاء الخلق لها، وسعة أفعاله وكثرة خيره ودوامه. وتعني أيضاً البالغ النهاية في المجد، الكثير الإحسان الجزيل العطاء العظيم البر. تمجد"
    },
    {
        "id": 50,
        "name":"الباعث",
        "text":"هو باعث الخلق يوم القيامة، وباعث رسله إلى العباد، وباعث المعونة إلى العبد"
    },
    {
        "id": 51,
        "name":"الشَّهِيدُ",
        "text":"هو الحاضر الذي لا يغيب عنه شيء، فهو المطلع على كل شيء مشاهد له عليم بتفاصيله"
    },
    {
        "id": 52,
        "name":"الْحَقُّ",
        "text":"هو الذي يحق الحق بكلماته ويؤيد أولياءه فهو المستحق للعبادة"
    },
    {
        "id": 53,
        "name":"الْوَكِيلُ",
        "text":"هو الكفيل بالخلق القائم بأمورهم فمن توكل عليه تولاه وكفاه، ومن استغنى به أغناه وأرضاه"
    },
    {
        "id": 54,
        "name":"الْقَوِيّ",
        "text":"هو صاحب القدرة التامة البالغة الكمال غالب لا يُغلب فقوته فوق كل قوة، ولايرد قضاءه راد، ينفذ أمره، ويمضي قضاؤه في خلقه، شديد عقابه لمن كفر بآياته وجحد حججه"
    },
    {
        "id": 55,
        "name":"الْمَتِينُ",
        "text":"هو الشديد الذي لا يحتاج في إمضاء حكمه إلى جند أو مدد ولا إلى معين، فهو المتناهي في القوة، التي لاتلحق أفعاله مشقة، ولايمسه فيها لغوب"
    },
    {
        "id": 56,
        "name":"الْوَلِيُّ",
        "text":"هو المحب الناصر لمن أطاعه، ينصر أولياءه، ويقهر أعداءه، والمتولي الأمور الخلائق ويحفظهم"
    },
    {
        "id": 57,
        "name":"الْحَمِيدُ",
        "text":"هو المستحق للحمد والثناء له منتهى الحمد وأطيبه على ذاته وصفاته وعلى نعمه التي لا تحصى"
    },
    {
        "id": 58,
        "name":"الْـمُحصِي",
        "text":"هو الذي أحصى كل شيء بعلمه، فلا يفوته منها دقيق ولا جليل"
    },
    {
        "id": 59,
        "name":"المبدئ",
        "text":"هو الذي أنشأ الأشياء، واخترعها ابتداء من غير سابق مثال"
    },
    {
        "id": 60,
        "name":"المعيد",
        "text":"هو الذي يعيد الخلق بعد الحياة إلى الممات في الدنيا، وبعد الممات إلى الحياة يوم القيامة"
    },
    {
        "id": 61,
        "name":"المُحيي",
        "text":"هو خالق الحياة ومعطيها لمن شاء، يحيي الخلق من العدم ثم يحييهم بعد الموت"
    },
    {
        "id": 62,
        "name":"المميت",
        "text":"هو مقدر الموت على كل من أماته ولا مميت سواه، قهر عباده بالموت متى شاء وكيف شاء"
    },
    {
        "id": 63,
        "name":"الْحَيُّ",
        "text":"هو المتصف بالحياة الأبدية التي لا بداية لها ولا نهاية فهو الباقي أزلا وأبدا وهو الحي الذي لا يموت"
    },
    {
        "id": 64,
        "name":"الْقَيُّومُ",
        "text":"هو القائم بنفسه، الغني عن غيره، وهو القائم بتدبير أمر خلقه في إنشائهم ورزقهم"
    },
    {
        "id": 65,
        "name":"الواجد",
        "text":"هو الذي لا يعوزه شيء ولا يعجزه شيء يجد كل ما يطلبه، ويدرك كل ما يريده"
    },
    {
        "id": 66,
        "name":"الماجد",
        "text":"هو الذي له الكمال المتناهي والعز الباهي، له العز في الأوصاف والأفعال الذي يعامل العباد بالجود والرحمة"
    },
    {
        "id": 67,
        "name":"الْوَاحِدُ",
        "text":"هو الفرد المتفرد في ذاته وصفائه وأفعاله، واحد في ملكه لا ينازعه أحد، لا شريك له سبحانه"
    },
    {
        "id": 68,
        "name":"الصَّمَدُ",
        "text":"هو المطاع الذي لا يقضى دونه أمر، الذي يقصد إليه في الحوائج فهو مقصد عباده في مهمات دينهم ودنياهم"
    },
    {
        "id": 69,
        "name":"الْقَادِرُ",
        "text":"هو الذي يقدر على إيجاد المعدوم وإعدام الموجود على قدر ما تقتضي الحكمة، لا زائدا عليه ولا ناقصا عنه"
    },
    {
        "id": 70,
        "name":"الْمُقْتَدِرُ",
        "text":"هو الذي يقدر على إصلاح الخلائق على وجه لا يقدر عليه غيره"
    },
    {
        "id": 71,
        "name":"الْمُقَدِّمُ",
        "text":"هو الذي يقدم الأشياء ويضعها في مواضعها، فمن استحق التقديم قدمه"
    },
    {
        "id": 72,
        "name":"الْمُؤَخِّرُ",
        "text":"هو الذي يؤخر الأشياء فيضعها في مواضعها المؤخر لمن شاء من الفجار والكفار وكل من يستحق التأخير"
    },
    {
        "id": 73,
        "name":"الْأَوَّلُ",
        "text":"هو الذي لم يسبقه في الوجود شيء فهو أول قبل الوجود"
    },
    {
        "id": 74,
        "name":"الْآخِرُ",
        "text":"هو الباقي بعد فناء خلقه، البقاء الأبدي يفنى الكل وله البقاء وحده، فليس بعده شيء"
    },
    {
        "id": 75,
        "name":"الظَّاهِرُ",
        "text":"هو الذي ظهر فوق كل شيء وعلا عليه، الظاهر وجوده لكثرة دلائله"
    },
    {
        "id": 76,
        "name":"الْبَاطِنُ",
        "text":"هو العالم ببواطن الأمور وخفاياها، وهو أقرب إلينا من حبل الوريد"
    },
    {
        "id": 77,
        "name":"الوالي",
        "text":"هو المالك للأشياء المتصرف فيها بمشيئته وحكمته، ينفذ فيها أمره، ويجري عليها حكمه"
    },
    {
        "id": 78,
        "name":"الْمُتَعَالِ",
        "text":"هو الذي جل عن إفك المفترين، وتنزه عن وساوس المتحيرين"
    },
    {
        "id": 79,
        "name":"الْبَرُّ",
        "text":"هو العطوف على عباده ببره ولطفه، ومن على السائلين بحسن عطائه، وهو الصدق فيما وعد"
    },
    {
        "id": 80,
        "name":"التَّوَّابُ",
        "text":"هو الذي يوفق عباده للتوبة حتى يتوب عليهم ويقبل توبتهم فيقابل الدعاء بالعطاء، والتوبة بغفران الذنوب"
    },
    {
        "id": 91,
        "name":"الْمُنْتَقِمُ",
        "text":"هو الذي يقصم ظهور الطغاة، ويشدد العقوبة على العصاة، وذلك بعد الإعذار والإنذار"
    },
    {
        "id": 82,
        "name":"العَفُو",
        "text":"هو الذي يترك المؤاخدة على الذنوب ولا يذكرك بالعيوب فهو يمحو السيئات ويتجاوز عن المعاصي"
    },
    {
        "id": 83,
        "name":"الرَّؤُوفُ",
        "text":"هو المتعطف على المذنبين بالتوبة، الذي جاد بلطفه ومَنَّ بتعطفه، يستر العيوب ثم يعفو عنها"
    },
    {
        "id": 84,
        "name":"مَالِكُ الْمُلْكِ",
        "text":"هو المتصرف في ملكه كيف يشاء لا راد لحكمه، ولا معقب لأمره"
    },
    {
        "id": 85,
        "name":"ذُو الْجَلَالِ والْإكْرَامِ",
        "text":"هو المنفرد بصفات الجلال والكمال والعظمة، المختص بالإكرام والكرامة وهو أهل لأن يجل"
    },
    {
        "id": 86,
        "name":"المقسط",
        "text":"هو العادل في حكمه، الذي ينتصف للمظلوم من الظالم، ثم يكمل عدله فيرضي الظالم بعد إرضاء المظلوم"
    },
    {
        "id": 87,
        "name":"الْجَامِعُ",
        "text":"هو الذي جمع الكمالات كلها، ذاتا ووصفا وفعلا، الذي يجمع بين الخلائق المتماثلة والمتباينة، والذي يجمع الأولين والآخرين"
    },
    {
        "id": 88,
        "name":"الْغَنِيُّ",
        "text":"هو الذي لا يحتاج إلى شيء، وهو المستغني عن كل ما سواه، المفتقر إليه كل من عاداه"
    },
    {
        "id": 89,
        "name":"المغني",
        "text":"هو معطي الغنى لعباده، يغني من يشاء غناه، وهو الكافي لمن شاء من عباده"
    },
    {
        "id": 90,
        "name":"الْمُعْطِي",
        "text":"هو الذي أعطى كل شيء"
    },
    {
        "id": 91,
        "name":"المانع",
        "text":"يمنع العطاء عن من يشاء ابتلاء أو حماية"
    },
    {
        "id": 92,
        "name":"الضار",
        "text":"هو المقدر للضر على من أراد كيف أراد"
    },
    {
        "id": 93,
        "name":"النافع",
        "text":"مقدر النفع والخير لمن أراد كيف أراد كل ذلك على مقتضى حكمته سبحانه"
    },
    {
        "id": 94,
        "name":"النُّورُ",
        "text":"هو الهادي الرشيد الذي يرشد بهدايته من يشاء فيبين له الحق، ويلهمه اتباعه، الظاهر في ذاته، المظهر لغيره"
    },
    {
        "id": 95,
        "name":"الْهَادِي",
        "text":"هو المبين للخلق طريق الحق بكلامه يهدي القلوب إلى معرفته، والنفوس إلى طاعته"
    },
    {
        "id": 96,
        "name":"الْبَدِيعُ",
        "text":"هو الذي لا يماثله أحد في صفاته ولا في حكم من أحكامه، أو أمر من أموره، فهو المحدث الموجد على غير مثال"
    },
    {
        "id": 97,
        "name":"الباقي",
        "text":"هو وحده له البقاء، الدائم الوجود الموصوف بالبقاء الأزلي، غير قابل للفناء فهو الباقي بلا انتهاء"
    },
    {
        "id": 98,
        "name":"الْوَارِثُ",
        "text":"هو الأبقى الدائم الذي يرث الخلائق بعد فناء الخلق، وهو يرث الأرض ومن عليها"
    },
    {
        "id": 99,
        "name":"الرشيد",
        "text":"هو الذي أسعد من شاء بإرشاده، وأشقى من شاء بإبعاده، عظيم الحكمة بالغ الرشاد"
    },
    {
        "id": 100,
        "name":"الصبور",
        "text":"هو الحليم الذي لا يعاجل العصاة بالنقمة، بل يعفوا ويؤخر، ولا يسرع بالفعل قبل أوانه"
    }
];

cmd({
pattern: "أسماء_الله",
alias: ["اسماء_الله"],
desc: "ارسال اسم من اسماء الله مع تفسيره",
use: '',
category: "islam",
filename: __filename,
  }, async (Void, citel) => {
  const randomIndex = Math.floor(Math.random() * asma2.length);
  const randomEntry = asma2[randomIndex];
  await Void.sendMessage(citel.chat, {
    text: `
    ⊹⊱≼━━━⌬〔🕋〕⌬━━━≽⊰⊹         
֎ ╎أسماء الله الحُسنى :

*الإسم :* ${randomEntry.name}

*الشرح :* ${randomEntry.text}
             
⊹⊱≼━━━⌬〔🕋〕⌬━━━≽⊰⊹
 `
  });
});

//=====================================================================-------------

const quizData = [
  {
    "question": "كم كان عمر النبي محمد صلى الله عليه وسلم عندما توفيت أمه؟",
    "answer_1": "3 سنوات",
    "answer_2": "4 سنوات",
    "answer_3": "5 سنوات",
    "answer_4": "6 سنوات",
    "right_answer": 3
  },
  {
    "question": "ما هي أطول سورة في القرآن الكريم؟",
    "answer_1": "سورة البقرة",
    "answer_2": "سورة آل عمران",
    "answer_3": "سورة النساء",
    "answer_4": "سورة المائدة",
    "right_answer": 1
  },
  {
    "question": "ما السورة التي ختمت باسم وقت من أوقات الصلاة؟",
    "answer_1": "سورة القدر",
    "answer_2": "سورة البلد",
    "answer_3": "سورة الأعلى",
    "answer_4": "سورة الفجر",
    "right_answer": 1
  },
  {
    "question": "كم عدد التكبيرات في الركعة الأولى في صلاة العيد؟",
    "answer_1": "ستة",
    "answer_2": "سبعة",
    "answer_3": "تسعة",
    "answer_4": "خمسة",
    "right_answer": 2
  },
  {
    "question": "في أي جهة يقع باب الكعبة المشرفة؟",
    "answer_1": "في الجهة الغربية من الكعبة",
    "answer_2": "في الجهة الجنوبية من الكعبة",
    "answer_3": "في الجهة الشمالية من الكعبة",
    "answer_4": "في الجهة الشرقية من الكعبة",
    "right_answer": 4
  },
  {
    "question": "كم عدد مصارف الزكاة؟",
    "answer_1": "ثمانية",
    "answer_2": "خمسة",
    "answer_3": "سبعة",
    "answer_4": " تسعة",
    "right_answer": 1
  },
  {
    "question": "كم مرة ذكرت السيدة مريم في القرآن الكريم؟",
    "answer_1": "43 مرة",
    "answer_2": "55 مرة",
    "answer_3": "42 مرة",
    "answer_4": "34 مرة",
    "right_answer": 4
  },
  {
    "question": "قال تعالى في سورة العاديات: ( فالمغيرات صبحا (3)) ماالمقصود بالمغيرات؟",
    "answer_1": "الرياح الشديدة",
    "answer_2": "الابل",
    "answer_3": "الملائكة السابحين",
    "answer_4": "الخيل",
    "right_answer": 4
  },
  {
    "question": "ما هي أعظم آية في القرآن الكريم؟",
    "answer_1": "آية الكرسي",
    "answer_2": "آخر آية من سورة الكهف",
    "answer_3": "آخر آية من سورة البقرة",
    "answer_4": "أول آية من سورة البقرة",
    "right_answer": 1
  },
  {
    "question": "أحد هؤلاء الصحابة من العشرة المبشرين بالجنة؟",
    "answer_1": "سلمان الفارسي",
    "answer_2": "عقيل بن أبي طالب",
    "answer_3": "سعد بن أبي وقاص",
    "answer_4": "الأشعث بن قيس",
    "right_answer": 3
  },
  {
    "question": "في أي سنة هجرية كانت غزوة أحد؟",
    "answer_1": "السنة الثالثة للهجرة",
    "answer_2": "السنة الرابعة للهجرة",
    "answer_3": "السنة الخامسة للهجرة",
    "answer_4": "السنة السادسة للهجرة",
    "right_answer": 1
  },
  {
    "question": "من هي النصرانية التي أسلمت ثم تزوجها النبي صلى الله عليه وسلم؟",
    "answer_1": "جويرية بنت الحارث",
    "answer_2": "ميمونة",
    "answer_3": "سودة بنت زمعة",
    "answer_4": "مارية القبطية",
    "right_answer": 4
  },
  {
    "question": "من هو النبي الذي أرسل الى قوم ثمود؟",
    "answer_1": "صالح",
    "answer_2": "هود",
    "answer_3": "نوح",
    "answer_4": "شعيب",
    "right_answer": 1
  },
  {
    "question": "ما عدد أحزاب القرآن الكريم؟",
    "answer_1": "50 حزبا",
    "answer_2": "40 حزبا",
    "answer_3": "30 حزبا",
    "answer_4": "60 حزبا",
    "right_answer": 4
  },
  {
    "question": "قال تعالى في سورة المدثر: (والرجز فاهجر (5)) ما المقصود بالرجز؟",
    "answer_1": "الكذب",
    "answer_2": "الأوثان",
    "answer_3": "الجدال",
    "answer_4": "النوم",
    "right_answer": 2
  },
  {
    "question": "قال تعالى: (والصافات صفا * فالزاجرات زجرا) ما المقصود بالزاجرات؟",
    "answer_1": "الملائكة",
    "answer_2": "الرياح",
    "answer_3": "الغمام",
    "answer_4": "السحاب",
    "right_answer": 1
  },
  {
    "question": "من هو الصحابي الذي كانت تستحي منه ملائكة السماء؟",
    "answer_1": "علي بن أبي طالب",
    "answer_2": "عثمان بن عفان",
    "answer_3": "عمر بن الخطاب",
    "answer_4": "أبو بكر الصديق",
    "right_answer": 2
  },
  {
    "question": "ما اسم السورة التي تنتهي آياتها بحرف السين؟",
    "answer_1": "لفلق",
    "answer_2": "الصمد",
    "answer_3": "الناس",
    "answer_4": "الضخى",
    "right_answer": 3
  },
  {
    "question": "كم عدد السور التي ابتدأت بالحروف المقطعة (الم)؟",
    "answer_1": "أربعة سور",
    "answer_2": "خمس سور",
    "answer_3": "ثلاث سور",
    "answer_4": "ستة سور",
    "right_answer": 4
  },
  {
    "question": "ما هو عدد حملة العرش يوم القيامة والمذكورين في القرآن الكريم؟",
    "answer_1": "سبعة",
    "answer_2": "ستة",
    "answer_3": "ثمانية",
    "answer_4": "تسعة",
    "right_answer": 3
  },
  {
    "question": "أين ذكرت الآية الكريمة: ( وما آتاكم الرسول فخذوه وما نهاكم عنه فانتهوا)؟",
    "answer_1": "سورة الحشر",
    "answer_2": "سورة الصف",
    "answer_3": "سورة الجمعة",
    "answer_4": "سورة الواقعة",
    "right_answer": 1
  },
  {
    "question": "ما هي السورة التي يطلق عليها أم الكتاب؟",
    "answer_1": "سورة محمد",
    "answer_2": "سورة البقرة",
    "answer_3": "سورة يس",
    "answer_4": "سورة الفاتحة",
    "right_answer": 4
  },
  {
    "question": "كم شخص اشترك في قتل ناقة النبي صالح عليه السلام؟",
    "answer_1": "تسعة أشخاص",
    "answer_2": "خمسة أشخاص",
    "answer_3": "عشرة أشخاص",
    "answer_4": "ثمانية أشخاص",
    "right_answer": 1
  },
  {
    "question": "من الذي لقب الرسول الكريم بالطيب المطيب؟",
    "answer_1": "زيد بن حارثة",
    "answer_2": "أسامة بن زيد",
    "answer_3": "أنس بن مالك",
    "answer_4": "عمار بن ياسر",
    "right_answer": 4
  },
  {
    "question": "في أي سورة وردت الآية: (يمحق الله الربا ويربي الصدقات والله لا يحب كل كفار أثيم)؟",
    "answer_1": "المائدة",
    "answer_2": "البقرة",
    "answer_3": "آل عمران",
    "answer_4": "هود",
    "right_answer": 2
  },
  {
    "question": "في أي سورة وردت الآية التالية (ولبثوا في كهفهم ثلاث مئة سنين وازدادوا تسعا)؟",
    "answer_1": "سورة الكهف",
    "answer_2": "سورة فصلت",
    "answer_3": "سورة مريم",
    "answer_4": "سورة غافر",
    "right_answer": 1
  },
  {
    "question": "من هو النبي الذي دعا ربه (توفني مسلما وألحقني بالصالحين)؟",
    "answer_1": "يعقوب عليه السلام",
    "answer_2": "يوسف عليه السلام",
    "answer_3": "صالح عليه السلام",
    "answer_4": "ابراهيم عليه السلام",
    "right_answer": 2
  },
  {
    "question": "ما هي الرادفة؟",
    "answer_1": "يوم القيامة",
    "answer_2": "النفخة الأولى في البوق",
    "answer_3": "النفخة الثانية في البوق",
    "answer_4": "انشقاق الأرض",
    "right_answer": 3
  },
  {
    "question": "السورة التي ابتدأت بالحرفين المقطعين (طس)؟",
    "answer_1": "سورة الحجر",
    "answer_2": "سورة الرعد",
    "answer_3": "سورة الأعراف",
    "answer_4": "سورة النمل",
    "right_answer": 4
  },
  {
    "question": "ما هي السورة التي تسمى سورة التوديع؟",
    "answer_1": "سورة الزلزلة",
    "answer_2": "سورة الحج",
    "answer_3": "سورة النصر",
    "answer_4": "سورة الفيل",
    "right_answer": 3
  },
  {
    "question": "الشهر الثامن في التقويم الهجري؟",
    "answer_1": "شعبان",
    "answer_2": "ذو الحجة",
    "answer_3": "محرم",
    "answer_4": "شوال",
    "right_answer": 1
  },
  {
    "question": "كم عدد السور التي افتتحت بثلاثة أحرف؟",
    "answer_1": "16 سورة",
    "answer_2": "15 سورة",
    "answer_3": "14 سورة",
    "answer_4": "13 سورة",
    "right_answer": 4
  },
  {
    "question": "كم عدد آيات سورة البقرة؟",
    "answer_1": "286 آية",
    "answer_2": "280 آية",
    "answer_3": "277 آية",
    "answer_4": "298 آية",
    "right_answer": 1
  },
  {
    "question": "من أسماء الخيل التي ذكرت في القرآن الكريم؟",
    "answer_1": "الزاجرات",
    "answer_2": "النازعات",
    "answer_3": "الذاريات",
    "answer_4": "العاديات",
    "right_answer": 4
  },
  {
    "question": "كم عدد القراءات الصحيحة للقرآن الكريم؟",
    "answer_1": "7 قراءات",
    "answer_2": "8 قراءات",
    "answer_3": "9 قراءات",
    "answer_4": "10 قراءات",
    "right_answer": 4
  },
  {
    "question": "كم مرة اعتمر النبي صلى الله عليه وسلم؟",
    "answer_1": "أربع عمرات",
    "answer_2": "عمرة واحدة",
    "answer_3": "خمس عمرات",
    "answer_4": "سبع عمرات",
    "right_answer": 1
  },
  {
    "question": "ما اسم أخو يوسف عليه السلام من أمه وأبيه؟",
    "answer_1": "روأبين",
    "answer_2": "بنيامين",
    "answer_3": "يهوذا",
    "answer_4": "يوشع",
    "right_answer": 2
  },
  {
    "question": "قام أحدهم بمبادلة صاع من القمح الجيد بصاعين من القمح الرديء لشخص آخر ما حكم هذه المبادلة؟",
    "answer_1": "جائزة",
    "answer_2": "مضاربة",
    "answer_3": "ربا الفضل",
    "answer_4": "ربا النسيئة",
    "right_answer": 3
  },
  {
    "question": "في أي عام هجري وقعت غزوة خيبر؟",
    "answer_1": "10 هجري",
    "answer_2": "5 هجري",
    "answer_3": "9 هجري",
    "answer_4": "7 هجري",
    "right_answer": 4
  },
  {
    "question": "كم عدد الأنبياء الذين ذكروا في سورة الأنبياء؟",
    "answer_1": "18 نبي",
    "answer_2": "19 نبي",
    "answer_3": "16 نبي",
    "answer_4": "25 نبي",
    "right_answer": 3
  },
  {
    "question": "ما هو الاسم الذي يطلق على الزيادة في الدين نظير الأجل أو الزيادة فيه؟",
    "answer_1": "ربا النسيئة",
    "answer_2": "ربا الفضل",
    "answer_3": "مضاربة مشروعة",
    "answer_4": "ربا المال",
    "right_answer": 1
  },
  {
    "question": "ما هي السورة التي لا تبدأ بالبسملة؟",
    "answer_1": "النحل",
    "answer_2": "النمل",
    "answer_3": "الإسراء",
    "answer_4": "التوبة",
    "right_answer": 4
  },
  {
    "question": "من أول من ألف في أحكام القرآن؟",
    "answer_1": "الامام الشافعي",
    "answer_2": "الامام حمد بن حنبل",
    "answer_3": "الامام المالكي",
    "answer_4": "الامام أبي حنيفة",
    "right_answer": 1
  },
  {
    "question": "في أي سورة ذكرت قصة قابيل وهابيل؟",
    "answer_1": "سورة الأعراف",
    "answer_2": "سورة القصص",
    "answer_3": "سورة الأنعام",
    "answer_4": "سورة المائدة",
    "right_answer": 4
  },
  {
    "question": "ما اسم الزوجة الثالثة بالترتيب التي تزوجها النبي صلى الله عليه وسلم؟",
    "answer_1": "حفصة بنت عمر",
    "answer_2": "عائشة بنت أبي بكر الصديق",
    "answer_3": "أم سلمة",
    "answer_4": "سودة بنت زمعة",
    "right_answer": 2
  },
  {
    "question": "من من الخلفاء الراشدين كان الأكبر سنا عندما لقي ربه؟",
    "answer_1": "عثمان بن عفان",
    "answer_2": "أبو بكر الصديق",
    "answer_3": "عمر بن الخطاب",
    "answer_4": "علي بن أبي طالب",
    "right_answer": 1
  },
  {
    "question": "من أول من لقب بأمير المؤمنين؟",
    "answer_1": "عثمان بن عفان",
    "answer_2": "أبو بكر الصديق",
    "answer_3": "عمر بن الخطاب",
    "answer_4": "علي بن أبي طالب",
    "right_answer": 3
  },
  {
    "question": "يجب اخراج الزكاة من الذهب اذا كان يبلغ النصاب الشرعي وهو؟",
    "answer_1": "88 غراما",
    "answer_2": "78 غراما",
    "answer_3": "85 غراما",
    "answer_4": "58 غراما",
    "right_answer": 3
  },
  {
    "question": "ماذا لقب ابراهيم عليه السلام؟",
    "answer_1": "الصديق",
    "answer_2": "شيخ المرسلين",
    "answer_3": "اسرائيل",
    "answer_4": "الخليل",
    "right_answer": 4
  },
  {
      "question": "كي يسلم اي شخص ماذا يجب عليه فعله ؟؟",
      "answer_1": "الزكاة",
      "answer_2": "الصلاة",
      "answer_3": "نطق الشهادتين ثم اتباع ما سبق",
      "answer_4": "الحج والصيام",
      "right_answer": 3
    },
    {
      "question": "حكم الصلاة قاعداً",
      "answer_1": "اذا كان مريضاً يجوز له",
      "answer_2": "لا يجوز",
      "answer_3": "يجوز",
      "answer_4": "ا",
      "right_answer": 1
    },
    {
      "question": "كم عدد جميع ركعات الصلاة في اليوم ؟؟",
      "answer_1": "12",
      "answer_2": "17",
      "answer_3": "20",
      "answer_4": "15",
      "right_answer": 2
    },
    {
      "question": "ما هو الدعاء الذي يردده المصلين بين السجدتين ؟؟",
      "answer_1": "اللهم اغفر لي ذنبي",
      "answer_2": "سبحان ربي الأعلى",
      "answer_3": "لا حول ولا قوة الا بلله",
      "answer_4": "سبحان رب العرش العظيم",
      "right_answer": 1
    },
    {
      "question": "اسم الملك الذي يقف خازناً على جهنم؟؟؟",
      "answer_1": "النار",
      "answer_2": "مالك",
      "answer_3": "ا",
      "answer_4": "ا",
      "right_answer": 2
    },
    {
      "question": "من هو أول نبي قام بإرتداء السروال ؟؟",
      "answer_1": "سيدنا أبراهيم صلى الله عليه السلام",
      "answer_2": "سيدنا محمد صلي الله عليه وسلم",
      "answer_3": "سيدنا عيسى عليه السلام",
      "answer_4": "سيدنا موسى عليه السلام",
      "right_answer": 1
    },
    {
      "question": "أي من الأنبياء كان يتمنى موته ؟",
      "answer_1": "سيدنا نوح عليه السلام",
      "answer_2": "سيدنا آدم عليه السلام",
      "answer_3": "سيدنا يوسف عليه السلام",
      "answer_4": "سيدنا موسى عليه السلام",
      "right_answer": 3
    },
    {
      "question": "اذكر عدد سجدات التلاوة في القرآن الكريم ؟؟",
      "answer_1": "10",
      "answer_2": "20",
      "answer_3": "15",
      "answer_4": "19",
      "right_answer": 3
    },
    {
      "question": "من اول نبي صام ؟؟",
      "answer_1": "سيدنا ادم",
      "answer_2": "سيدنا عيسى",
      "answer_3": "سيدنا محمد",
      "answer_4": "ا",
      "right_answer": 1
    },
    {
      "question": "اذكر المهنتين التي عمل فيهما الرسول محمد صلى الله عليه وسلم",
      "answer_1": "الرعي والخياطة",
      "answer_2": "التجارة والسباكة",
      "answer_3": "الرعي والتجارة",
      "answer_4": "لاشئ مما سبق",
      "right_answer": 3
    },
    {
      "question": "من الشخص الذي انزلت عليه سورة الهمزة ؟؟",
      "answer_1": "أبو جهل",
      "answer_2": "أمية بن خلف",
      "answer_3": "سعد بن ابي وقاس",
      "answer_4": "ابي سفيان",
      "right_answer": 2
    },
    {
      "question": "ما هي اسم ناقة سيدنا محمد صلى الله عليه وسلم ؟؟",
      "answer_1": "القصاء",
      "answer_2": "المقصية",
      "answer_3": "القصواء",
      "answer_4": "ا",
      "right_answer": 3
    },
    {
      "question": "كم عيد للمسلمين؟",
      "answer_1": "1",
      "answer_2": "3",
      "answer_3": "2",
      "answer_4": "5",
      "right_answer": 3
    },
    {
      "question": "اسم أم نبينا محمد (صلى الله عليه و سلم)",
      "answer_1": "أمنه",
      "answer_2": "سارة",
      "answer_3": "ام كلثوم",
      "answer_4": "ا",
      "right_answer": 1
    },
    {
      "question": "كم مرة ذكرت اسم الجنة فى القرآن الكريم؟",
      "answer_1": "45",
      "answer_2": "66",
      "answer_3": "12",
      "answer_4": "43",
      "right_answer": 2
    },
    {
      "question": "صح أم خطأ : هل صلاة الجمعة واجبه ؟",
      "answer_1": "نعم, لانها تكون في وقت صلاة الظهر, و تصلي أربع ركعات اذا فاتك وقتها.",
      "answer_2": "لا , ليست واجبه لانه تتكون من ركعتين.",
      "answer_3": "ا",
      "answer_4": "ا",
      "right_answer": 1
    },
    {
      "question": "كم سورة في القرآن؟",
      "answer_1": "30",
      "answer_2": "60",
      "answer_3": "112",
      "answer_4": "114",
      "right_answer": 4
    },
    {
      "question": "متي توفي الرسول -صلي الله عليه وسلم-وكم كان عمره؟؟؟",
      "answer_1": "توفي يوم الثلاثاء وعمره 45",
      "answer_2": "توفي يوم الثلاثاء وعمره 62",
      "answer_3": "توفي يوم الاثنين وعمره 63",
      "answer_4": "توفي يوم الجمعه وعمره 64",
      "right_answer": 3
    },
    {
      "question": "إلى أي قبيلة ينتمي الرسول صلى الله عليه وسلم ؟",
      "answer_1": "قبيلة قريش العدنانيه",
      "answer_2": "قبيله همدان",
      "answer_3": "قبيله جرهم اليمنيه",
      "answer_4": "قبيله كنده",
      "right_answer": 1
    },
    {
      "question": "من أول من أسلم من الصبيان ؟؟",
      "answer_1": "ابو بكر الصديق",
      "answer_2": "علي بن ابي طالب",
      "answer_3": "عثمان بن عفان",
      "answer_4": "عمر بن الخطاب",
      "right_answer": 2
    },
    {
      "question": "اول من اسلم من النساء ؟",
      "answer_1": "خديجه",
      "answer_2": "فاطمه",
      "answer_3": "مريم",
      "answer_4": "عائشه",
      "right_answer": 1
    },
    {
      "question": "ما معنى الميسر ؟",
      "answer_1": "الأنصاب",
      "answer_2": "الأزلام",
      "answer_3": "الخمر",
      "answer_4": "القمار",
      "right_answer": 4
    },
    {
      "question": "من هي مرضعة الرسول (ص) حتّى شبّ ؟",
      "answer_1": "حليمه",
      "answer_2": "امنة",
      "answer_3": "فاطمه",
      "answer_4": "هاجر",
      "right_answer": 1
    },
    {
      "question": "كم عدد السجدات الموجوده في القران ؟",
      "answer_1": "13",
      "answer_2": "15",
      "answer_3": "16",
      "answer_4": "20",
      "right_answer": 2
    },
    {
      "question": "ما هي السورة التي كانت سببا في إسلام عمر بن الخطاب رضي الله عنه ؟",
      "answer_1": "ال عمران",
      "answer_2": "الاحقاف",
      "answer_3": "طة",
      "answer_4": "مريم",
      "right_answer": 3
    },
    {
      "question": "ما اسم الكتب التي أنزلها الله على داود ؟",
      "answer_1": "الانجيل",
      "answer_2": "الزبور",
      "answer_3": "الصحف",
      "answer_4": "القران",
      "right_answer": 2
    },
    {
      "question": "ماهي السورة التي يطلق عليها عروس القرآن ؟",
      "answer_1": "ال عمران",
      "answer_2": "البقره",
      "answer_3": "الرحمن",
      "answer_4": "الفاتحه",
      "right_answer": 3
    },
    {
      "question": "من أول من نقض العهد مع الرسول صلى الله عليه وسلم من القبائل اليهودية ؟",
      "answer_1": "يهود بني الاشبح",
      "answer_2": "يهود بني قوفه",
      "answer_3": "يهود بني قينقاع",
      "answer_4": "يهود الاوس",
      "right_answer": 3
    },
    {
      "question": "ما أول صلاة فرضت على الرسول صلى الله عليه وسلم ؟",
      "answer_1": "العصر",
      "answer_2": "الضهر",
      "answer_3": "المغرب",
      "answer_4": "الفجر",
      "right_answer": 2
    },
    {
      "question": "من أول من ألف في أحكام القرآن ؟",
      "answer_1": "الشافعي",
      "answer_2": "الحبشي",
      "answer_3": "الاموي",
      "answer_4": "صحيح مسلم",
      "right_answer": 1
    },
    {
      "question": "من أول من فتق لسانه بالعربية ؟",
      "answer_1": "اسحاق",
      "answer_2": "نوح",
      "answer_3": "اسماعيل",
      "answer_4": "يعقوب",
      "right_answer": 3
    },
    {
      "question": "ماهي السورة التي لا تحوي حرف الميم ؟",
      "answer_1": "الكوثر",
      "answer_2": "الاخلاص",
      "answer_3": "المسد",
      "answer_4": "الفلق",
      "right_answer": 1
    },
    {
      "question": "في أي الغزوات أسرت الشيماء أخت الرسول صلى الله عليه وسلم من الرضاعة ؟",
      "answer_1": "احد",
      "answer_2": "الاحزاب",
      "answer_3": "حنين",
      "answer_4": "الكوفه",
      "right_answer": 3
    },
    {
      "question": "من هو الصحابي الذي اهتز عرش الرحمن لموته ؟",
      "answer_1": "حمزه",
      "answer_2": "سعد بن معاذ",
      "answer_3": "ابو ذر الغفاري",
      "answer_4": "كعب بن مالك",
      "right_answer": 2
    },
    {
      "question": "ما هي السورة التي وردت فيها سجدتان في القرآن الكريم ؟",
      "answer_1": "البقره",
      "answer_2": "الرحمن",
      "answer_3": "الحج",
      "answer_4": "ال عمران",
      "right_answer": 3
    }
];

let IslamicQuiz = {
  id: '',
  player: '',
  question: '',
  correctAnswer: 0,
};

const quizDuration = 30; // seconds

// Function to award points to the user
async function awardPointsToUser(userId, points) {
  // Replace this with your actual code to save and update points in your database
  const user = await sck1.findOne({ id: userId });

  if (user) {
    user.points += points;
    await user.save();
  }
}

cmd({
pattern: 'سدين',
desc: "اسئلة دينية",
use: '',
category: "game",
filename: __filename,
  }, async (message, match, group) => {
  const randomQuestion = quizData[Math.floor(Math.random() * quizData.length)];

  IslamicQuiz[match.sender] = {
    id: match.chat,
    player: match.sender,
    question: randomQuestion.question,
    correctAnswer: randomQuestion.right_answer,
  };

  await message.sendMessage(match.chat, {
    text: `*🌙 أسـئلـة ديـنـيـة 🌙*\n\n${randomQuestion.question}\n\nخيارات الإجابة:\n1. ${randomQuestion.answer_1}\n2. ${randomQuestion.answer_2}\n3. ${randomQuestion.answer_3}\n4. ${randomQuestion.answer_4}\n`,
    mentions: [match.sender]
  });

  IslamicQuiz[match.sender].timer = setTimeout(() => {
    quizTimeout(message, match);
  }, quizDuration * 1000);
});

cmd({
  on: 'text'
}, async (message, match, group) => {
  const gameData = IslamicQuiz[match.sender];

  if (!gameData) return;

  if (gameData.id === match.chat && gameData.player === match.sender) {
    if (!isNaN(match.text)) {
      clearTimeout(gameData.timer); // Clear the timer since the user has answered

      const userAnswer = parseInt(match.text);

      if (userAnswer === gameData.correctAnswer) {
        const winMessage = 'إجابتك صحيحة ✅ فزت ب 1 نقطة لك .';

        await message.sendMessage(match.chat, {
          text: winMessage,
          mentions: [gameData.player]
        });

        // Award 1 point to the user for winning
        await awardPointsToUser(match.sender, 1);

        delete IslamicQuiz[match.sender];
      } else {
        const loseMessage = 'خطأ، الإجابة الصحيحة هي ' + gameData.correctAnswer;

        await message.sendMessage(match.chat, {
          text: loseMessage,
          mentions: [gameData.player]
        });

        delete IslamicQuiz[match.sender];
      }
    }
  }
});

// Function to handle quiz time-out
function quizTimeout(message, match) {
  const gameData = IslamicQuiz[match.sender];
  if (gameData) {
    message.sendMessage(match.chat, {
      text: '*🌙 انتهى الوقت ⌛*\nلم تجب في الوقت المحدد. الإجابة الصحيحة هي ' + gameData.correctAnswer,
      mentions: [gameData.player]
    });

    delete IslamicQuiz[match.sender];
  }
}
//=====================================================================-------------