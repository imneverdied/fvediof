var play_NAME = [];
var first_EPISO = [];
//json檔取得的所有NAME => ALL_NAME
var ALL_NAME = [];
var ALL_RNAME = [];
var ALL_NBRTYPE = [];
var ALL_PATH = [];
var ALL_SEASON = [];
var ALL_EPISODE = [];
var ALL_EXT = [];
var ALL_CC = [];

$(document).ready(function() {
  startTime();
  $.ajaxSetup({ cache: false });
  $.getJSON('https://imneverdied.github.io/jmespath/example.json', function(
    data
  ) {
    Gdata = data;

    /* loop through array */
    $.each(data, function(index, d) {
      play_NAME.push(d.NAME);
      first_EPISO.push(d.EPISODE);

      ALL_NAME.push(d.NAME);
      ALL_RNAME.push(d.RNAME);
      ALL_NBRTYPE.push(d.NBRTYPE);
      ALL_PATH.push(d.PATH);
      ALL_SEASON.push(d.SEASON);
      ALL_EPISODE.push(d.EPISODE);
      ALL_EXT.push(d.EXT);
      ALL_CC.push(d.CC);
    });
    //$("#TEXT").text(play_NAME.join(''))

    //讀jsonNAME生下拉選單====
    var selection = '';
    for (i = 0; i < play_NAME.length; i++) {
      selection = selection + '<option>' + play_NAME[i] + '</option>\r\n';
    }
    var mix = '<select id ="TEXT3">\r\n' + selection + '</select>';
    $(TEXT3).html(mix);
    EPISODEmaker(first_EPISO[0]);
    Fsearch(play_NAME[0]);
    eSLECT('第1集');

    //========================
  });
});

function eSLECT(value) {
  var strRTN = $(NAME_NOW).text() + ' ' + value;
  $(TEXT2).text(strRTN);
}

function Fsearch(value) {
  //現在選擇的影集 => F_NAME
  var F_NAME = [];
  var F_RNAME = [];
  var F_NBRTYPE = [];
  var F_PATH = [];
  var F_SEASON = [];
  var F_EPISODE = [];
  var F_EXT = [];
  var F_CC = [];

  /* loop through array */

  for (j = 0; j < ALL_NAME.length; j++)
    if (value == ALL_NAME[j]) {
      //過濾資料
      //取得現在選擇的影集所有欄位資料
      F_NAME.push(ALL_NAME[j]);
      F_RNAME.push(ALL_RNAME[j]);
      F_NBRTYPE.push(ALL_NBRTYPE[j]);
      F_PATH.push(ALL_PATH[j]);
      F_SEASON.push(ALL_SEASON[j]);
      F_EPISODE.push(ALL_EPISODE[j]);
      F_EXT.push(ALL_EXT[j]);
      F_CC.push(ALL_CC[j]);

      //var strRTN = F_NAME[0] + F_NBRTYPE[0];
      var strRTN = F_NAME[0] + ' 第1集';
      $(NAME_NOW).text(F_NAME[0]);
      $(TYPE_NOW).text(F_NBRTYPE[0]);
      $(TEXT2).text(strRTN);
      EPISODEmaker(F_EPISODE[0]);
    }
}

function EPISODEmaker(value) {
  //讀jsonNAME生集數下拉選單========
  var selection = '';
  for (i = 0; i < value; i++) {
    selection = selection + '<option>第' + (i + 1) + '集</option>\r\n';
  }
  var mix = '<select id ="TEXT4">\r\n' + selection + '</select>';
  $(TEXT4).html(mix);
  //========================
}

$(SELECT).keyup(function() {
  var AAA = document.getElementById('SELECT').value;
  $(TEXT2).text(AAA);
});

function startTime() {
  var today = new Date();
  var ss = today.getSeconds();
  ss = checkTime(ss);

  var timeoutId = setTimeout(startTime, 500);
}

function checkTime(i) {
  var TT = '🌑';

  for (j = 0; j < i; j++) {
    if (TT.length < 30) {
      if (TT == '🌑') TT = '🌒';
      else if (TT == '🌒') TT = '🌓';
      else if (TT == '🌓') TT = '🌔';
      else if (TT == '🌔') TT = '🌕';
      else if (TT == '🌕') TT = '🌖';
      else if (TT == '🌖') TT = '🌗';
      else if (TT == '🌗') TT = '🌘';
      else if (TT == '🌘') TT = '🌑';
    }
  }

  $(load).text(TT);
}
