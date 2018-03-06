
var image = new ol.style.Circle({
  radius: 5,
  fill: null,
  stroke: new ol.style.Stroke({ color: 'red', width: 1 })
});

var styles = {
  'part-alta': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'rgba(182, 0, 0, 1)',
      lineDash: [2],
      width: 2
    }),
    fill: new ol.style.Fill({
      color: 'rgba(255, 65, 65, 0.3)'
    })
  }),
  'francoli-joan23': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'rgba(250, 160, 5, 1)',
      lineDash: [2],
      width: 2
    }),
    fill: new ol.style.Fill({
      color: 'rgba(250, 160, 5, 0.3)'
    })
  }),
  'llevant': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'rgba(161, 87, 0, 1)',
      lineDash: [2],
      width: 2
    }),
    fill: new ol.style.Fill({
      color: 'rgba(227, 123, 0, 0.3)'
    })
  }),
  'spisp': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'rgba(30, 146, 3, 1)',
      lineDash: [2],
      width: 2
    }),
    fill: new ol.style.Fill({
      color: 'rgba(34, 178, 0, 0.3)'
    })
  }),
  'part-baixa': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'rgba(0, 50, 172, 1)',
      lineDash: [2],
      width: 2
    }),
    fill: new ol.style.Fill({
      color: 'rgba(95, 142, 255, 0.3)'
    })
  }),
  'eixample': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: '#f6d02a',
      lineDash: [2],
      width: 2
    }),
    fill: new ol.style.Fill({
      color: 'rgba(251, 255, 81, 0.3)'
    })
  }),
  'centre': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: '#8a1cbf',
      lineDash: [2],
      width: 2
    }),
    fill: new ol.style.Fill({
      color: '#ac1ff0ff'
    })
  }),
};

var styleFunction = (feature) => {
  return styles[feature.getProperties().name];
};

var geojsonObject = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "#b60000",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#ff4141",
        "fill-opacity": 0.3,
        "name": "part-alta"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              1.2530744075775144,
              41.11749642358862
            ],
            [
              1.2537074089050293,
              41.1172216110779
            ],
            [
              1.256561279296875,
              41.115815199629985
            ],
            [
              1.2568295001983643,
              41.116219343936045
            ],
            [
              1.2575054168701172,
              41.116558823230235
            ],
            [
              1.2580418586730957,
              41.11631633819927
            ],
            [
              1.2594366073608398,
              41.11689830076876
            ],
            [
              1.261131763458252,
              41.119024036864865
            ],
            [
              1.2603163719177246,
              41.12025256777953
            ],
            [
              1.2583422660827637,
              41.12046270892234
            ],
            [
              1.256979703903198,
              41.119969684409455
            ],
            [
              1.257108449935913,
              41.119743376835494
            ],
            [
              1.2562286853790283,
              41.11936350165359
            ],
            [
              1.2539756298065186,
              41.11792480550181
            ],
            [
              1.2530744075775144,
              41.11749642358862
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#8a1cbf",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#ac1ff0",
        "fill-opacity": 0.3,
        "name": "centre"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              1.2564325332641602,
              41.11570203877841
            ],
            [
              1.2527954578399658,
              41.11745601005623
            ],
            [
              1.2517762184143066,
              41.116162763883004
            ],
            [
              1.2457358837127686,
              41.11878156094082
            ],
            [
              1.2452316284179688,
              41.11870881798894
            ],
            [
              1.2441694736480713,
              41.11608193515118
            ],
            [
              1.245177984237671,
              41.11604960363059
            ],
            [
              1.246551275253296,
              41.11642949799185
            ],
            [
              1.247570514678955,
              41.11446533961366
            ],
            [
              1.2507569789886472,
              41.113454947186035
            ],
            [
              1.2511217594146726,
              41.11385102287088
            ],
            [
              1.2517333030700681,
              41.113673193267175
            ],
            [
              1.2515723705291748,
              41.113293282954466
            ],
            [
              1.2527740001678467,
              41.11313161832479
            ],
            [
              1.2544691562652588,
              41.11240412256461
            ],
            [
              1.2547481060028076,
              41.1125657889858
            ],
            [
              1.2572693824768066,
              41.11409351700872
            ],
            [
              1.257408857345581,
              41.11530597426163
            ],
            [
              1.2564325332641602,
              41.11570203877841
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#f6d02a",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#fbff51",
        "fill-opacity": 0.3,
        "name": "eixample"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              1.2541902065277235,
              41.11906444943177
            ],
            [
              1.2539112567901747,
              41.11937158412718
            ],
            [
              1.2563359737396376,
              41.12102038792378
            ],
            [
              1.257548332214369,
              41.12140833573865
            ],
            [
              1.2579023838043315,
              41.122032684438075
            ],
            [
              1.2591254711151225,
              41.121206279871224
            ],
            [
              1.2604343891143903,
              41.12078196052479
            ],
            [
              1.2615233659744367,
              41.122317579443894
            ],
            [
              1.2599569559097392,
              41.123198523551984
            ],
            [
              1.2587016820907695,
              41.123093457444575
            ],
            [
              1.2567436695099012,
              41.12225696358879
            ],
            [
              1.2572479248047015,
              41.121351760158454
            ],
            [
              1.2562930583953995,
              41.12116586862311
            ],
            [
              1.2556385993957657,
              41.12224888147055
            ],
            [
              1.2549412250518936,
              41.123542007729256
            ],
            [
              1.254404783248915,
              41.12451991754142
            ],
            [
              1.253900527954115,
              41.12426938005241
            ],
            [
              1.2535250186920304,
              41.12480278129877
            ],
            [
              1.2530636787414686,
              41.125400832085866
            ],
            [
              1.2516152858734269,
              41.125481649341744
            ],
            [
              1.2506818771362442,
              41.12624132668193
            ],
            [
              1.2494695186615128,
              41.12639487741624
            ],
            [
              1.249587535858168,
              41.12523919727547
            ],
            [
              1.247624158859267,
              41.125425077273064
            ],
            [
              1.2478065490722792,
              41.12647569344786
            ],
            [
              1.2458378076553447,
              41.12682724202725
            ],
            [
              1.245886087417613,
              41.127138381152804
            ],
            [
              1.2456393241882426,
              41.127320215023666
            ],
            [
              1.2452048063278303,
              41.127401029915596
            ],
            [
              1.2448239326477155,
              41.12724344078406
            ],
            [
              1.2444055080413954,
              41.12684744591134
            ],
            [
              1.2450492382049696,
              41.125627120151506
            ],
            [
              1.2464225292205948,
              41.1249967443134
            ],
            [
              1.252108812332167,
              41.124544163054125
            ],
            [
              1.2521517276764054,
              41.12490784466955
            ],
            [
              1.2528812885284561,
              41.124544163054125
            ],
            [
              1.2525272369384903,
              41.12337228636049
            ],
            [
              1.2520444393158097,
              41.12352584380829
            ],
            [
              1.2516367435455458,
              41.122588329579855
            ],
            [
              1.2506496906280655,
              41.12164271976552
            ],
            [
              1.2485790252685685,
              41.12277421708618
            ],
            [
              1.2487614154815811,
              41.12318640054818
            ],
            [
              1.247892379760756,
              41.12352584380829
            ],
            [
              1.246819496154799,
              41.12363090922342
            ],
            [
              1.245392560958876,
              41.12352584380829
            ],
            [
              1.2437188625335829,
              41.123210646553574
            ],
            [
              1.2438476085662982,
              41.122952022034355
            ],
            [
              1.2458002567291397,
              41.11878964348607
            ],
            [
              1.2459504604339737,
              41.11876539584737
            ],
            [
              1.2518835067749163,
              41.11618701248314
            ],
            [
              1.2529563903808731,
              41.11747217547219
            ],
            [
              1.252162456512465,
              41.11773082158561
            ],
            [
              1.2541902065277235,
              41.11906444943177
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#faa005",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#faa005",
        "fill-opacity": 0.3,
        "name": "francoli-joan23"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              1.2440729141235352,
              41.11609001802883
            ],
            [
              1.2452101707458496,
              41.11885430381209
            ],
            [
              1.241905689239502,
              41.1266130804732
            ],
            [
              1.2361979484558105,
              41.12767984052882
            ],
            [
              1.2334084510803223,
              41.12703332135331
            ],
            [
              1.2342238426208496,
              41.124560326724264
            ],
            [
              1.2351250648498535,
              41.124075414887855
            ],
            [
              1.2345457077026367,
              41.12331571247335
            ],
            [
              1.2348675727844238,
              41.12250750876069
            ],
            [
              1.2366914749145508,
              41.12142450018115
            ],
            [
              1.2375497817993164,
              41.118692652877556
            ],
            [
              1.2369489669799805,
              41.118514836389764
            ],
            [
              1.2375283241271973,
              41.116284006794125
            ],
            [
              1.2440729141235352,
              41.11609001802883
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#1e9203",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#22b200",
        "fill-opacity": 0.3,
        "name": "spisp"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              1.2441372871398926,
              41.127647514721346
            ],
            [
              1.244544982910156,
              41.12841524834672
            ],
            [
              1.2456715106964111,
              41.127849550756835
            ],
            [
              1.2471950054168701,
              41.12961127862262
            ],
            [
              1.2461650371551514,
              41.13032242142394
            ],
            [
              1.2477529048919678,
              41.13155074083453
            ],
            [
              1.2463366985321045,
              41.13235075229427
            ],
            [
              1.2497377395629883,
              41.13563150533135
            ],
            [
              1.2504994869232178,
              41.13548605670211
            ],
            [
              1.2519264221191406,
              41.1363829847781
            ],
            [
              1.2532246112823486,
              41.135227480564936
            ],
            [
              1.2530958652496338,
              41.13416084322512
            ],
            [
              1.252816915512085,
              41.134055794670175
            ],
            [
              1.2523877620697021,
              41.13462951934386
            ],
            [
              1.2513363361358643,
              41.134532552145735
            ],
            [
              1.2510788440704346,
              41.133126511665886
            ],
            [
              1.250596046447754,
              41.13306186540196
            ],
            [
              1.2496304512023926,
              41.132536612146005
            ],
            [
              1.2498235702514648,
              41.13149417399839
            ],
            [
              1.2502634525299072,
              41.13165579340078
            ],
            [
              1.2517762184143066,
              41.132237619952804
            ],
            [
              1.25244140625,
              41.132431560990156
            ],
            [
              1.2525272369384766,
              41.13301338066221
            ],
            [
              1.2540185451507568,
              41.13291641107521
            ],
            [
              1.254136562347412,
              41.13423356904923
            ],
            [
              1.2539219856262207,
              41.13486385614757
            ],
            [
              1.2543511390686035,
              41.13600320591868
            ],
            [
              1.2577199935913086,
              41.136770841769355
            ],
            [
              1.2602519989013672,
              41.13988169508488
            ],
            [
              1.260230541229248,
              41.14034225043933
            ],
            [
              1.2580311298370361,
              41.14030993087086
            ],
            [
              1.2562716007232666,
              41.1387424126817
            ],
            [
              1.254115104675293,
              41.140188732347184
            ],
            [
              1.2538790702819824,
              41.1410209576985
            ],
            [
              1.2528276443481443,
              41.140859361369074
            ],
            [
              1.2515509128570557,
              41.1410532769166
            ],
            [
              1.2502098083496094,
              41.14042304929087
            ],
            [
              1.2504351139068604,
              41.1399624945038
            ],
            [
              1.2496089935302734,
              41.13959081635261
            ],
            [
              1.248021125793457,
              41.14053616751579
            ],
            [
              1.2477850914001465,
              41.14053616751579
            ],
            [
              1.247323751449585,
              41.140140252875014
            ],
            [
              1.2480640411376953,
              41.13736070321406
            ],
            [
              1.2495231628417969,
              41.13591432118723
            ],
            [
              1.2423241138458252,
              41.12972441549297
            ],
            [
              1.2424421310424805,
              41.12945773541513
            ],
            [
              1.2424099445343018,
              41.12872233928162
            ],
            [
              1.2441372871398926,
              41.127647514721346
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#0032ac",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#5f8eff",
        "fill-opacity": 0.3,
        "name": "part-baixa"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              1.237635612487793,
              41.11618701248314
            ],
            [
              1.2376141548156738,
              41.11505540159849
            ],
            [
              1.2378501892089842,
              41.11408543388522
            ],
            [
              1.2383544445037842,
              41.11206462178433
            ],
            [
              1.2387299537658691,
              41.10987399120541
            ],
            [
              1.2387192249298096,
              41.10913029188078
            ],
            [
              1.239674091339111,
              41.109025203253445
            ],
            [
              1.2409508228302002,
              41.10915454307857
            ],
            [
              1.2410902976989746,
              41.10946172414209
            ],
            [
              1.2426030635833738,
              41.110067998339474
            ],
            [
              1.2423884868621826,
              41.11054493010716
            ],
            [
              1.2426137924194336,
              41.11063384920611
            ],
            [
              1.243354082107544,
              41.110795519986546
            ],
            [
              1.2440299987792969,
              41.11091677281061
            ],
            [
              1.2502312660217285,
              41.10986590756239
            ],
            [
              1.2514758110046387,
              41.11030242286163
            ],
            [
              1.2543082237243652,
              41.112323289204745
            ],
            [
              1.2528705596923828,
              41.113018452847136
            ],
            [
              1.2513685226440427,
              41.11324478360737
            ],
            [
              1.251668930053711,
              41.1136166110195
            ],
            [
              1.2510895729064941,
              41.11374594179963
            ],
            [
              1.250746250152588,
              41.11335794869486
            ],
            [
              1.2475061416625977,
              41.11437642570405
            ],
            [
              1.246476173400879,
              41.11639716664246
            ],
            [
              1.2452960014343262,
              41.115993023431216
            ],
            [
              1.2441372871398926,
              41.11602535497967
            ],
            [
              1.237635612487793,
              41.11618701248314
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#a15700",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#e37b00",
        "fill-opacity": 0.3,
        "name": "llevant"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              1.2593668699264526,
              41.11675685200773
            ],
            [
              1.258835792541504,
              41.11655478182041
            ],
            [
              1.2588733434677124,
              41.11639312522266
            ],
            [
              1.2584227323532104,
              41.11621530250531
            ],
            [
              1.2585031986236572,
              41.11580307526236
            ],
            [
              1.2595760822296143,
              41.11431984406254
            ],
            [
              1.2652301788330078,
              41.116114266655835
            ],
            [
              1.2663352489471436,
              41.115014986563246
            ],
            [
              1.267247200012207,
              41.114582544128645
            ],
            [
              1.2679338455200193,
              41.11457041953337
            ],
            [
              1.2681913375854492,
              41.11383485656318
            ],
            [
              1.269317865371704,
              41.113907604916506
            ],
            [
              1.269870400428772,
              41.11319628422444
            ],
            [
              1.2705624103546143,
              41.11336603190795
            ],
            [
              1.271291971206665,
              41.11378635761617
            ],
            [
              1.2716996669769287,
              41.11460275178251
            ],
            [
              1.2727940082550049,
              41.11521706149063
            ],
            [
              1.2737703323364258,
              41.115540380080596
            ],
            [
              1.2742316722869873,
              41.11636483527713
            ],
            [
              1.273941993713379,
              41.11741559649901
            ],
            [
              1.2732231616973877,
              41.11805412779413
            ],
            [
              1.2737703323364258,
              41.11880580857353
            ],
            [
              1.2741780281066895,
              41.119242264430596
            ],
            [
              1.2810659408569336,
              41.12202258175558
            ],
            [
              1.2894344329833984,
              41.125045234977485
            ],
            [
              1.2932109832763672,
              41.12669389623608
            ],
            [
              1.2973952293395996,
              41.12797481278644
            ],
            [
              1.300431489944458,
              41.128560712652934
            ],
            [
              1.3026684522628784,
              41.12906983518508
            ],
            [
              1.3117825984954834,
              41.12972441549297
            ],
            [
              1.323251724243164,
              41.12961935983412
            ],
            [
              1.3242816925048828,
              41.13159114568759
            ],
            [
              1.334388256072998,
              41.13461335815413
            ],
            [
              1.3399887084960938,
              41.13600320591868
            ],
            [
              1.3424348831176758,
              41.134968903408506
            ],
            [
              1.342155933380127,
              41.13299721907432
            ],
            [
              1.343100070953369,
              41.13278711806956
            ],
            [
              1.3425850868225098,
              41.131542659860905
            ],
            [
              1.3420057296752927,
              41.13066990885297
            ],
            [
              1.3440871238708496,
              41.12908599774047
            ],
            [
              1.3451170921325684,
              41.12797077207952
            ],
            [
              1.3465547561645508,
              41.1285364686243
            ],
            [
              1.3489365577697754,
              41.12868193266177
            ],
            [
              1.3495373725891113,
              41.127130299635716
            ],
            [
              1.3571119308471677,
              41.12813240016141
            ],
            [
              1.3608884811401365,
              41.129603197410155
            ],
            [
              1.3606739044189453,
              41.13075071961922
            ],
            [
              1.3589358329772947,
              41.1313487161958
            ],
            [
              1.3568329811096191,
              41.1324800461599
            ],
            [
              1.353936195373535,
              41.135663827205185
            ],
            [
              1.3536787033081055,
              41.13677892209895
            ],
            [
              1.3525629043579102,
              41.13736070321406
            ],
            [
              1.3547515869140625,
              41.13991401486439
            ],
            [
              1.3583135604858398,
              41.140301850976236
            ],
            [
              1.3597297668457031,
              41.14560204798592
            ],
            [
              1.358656883239746,
              41.14574747418273
            ],
            [
              1.3582921028137207,
              41.14481027747863
            ],
            [
              1.3564038276672363,
              41.140301850976236
            ],
            [
              1.353292465209961,
              41.13988169508488
            ],
            [
              1.3516616821289062,
              41.13926761624818
            ],
            [
              1.3465118408203123,
              41.138685852046784
            ],
            [
              1.3440227508544922,
              41.13784551686824
            ],
            [
              1.3364696502685547,
              41.13597088421209
            ],
            [
              1.3256549835205078,
              41.13306186540196
            ],
            [
              1.3127374649047852,
              41.132383075784574
            ],
            [
              1.3092613220214844,
              41.13273863312676
            ],
            [
              1.3105487823486328,
              41.1351628363714
            ],
            [
              1.307973861694336,
              41.13600320591868
            ],
            [
              1.3073301315307617,
              41.136746600774586
            ],
            [
              1.3108062744140625,
              41.13894441455114
            ],
            [
              1.3141965866088867,
              41.13761927094223
            ],
            [
              1.3168573379516602,
              41.14001097410736
            ],
            [
              1.3146257400512695,
              41.141368388458446
            ],
            [
              1.315140724182129,
              41.14233795293712
            ],
            [
              1.3174152374267578,
              41.14298432129297
            ],
            [
              1.318659782409668,
              41.14165925930709
            ],
            [
              1.3215351104736326,
              41.14304895777817
            ],
            [
              1.3210201263427734,
              41.14447094433468
            ],
            [
              1.317458152770996,
              41.144794118797314
            ],
            [
              1.3144540786743164,
              41.14405081515222
            ],
            [
              1.3140249252319336,
              41.141885491297515
            ],
            [
              1.3111495971679688,
              41.14091592012968
            ],
            [
              1.3093042373657227,
              41.13884745373145
            ],
            [
              1.3067293167114258,
              41.13713445561578
            ],
            [
              1.3046693801879883,
              41.13545373474072
            ],
            [
              1.3051414489746094,
              41.133999229994
            ],
            [
              1.3038969039916992,
              41.132706309811624
            ],
            [
              1.3020944595336914,
              41.13348206497885
            ],
            [
              1.3024377822875977,
              41.135195158476144
            ],
            [
              1.3021373748779297,
              41.1355830224908
            ],
            [
              1.3019657135009766,
              41.13648802960635
            ],
            [
              1.3025665283203125,
              41.136714279434294
            ],
            [
              1.3023090362548828,
              41.13794247916908
            ],
            [
              1.3034248352050781,
              41.13949385648851
            ],
            [
              1.3010215759277344,
              41.140366490105244
            ],
            [
              1.2975454330444334,
              41.14023721178352
            ],
            [
              1.2948846817016602,
              41.140334170548705
            ],
            [
              1.2952709197998047,
              41.14156230250088
            ],
            [
              1.294541358947754,
              41.14427703889261
            ],
            [
              1.2940692901611328,
              41.14553741401715
            ],
            [
              1.2946701049804688,
              41.147831880895566
            ],
            [
              1.2932109832763672,
              41.14776724912472
            ],
            [
              1.291365623474121,
              41.146571549872576
            ],
            [
              1.2923526763916016,
              41.1426611379114
            ],
            [
              1.291794776916504,
              41.140269531387844
            ],
            [
              1.2899065017700195,
              41.137586950031945
            ],
            [
              1.2916231155395508,
              41.13616481421272
            ],
            [
              1.2932109832763672,
              41.134968903408506
            ],
            [
              1.2926959991455078,
              41.13323964247451
            ],
            [
              1.2919020652770996,
              41.131623469552146
            ],
            [
              1.2910223007202148,
              41.13052444922291
            ],
            [
              1.2862801551818848,
              41.12816472573002
            ],
            [
              1.286773681640625,
              41.12651610142634
            ],
            [
              1.2879109382629392,
              41.12515837972098
            ],
            [
              1.2857437133789062,
              41.12501290787207
            ],
            [
              1.280958652496338,
              41.12331571247335
            ],
            [
              1.2778902053833008,
              41.123493515954394
            ],
            [
              1.273512840270996,
              41.12465730866156
            ],
            [
              1.2713885307312012,
              41.12593422413536
            ],
            [
              1.269693374633789,
              41.12553013964749
            ],
            [
              1.2696826457977295,
              41.125457404175435
            ],
            [
              1.2692642211914062,
              41.12692826138559
            ],
            [
              1.2683308124542236,
              41.126912098298696
            ],
            [
              1.2691032886505127,
              41.128148562947715
            ],
            [
              1.2683308124542236,
              41.12847181783744
            ],
            [
              1.2665176391601562,
              41.12667773309147
            ],
            [
              1.2666785717010498,
              41.125627120151506
            ],
            [
              1.2661314010620117,
              41.1252957695044
            ],
            [
              1.264103651046753,
              41.12397035018437
            ],
            [
              1.2619900703430176,
              41.12420472506125
            ],
            [
              1.2624084949493408,
              41.12342077822491
            ],
            [
              1.262655258178711,
              41.12210340317193
            ],
            [
              1.2642431259155273,
              41.121925595924566
            ],
            [
              1.2644577026367188,
              41.12076983707459
            ],
            [
              1.2626123428344727,
              41.120050508353884
            ],
            [
              1.2619578838348389,
              41.1197757065367
            ],
            [
              1.2614643573760986,
              41.11925842940659
            ],
            [
              1.2613248825073242,
              41.119209934466625
            ],
            [
              1.2614428997039795,
              41.11878964348607
            ],
            [
              1.2610244750976562,
              41.11849058864958
            ],
            [
              1.259651184082031,
              41.11691446632204
            ],
            [
              1.2593668699264526,
              41.11675685200773
            ]
          ]
        ]
      }
    }
  ]
}

var features = (new ol.format.GeoJSON()).readFeatures(geojsonObject);
features.forEach(feature => {
  var geometry = feature.getGeometry(),
    coords = geometry.getCoordinates();

  if (geometry instanceof ol.geom.Polygon) {
    geometry.setCoordinates(transformPolyCoords(coords));
  }
});

var vectorSource = new ol.source.Vector({
  features: features
});



var vectorLayer = new ol.layer.Vector({
  source: vectorSource,
  style: styleFunction
});

function transformPolyCoords(/* Array */ a) {
  return a.map(function (aa) {
    return aa.map(function (coords) {
      return ol.proj.transform(coords, 'EPSG:4326', 'EPSG:3857');
    });
  });
}

var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    }),
    vectorLayer
  ],
  target: 'map',
  controls: ol.control.defaults({
    attributionOptions: {
      collapsible: false
    }
  }),
  view: new ol.View({
    center: new ol.proj.fromLonLat([1.2537074089050293, 41.1172216110779]),
    zoom: 12
  })
});