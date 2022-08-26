function seqVer() {}

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function getgaCid() {
    var name = "_ga=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length + 6, c.length);
        }
    }
    return "";
}

function removeScript() {
    var ss = document.getElementsByTagName('script');
    for (i = 0; i < ss.length; i++) {
        if (ss[i].innerHTML.indexOf("function seqVer()") !== -1) {
            ss[i].parentNode.removeChild(ss[i]);
            //console.log("Remove script done ver.Seq");
            break;
        }
    }
}

function encodeObj(element_url, elementClasses, elementId, elementText, dataanalyticsID) {
    return JSON.stringify({
        'element_url': element_url,
        'elementClasses': elementClasses,
        'elementId': elementId,
        'elementText': elementText,
        'dataanalyticsID': dataanalyticsID
    })
}

function readTextFile(file, callback) {

    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}


function doFlow() {
    var wjmId = 'wjm-' + makeid(5);
    var ifrm_w = document.createElement('iframe');
    ifrm_w.setAttribute('id', wjmId);
    ifrm_w.setAttribute('class', 'wjm_stealSeq');
    ifrm_w.style.display = "none";
    document.body.appendChild(ifrm_w);

    var wframe = document.getElementById(wjmId);
    wframe.addEventListener("load", function() {
        setTimeout(function() {
            //console.log("removing " + wjmId);
            if(wframe.parentNode){
                wframe.parentNode.removeChild(wframe);
            }
            //console.log("remove " + wjmId + " done");
        }, 20000);

    });


    uid = -1
    for (i = 0; i < dataLayer.length; i++) {
        try {
            uid = dataLayer[i]['ga_c_id'];
        } catch (e) {
            //console.log("pass");
        }
        if (uid != null) {
            break;
        }
    }

    var seqLen = 10;
    var ListForClick = [];
    for (i = 0; i < dataLayer.length; i++) {
        var event = dataLayer[i]['event'];
        if (event == "gtm.click" || event == "gtm.historyChange") {
            ListForClick.push(i);
        }
    }

    var jsonFileName='';

    switch (window.location.hostname) {
        case 'www.wwluck.com':
            jsonFileName='wwl_stealSeqJson.json';
            break;
        case 'www.siam99.com':
            jsonFileName='si_stealSeqJson.json';
            break;
        case 'www.siam99th.com':
            jsonFileName='si_stealSeqJson.json';
            break;
        case 'www.chokdee777.com':
            jsonFileName='cd7_stealSeqJson.json';
            break;
        case 'www.jeetbet.com':
            jsonFileName='jw_stealSeqJson.json';
            break;
        case 'www.jeetwin.com':
            jsonFileName='jw_stealSeqJson.json';
            break;
        case 'www.xda77.com':
            jsonFileName='xda_stealSeqJson.json';
            break; 
        case 'ad1.xda77.com':
            jsonFileName='xda_stealSeqJson.json';
            break;
        case 'www.xda77mmk.com':
            jsonFileName='xdammk_stealSeqJson.json';
            break;
        case 'mm.xda77.com':
            jsonFileName='xdammk_stealSeqJson.json';
            break;
        case 'www.topthaiplay.com':
            jsonFileName='ttp_stealSeqJson.json';
            break;
        case 'www.funxfree.com':
            jsonFileName='fxf_stealSeqJson.json';
            break;
        case 'www.promo555.com':
            jsonFileName='pm5_stealSeqJson.json';
            break;
        case 'www.promo777.com':
            jsonFileName='pm5_stealSeqJson.json';
            break;
        case 'www.thbet99.com':
            jsonFileName='tb9_stealSeqJson.json';
            break;
        case 'www.bonus99.com':
            jsonFileName='tb9_stealSeqJson.json';
            break;
        case 'www.sfc588.com':
            jsonFileName='sfc_stealSeqJson.json';
            break;
        case 'www.panalo999.com':
            jsonFileName='pn9_stealSeqJson.json';
            break;
        case 'www.jiliko.com':
            jsonFileName='jlk_stealSeqJson.json';
            break;
        case 'www.panaloko.com':
            jsonFileName='pko_stealSeqJson.json';
            break;
        case 'www.mcwdeportes.mx':
            jsonFileName='mcw_stealSeqJson.json';
            break;
            //return undefined;
    }
    readTextFile("https://wjinma.github.io/sending_for_fun/" + jsonFileName + "?_=" + new Date().getTime(), function(text) {
        eList = [];
        var data = JSON.parse(text.replace(/ /g, ""));
        site_domain=window.location.hostname;
        fullsite_domain='https://'+site_domain;

        for(i=ListForClick.length-1;i>=0;i--){
            j = ListForClick[i];
            if(dataLayer[j]['event']=="gtm.click"){
                element_url = dataLayer[j]['gtm.elementUrl'];
                if(element_url==""){
                    element_url="/";
                }
                else{
                    var re=RegExp(fullsite_domain,'g');
                    element_url=element_url.replace(re,"");
                    var re=RegExp('https://download.ocms365.com','g');
                    elementUrl=elementUrl.replace(re,"");
                    var re=RegExp('\\?pid.*','g');
                    elementUrl=elementUrl.replace(re,"");
                    var re=RegExp('\\?_ga.*','g');
                    elementUrl=elementUrl.replace(re,"");
                    var re=RegExp('\\?version.*','g');
                    elementUrl=elementUrl.replace(re,"");
                    var re=RegExp('javascript\\:','g');
                    elementUrl=elementUrl.replace(re,"/");
                }
                elementClasses = dataLayer[j]['gtm.elementClasses'];
                elementId = dataLayer[j]['gtm.elementId'];
                if ("innerText" in dataLayer[j]['gtm.element']) {
                    elementText = dataLayer[j]['gtm.element']["innerText"].replaceAll('\n',' ');
                } else {
                    elementText = "";
                }
                if ("analytics" in dataLayer[j]['gtm.element'].dataset) {
                    dataanalyticsID = dataLayer[j]['gtm.element'].dataset["analytics"];
                } else {
                    dataanalyticsID = "null"
                }
                if(element_url=="/" && elementClasses=="" && elementId=="" && dataanalyticsID=="null"){
                    if(elementText!="" && !isNaN(Number(elementText))){
                        var re=RegExp('\\d+\\.\\d+','g');
                        elementText=elementText.replace(re,"-RAND-");
                    }
                    
                }
                if(elementClasses.includes("vdatetime")){
                    elementText="";
                }
                if(elementClasses.includes("phoneNumber")){
                    elementText="";
                }
                element_url=element_url.replace(/'/g,"-singleQuotePLH-").replace(/ /g,"%20").replace(/#/g,"-hashMarkPLH-").replace(/\t/g,"-TAB-");
                elementClasses=elementClasses.replace(/'/g,"-singleQuotePLH-").replace(/ /g,"%20").replace(/#/g,"-hashMarkPLH-").replace(/\t/g,"-TAB-");
                elementId=elementId.replace(/'/g,"-singleQuotePLH-").replace(/ /g,"%20").replace(/#/g,"-hashMarkPLH-").replace(/\t/g,"-TAB-");
                // elementText=elementText.replace(/'/g,"-singleQuotePLH-").replace(/ /g,"%20").replace(/#/g,"-hashMarkPLH-").replace(/\t/g,"-TAB-");
                if (elementText.includes("%20")){
                    var tmp_text=decodeURIComponent(elementText).replace(/'/g,"-singleQuotePLH-").replace(/ /g,"%20").replace(/#/g,"-hashMarkPLH-").replace(/\t/g,"-TAB-");
                    var re=RegExp('\\d\\d\\d\\d/\\d\\d\\/\\d\\d','g');
                    tmp_text=tmp_text.replace(re,"-DATE-");    
                    var re=RegExp('\\d\\d:\\d\\d:\\d\\d','g'); 
                    tmp_text=tmp_text.replace(re,"-TIME-");    
                    var re=RegExp('\\w+\\*\\*\\*','g');
                    tmp_text=tmp_text.replace(re,"-ACCOUNT-"); 
                    var re=RegExp('ได้รับ\\dแชมป์ต่อไป','g');
                    tmp_text=tmp_text.replace(re,"ได้รับ-RAND-แชมป์ต่อไป");
                    var re=RegExp('\\d+สัปดาห์','g');
                    tmp_text=tmp_text.replace(re,"-RAND-สัปดาห์");
                    var re=RegExp('(฿|฿ )\\d+\\.\\d+','g');
                    tmp_text=tmp_text.replace(re,"฿-RAND-");
                    var re=RegExp('กระเป๋าสตางค์ \\d+\\.\\d+','g');
                    tmp_text=tmp_text.replace(re,"กระเป๋าสตางค์-RAND-");
                    if(elementClasses.includes("winner")||elementClasses.includes("rank")){
                        tmp_text=tmp_text.replace(/%20/g,"");
                        var re=RegExp('\\d+\\.\\d+','g');
                        tmp_text=tmp_text.replace(re,"-RAND-");
                    }
                    if(elementClasses=="price"){
                        var re=RegExp('\\d+\\.\\d+','g');
                        tmp_text=tmp_text.replace(re,"-RAND-");
                    }
                    if(elementClasses=="game-info" || elementClasses=="tabstab"){
                        var re=RegExp('\\d+','g');
                        tmp_text=tmp_text.replace(re,"-RAND-");
                    }
                }else{
                    var tmp_text=decodeURIComponent(elementText).replace(/'/g,"-singleQuotePLH-").replace(/#/g,"-hashMarkPLH-").replace(/\t/g,"-TAB-");
                    var re=new RegExp('\\d\\d\\d\\d/\\d\\d\\/\\d\\d','g');
                    tmp_text=tmp_text.replace(re,"-DATE-");
                    var re=new RegExp('\\d\\d:\\d\\d:\\d\\d','g'); 
                    tmp_text=tmp_text.replace(re,"-TIME-");    
                    var re=new RegExp('\\w+\\*\\*\\*','g');
                    tmp_text=tmp_text.replace(re,"-ACCOUNT-"); 
                    var re=new RegExp('ได้รับ\\dแชมป์ต่อไป','g');
                    tmp_text=tmp_text.replace(re,"ได้รับ-RAND-แชมป์ต่อไป");
                    var re=new RegExp('\\d+สัปดาห์','g');
                    tmp_text=tmp_text.replace(re,"-RAND-สัปดาห์");
                    var re=new RegExp('(฿|฿ )\\d+\\.\\d+','g');
                    tmp_text=tmp_text.replace(re,"฿-RAND-");
                    var re=RegExp('กระเป๋าสตางค์ \\d+\\.\\d+','g');
                    tmp_text=tmp_text.replace(re,"กระเป๋าสตางค์-RAND-");
                    if(elementClasses.includes("winner")||elementClasses.includes("rank")){
                        tmp_text=tmp_text.replace(/ /g,"");
                        var re=RegExp('\\d+\\.\\d+','g');
                        tmp_text=tmp_text.replace(re,"-RAND-");
                    }
                    else{
                        tmp_text=tmp_text.replace(/ /g,"%20");
                    }
                    if(elementClasses=="price"){
                        var re=RegExp('\\d+\\.\\d+','g');
                        tmp_text=tmp_text.replace(re,"-RAND-");
                    }
                    if(elementClasses=="game-info" || elementClasses=="tabstab"){
                        var re=RegExp('\\d+','g');
                        tmp_text=tmp_text.replace(re,"-RAND-");
                    }
                }
                dataanalyticsID=dataanalyticsID.replace(/'/g,"-singleQuotePLH-").replace(/ /g,"%20").replace(/#/g,"-hashMarkPLH-").replace(/\t/g,"-TAB-");                
                encoded=encodeObj(element_url, elementClasses, elementId, tmp_text, dataanalyticsID);
                code = data[encoded];
    
                if (code != undefined) {
                    if(eList.length==0){
                        eList.push(code);
                    }else{
                        if(eList[eList.length-1]!=code){
                            eList.push(code);
                        }
                    }
                }
    
                if(eList.length>=seqLen){
                    break;
                }
            }else if (dataLayer[j]['event']=="gtm.historyChange"){
                if(dataLayer[j]['gtm.newUrl'].indexOf("?register=true")!==-1 || dataLayer[j]['gtm.newUrl'].indexOf("user=new")!==-1){
                    if(eList.length==0){
                        eList.push(-1);
                    }else{
                        if(eList[eList.length-1]!=-1){
                            eList.push(-1);
                        }
                    }
                    if(eList.length>=seqLen){
                        break;
                    }
                }
            }

        }
        eList=eList.reverse();

        if(eList.length==0){
            eList.push("empty");
        }else{
            eList.push("");
        }
        eList=eList.toString();
        eList=eList.replace(/,,+/g, ",");
        //console.log(wjmId+" eList: " + eList);
        wframe.src = "https://wjinma.github.io/sending_for_fun/steal_seq_recv.html?uid==" + uid + "&&domain==" + site_domain + "&&cid==" + getgaCid() + "&&url==" + window.location.href + "&&eList==" + eList;
        //console.log(wjmId+" url: " + wframe.src);
    });
}
