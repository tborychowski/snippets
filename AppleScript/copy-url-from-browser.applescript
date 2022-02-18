set myURL to ""
set nameOfActiveApp to (path to frontmost application as text)

if "Safari" is in nameOfActiveApp then
    tell application "Safari" to set myUrl to URL of front document

else if "Firefox" is in nameOfActiveApp then
    tell application "Firefox" to activate
    tell application "System Events"
        keystroke "l" using command down
        keystroke "c" using command down
    end tell
    delay 0.15
    set myURL to the clipboard

else if "Edge" is in nameOfActiveApp then
    tell application "Microsoft Edge" to set myURL to URL of active tab of front window
end if


do shell script "open https://some.service.com?url=" & myUrl
