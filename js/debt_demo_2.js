(function (global) {
  'use strict';

    var fileArray = [];
    var maxLastFile = 10;
    for (var i=0; i<maxLastFile; i++) {
      if ( (i + 1).toString().length < 2 ) {
        var urlString = "http://stats.mediasmart.es/bulk/test-2014/account-0" + (i + 1) + ".json";
        fileArray.push(urlString);
      } else {
      var urlString = "http://stats.mediasmart.es/bulk/test-2014/account-" + (i + 1) + ".json";
      fileArray.push(urlString);
      }
    }

    var nRequest = [];
    var totalDebt = 0;

    for (var i=0;i<fileArray.length;i++){
        (function(i) {
            nRequest[i] = new XMLHttpRequest();
            nRequest[i].open('GET', fileArray[i], true);
            nRequest[i].setRequestHeader('Accept', 'application/json');

            nRequest[i].onload = function() {
                if (nRequest[i].status === 200) {
                    var response = JSON.parse(nRequest[i].response);
                      if (response.Province == 'Madrid') {
                        totalDebt += response.Debt;
                        console.log(totalDebt);
                        spantest.innerHTML = totalDebt;
                      }
                }
            }; nRequest[i].send(null);
        })(i);
    }

})(window);
