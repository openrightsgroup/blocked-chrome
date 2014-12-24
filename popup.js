document.addEventListener('DOMContentLoaded', function(){
    chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
        function(tabs){
            newURL = 'http://blocked.org.uk/results?url='+tabs[0].url;
            chrome.tabs.create({ url: newURL });
            // In future we could use an API call instead, and show the results in the popup
            //newURL = 'https://api.blocked.org.uk/1.2/status/url?url='+tabs[0].url;
        }
    );
});

