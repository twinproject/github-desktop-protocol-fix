// ==UserScript==
// @name         Github Desktop MacOS Protocol Handler Fix
// @namespace    http://landonthomas.net
// @version      0.1
// @description  replace protocol handler x-github-client (beta) with github-mac (stable)
// @author       Landon Thomas
// @include      /^https?://((gist|guides|help|raw|status|developer)\.)?github\.com((?!generated_pages/preview).)*$/
// @include      https://*.githubusercontent.com/*
// @grant        none
// ==/UserScript==

var links,thisLink,find,replace;

links = document.evaluate("//a[@href]",
	document,
	null,
	XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
	null);

for (var i=0;i<links.snapshotLength;i++) {

	thisLink = links.snapshotItem(i);

	find = 'x-github-client:\/\/(.*)';
	replace = 'github-mac://$1';

	thisLink.href = thisLink.href.replace(RegExp(find),replace);
}