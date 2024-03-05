let defaultUserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.2365.66'; // Default User Agent
let cachedUserAgent = defaultUserAgent; // Initially set to default

// Function to update the cached User Agent
function updateUserAgentCache() {
  browser.storage.local.get("userAgent", function(result) {
    cachedUserAgent = result.userAgent || defaultUserAgent;
    console.log('Cached User Agent updated:', cachedUserAgent);
  });
}

// Initial cache update
updateUserAgentCache();

// Listen for changes in storage to update the cache
browser.storage.onChanged.addListener((changes, area) => {
  if (area === 'local' && changes.userAgent) {
    updateUserAgentCache();
  }
});

// Modify the User-Agent header for each request and block Client Hints
browser.webRequest.onBeforeSendHeaders.addListener(
  (details) => {
    let requestHeaders = details.requestHeaders;

    // Replace or add User-Agent header
    requestHeaders = requestHeaders.map(header => {
      if (header.name.toLowerCase() === "user-agent") {
        return { name: "User-Agent", value: cachedUserAgent };
      }
      return header;
    });

    // Filter out Client Hints headers
    requestHeaders = requestHeaders.filter(header => !header.name.startsWith('Sec-CH-'));

    return { requestHeaders };
  },
  { urls: ["<all_urls>"] },
  ["blocking", "requestHeaders"]
);

// Optionally handle errors or logging
function onError(error) {
  console.error(`Error in the User Agent Spoofing Extension: ${error}`);
}

