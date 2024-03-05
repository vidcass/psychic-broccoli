document.getElementById('save').addEventListener('click', function() {
    let userAgent = document.getElementById('userAgent').value;
    browser.storage.local.set({userAgent: userAgent}, function() {
        console.log('User Agent saved: ' + userAgent);
    });
});

document.getElementById('clear').addEventListener('click', function() {
    // Clear the user agent from storage
    browser.storage.local.remove('userAgent', function() {
        console.log('User Agent has been cleared.');
    });
    // Optionally reset the input field to empty
    document.getElementById('userAgent').value = '';
});
