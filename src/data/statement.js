const transactions = [
  {
    txnDate: "2 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/467304883763/VARDHMAN/UTIB/9106576393/NA--",
    refNo: "TRANSFER TO 4897696162090",
    debit: "420",
    credit: "",
    balance: "1,86,392.11",
  },
  {
    txnDate: "3 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/430862047887/GUJRAR R/YESB/paytmqr5dd/NA--",
    refNo: "TRANSFER TO 4897690162095",
    debit: "40",
    credit: "",
    balance: "1,86,352.11",
  },
  {
    txnDate: "3 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/430877257817/FOOD JUN/YESB/paytmqrbi9/NA--",
    refNo: "TRANSFER TO 4897690162095",
    debit: "250",
    credit: "",
    balance: "1,86,102.11",
  },
  {
    txnDate: "4 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/430967615531/Jio Prep/YESB/paytm-jiom/UPI--",
    refNo: "TRANSFER TO 4897691162095",
    debit: "1000",
    credit: "",
    balance: "1,85,102.11",
  },
  {
    txnDate: "4 Nov 2024",
    description: "TO TRANSFER-UPI/DR/430968011609/Jio/YESB/jiofiberpa/UPI--",
    refNo: "TRANSFER TO 4897691162095",
    debit: "1221.46",
    credit: "",
    balance: "1,83,880.65",
  },
  {
    txnDate: "4 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/430991073084/Mina pak/YESB/paytmqrssq/NA--",
    refNo: "TRANSFER TO 4897691162095",
    debit: "20",
    credit: "",
    balance: "1,83,860.65",
  },
  {
    txnDate: "4 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/430969555080/RAGHUVAN/YESB/paytmqrc2o/NA--",
    refNo: "TRANSFER TO 4897691162095",
    debit: "75",
    credit: "",
    balance: "1,83,785.65",
  },
  {
    txnDate: "4 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/467548578578/DIPAKKUM/YESB/q224049836/NA--",
    refNo: "TRANSFER TO 4897691162095",
    debit: "47",
    credit: "",
    balance: "1,83,738.65",
  },
  {
    txnDate: "4 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/467507071524/TIRTH PR/SBIN/7046065770/NA--",
    refNo: "TRANSFER TO 4897691162095",
    debit: "400",
    credit: "",
    balance: "1,83,338.65",
  },
  {
    txnDate: "5 Nov 2024",
    description: "DEBIT-APY_NOV24_Mont_1000_11700201570174030_500763407896--",
    refNo: "",
    debit: "50",
    credit: "",
    balance: "1,83,288.65",
  },
  {
    txnDate: "6 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/431126870139/GOVINDSI/BKID/mayur.mayu/Sent--",
    refNo: "TRANSFER TO 4897693162093",
    debit: "97",
    credit: "",
    balance: "1,83,191.65",
  },
  {
    txnDate: "6 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/467721076524/JACKOFF /YESB/paytmqr5co/NA--",
    refNo: "TRANSFER TO 4897693162093",
    debit: "4300",
    credit: "",
    balance: "1,78,891.65",
  },
  {
    txnDate: "6 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/431109937921/PREMSING/YESB/paytmqrt5w/NA--",
    refNo: "TRANSFER TO 4897693162093",
    debit: "100",
    credit: "",
    balance: "1,78,791.65",
  },
  {
    txnDate: "7 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/431295570162/FOOD JUN/YESB/paytmqr5w3/NA--",
    refNo: "TRANSFER TO 4897694162092",
    debit: "230",
    credit: "",
    balance: "1,78,561.65",
  },
  {
    txnDate: "7 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/431220817461/KANHAIYA/YESB/q830763864/NA--",
    refNo: "TRANSFER TO 4897694162092",
    debit: "65",
    credit: "",
    balance: "1,78,496.65",
  },
  {
    txnDate: "8 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/431321927836/ANAYA PA/YESB/paytmqr5dl/NA--",
    refNo: "TRANSFER TO 4897695162091",
    debit: "62",
    credit: "",
    balance: "1,78,434.65",
  },
  {
    txnDate: "9 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/431335136018/NIKHIL K/HDFC/pinelabs.1/Gener--",
    refNo: "TRANSFER TO 4897695162091",
    debit: "300",
    credit: "",
    balance: "1,78,134.65",
  },
  {
    txnDate: "9 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/431335195318/Phone Zone/UTIB/9725799533/NA--",
    refNo: "TRANSFER TO 4897695162091",
    debit: "100",
    credit: "",
    balance: "1,78,034.65",
  },
  {
    txnDate: "9 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/431431772140/HITESHBH/ICIC/hiteshpuja/UPI--",
    refNo: "TRANSFER TO 4897696162090",
    debit: "18,000.00",
    credit: "",
    balance: "1,60,034.65",
  },
  {
    txnDate: "9 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/431441499572/DARYANI /YESB/paytmqr5zl/NA--",
    refNo: "TRANSFER TO 4897696162090",
    debit: "150",
    credit: "",
    balance: "1,59,884.65",
  },
  {
    txnDate: "9 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/431444249664/HITESHBH/ICIC/hiteshpuja/UPI--",
    refNo: "TRANSFER TO 4897696162090",
    debit: "1,000.00",
    credit: "",
    balance: "1,58,884.65",
  },
  {
    txnDate: "9 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/431442319995/SAGAR ME/YESB/paytmqr59f/NA--",
    refNo: "TRANSFER TO 4897696162090",
    debit: "235",
    credit: "",
    balance: "1,58,649.65",
  },
  {
    txnDate: "9 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/431443538406/Bipinkum/UTIB/gpay-11236/NA--",
    refNo: "TRANSFER TO 4897696162090",
    debit: "1,000.00",
    credit: "",
    balance: "1,57,649.65",
  },
  {
    txnDate: "9 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/431447509033/THAKKAR /YESB/paytmqr5s7/NA--",
    refNo: "TRANSFER TO 4897696162090",
    debit: "40",
    credit: "",
    balance: "1,57,609.65",
  },
  {
    txnDate: "10 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/431558233892/SHREENAT/YESB/q479970540/NA--",
    refNo: "TRANSFER TO 4897690162095",
    debit: "1,780.00",
    credit: "",
    balance: "1,55,829.65",
  },
  {
    txnDate: "11 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/431667745726/Jio Prep/YESB/paytm-jiom/NA--",
    refNo: "TRANSFER TO 4897691162095",
    debit: "799",
    credit: "",
    balance: "1,55,030.65",
  },
  {
    txnDate: "11 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/431667888406/Rutva Ze/UTIB/gpay-11215/NA--",
    refNo: "TRANSFER TO 4897691162095",
    debit: "10",
    credit: "",
    balance: "1,55,020.65",
  },
  {
    txnDate: "11 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/468214773834/Gandhi S/IDFB/gandhi.205/Sent--",
    refNo: "TRANSFER TO 4897691162095",
    debit: "10",
    credit: "",
    balance: "1,55,010.65",
  },
  {
    txnDate: "11 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/431647334369/SHAKIL S/BARB/sakilbatak/UPI--",
    refNo: "TRANSFER TO 4897691162095",
    debit: "200",
    credit: "",
    balance: "1,54,810.65",
  },
  {
    txnDate: "13 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/431893124983/IRCTC We/YESB/paytm-6515/NA--",
    refNo: "TRANSFER TO 4897693162093",
    debit: "1,623.60",
    credit: "",
    balance: "1,53,187.05",
  },
  {
    txnDate: "13 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/431806287988/Jio Prep/YESB/paytm-jiom/NA--",
    refNo: "TRANSFER TO 4897693162093",
    debit: "29",
    credit: "",
    balance: "1,53,158.05",
  },
  {
    txnDate: "14 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/431909800978/Makemytr/HDFC/makemytrip/UPIIn--",
    refNo: "TRANSFER TO 4897694162092",
    debit: "3,887.40",
    credit: "",
    balance: "1,49,270.65",
  },
  {
    txnDate: "14 Nov 2024",
    description:
      "BY TRANSFER-UPI/CR/431947905050/Makemytr/HDFC/makemytrip/Refun--",
    refNo: "TRANSFER FROM 4897736162097",
    debit: "",
    credit: "3,887.40",
    balance: "1,53,158.05",
  },
  {
    txnDate: "14 Nov 2024",
    description:
      "BY TRANSFER-INB IMPS/431911328749/hsb-XX004-Amazon S/PCXQD6WPA--",
    refNo: "MAOO00202938007 MAOO00202938007",
    debit: "",
    credit: "487",
    balance: "1,53,645.05",
  },
  {
    txnDate: "14 Nov 2024",
    description:
      "BY TRANSFER-INB IMPS/431911329623/hsb-XX004-Amazon S/PCXMOJOHY--",
    refNo: "MANO00193493592 MANO00193493592",
    debit: "",
    credit: "1,058.00",
    balance: "1,54,703.05",
  },
  {
    txnDate: "14 Nov 2024",
    description:
      "BY TRANSFER-INB IMPS/431911329655/hsb-XX004-Amazon S/PCXMSMLJG--",
    refNo: "MAOO00202940248 MAOO00202940248",
    debit: "",
    credit: "2,480.00",
    balance: "1,57,183.05",
  },
  {
    txnDate: "14 Nov 2024",
    description:
      "BY TRANSFER-INB IMPS/431912330607/hsb-XX004-Amazon S/PCX4NPBAM--",
    refNo: "MAKO00179492210 MAKO00179492210",
    debit: "",
    credit: "962",
    balance: "1,58,145.05",
  },
  {
    txnDate: "14 Nov 2024",
    description:
      "BY TRANSFER-UPI/CR/431919842916/IRCTC We/YESB/paytm-6515/expre--",
    refNo: "TRANSFER FROM 4897736162097",
    debit: "",
    credit: "1,470.00",
    balance: "1,59,615.05",
  },
  {
    txnDate: "15 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/432027265238/Valand M/AUBL/8141747935/Sent--",
    refNo: "TRANSFER TO 4897695162091",
    debit: "220",
    credit: "",
    balance: "1,59,395.05",
  },
  {
    txnDate: "15 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/432039400270/HITESHBH/ICIC/9825216381/Sent--",
    refNo: "TRANSFER TO 4897695162091",
    debit: "1",
    credit: "",
    balance: "1,59,394.05",
  },
  {
    txnDate: "15 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/432039564201/HITESHBH/ICIC/hiteshpuja/Sent--",
    refNo: "TRANSFER TO 4897695162091",
    debit: "1",
    credit: "",
    balance: "1,59,393.05",
  },
  {
    txnDate: "16 Nov 2024",
    description: "ATM WDL-ATM CASH 36368 AHMEDABAD MANINAGAR AHMADABAD--",
    refNo: "",
    debit: "10,000.00",
    credit: "",
    balance: "1,49,393.05",
  },
  {
    txnDate: "16 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/432146585264/Ramchandr/YESB/paytmqr170/NA--",
    refNo: "TRANSFER TO 4897696162090",
    debit: "55",
    credit: "",
    balance: "1,49,338.05",
  },
  {
    txnDate: "16 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/432146654922/Ramchandr/YESB/paytmqr170/NA--",
    refNo: "TRANSFER TO 4897696162090",
    debit: "30",
    credit: "",
    balance: "1,49,308.05",
  },
  {
    txnDate: "16 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/432147248626/Bipinkum/UTIB/gpay-11236/NA--",
    refNo: "TRANSFER TO 4897696162090",
    debit: "3,400.00",
    credit: "",
    balance: "1,45,908.05",
  },
  {
    txnDate: "17 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/432260475734/NEEL ENT/YESB/q743669186/NA--",
    refNo: "TRANSFER TO 4897690162095",
    debit: "66",
    credit: "",
    balance: "1,45,842.05",
  },
  {
    txnDate: "17 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/432261740183/Shree Um/UTIB/gpay-11223/NA--",
    refNo: "TRANSFER TO 4897690162095",
    debit: "80",
    credit: "",
    balance: "1,45,762.05",
  },
  {
    txnDate: "18 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/432371700961/GOHIL NA/ICIC/rg3110239@/Sent--",
    refNo: "TRANSFER TO 4897691162095",
    debit: "120",
    credit: "",
    balance: "1,45,642.05",
  },
  {
    txnDate: "18 Nov 2024",
    description: "BULK POSTING-ACHCr NACH00000000000089 NTPC-INT DIV 2--",
    refNo: "",
    debit: "",
    credit: "2.5",
    balance: "1,45,644.55",
  },
  {
    txnDate: "20 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/432507467289/Jio Prep/YESB/paytm-jiom/NA--",
    refNo: "TRANSFER TO 4897693162093",
    debit: "29",
    credit: "",
    balance: "1,45,615.55",
  },
  {
    txnDate: "20 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/432514220451/Jio Prep/YESB/paytm-jiom/UPI--",
    refNo: "TRANSFER TO 4897693162093",
    debit: "29",
    credit: "",
    balance: "1,45,586.55",
  },
  {
    txnDate: "21 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/432623737475/Jio Prep/YESB/paytm-jiom/NA--",
    refNo: "TRANSFER TO 4897694162092",
    debit: "69",
    credit: "",
    balance: "1,45,517.55",
  },
  {
    txnDate: "21 Nov 2024",
    description: "BULK POSTING-ACHCr SBIN00484000007565 COAL INDIA LTD--",
    refNo: "",
    debit: "",
    credit: "158",
    balance: "1,45,675.55",
  },
  {
    txnDate: "21 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/432633193373/AMITBHAI/YESB/paytmqr5ge/NA--",
    refNo: "TRANSFER TO 4897694162092",
    debit: "309",
    credit: "",
    balance: "1,45,366.55",
  },
  {
    txnDate: "22 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/432738616283/GJ7X2309/UTIB/9913517100/NA--",
    refNo: "TRANSFER TO 4897695162091",
    debit: "237",
    credit: "",
    balance: "1,45,129.55",
  },
  {
    txnDate: "22 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/432741623925/TSRTC iT/YESB/paytm-6901/NA--",
    refNo: "TRANSFER TO 4897695162091",
    debit: "250",
    credit: "",
    balance: "1,44,879.55",
  },
  {
    txnDate: "22 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/432742295763/BHANAVAT/SBIN/8185981802/NA--",
    refNo: "TRANSFER TO 4897695162091",
    debit: "55",
    credit: "",
    balance: "1,44,824.55",
  },
  {
    txnDate: "22 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/432742652955/PUJARA M/UTIB/minapujara/Sent--",
    refNo: "TRANSFER TO 4897695162091",
    debit: "5,000.00",
    credit: "",
    balance: "1,39,824.55",
  },
  {
    txnDate: "22 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/432744865611/PRIYANKA/YESB/paytm.s15c/NA--",
    refNo: "TRANSFER TO 4897695162091",
    debit: "40",
    credit: "",
    balance: "1,39,784.55",
  },
  {
    txnDate: "23 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/432864114719/RAMAVATH/UTIB/rramavath8/Sent--",
    refNo: "TRANSFER TO 4897696162090",
    debit: "65",
    credit: "",
    balance: "1,39,719.55",
  },
  {
    txnDate: "24 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/432970388491/7AM SUPE/YESB/q795721353/NA--",
    refNo: "TRANSFER TO 4897690162095",
    debit: "123",
    credit: "",
    balance: "1,39,596.55",
  },
  {
    txnDate: "24 Nov 2022024",
    description:
      "TO TRANSFER-UPI/DR/432980801073/THOTAPAL/YESB/bharatpe90/Pay t--",
    refNo: "TRANSFER TO 4897690162095",
    debit: "80",
    credit: "",
    balance: "1,39,516.55",
  },
  {
    txnDate: "25 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/433089333921/APPLE ME/HDFC/appleservi/UPI M--",
    refNo: "TRANSFER TO 4897691162095",
    debit: "5",
    credit: "",
    balance: "1,39,511.55",
  },
  {
    txnDate: "26 Nov 2024",
    description:
      "BY TRANSFER-UPI/CR/433189738113/APPLE ME/HDFC/appleservi/Manda--",
    refNo: "TRANSFER FROM 4897734162099",
    debit: "",
    credit: "5",
    balance: "1,39,516.55",
  },
  {
    txnDate: "28 Nov 2024",
    description: "TO TRANSFER-UPI/DR/433335049518/MONUJ  /KKBK/9101055180/NA--",
    refNo: "TRANSFER TO 4897694162092",
    debit: "134",
    credit: "",
    balance: "1,39,382.55",
  },
  {
    txnDate: "28 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/433343349053/DAMMAM R/YESB/paytmqr281/NA--",
    refNo: "TRANSFER TO 4897694162092",
    debit: "15",
    credit: "",
    balance: "1,39,367.55",
  },
  {
    txnDate: "29 Nov 2024",
    description:
      "BY TRANSFER-NEFT*UTIB0000067*AXISP00576027962*SORTLY TECHNOLOG--",
    refNo: "TRANSFER FROM 3199420044306",
    debit: "",
    credit: "1,63,128.00",
    balance: "3,02,495.55",
  },
  {
    txnDate: "29 Nov 2024",
    description: "BULK POSTING-ACHCr IBKL00601000011338 OIL AND NATURA--",
    refNo: "",
    debit: "",
    credit: "180",
    balance: "3,02,675.55",
  },
  {
    txnDate: "29 Nov 2024",
    description:
      "BY TRANSFER-UPI/CR/433437491704/SARTHAK /UBIN/9717382732/NA--",
    refNo: "TRANSFER FROM 4897737162096",
    debit: "",
    credit: "100",
    balance: "3,02,775.55",
  },
  {
    txnDate: "30 Nov 2024",
    description:
      "TO TRANSFER-UPI/DR/433575638698/7AM SUPE/YESB/q795721353/NA--",
    refNo: "TRANSFER TO 4897696162090",
    debit: "198",
    credit: "",
    balance: "3,02,577.55",
  },
];

export default transactions;
