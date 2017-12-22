// metalit_BeatsToMarkers.jsx
// Copyright (c) 2017 John Haren. All rights reserved.

// This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License.
// To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/ or send a letter
// to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.

// This script is provided "as is," without warranty of any kind, expressed
// or implied. In no event shall the author be held liable for any damages
// arising in any way from the use of this script.

(function CopyMarkers()
{
	// Globals
	var metalit_BeatsToMarkers = new Object();	// Store globals in an object
	metalit_BeatsToMarkersData.scriptName = "metalit: Beats To Markers";
	metalit_BeatsToMarkersData.scriptTitle = metalit_BeatsToMarkers.scriptName + " v0.0.1";
	metalit_BeatsToMarkersData.strErrNoCompSel = {en: "Cannot perform operation. Please select or open a single composition in the Project window, and try again."};
	metalit_BeatsToMarkersData.strErrNoTwoPlusLayersSel = {en: "Cannot perform operation. Please select at least two layers with the first selected layer having at least one layer marker, and try again."};

	// metalit_BeatsToMarkers_localize()
	//
	// Description:
	// This function localizes the given string variable based on the current locale.
	//
	// Parameters:
	//   strVar - The string variable's name.
	//
	// Returns:
	// String.
	//
	function metalit_BeatsToMarkers_localize(strVar)
	{
		return strVar["en"];
	}

	// Check that a project exists
	if (app.project === null)
		return;

	// Get the current (active/frontmost) comp
	var comp = app.project.activeItem;



	return;
})();
