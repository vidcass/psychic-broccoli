This extension is meant to be used on Firefox-ESR running on Debian Stable. For a couple reasons, you may want your browser to appear to be something else. This requires changing the user-agent. The best way to do this if you have low trust, is manually yourself following the directions here: https://www.whatismybrowser.com/guides/how-to-change-your-user-agent/firefox

The permissions for this extension look scary, because it has to listen to communication between your browser and the target site in order to replace any request for the user-agent with the one that you specify in this extension. 

It also listens for and blocks some additional requests that can be used to detect 
when browsers are lying about themselves via the user-agent. 
https://developers.whatismybrowser.com/learn/browser-detection/client-hints/detect-windows-11-client-hints

If you have suggestions for improving this extension, especially in a way that minimizes the permissions required to do the job, please let me know. 
