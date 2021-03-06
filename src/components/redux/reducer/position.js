const input = (state = defaultState, action) => {
  if (action.type === "SEARCH_POSITION") {
    return {
      ...state,
      position: action.position,
    };
  }
  return state;
};

export default input;

const defaultState = {
  position: "ALL",
  data: {
    "1": {
      MIDDLE: {
        playRate: 0.01572175115817557,
        winRate: 0.5339319273334725,
        banRate: 0.0008748896812808078,
      },
    },
    "2": {
      JUNGLE: {
        playRate: 0.03393193150363388,
        winRate: 0.5172213622291022,
        banRate: 0.00844632395868157,
      },
    },
    "3": {
      MIDDLE: {
        playRate: 0.020626385994323888,
        winRate: 0.5105841158682158,
        banRate: 0.0026826667337834904,
      },
    },
    "4": {
      MIDDLE: {
        playRate: 0.032060685281007015,
        winRate: 0.4993856235920541,
        banRate: 0.0009886964690896934,
      },
    },
    "5": {
      JUNGLE: {
        playRate: 0.01842685096070985,
        winRate: 0.5066809192944949,
        banRate: 0.0003102329263828756,
      },
    },
    "6": {
      TOP: {
        playRate: 0.020810227728476703,
        winRate: 0.5253194510175107,
        banRate: 0.002305134601148245,
      },
    },
    "7": {
      MIDDLE: {
        playRate: 0.035189277649714745,
        winRate: 0.46702117734863324,
        banRate: 0.011712797628003912,
      },
    },
    "8": {
      MIDDLE: {
        playRate: 0.025567132599680794,
        winRate: 0.49666153055983564,
        banRate: 0.017819516660383585,
      },
      TOP: {
        playRate: 0.01634221701094132,
        winRate: 0.49316994777018885,
        banRate: 0.017819516660383585,
      },
    },
    "9": {
      JUNGLE: {
        playRate: 0.039893656311160895,
        winRate: 0.5209842001316656,
        banRate: 0.008030491464764488,
      },
    },
    "10": {
      TOP: {
        playRate: 0.01462526652947842,
        winRate: 0.49180695847362516,
        banRate: 0.0005077533609934894,
      },
    },
    "11": {
      JUNGLE: {
        playRate: 0.03884641500411182,
        winRate: 0.5057043860390433,
        banRate: 0.023083627744562855,
      },
    },
    "12": {
      UTILITY: {
        playRate: 0.024693884362454923,
        winRate: 0.5071789417708057,
        banRate: 0.0006051457082530165,
      },
    },
    "13": {
      MIDDLE: {
        playRate: 0.013906314033416519,
        winRate: 0.45892351274787535,
        banRate: 0.0005985799320332732,
      },
      TOP: {
        playRate: 0.004884937507489089,
        winRate: 0.4543010752688172,
        banRate: 0.0005985799320332732,
      },
    },
    "14": {
      TOP: {
        playRate: 0.01452677988618227,
        winRate: 0.5087005649717514,
        banRate: 0.0001931432504641183,
      },
    },
    "15": {
      BOTTOM: {
        playRate: 0.022671625286773956,
        winRate: 0.5040544454097886,
        banRate: 0.00030695003827300386,
      },
    },
    "16": {
      UTILITY: {
        playRate: 0.05345526709304088,
        winRate: 0.5201130012896886,
        banRate: 0.0046365323071754635,
      },
    },
    "17": {
      TOP: {
        playRate: 0.02022915653302941,
        winRate: 0.5094125283998702,
        banRate: 0.004089931436881826,
      },
    },
    "18": {
      BOTTOM: {
        playRate: 0.030130347072402457,
        winRate: 0.48910438003922424,
        banRate: 0.0009033413782330292,
      },
    },
    "19": {
      JUNGLE: {
        playRate: 0.03230361900113752,
        winRate: 0.5191056910569106,
        banRate: 0.002740117275706245,
      },
    },
    "20": {
      JUNGLE: {
        playRate: 0.02263551351756537,
        winRate: 0.5110949963741842,
        banRate: 0.0006833878748716254,
      },
    },
    "21": {
      BOTTOM: {
        playRate: 0.06588756436512501,
        winRate: 0.5028898854010961,
        banRate: 0.004349826745580002,
      },
    },
    "22": {
      BOTTOM: {
        playRate: 0.05241459156221155,
        winRate: 0.5093949642991357,
        banRate: 0.0011079747370816985,
      },
    },
    "23": {
      TOP: {
        playRate: 0.01755688561159385,
        winRate: 0.4833582647718773,
        banRate: 0.005859408128102671,
      },
      JUNGLE: {
        playRate: 0.004454879165095896,
        winRate: 0.548268238761975,
        banRate: 0.005859408128102671,
      },
    },
    "24": {
      TOP: {
        playRate: 0.034316029412488874,
        winRate: 0.493446857361523,
        banRate: 0.00944213335200932,
      },
      JUNGLE: {
        playRate: 0.018436699625039465,
        winRate: 0.48575498575498577,
        banRate: 0.00944213335200932,
      },
    },
    "25": {
      UTILITY: {
        playRate: 0.053898456987873565,
        winRate: 0.48117919356803507,
        banRate: 0.03662280545769205,
      },
    },
    "26": {
      UTILITY: {
        playRate: 0.02223828405627089,
        winRate: 0.5147623265426631,
        banRate: 0.0015314673032551477,
      },
      MIDDLE: {
        playRate: 0.0036440058019575863,
        winRate: 0.5216216216216216,
        banRate: 0.0015314673032551477,
      },
    },
    "27": {
      TOP: {
        playRate: 0.010656254804643536,
        winRate: 0.5181762168823167,
        banRate: 0.00042075682608188947,
      },
      JUNGLE: {
        playRate: 0.0024523174180741594,
        winRate: 0.5220883534136547,
        banRate: 0.00042075682608188947,
      },
    },
    "28": {
      JUNGLE: {
        playRate: 0.03766457528455801,
        winRate: 0.49585984485313345,
        banRate: 0.012443787380468675,
      },
    },
    "29": {
      BOTTOM: {
        playRate: 0.01881423175767471,
        winRate: 0.5173617169778398,
        banRate: 0.0006565776219743399,
      },
      JUNGLE: {
        playRate: 0.0055579295700127875,
        winRate: 0.4494979326639102,
        banRate: 0.0006565776219743399,
      },
    },
    "30": {
      JUNGLE: {
        playRate: 0.014513648333742784,
        winRate: 0.496946392218955,
        banRate: 0.0030388600937045697,
      },
    },
    "31": {
      TOP: {
        playRate: 0.010137558483283808,
        winRate: 0.4740932642487047,
        banRate: 0.0006538418818827801,
      },
      MIDDLE: {
        playRate: 0.0039493143961756546,
        winRate: 0.5062344139650873,
        banRate: 0.0006538418818827801,
      },
      JUNGLE: {
        playRate: 0.0026394420403368464,
        winRate: 0.486318407960199,
        banRate: 0.0006538418818827801,
      },
    },
    "32": {
      JUNGLE: {
        playRate: 0.021663778637043343,
        winRate: 0.5037126837399606,
        banRate: 0.00061171148447276,
      },
    },
    "33": {
      JUNGLE: {
        playRate: 0.015961401990196203,
        winRate: 0.5024681201151789,
        banRate: 0.003232003344168688,
      },
    },
    "34": {
      MIDDLE: {
        playRate: 0.009766592126868305,
        winRate: 0.5021848739495798,
        banRate: 0.0006532947338644681,
      },
    },
    "35": {
      JUNGLE: {
        playRate: 0.02990054490471144,
        winRate: 0.5051602986385595,
        banRate: 0.007968663738695238,
      },
    },
    "36": {
      TOP: {
        playRate: 0.00896228453994974,
        winRate: 0.4978021978021978,
        banRate: 0.001027543978389842,
      },
      JUNGLE: {
        playRate: 0.007228919617937482,
        winRate: 0.5040871934604905,
        banRate: 0.001027543978389842,
      },
    },
    "37": {
      UTILITY: {
        playRate: 0.01970061154734007,
        winRate: 0.5225795700716547,
        banRate: 0.00012420260015681263,
      },
    },
    "38": {
      MIDDLE: {
        playRate: 0.03349530738502095,
        winRate: 0.5065176908752328,
        banRate: 0.03515097728843291,
      },
    },
    "39": {
      TOP: {
        playRate: 0.03132531834439576,
        winRate: 0.45451687277300357,
        banRate: 0.009177313711146336,
      },
      MIDDLE: {
        playRate: 0.017264708569815268,
        winRate: 0.4628256322494771,
        banRate: 0.009177313711146336,
      },
    },
    "40": {
      UTILITY: {
        playRate: 0.04845542850170628,
        winRate: 0.5209349593495934,
        banRate: 0.0006133529285276958,
      },
    },
    "41": {
      TOP: {
        playRate: 0.019986222812898906,
        winRate: 0.47536136662286466,
        banRate: 0.0016469155351189692,
      },
    },
    "42": {
      MIDDLE: {
        playRate: 0.014595720536489576,
        winRate: 0.48043184885290147,
        banRate: 0.00038300361281836493,
      },
    },
    "43": {
      UTILITY: {
        playRate: 0.03784185124249108,
        winRate: 0.5008241519909777,
        banRate: 0.0004606986314186618,
      },
    },
    "44": {
      UTILITY: {
        playRate: 0.01738617542988052,
        winRate: 0.5169939577039275,
        banRate: 0.0014576023207830344,
      },
    },
    "45": {
      MIDDLE: {
        playRate: 0.01657530206674221,
        winRate: 0.4993067934244405,
        banRate: 0.0016507455712471528,
      },

      BOTTOM: {
        playRate: 0.004825845521511398,
        winRate: 0.5346938775510204,
        banRate: 0.0016507455712471528,
      },
    },
    "48": {
      JUNGLE: {
        playRate: 0.036935774124166494,
        winRate: 0.5224424495600392,
        banRate: 0.0018313044172900963,
      },
    },
    "50": {
      UTILITY: {
        playRate: 0.016906873765839252,
        winRate: 0.4918446601941748,
        banRate: 0.001059278563451935,
      },
    },
    "51": {
      BOTTOM: {
        playRate: 0.0842159286825387,
        winRate: 0.49670603828012316,
        banRate: 0.010484450326893583,
      },
    },
    "53": {
      UTILITY: {
        playRate: 0.05919375550909661,
        winRate: 0.5076812156840996,
        banRate: 0.023415746591678208,
      },
    },
    "54": {
      TOP: {
        playRate: 0.028866435150101854,
        winRate: 0.5099510974638918,
        banRate: 0.004319186456554532,
      },
    },
    "55": {
      MIDDLE: {
        playRate: 0.028836889157113008,
        winRate: 0.4977231329690346,
        banRate: 0.010888792712426114,
      },
    },
    "56": {
      JUNGLE: {
        playRate: 0.018164219911920115,
        winRate: 0.49304174950298213,
        banRate: 0.0019894301945822495,
      },
      MIDDLE: {
        playRate: 0.004691247109006659,
        winRate: 0.5220433869839048,
        banRate: 0.0019894301945822495,
      },
    },
    "57": {
      TOP: {
        playRate: 0.02990054490471144,
        winRate: 0.5253623188405797,
        banRate: 0.003544972010643123,
      },
    },
    "58": {
      TOP: {
        playRate: 0.03751027954339404,
        winRate: 0.4746192893401015,
        banRate: 0.010625067367599755,
      },
    },
    "59": {
      JUNGLE: {
        playRate: 0.04584224956624841,
        winRate: 0.49634775136064163,
        banRate: 0.0009509432558261688,
      },
    },
    "60": {
      JUNGLE: {
        playRate: 0.04769708134832592,
        winRate: 0.5027875283914929,
        banRate: 0.0138231475346331,
      },
    },
    "61": {
      MIDDLE: {
        playRate: 0.02733660929090164,
        winRate: 0.5024618710219767,
        banRate: 0.0005849012315754744,
      },
    },
    "62": {
      JUNGLE: {
        playRate: 0.019615256456483404,
        winRate: 0.5087866108786611,
        banRate: 0.013480085727151508,
      },
      TOP: {
        playRate: 0.018436699625039465,
        winRate: 0.51994301994302,
        banRate: 0.013480085727151508,
      },
    },
    "63": {
      UTILITY: {
        playRate: 0.02136503581904502,
        winRate: 0.4969268592501537,
        banRate: 0.0029212232697675006,
      },
    },
    "64": {
      JUNGLE: {
        playRate: 0.122973705707684,
        winRate: 0.4837288769054166,
        banRate: 0.017478096296956926,
      },
    },
    "67": {
      BOTTOM: {
        playRate: 0.07663574003684495,
        winRate: 0.5177347498286498,
        banRate: 0.012277454382901844,
      },
    },
    "68": {
      MIDDLE: {
        playRate: 0.009395625770452803,
        winRate: 0.4979035639412998,
        banRate: 0.0004103610137339624,
      },
      TOP: {
        playRate: 0.004753621983094221,
        winRate: 0.4889502762430939,
        banRate: 0.0004103610137339624,
      },
    },
    "69": {
      MIDDLE: {
        playRate: 0.021200891413551436,
        winRate: 0.5117683493341592,
        banRate: 0.007398535503614186,
      },
      BOTTOM: {
        playRate: 0.00600768524106521,
        winRate: 0.5306010928961749,
        banRate: 0.007398535503614186,
      },
    },
    "72": {
      JUNGLE: {
        playRate: 0.004005123494043473,
        winRate: 0.5024590163934426,
        banRate: 0.00010286382744264658,
      },
    },
    "74": {
      MIDDLE: {
        playRate: 0.0036735517949464318,
        winRate: 0.516532618409294,
        banRate: 0.0005745054192275473,
      },
      TOP: {
        playRate: 0.0028561126555883783,
        winRate: 0.4850574712643678,
        banRate: 0.0005745054192275473,
      },
      BOTTOM: {
        playRate: 0.0023997912083162124,
        winRate: 0.5348837209302325,
        banRate: 0.0005745054192275473,
      },
    },
    "75": {
      TOP: {
        playRate: 0.027441661710417536,
        winRate: 0.5130996530685489,
        banRate: 0.005480781699430802,
      },
    },
    "76": {
      JUNGLE: {
        playRate: 0.037270628711373405,
        winRate: 0.4839249537567163,
        banRate: 0.0024189413889571304,
      },
    },
    "77": {
      JUNGLE: {
        playRate: 0.013814393166340111,
        winRate: 0.49809885931558934,
        banRate: 0.0005329221698358392,
      },
    },
    "78": {
      TOP: {
        playRate: 0.011851226076636835,
        winRate: 0.48753462603878117,
        banRate: 0.0007446684529225638,
      },
      JUNGLE: {
        playRate: 0.006155415206009436,
        winRate: 0.5152,
        banRate: 0.0007446684529225638,
      },
    },
    "79": {
      JUNGLE: {
        playRate: 0.01727127434603501,
        winRate: 0.4483938414750048,
        banRate: 0.000294912781870141,
      },
    },
    "80": {
      MIDDLE: {
        playRate: 0.012084311132437726,
        winRate: 0.4846509100787829,
        banRate: 0.0060913988878669376,
      },
      UTILITY: {
        playRate: 0.007990549659427717,
        winRate: 0.5254724732949877,
        banRate: 0.0060913988878669376,
      },
      JUNGLE: {
        playRate: 0.006880933478291082,
        winRate: 0.46326335877862596,
        banRate: 0.0060913988878669376,
      },
      TOP: {
        playRate: 0.0055579295700127875,
        winRate: 0.4896633195510927,
        banRate: 0.0060913988878669376,
      },
    },
    "81": {
      BOTTOM: {
        playRate: 0.15196489060596097,
        winRate: 0.49993519118600127,
        banRate: 0.008578733779113062,
      },
    },
    "82": {
      TOP: {
        playRate: 0.03719512228484635,
        winRate: 0.4887908208296558,
        banRate: 0.014418991726574815,
      },
    },
    "83": {
      TOP: {
        playRate: 0.00991103920370266,
        winRate: 0.49387214309373967,
        banRate: 0.0009312459271669387,
      },
    },
    "84": {
      MIDDLE: {
        playRate: 0.018541752044555358,
        winRate: 0.4506019830028329,
        banRate: 0.004564308768758286,
      },
      TOP: {
        playRate: 0.01068251790952251,
        winRate: 0.4354640442532268,
        banRate: 0.004564308768758286,
      },
    },
    "85": {
      TOP: {
        playRate: 0.006618302429501346,
        winRate: 0.4915674603174603,
        banRate: 0.00042403971419176115,
      },
    },
    "86": {
      TOP: {
        playRate: 0.03770725282998634,
        winRate: 0.4995646874455859,
        banRate: 0.008115846555621153,
      },
    },
    "89": {
      UTILITY: {
        playRate: 0.05987003045973018,
        winRate: 0.50172725777266,
        banRate: 0.022321450555054308,
      },
    },
    "90": {
      MIDDLE: {
        playRate: 0.016194487045997092,
        winRate: 0.5053719845935536,
        banRate: 0.003677928979092927,
      },
    },
    "91": {
      MIDDLE: {
        playRate: 0.02293425633556369,
        winRate: 0.5161752075579731,
        banRate: 0.0071977321808937,
      },
    },
    "92": {
      TOP: {
        playRate: 0.018518771827786256,
        winRate: 0.5070023045559298,
        banRate: 0.001189499791810179,
      },
    },
    "96": {
      BOTTOM: {
        playRate: 0.009615579273814208,
        winRate: 0.503926254694435,
        banRate: 0.00020627480290360512,
      },
    },
    "98": {
      TOP: {
        playRate: 0.02827551529032495,
        winRate: 0.4999419482178103,
        banRate: 0.0011511994305283425,
      },
    },
    "99": {
      UTILITY: {
        playRate: 0.03018943905838015,
        winRate: 0.47770769899956506,
        banRate: 0.00104942989912232,
      },
      MIDDLE: {
        playRate: 0.020462241588830303,
        winRate: 0.49574843574522703,
        banRate: 0.00104942989912232,
      },
    },
    "101": {
      UTILITY: {
        playRate: 0.01645711809478683,
        winRate: 0.5124675842808697,
        banRate: 0.0012037256402862898,
      },
      MIDDLE: {
        playRate: 0.014953555340465592,
        winRate: 0.49703622392974756,
        banRate: 0.0012037256402862898,
      },
    },
    "102": {
      JUNGLE: {
        playRate: 0.030028577540996436,
        winRate: 0.519951896796764,
        banRate: 0.0025168808842349695,
      },
    },
    "103": {
      MIDDLE: {
        playRate: 0.028669461863509552,
        winRate: 0.5080728272071453,
        banRate: 0.0016551227553936484,
      },
    },
    "104": {
      JUNGLE: {
        playRate: 0.09663181151407348,
        winRate: 0.5137761168676745,
        banRate: 0.03547926609942008,
      },
    },
    "105": {
      MIDDLE: {
        playRate: 0.029802058261415288,
        winRate: 0.5138797091870456,
        banRate: 0.0146197950492953,
      },
    },
    "106": {
      JUNGLE: {
        playRate: 0.01012442693084432,
        winRate: 0.5145914396887159,
        banRate: 0.0007736672978930971,
      },
      TOP: {
        playRate: 0.00790191168046118,
        winRate: 0.5247195679268799,
        banRate: 0.0007736672978930971,
      },
    },
    "107": {
      JUNGLE: {
        playRate: 0.026955794270156524,
        winRate: 0.505541346973572,
        banRate: 0.006921422431646166,
      },
      TOP: {
        playRate: 0.005866521052340727,
        winRate: 0.506435366536094,
        banRate: 0.006921422431646166,
      },
    },
    "110": {
      BOTTOM: {
        playRate: 0.059407143236238275,
        winRate: 0.5065207780725022,
        banRate: 0.019406793061506552,
      },
    },
    "111": {
      UTILITY: {
        playRate: 0.06271629445098895,
        winRate: 0.4925146566164154,
        banRate: 0.024804408262153934,
      },
    },
    "112": {
      MIDDLE: {
        playRate: 0.01344342680992461,
        winRate: 0.5020757020757021,
        banRate: 0.0002675553809545435,
      },
    },
    "113": {
      JUNGLE: {
        playRate: 0.018151088359480625,
        winRate: 0.4901428829806475,
        banRate: 0.0003343074391886014,
      },
    },
    "114": {
      TOP: {
        playRate: 0.03811433095561043,
        winRate: 0.4955211024978467,
        banRate: 0.013860900747896625,
      },
    },
    "115": {
      MIDDLE: {
        playRate: 0.008446871106699883,
        winRate: 0.5071900505246794,
        banRate: 0.00017071018171332835,
      },
      BOTTOM: {
        playRate: 0.00548570603159561,
        winRate: 0.5320167564332735,
        banRate: 0.00017071018171332835,
      },
    },
    "117": {
      UTILITY: {
        playRate: 0.0833459633334227,
        winRate: 0.51804001890657,
        banRate: 0.009166917898798409,
      },
    },
    "119": {
      BOTTOM: {
        playRate: 0.02735630661956087,
        winRate: 0.5057002280091204,
        banRate: 0.007008418966557766,
      },
    },
    "120": {
      JUNGLE: {
        playRate: 0.021972370119371285,
        winRate: 0.506200507993426,
        banRate: 0.0008333064318890997,
      },
      TOP: {
        playRate: 0.003502841613233103,
        winRate: 0.46954076850984067,
        banRate: 0.0008333064318890997,
      },
    },
    "121": {
      JUNGLE: {
        playRate: 0.043685392078062706,
        winRate: 0.4913955061245961,
        banRate: 0.003001654028459357,
      },
    },
    "122": {
      TOP: {
        playRate: 0.04213258600209339,
        winRate: 0.5013246065139473,
        banRate: 0.04871094662625796,
      },
    },
    "126": {
      TOP: {
        playRate: 0.013817676054449984,
        winRate: 0.4770729389403659,
        banRate: 0.0009651691043022796,
      },
      MIDDLE: {
        playRate: 0.004523819815403202,
        winRate: 0.4862119013062409,
        banRate: 0.0009651691043022796,
      },
    },
    "127": {
      MIDDLE: {
        playRate: 0.015367199242309426,
        winRate: 0.49327066866054264,
        banRate: 0.0007441213049042518,
      },
    },
    "131": {
      MIDDLE: {
        playRate: 0.03290110463713417,
        winRate: 0.5137697066453801,
        banRate: 0.016323066830300402,
      },
    },
    "133": {
      TOP: {
        playRate: 0.009595881945154977,
        winRate: 0.5183031132398221,
        banRate: 0.0016277653544780508,
      },
    },
    "134": {
      MIDDLE: {
        playRate: 0.0470733326074503,
        winRate: 0.49515307901527306,
        banRate: 0.00868214475457402,
      },
      BOTTOM: {
        playRate: 0.009198652483860502,
        winRate: 0.5078515346181299,
        banRate: 0.00868214475457402,
      },
    },
    "136": {
      MIDDLE: {
        playRate: 0.0063852173737004555,
        winRate: 0.49717223650385606,
        banRate: 0.0002205006513797158,
      },
    },
    "141": {
      JUNGLE: {
        playRate: 0.08662228566707467,
        winRate: 0.5119760479041916,
        banRate: 0.018564185113306146,
      },
    },
    "142": {
      MIDDLE: {
        playRate: 0.0219822187837009,
        winRate: 0.4819295101553166,
        banRate: 0.005798674698070045,
      },
    },
    "143": {
      UTILITY: {
        playRate: 0.023498913090461624,
        winRate: 0.5162056440346465,
        banRate: 0.0017054603730783477,
      },
    },
    "145": {
      BOTTOM: {
        playRate: 0.07350058189191748,
        winRate: 0.47447407208897224,
        banRate: 0.0011654252790044533,
      },
    },
    "150": {
      TOP: {
        playRate: 0.014073741327019976,
        winRate: 0.48822020060648474,
        banRate: 0.0007063680916407273,
      },
    },
    "154": {
      JUNGLE: {
        playRate: 0.04932211096271241,
        winRate: 0.5167066027689031,
        banRate: 0.01397142464759564,
      },
    },
    "157": {
      MIDDLE: {
        playRate: 0.043458872798481554,
        winRate: 0.49093518658407614,
        banRate: 0.04539358819123261,
      },
      BOTTOM: {
        playRate: 0.015166943067607252,
        winRate: 0.5077922077922078,
        banRate: 0.04539358819123261,
      },
    },
    "161": {
      UTILITY: {
        playRate: 0.014868200249608927,
        winRate: 0.49834400529918305,
        banRate: 0.0009766592126868306,
      },
      MIDDLE: {
        playRate: 0.013298979733090254,
        winRate: 0.5243149839545791,
        banRate: 0.0009766592126868306,
      },
    },
    "163": {
      JUNGLE: {
        playRate: 0.004277603207162825,
        winRate: 0.4904067536454336,
        banRate: 0.00009848664329615097,
      },
      MIDDLE: {
        playRate: 0.002271758572031216,
        winRate: 0.5144508670520231,
        banRate: 0.00009848664329615097,
      },
    },
    "164": {
      TOP: {
        playRate: 0.021128667875134257,
        winRate: 0.4953387197016781,
        banRate: 0.001025355386316594,
      },
    },
    "201": {
      UTILITY: {
        playRate: 0.02370245215327367,
        winRate: 0.48656509695290856,
        banRate: 0.0007928174785340154,
      },
    },
    "202": {
      BOTTOM: {
        playRate: 0.0629067019613615,
        winRate: 0.5168562780503079,
        banRate: 0.0016020493976173892,
      },
    },
    "203": {
      JUNGLE: {
        playRate: 0.01788189153447115,
        winRate: 0.5193684597025886,
        banRate: 0.0007222353841717738,
      },
    },
    "222": {
      BOTTOM: {
        playRate: 0.04131842975084521,
        winRate: 0.5047672016526299,
        banRate: 0.0003583819519943272,
      },
    },
    "223": {
      UTILITY: {
        playRate: 0.005124588339509723,
        winRate: 0.4746957078795644,
        banRate: 0.00035345761982951963,
      },
      TOP: {
        playRate: 0.0020386735162303254,
        winRate: 0.45893719806763283,
        banRate: 0.00035345761982951963,
      },
    },
    "235": {
      UTILITY: {
        playRate: 0.05466336991747367,
        winRate: 0.5000900846795988,
        banRate: 0.007956626482292376,
      },
    },
    "236": {
      BOTTOM: {
        playRate: 0.07258465610926328,
        winRate: 0.47299864314789686,
        banRate: 0.0026131789354578725,
      },
    },
    "238": {
      MIDDLE: {
        playRate: 0.036735517949464315,
        winRate: 0.5008936550491511,
        banRate: 0.021779226868907164,
      },
    },
    "240": {
      TOP: {
        playRate: 0.013052763124849877,
        winRate: 0.49144869215291753,
        banRate: 0.0027494187920175483,
      },
    },
    "245": {
      JUNGLE: {
        playRate: 0.05827782972644241,
        winRate: 0.5078864353312302,
        banRate: 0.021726700659149216,
      },
      MIDDLE: {
        playRate: 0.029017448003155952,
        winRate: 0.5061658558660482,
        banRate: 0.021726700659149216,
      },
    },
    "246": {
      MIDDLE: {
        playRate: 0.012852506950147703,
        winRate: 0.4763729246487867,
        banRate: 0.0014039818149884633,
      },
    },
    "254": {
      JUNGLE: {
        playRate: 0.021877166364185005,
        winRate: 0.49309723889555823,
        banRate: 0.000382456464800053,
      },
    },
    "266": {
      TOP: {
        playRate: 0.03358066247587761,
        winRate: 0.47942125329944274,
        banRate: 0.005889501269109828,
      },
    },
    "267": {
      UTILITY: {
        playRate: 0.05278555791862705,
        winRate: 0.5129050314074258,
        banRate: 0.0006171829646558795,
      },
    },
    "268": {
      MIDDLE: {
        playRate: 0.012648967887335659,
        winRate: 0.4575655333506359,
        banRate: 0.00043498267455800016,
      },
    },
    "350": {
      UTILITY: {
        playRate: 0.08154694064921301,
        winRate: 0.49488727858293075,
        banRate: 0.05125080772726203,
      },
    },
    "412": {
      UTILITY: {
        playRate: 0.1230426463579913,
        winRate: 0.49474386339381005,
        banRate: 0.012332169184733038,
      },
    },
    "420": {
      TOP: {
        playRate: 0.013115137998937439,
        winRate: 0.5038798498122653,
        banRate: 0.004487160898176301,
      },
    },
    "421": {
      JUNGLE: {
        playRate: 0.031561686288306516,
        winRate: 0.49500728104847097,
        banRate: 0.004628325086900784,
      },
    },
    "427": {
      JUNGLE: {
        playRate: 0.01025902534334906,
        winRate: 0.50336,
        banRate: 0.0003485332876647121,
      },
    },
    "429": {
      BOTTOM: {
        playRate: 0.01947737515586879,
        winRate: 0.49418506657677397,
        banRate: 0.0018203614569238572,
      },
    },
    "432": {
      UTILITY: {
        playRate: 0.04201440203013801,
        winRate: 0.5241443975621191,
        banRate: 0.0023965083202063405,
      },
    },
    "497": {
      UTILITY: {
        playRate: 0.026854024738750502,
        winRate: 0.48655256723716384,
        banRate: 0.00029545992988845295,
      },
    },
    "498": {
      BOTTOM: {
        playRate: 0.02638785462714872,
        winRate: 0.48021895994028363,
        banRate: 0.0004596043353820379,
      },
    },
    "516": {
      TOP: {
        playRate: 0.029621499415372343,
        winRate: 0.4867560678266652,
        banRate: 0.003557556415064298,
      },
    },
    "517": {
      MIDDLE: {
        playRate: 0.02953614432451568,
        winRate: 0.4679337556963432,
        banRate: 0.016344405603014568,
      },
      JUNGLE: {
        playRate: 0.020281682742787358,
        winRate: 0.4766914859177727,
        banRate: 0.016344405603014568,
      },
      TOP: {
        playRate: 0.012199212216283235,
        winRate: 0.4835844994617869,
        banRate: 0.016344405603014568,
      },
    },
    "518": {
      MIDDLE: {
        playRate: 0.007974135218878358,
        winRate: 0.5113215314944421,
        banRate: 0.00036166484010419887,
      },
    },
    "523": {
      BOTTOM: {
        playRate: 0.05376057568725895,
        winRate: 0.4829628724963361,
        banRate: 0.014154172085711831,
      },
    },
    "555": {
      UTILITY: {
        playRate: 0.0499622741441374,
        winRate: 0.49076811879886983,
        banRate: 0.012363903769795131,
      },
    },
    "875": {
      TOP: {
        playRate: 0.03373495821704158,
        winRate: 0.4785908913974309,
        banRate: 0.018411530816197112,
      },
      UTILITY: {
        playRate: 0.028022732905864826,
        winRate: 0.49250234301780693,
        banRate: 0.018411530816197112,
      },
      JUNGLE: {
        playRate: 0.014014649341042285,
        winRate: 0.5057390489576014,
        banRate: 0.018411530816197112,
      },
    },
  },
};
