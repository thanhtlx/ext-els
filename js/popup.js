function enableDownloadVideo() {
  document.querySelectorAll("audio").forEach((e) => {
    e.setAttribute("controlslist", "");
  });
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  chrome.scripting.executeScript(
    {
      target: { tabId: tabId },
      func: enableDownloadVideo,
      args: [],
    },
    (_) => {
      let e = chrome.runtime.lastError;
      if (e !== undefined) {
        console.log(tabId, _, e);
      }
    }
  );
});
