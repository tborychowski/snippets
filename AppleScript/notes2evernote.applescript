-- download Evernote Legacy, open and log-in
-- open Notes.app too

tell application "Notes"
	set folderNames to name of folders of account "iCloud"
	set fold to "Folder Name"
	set theNotes to notes of folder fold of account "iCloud"
	tell account "iCloud"
		tell folder fold
			repeat with j from 1 to (count theNotes)
				set theNote to note j
				set myTitle to get the name of note j
				set myText to get the body of note j
				set myCreateDate to the creation date of note j
				set myModDate to the modification date of note j

				tell application "Evernote Legacy"
					set myNote to create note with text myTitle title myTitle notebook fold
					set the HTML content of myNote to myText
					set the creation date of myNote to myCreateDate
					set the modification date of myNote to myModDate
				end tell
			end repeat
		end tell
	end tell
end tell
